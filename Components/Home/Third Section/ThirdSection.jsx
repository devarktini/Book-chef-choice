import style from "./ThirdSection.module.css";

const ThirdSection = () => {
  return (
    <>
      <section className={`${style.mainSection}`}>
        <div className={`${style.firstDiv}`}>
          <h2 className={`${style.headingText}`}>Book Chef</h2>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco23_oucobt.png"
            alt="Decoration Icon"
          />
          <h2 className={`${style.headingText2}`}>Easy mobile booking</h2>
        </div>

        <div className={style.secondDiv}>
          {/* LEFT SIDE */}
          <div className={style.secondLeft}>
            <div className={style.secondFir}>
              <p className={style.col2}>
                <span className={`${style.spanBg}`}>Step 1 :</span> Select
                service type & define event occasion
              </p>
              <img
                src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/Vector3_g4cejv.png"
                className={style.arrImg}
                alt=""
              />
            </div>

            <div className={style.secondSec}>
              <p className={style.col2}>
                <span className={`${style.spanBg}`}>Step 2 :</span> Enter event
                location & choose suitable schedule
              </p>
              <img
                src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/Vector4_zgbtfg.png"
                className={style.arrImg1}
                alt=""
              />
            </div>

            <div className={style.secondFir}>
              <p className={style.col2}>
                <span className={`${style.spanBg}`}>Step 3 :</span> Specify
                guest details & set overall budget
              </p>
              <img
                src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/Vector3_g4cejv.png"
                className={style.arrImg}
                alt=""
              />
            </div>

            <div className={style.secondSec}>
              <p className={style.col2}>
                <span className={`${style.spanBg}`}>Step 4 :</span> Choose food
                preferences & dietary restrictions
              </p>
              <img
                src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/Vector4_zgbtfg.png"
                className={style.arrImg1}
                alt=""
              />
            </div>

            <div className={style.secondFir}>
              <p className={style.col2}>
                <span className={`${style.spanBg}`}>Step 5 :</span> Confirm
                contact details & receive chef proposals
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className={style.secRigh}>
            <div className={style.secRighInn}>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src={playStore} className={style.arrImg} alt="Go to Example" /> */}
              </a>
              <a
                href="https://example.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* <img src={appStore} className={style.arrImg} alt="Go to Example" /> */}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ThirdSection;
