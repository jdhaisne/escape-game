import { createContext } from 'react';
import { IContextData } from '../interfaces/IContextData';
import { ENotifType } from '../enums/ENotification-enum';


export interface IAppContext {
    userData: IContextData;
    setUserData: React.Dispatch<React.SetStateAction<IContextData>>;
    setCanStoreData: React.Dispatch<React.SetStateAction<boolean>>;
    showNotif: {
        txt: string;
        type: ENotifType;
        bShow: boolean;
    };
    setNotif: React.Dispatch<React.SetStateAction<{ txt: string; type: ENotifType; bShow: boolean; }>>;
}

export const AppContext = createContext<IAppContext | null>(null);