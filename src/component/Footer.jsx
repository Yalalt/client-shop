import css from "../styles/footer.module.css";
import logoIcons from "../utils/imgs/headerLogoElectronics.png";
import logoIconsGoogle from "../utils/imgs/VectorGoogleLogo.png";
import logoIconsFacebook from "../utils/imgs/facebook.png";
import logoIconsWhatsup from "../utils/imgs/whatsappLogo.png";

const Footer = () => {
  return (
    <div className={css.FooterBg}>
      <div>
        <img src={logoIcons} alt="Footer logo" />
        <div className={css.SocialLogos}>
          <img src={logoIconsGoogle} alt="Logo Social Google" />
          <img src={logoIconsFacebook} alt="Logo Social Facebook" />
          <img src={logoIconsWhatsup} alt="Logo Social Whatsup" />
        </div>
      </div>

      <p className={css.footerTerm}>
        &copy; 2023 Tuulai. Built using AQUA and Tuulai{" "}
        <span className={css.underline}>Theme.</span>
        <br />
        Terms and Conditions
      </p>
    </div>
  );
};
export default Footer;
