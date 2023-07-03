import { IContextData } from "../interfaces/IContextData";

export const SUser = {

    getData() : IContextData | null
    {
        const userData = localStorage.getItem('userData');
        
        if(!userData)
            return null;

        return JSON.parse(userData);
    },

    getId()  : string | null
    {
        return this.getData()?.user_id || null;
    },

    isAdmin () : boolean 
    {
        return !!this.getData()?.isAdmin;
    },

    isConnected () : boolean 
    {
        return !!this.getData();
    }
}