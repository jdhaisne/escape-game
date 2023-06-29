import axios from 'axios';
import { logger } from './ESLogger';


const URL = `http://localhost:3000`;

export  const getRooms = async (): Promise<any> =>{
  try 
  {
    const response = await axios(`${URL}/rooms`,{ headers: {'Access-Control-Allow-Origin': URL}});

    return {
      status: response.status,
      data: response.data
  }
  }catch(e : any)
  {
    logger.error(e)
    return {
        status: `Error occured on fetch : ${e}`
    }
  }
}