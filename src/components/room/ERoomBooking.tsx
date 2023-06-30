import React, { useState } from "react";
import { EFormBooking } from "../EFormBooking";

interface Booking {
  firstName: string;
  // Ajoutez d'autres champs de réservation si nécessaire
}



export const ERoomBooking: React.FC = () => {
  const [counterSlot, setCounterSlot] = useState<number>(0);
  const [bookingData, setBookingData] = useState<Booking[]>([]);

  const handleAdd = () => {
    if (counterSlot <= 10) {
      setCounterSlot((prevSlot) => prevSlot + 1);
    }
  };

  const handleRemove = () => {
    if (counterSlot > 0) {
      setCounterSlot((prevSlot) => prevSlot - 1);
    }
  };

  const handleSubmit = () => {
    // Envoyer les données de réservation
  };

  const handleFormBookingChange = (index: number, value: string) => {
    const updatedBookingData = [...bookingData];
    updatedBookingData[index] = { firstName: value };
    setBookingData(updatedBookingData);
  };

  const handleFormBookingDelete = (index: number) => {
    const updatedBookingData = [...bookingData];
    updatedBookingData.splice(index, 1);
    setBookingData(updatedBookingData);
    handleRemove(); // Réduire le compteur de slot
  };

  const renderFormBookings = () => {
    const formBookings = [];
    for (let i = 0; i < counterSlot; i++) {
      formBookings.push(
        <EFormBooking
          key={i}
          onChange={(value : any) => handleFormBookingChange(i, value)}
          onDelete={() => handleFormBookingDelete(i)}
        />
      );
    }
    return formBookings;
  };

  return (
    <div onSubmit={handleSubmit}>
      <h3>VOYEZ CE JEU EXQUIS</h3>
      {/* Reste du contenu... */}
      <div>{renderFormBookings()}</div>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
      <button type="submit">Valider votre réservation</button>
    </div>
  );
};

export default ERoomBooking;
