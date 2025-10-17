import styles from "../styles/aboutUs.module.css";

function Hero() {
  return (
    <div className={`${styles.heroContainer} flex flex-col`}>
      <div className={styles.blackScreenForOpacity}></div>
      <div
        className={`${styles.heroChild} flex flex-col py-24 md:py-48 items-center text-center px-4`}
      >
        <p className="titleFont text-sm sm:text-md md:text-lg text-white">
          OUR STORY
        </p>

        <span>
          <img
            className="w-16 sm:w-20 md:w-28"
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/preview2_f5uba6.png"
          />
        </span>
        <p className="titleFont text-2xl sm:text-4xl md:text-5xl text-white">
          ABOUT US
        </p>
      </div>
    </div>
  );
}

export default Hero;
