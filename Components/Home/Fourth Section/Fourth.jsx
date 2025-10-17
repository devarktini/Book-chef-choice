import style from "./Fourth.module.css";

const Fourth = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          {/* <img src={deco2} alt="" className={style.bg1} /> */}
          <h2 className={style.headOne}>Services</h2>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/preview2_f5uba6.png"
            alt="Decoration Images"
          />
          <h3 className={style.headTwo}>Add On Services</h3>
          <p className={style.col}>
            To make your event completely stress-free, we offer additional
            support services that ensure everything runs smoothly. Add these to
            your booking at checkout for a truly seamless experience.
          </p>
        </div>
        <div className={style.second}>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <img
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/Bartenders_hgseq1.png"
              alt=""
            />
            <h3 className={style.headMain}>Bartenders</h3>
            <p className={style.col}>
              Professional bartenders serving premium cocktails and refreshing
              mocktails to keep the party alive.
            </p>
          </div>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#151920" }}
          >
            <img
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953178/Waiters_f59olq.png"
              alt="Icon Img"
            />
            <h3 className={style.headMain}>Waiters</h3>
            <p className={style.col}>
              Experienced waitstaff to ensure your guests are served with warmth
              and efficiency throughout the event.
            </p>
          </div>
          <div
            className={style.secondOne}
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <img
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/clean_cgej1f.png"
              alt=""
            />
            <h3 className={style.headMain}>cleaners</h3>
            <p className={style.col}>
              Our trained cleaning staff ensures your space is spotless after
              the celebration, so you can relax and enjoy.
            </p>
          </div>
          {/* <img src= alt="" /> */}
        </div>
      </div>
    </>
  );
};
export default Fourth;
