import css from "../styles/middleContentStyle.module.css";
import specialMiddleContent from "../utils/imgs/pexels-nao-triponez-1292081.png";

const MiddleContent = () => {
  return (
    <div className={css.ContentImage}>
      <img src={specialMiddleContent} alt="Middle banner" />
    </div>
  );
};
export default MiddleContent;
