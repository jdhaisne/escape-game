import axios from 'axios';
import { logger } from './ESLogger';
import { URL_API } from './config';


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
          const response = await axios.post(`${URL_API}${route}`, payload, { headers: { 'Access-Control-Allow-Origin': URL_API } });
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