import style from "./Hero.module.css";

const Hero = ({ Heading, AboveHead, imageUrl }) => {
  return (
    <>
      <div
        className={style.main}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={style.one}>
          <h2>{AboveHead}</h2>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/v1757953159/image_reswea.png"
            alt="Decoration image"
          />
          <h1>{Heading}</h1>
        </div>
      </div>
    </>
  );
};
export default Hero;
