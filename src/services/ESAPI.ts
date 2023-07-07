import axios from 'axios';
import { logger } from './ESLogger';


const URL_API = `http://localhost:3000`;


export const API = {
    async Get(route : string) : Promise<{ status: number, data?: any, error?: string }>
    {
        try 
        {
          const response = await axios.get(`${URL_API}/${route}`,{ headers: {'Access-Control-Allow-Origin': URL_API}});
      
          return {
            status: response.status,
            data: response.data
        }
        }catch(e : any)
        {
          logger.error(e)
          return {
            status: 500,
            error: `Error occurred on fetch: ${e}`
          }
        }
    },

    async Post<T>(route: string, payload: T): Promise<{ status: number, data?: any, error?: string }> {
      try {
        const response = await axios.post(`${URL_API}/${route}`, payload, {
          headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
            'Access-Control-Allow-Origin': '*', // Update this based on your CORS requirements
          },
        });
    
        return {
          status: response.status,
          data: response.data
        };
      } catch (e: any) {
        logger.error(e);
        return {
          status: 500,
          error: `Error occurred on fetch: ${e}`
        };
      }
    },
    async Put<T>(route: string, payload: T): Promise<{ status: number, data?: any, error?: string }> {
      try {
        const response = await axios.put(`${URL_API}/${route}`, payload, {
          headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
            'Access-Control-Allow-Origin': '*', // Update this based on your CORS requirements
          },
        });
        return {
          status: response.status,
          data: response.data
        };
      } catch (e: any) {
        logger.error(e);
        return {
          status: 500,
          error: `Error occurred on fetch: ${e}`
        };
      }
      
    }
}