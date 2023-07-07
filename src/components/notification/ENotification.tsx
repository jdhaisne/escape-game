

import { ENotifType } from "../../enums/ENotification-enum";
import { InotificationProp } from "../../interfaces/INotification";
import "./style.scss";

export const Notification: React.FunctionComponent<InotificationProp> = ({
  txt,
  type,
}) => {
  return <div className={`notification ${ENotifType[type]}`}>{txt}</div>;
};