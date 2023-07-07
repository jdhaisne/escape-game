import './style.scss'


export const EPegi = ({ age }: { age: number }) => {
  let imgPath = "";
  if (age <= 3)
    imgPath =
      "https://pegi.info/sites/default/files/inline-images/age-3-black_0.jpg";
  else if (age <= 7)
    imgPath =
      "https://pegi.info/sites/default/files/inline-images/age-7-black.jpg";
  else if (age <= 12)
    imgPath =
      "https://pegi.info/sites/default/files/inline-images/age-12-black.jpg";
  else if (age <= 16)
    imgPath =
      "https://pegi.info/sites/default/files/inline-images/age-16-black.jpg";
  else
    imgPath =
      "https://pegi.info/sites/default/files/inline-images/age-18-black%202_0.jpg";
  return (
    <div>
      <img className="img-pegi" src={imgPath} width="136px" height="166px" />
    </div>
  );
};
