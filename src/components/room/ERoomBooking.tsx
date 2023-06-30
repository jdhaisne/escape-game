import { useState } from "react"

import style from './style.module.scss'
import { logger } from "../../services/ESLogger"

export const ERoomBooking = () =>
{
    const [counterSlot, setCounterSlot] = useState<number>(0)

    const handleAdd = () => 
    {
        if(counterSlot < 10)
        {
            setCounterSlot((prevSlot) => prevSlot + 1);
        }
    } 

    const handleRemove = () => 
    {
        if(counterSlot > 0)
        {
            setCounterSlot((prevSlot) => prevSlot - 1);
        }
    } 

    const handleSubmit = () => 
    {
        logger.debug("SENDING DATA FOR ROOMS !!")
    }

    return (
        <div onSubmit={handleSubmit}>
            <h3>VOYEZ CE JEU EXQUIS</h3>
            <p>De graphie en kit mais bref Portez ce vieux whisky au juge
                blond qui fume sur son ile de intérieur, à côté de l'alcove ovoid 
                ou les buches se consumment dans l'âtre ce qui lui permet de penser à la 
                canogenese de l'être
            </p>
            
            <div className={style.wrapper_slots}>
                <button onClick={handleRemove}>-</button> <p>{counterSlot}</p> <button onClick={handleAdd}>+</button>
            </div>

            <button type="submit">valider votre réservation</button>
        </div>
    )
}