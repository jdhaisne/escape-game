import { IContextData } from "../interfaces/IContextData";

export const User = {

    getData() : IContextData | null
    {
        //TODO
        // CHECK IF DATA FROM STORAGE EXIST THEN IF TRUE RETURN DATA FROM THE LOCAL STORAGE AND RETURN IT AS OBJECT.
        // ELSE RETURN EMPTY NULL
        return null;
    },

    getId()  : string | null
    {
        return this.getData()?.user_id || null;
    },

    isAdmin () : boolean 
    {
        return !!this.getData()?.isAdmin;
    }
}