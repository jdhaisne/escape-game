import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { EButton } from './EButton';
import '../App.scss';

export const ECalendar = () => {
    const [value, setValue] = useState(new Date());
    const [clicked, setClicked] = useState(false);

    const BookingChoice = () => {

    }

    return (
        <>
            <div className='calendar-container'>
                <div>
                    <Calendar className={"calendar"}
                        onChange={(date) => setValue(date as Date)}
                        value={value}
                    />
                </div>
                <div className='"calendar__btn-bloc'>
                    <EButton classArray={["calendar__btn", `${clicked ? "calendar__btn--clicked" : ""}`]} onClick={() => setClicked(!clicked)}>Matin</EButton> <EButton classArray={["calendar__btn", `${!clicked ? "calendar__btn--clicked" : clicked}`]} onClick={() => setClicked(!clicked)}>Après-Midi</EButton>

                    <div className="booking__btn-bloc">
                        <EButton classArray={['booking__btn']}>Je réserve</EButton>
                    </div>
                </div>
            </div>

        </>

    );
}