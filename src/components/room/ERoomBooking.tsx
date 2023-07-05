import React, { useState } from "react";
import { logger } from "../../services/ESLogger";
import { useForm, FormProvider } from "react-hook-form";
import { IBooking } from "../../interfaces/IBooking";
import { EFormBooking } from "../booking/EFormBooking";
import { useNavigate } from "react-router-dom";
import { API } from "../../services/ESAPI";
import { SUser } from "../../services/ESUser";

import './style.scss'

export const ERoomBooking: React.FunctionComponent<{room_id : string}> = ({ room_id }) => {
  const [bookingData, setBookingData] = useState<IBooking[]>([{ firstname: "", lastname: "", birthday: "" }]);
  const [slots, setSlots] = useState<number>(1);

  const methods = useForm();
  const navigate = useNavigate();



  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const formData = bookingData; 

    const isFormValid = formData.every(participant =>
        participant.firstname.trim() !== "" &&
        participant.lastname.trim() !== "" &&
        participant.birthday.trim() !== ""
    );

    // Check if the form is valid : 
    if (!isFormValid)
      return logger.error("Fill all the inputs.");


    // Check if the user is connected  : 
    if(!SUser.isConnected() && !SUser.getId()) 
      return logger.error("You need to be connected to make a booking.");

    const payload  = {
        user_id: SUser.getId(),
        room_id: room_id,
        date_and_time: Date.now(),
        number_of_players: slots,
        list_of_participants: formData
    }

    API.Post('bookings',payload);

    navigate('/');

    logger.debug(payload);
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
      for (let i = 0; i < diff; i++) {
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

        <div className="ERoomBooking-container">{renderFormBookings()}
          <button className="ERoomBoking-btn" type="submit">Confirm your reservation</button>
        </div>
      </form>
    </FormProvider>
  );
};
