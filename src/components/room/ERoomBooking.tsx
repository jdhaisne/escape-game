import React, { useState } from "react";
import { logger } from "../../services/ESLogger";
import { useForm, FormProvider } from "react-hook-form";
import { IBooking } from "../../interfaces/IBooking";
import { EFormBooking } from "../EFormBooking";


export const ERoomBooking: React.FunctionComponent = () => {
  const [bookingData, setBookingData] = useState<IBooking[]>([{ firstName: "", lastName: "", birthday: "" }]);
  const methods = useForm(); // Initialize the useForm hook

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = bookingData; // Retrieve the form data from the bookingData state
    logger.debug(formData);
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
          { firstName: "", lastName: "", birthday: "" }
        ];
      }
    } else if (value < bookingData.length) {
      newBookingData = newBookingData.slice(0, value);
    }
  
    setBookingData(newBookingData);
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
      <form onSubmit={handleSubmit}>
        <h3>VOYEZ CE JEU EXQUIS</h3>
        <div>
          <label htmlFor="counterSlot">Nombre de participants :</label>
          <select id="counterSlot" value={bookingData.length} onChange={handleCounterSlotChange}>
            {renderCounterSlotOptions()}
          </select>
        </div>

        <div>{renderFormBookings()}</div>
        <button type="submit">Valider votre réservation</button>
      </form>
    </FormProvider>
  );
};
