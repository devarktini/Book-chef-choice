import React from "react";
import styles from "./ProfileCard.module.css";

export const ProfileCard = () => {
  return (
    <section className={styles.profileSection}>
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759268462/little-girl-6746693_640_ka3mka.jpg"
            CardTitle="Birthday"
            titleHref="/#"
            btnHref="/#"
            CardDescription="Celebrate birthdays at home with our private chefs. Personalized birthday menus crafted to delight every guest."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759268817/happy-smiling-indian-couple-embracing-600nw-2396938665_hm2a0c.webp"
            CardTitle="Anniversary"
            CardDescription="Make anniversaries unforgettable with gourmet meals. Our chefs create romantic dining experiences tailored for couples."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759269315/gettyimages-1459669134-612x612_qnluc7.jpg"
            CardTitle="Party"
            CardDescription="Host an unforgettable party with our chef-on-demand service. Customized menus to match your party theme perfectly."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759269656/Screenshot_2025-10-01_032904_rrte9j.png"
            CardTitle="Kitty Party"
            CardDescription="Enjoy fun-filled kitty parties with delicious catering. Curated menus to impress friends and family alike."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759271687/afternoon-tea-indian-tea-high-res-1024x769_zqqixk_df4e6e.jpg"
            CardTitle="High Tea"
            CardDescription="Elevate your high tea gatherings with gourmet treats. Elegant menus prepared for relaxed, classy afternoons."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759271941/gettyimages-1460006157-612x612_qhumfg.jpg"
            CardTitle="Inviting Guests"
            CardDescription="Host guests at home with ease and style. Our chefs prepare exquisite meals to leave a lasting impression."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759272321/vecteezy_indian-baby-shower-decorations-with-balloons-and-flowers-and_21968626_drhz4v.jpg"
            CardTitle="Baby Shower"
            CardDescription="Celebrate your baby shower with tasty and safe meals. Our chefs design nourishing, memorable menus for moms-to-be."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759272660/gettyimages-868957898-612x612_gvpvlp.jpg"
            CardTitle="Weekend Chill"
            CardDescription="Make your weekends relaxing with home chef services. Enjoy delicious comfort food without lifting a finger."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1760203916/pexels-vireshstudio-2060240_1_ygxuzx.jpg"
            CardTitle="Wedding Ceremony"
            CardDescription="Indulge in handcrafted wedding menus designed to make your special day unforgettable."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759272951/kats-weil-CLD1i8hp008-unsplash_zdxoxt.jpg"
            CardTitle="Bachelor Party"
            CardDescription="Throw epic bachelor parties with customized catering. Gourmet menus designed for fun, flavor, and friends."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1759273465/vecteezy_religious-puja-ceremony-with-incense-and-flowers_70420069_rz54gi.jpg"
            CardTitle="Pooja Ceremony"
            CardDescription="Enhance pooja ceremonies with traditional offerings. Our chefs prepare authentic meals for sacred celebrations."
            Button=""
          />
          <SingleCard
            image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1760204043/gettyimages-2173439890-612x612_iearjf.jpg"
            CardTitle="Other Occasions"
            CardDescription="Any special occasion deserves culinary excellence. Chef Choice Menu creates memorable meals for every."
            Button=""
          />
        </div>
      </div>
    </section>
  );
};

const SingleCard = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  titleHref,
  btnHref,
}) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="" className={styles.cardImage} />
      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>
          <a href={titleHref ? titleHref : "/#"} className={styles.cardLink}>
            {CardTitle}
          </a>
        </h3>
        <p className={styles.cardDesc}>{CardDescription}</p>
        {Button && (
          <a href={btnHref ? btnHref : "#"} className={styles.cardButton}>
            {Button}
          </a>
        )}
      </div>
    </div>
  );
};
