import css from "./footer.module.css";
import logoIcons from "../../utils/imgs/headerLogoElectronics.png";
import logoIconsGoogle from "../../utils/imgs/googleLogoIcons.png";
import logoIconsFacebook from "../../utils/imgs/facebookLogoIcons.png";
import logoIconsWhatsup from "../../utils/imgs/whatsappLogoIcons.png";

const Footer = () => {
  return (
    <div className={css.FooterBg}>
      <div className={css.footerLogoSocials}>
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
