import axios from 'axios';
import { logger } from './ESLogger';


const URL = `http://localhost:3000`;

export  const getUsers = async (): Promise<any> =>{
  try 
  {
    const response = await axios.get(`${URL}/auth`,{ headers: {'Access-Control-Allow-Origin': URL}});

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

export const postUSer = async (payload: IUserPost):Promise<any> => {
  try {

    const response = await axios.post(`${URL}/auth/register`,payload, { headers: {'Access-Control-Allow-Origin': URL}})
    return {
      status: response.status,
      data: response.data
  }
  }catch(e:any) {
    logger.error(e)
    return {
      status: `Error occured on fetch : ${e}`
    }
  }

}

export const logUser = async (payload: {mail: string, password: string}):Promise<any> => {
  try {
    const response = await axios.post(`${URL}/auth/login`, payload, { headers: {'Access-Control-Allow-Origin': URL}})
    return {
      status: response.status,
      data: response.data
  }
  } catch (e:any) {
    logger.error(e)
    return {
      status: `Error occured on fetch : ${e}`
    }
  }
}