import style from "./ServiceCard.module.css";

const ServiceCard = ({ img1, img2, Head, imag3, para, imag4 }) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.card}>
          <div className={style.one}>
            <img src={img1} alt="Private Chefs" />
          </div>
          <div className={style.two}>
            <div className={style.threeImg}>
              <img src={img2} alt="Chef Icon" />
            </div>
            <h3 className={style.title}>{Head}</h3>
            <div className={style.fourImg}>
              <img src={imag3} alt="" />
            </div>
            <p className={style.description}>{para}</p>
            <div className={style.five}>
              {/* <img src={imag4} alt="" />
              <p>Read More</p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceCard;
