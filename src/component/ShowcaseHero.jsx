import css from "../styles/showcaseHero.module.css";
import BigHeroImage from "../utils/imgs/showcaseBigCamera.png";
const ShowcaseHero = () => {
  return (
    <div className={css.bgBlue}>
      <div className={css.showcaseButtons}>
        <span className={css.heroTitle}>CANON</span>
        <span className={css.heroTitleSmall}>camera</span>
        <div className={css.buttonGroup}>
          <button type="button" className={css.shopNowbtn}>
            Shop Now
          </button>
          <button type="button" className={css.moreBtn}>
            View more
          </button>
        </div>
      </div>
      <div className={css.showcaseImage}>
        <img
          src={BigHeroImage}
          alt="Big hero camera"
          className={css.heroImage}
        />
      </div>
    </div>
  );
};
export default ShowcaseHero;
