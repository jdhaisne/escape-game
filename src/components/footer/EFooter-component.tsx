
import './style.scss'

export const EFooter = () => {
  return (
    <div className="footer">
      <div className="footer__section">
        <p>
          17, place de la Nation <br />
          75011 PARIS <br />
          +33 12 34 56 78 90
        </p>
      </div>
      <div className="footer__section footer-middle">
        <p>Legal Notice</p>
        <p>Terms and Conditions</p>
        <p>Contact</p>
      </div>
      <div className="footer__section footer-social-media__wrapper">
        <div className="footer-social-media__logo footer-social-media__logo--facebook"></div>
        <div className="footer-social-media__logo footer-social-media__logo--instagram"></div>
        <div className="footer-social-media__logo footer-social-media__logo--twitter"></div>
      </div>
    </div>
  );
};
