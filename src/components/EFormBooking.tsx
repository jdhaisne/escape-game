import { useState } from "react";

interface FormBookingProps {
    onChange: (value: string) => void;
    onDelete: () => void;
  }
  
export const EFormBooking: React.FunctionComponent<FormBookingProps> = ({ onChange, onDelete }) => {
    const [firstName, setFirstName] = useState("");

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value : string = event.target.value;
        setFirstName(value);
        onChange(value);
    };

    return (
        <div>
        <label htmlFor="firstname">Prénom</label>
        <input
            type="text"
            id="firstname"
            placeholder="First name"
            value={firstName}
            onChange={handleFirstNameChange}
        />
        </div>
    );
};