import React, { useContext, useEffect, useState } from "react";
import { logger } from "../../services/ESLogger";
import { useForm, FormProvider } from "react-hook-form";
import { IBooking } from "../../interfaces/IBooking";
import { EFormBooking } from "../booking/EFormBooking";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/ESAPI";
import { SUser } from "../../services/ESUser";
import './style.scss'
import { IERoom } from "../../interfaces/interface_App";
import { getRoomByID } from "../../services/ESRooms";
import { AppContext, IAppContext } from "../../context/app-ctx";
import { ENotifType } from "../../enums/ENotification-enum";

export const ERoomBooking: React.FunctionComponent<{ room_id: string }> = ({ room_id }) => {
  const methods = useForm();
  const navigate = useNavigate();

  const [bookingData, setBookingData] = useState<IBooking[]>([{ firstname: "", lastname: "", birthday: "" }]);
  const [slots, setSlots] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState("");

  const appContext = useContext<IAppContext | null>(AppContext);


  const [room, setRoom] = useState<IERoom>({
    _id: "",
    image: "",
    name: "",
    description: "",
    age_limit: "",
    slots: 1,
    availability: {
      monday: {
        morning: true,
        afternoon: true
      },
      tuesday: {
        morning: true,
        afternoon: true
      },
      wednesday: {
        morning: true,
        afternoon: true
      },
      thursday: {
        morning: true,
        afternoon: true
      },
      friday: {
        morning: true,
        afternoon: true
      },
      saturday:
      {
        morning: true,
        afternoon: true
      }
    }
  });

  useEffect(() => {
    if (room_id) {
      getRoomByID(room_id, setRoom);
    } else {
      setRoom({
        _id: '',
        image: '',
        name: '',
        description: '',
        age_limit: '',
        slots: 1,
        availability: {
          monday: {
            morning: true,
            afternoon: true
          },
          tuesday: {
            morning: true,
            afternoon: true
          },
          wednesday: {
            morning: true,
            afternoon: true
          },
          thursday: {
            morning: true,
            afternoon: true
          },
          friday: {
            morning: true,
            afternoon: true
          },
          saturday: {
            morning: true,
            afternoon: true
          }
        }
      });
    }
  }, [room_id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = bookingData;
  
    const isFormValid = formData.every(
      (participant) =>
        participant.firstname.trim() !== "" &&
        participant.lastname.trim() !== "" &&
        participant.birthday.trim() !== ""
    );
  
    if (!isFormValid) {
      return logger.error("Fill all the inputs.");
    }
  
    if (!SUser.isConnected() && !SUser.getId()) {
      
      appContext?.setNotif({
        txt: "You have to be connected to book a room !",
        type: ENotifType.ERROR,
        bShow: true,
      });

      return logger.error("You need to be connected to make a booking.");
    }
  
    const payload = {
      user_id: SUser.getId(),
      room_id: room_id,
      date_and_time: Date.now(),
      number_of_players: slots,
      list_of_participants: formData,
    };


    API.Post("bookings", payload)
    .then(() => {
      setRoom((prevRoom) => {
        if (!prevRoom) {
          return room;
        }

        const updatedAvailability = { ...prevRoom.availability };

        if (selectedDay) {
          const dayAvailability = updatedAvailability[selectedDay as keyof typeof updatedAvailability];
          const selectedTime = dayAvailability.morning ? "morning" : "afternoon";

          updatedAvailability[selectedDay as keyof typeof updatedAvailability] = {
            ...dayAvailability,
            [selectedTime]: false,
          };
        }

        API.Put(`rooms/${room_id}/update-availability`, {
          availability: updatedAvailability,
        })
          .then(() => {
            setSelectedDay("");
          })
          .catch((error) => {
            console.error("Error updating room availability:", error);
          });

        return {
          ...prevRoom,
          availability: updatedAvailability,
        };
      });

      appContext?.setNotif({
        txt: "You have booked a room !",
        type: ENotifType.SUCCESS,
        bShow: true,
      });

      navigate("/");
    })
    .catch((error) => {
      console.error("Error making booking:", error);
    });
};

  const handleFormBookingChange = (index: number, field: string, value: string) => {
    const updatedBookingData = bookingData.map((booking, i) => {
      if (i === index) {
        return { ...booking, [field]: value };
      }
      return booking;
    });
    setBookingData(updatedBookingData);
  };

  const renderFormBookings = () => {
    return bookingData.map((_, index) => (
      <EFormBooking
        key={index}
        index={index}
        onChange={handleFormBookingChange}
      />
    ));
  };

  const handleCounterSlotChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(event.target.value);
    let newBookingData = [...bookingData];

    if (value > bookingData.length) {
      const diff = value - bookingData.length;
      for (let i =0; i < diff; i++) {
        newBookingData = [
          ...newBookingData,
          { firstname: "", lastname: "", birthday: "" }
        ];
      }
    } else if (value < bookingData.length) {
      newBookingData = newBookingData.slice(0, value);
    }

    setBookingData(newBookingData);
    setSlots(value);
  };

  const renderCounterSlotOptions = () => {
    const options = [];
    for (let i = 1; i <= 10; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  const renderDayOptions = () => {
    const availableDays: string[] = [];
  
    // Loop through the room availability to find available days
    Object.keys(room.availability).forEach((day) => {
      const availability = room.availability[day as keyof typeof room.availability];
      if (availability.morning || availability.afternoon) {
        availableDays.push(day);
      }
    });
  
    return availableDays.map((day) => (
      <option key={day} value={day}>
        {day.charAt(0).toUpperCase() + day.slice(1)}
      </option>
    ));
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedDay = event.target.value;
    setSelectedDay(selectedDay);
  };

  return (
    <FormProvider {...methods}>
      <form className="ERoomBooking-form" onSubmit={handleSubmit}>
        <h3 className="ERoomBooking-title">Reserve your entry ticket.</h3>
        <div className="ERoomingBooking-wrapper-participant">
          <label className="ERoomBooking-participants" htmlFor="counterSlot">Number of participants:</label>
          <select className="ERoomBooking-slot" id="counterSlot" value={bookingData.length} onChange={handleCounterSlotChange}>
            {renderCounterSlotOptions()}
          </select>
        </div>

        <div className="ERoomBooking-wrapper-day">
          <label className="ERoomBooking-day" htmlFor="selectDay">
            Select a day:
          </label>
          <select
            className="ERoomBooking-select-day"
            id="selectDay"
            onChange={handleDayChange}
          >
            <option value="">Select a day</option>
            {renderDayOptions()}
          </select>
        </div>

        {renderFormBookings()}

        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};
