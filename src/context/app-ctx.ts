import { createContext } from 'react';
import { IContextData } from '../interfaces/IContextData';


export interface IAppContext {
    userData: IContextData;
    setUserData: React.Dispatch<React.SetStateAction<IContextData>>;
    setCanStoreData : React.Dispatch<React.SetStateAction<boolean>>;
}
  
export const AppContext = createContext<IAppContext | null>(null);