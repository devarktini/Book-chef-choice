import style from "./Second.module.css";

import ServiceCard from "../../Components/ServiceCard";

const Second = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          <h2>Services We Offer</h2>
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco23_oucobt.png"
            className={style.imgi}
            alt="Deco Image"
          />
        </div>
        <div className={style.second}>
          <ServiceCard
            img1="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953168/Rectangle74_kzwo4r.png"
            img2="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/chef4_aissby.png"
            Head="Private Chefs"
            imag3="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
            para="Enjoy restaurant-style dining in your own kitchen. Our professional chefs craft personalized meals tailored to your tastes, perfect for cozy dinners, family celebrations, or special surprises."
            imag4="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953169/right1_hec9xn.png"
          />
          <ServiceCard
            img1="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953168/Rectangle76_hd6emj.png"
            img2="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953147/catering-service_jdzw4k.png"
            Head="Catering Services"
            imag3="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
            para="Make your events unforgettable with our top-tier catering services. We deliver delicious menus and smooth service for weddings, parties, corporate events, and more—so you can focus on your guests."
            imag4="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953169/right1_hec9xn.png"
          />
        </div>
        <div className={style.second}>
          <ServiceCard
            img1="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953168/Rectangle77_swmc3s.png"
            img2="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/1859_spk7d5.png"
            Head="Chef’s Table"
            imag3="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
            para="Experience live cooking at its finest with our Chef’s Table. Enjoy a front-row seat as our expert chefs prepare and serve a multi-course gourmet journey just for you and your guests."
            imag4="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953169/right1_hec9xn.png"
          />
          <ServiceCard
            img1="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953169/Rectangle78_awlko7.png"
            img2="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/barman1_t5pggu.png"
            Head="Bartender Services"
            imag3="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
            para="Add elegance and excitement to your gathering with a private bartender. From classic cocktails to signature drinks, our mixologists serve up the perfect pour for every occasion."
            imag4="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953169/right1_hec9xn.png"
          />
        </div>
      </div>
    </>
  );
};
export default Second;
