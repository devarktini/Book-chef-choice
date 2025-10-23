import style from "./Fifth.module.css";

const Fifth = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          <h3 className={style.col1}>IMPRESSIONS</h3>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
            alt="Decoration Image"
          />
          <h2 className={style.heado}>What Our Customer Saying</h2>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953178/Vector_aolicz.png"
            alt="Quotation"
          />
        </div>
        <div className={style.second}>
          <p className={style.col5}>
            We hired a private chef from Book my chef for our anniversary. The
            food was exquisite and the service was impeccable. Our guests were
            thoroughly impressed. Highly recommended!
          </p>
          <h4 className={style.col6}>-- Avdhesh Gupta</h4>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/Group39_wqvkhs.png"
            alt="Decor Image"
          />
        </div>
      </div>
    </>
  );
};
export default Fifth;
