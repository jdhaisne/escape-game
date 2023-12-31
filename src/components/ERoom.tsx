//image, titre, desc, age

export const ERoom = ({
  imgPath,
  title,
  desc,
  age,
}: {
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
        width="300px
      "
        height="200px"
      />
      <div className="room__title__wrapper">
        <h2 className="room__title">{title}</h2>
      </div>
      <div className="room__desc">{desc}</div>
      <div className="room__footer">
        <span className="room__link">detail</span>
        <span className="room__link">reserver</span>
        <img className="room_pegi" />
      </div>
    </div>
  );
};
