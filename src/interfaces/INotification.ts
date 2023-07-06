import { ENotifType } from "../enums/ENotification-enum";

export interface InotificationProp {
    txt: string;
    type: ENotifType;
}
  
export interface InotifType {
    txt?: string;
    type?: ENotifType;
    bShow: boolean;
}