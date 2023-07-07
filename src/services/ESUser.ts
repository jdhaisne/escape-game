import { IContextData } from "../interfaces/IContextData";
import { logger } from "./ESLogger";

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
    },

    logout () : void 
    {
        localStorage.removeItem("userData");
    },

    isMajor() : boolean 
    {

        const dateNaissance = this.getData()?.birthday.toString()!;
        const dateNaissanceObj = new Date(
            parseInt(dateNaissance.split("/")[2]),   // année
            parseInt(dateNaissance.split("/")[1]) - 1,   // mois (les mois commencent à partir de 0)
            parseInt(dateNaissance.split("/")[0])   // jour
        );
        
        const dateActuelle = new Date();
        const differenceAnnees = dateActuelle.getFullYear() - dateNaissanceObj.getFullYear();

        return differenceAnnees >= 18 
    }
}