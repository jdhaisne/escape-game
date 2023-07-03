import { EPegi } from "./EPegi";

export const ERoom = ({
  imgPath,
  title,
  desc,
  age,
}: {
  key: string;
  imgPath: string;
  title: string;
  desc: string;
  age: string;
}) => {
  return (
    <div className="room">
      <img
        className="room__img"
        src={imgPath}
        width="300px"
        height="200px"
      />
      <div className="room__title__wrapper">
        <h2 className="room__title">{title}</h2>
      </div>
      <div className="room__desc">{desc}</div>
      <div className="room__footer">
        <span className="room__link">details</span>
        <span className="room__link">book</span>
        <EPegi age={parseInt(age)}></EPegi>
      </div>
    </div>
  );
};
