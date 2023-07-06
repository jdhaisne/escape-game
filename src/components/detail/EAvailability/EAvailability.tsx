import { useEffect, useState } from 'react';
import './style.scss'
import { getRoomByID } from '../../../services/ESRooms';
import { useParams } from 'react-router-dom';
import { IERoom } from '../../../interfaces/interface_App';

export const EAvailability = () => {
  const { id } = useParams();
  const [room, setRoom] = useState<IERoom>({
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

  useEffect(() => {
    if (id) {
      getRoomByID(id, setRoom);
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
  }, [id]);

  return (
    <div className="EAvailability-container">
      <h3 className="EAvailability-container__title">Availability</h3>
      <ul className='EAvailability-container__list'>
        {Object.entries(room.availability).map(([day, availaible]) => (
       
          <li className='EAvailability-container__item' key={day}>
            <h3 className='EAvailability-container__item__day'>{day}</h3>
            <div className='EAvailability-container__item__time' style={{ background: availaible.morning ? 'green' : 'gray' }}>
                Morning
            </div>
            <div className='EAvailability-container__item__time' style={{ background: availaible.afternoon ? 'green' : 'gray' }}>
                Afternoon
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
