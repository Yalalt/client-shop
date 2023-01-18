import css from "./middleContentStyle.module.css";
import specialMiddleContent from "../../utils/imgs/pexels-nao-triponez-1292081.png";

const MiddleContent = () => {
  return (
    <div className={css.ContentImage}>
      <img src={specialMiddleContent} alt="Middle banner" />
      <div className={css.SaleBannerText}>
        <button type="button" className={css.primaryBtn}>
          Shop now
        </button>
        <p className={css.greenSaleText}>Sale up to 50% off</p>
        <p className={css.subjectSaleItem}>13 inch M1 Macbook Air</p>
        <button type="button" className={css.blackBtn}>
          Shop now
        </button>
      </div>
    </div>
  );
};
export default MiddleContent;
