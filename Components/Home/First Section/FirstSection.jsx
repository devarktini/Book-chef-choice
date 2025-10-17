import React from "react";
import styles from "./FirstSection.module.css";
import Link from "next/link";

import CardGoldBack from "../../Components/CardGoldBack";

function FirstSection() {
  return (
    <section className={styles.section}>
      {/* Background decorative images */}
      <img
        src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953153/Group27_vdqdh6.png"
        alt=""
        className={styles.topRight}
      />
      <img
        src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953145/bg-2_k9hpqd.png"
        alt=""
        className={styles.bottomRight}
      />

      <img
        src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953145/bg4_gvm4do.png"
        alt=""
        className={styles.bottomLeft}
      />

      {/* Content */}
      <div className={styles.content}>
        <h2>Flavors Made for Royalty</h2>
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/preview2_f5uba6.png"
          alt=""
        />

        <p>
          Hosting an event shouldn’t be stressful. At Book My Chef, we make it
          effortless. Choose from our all-inclusive catering packages designed
          for every occasion—whether it’s a traditional North Indian wedding, a
          corporate lunch, or a festive Diwali dinner. Our chefs craft menus
          that celebrate India’s diverse culinary heritage while also offering
          global cuisines for modern tastes. With us, every event becomes an
          unforgettable culinary journey.  
        </p>
      </div>

      {/* Cards */}
      <div className={styles.cards}>
        <CardGoldBack
          img="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953160/pexels-chanwalrus-958546_bgoi8m.jpg"
          title="Casual"
        />
        <CardGoldBack
          img="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953145/5151_obwlsv.webp"
          margin="50px"
          title="Gourmet"
        />
        <CardGoldBack
          img="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953160/pexels-cha_d9njwl.webp"
          title="Chef's Table"
        />
      </div>

      <Link href="/service" className={styles.Button1}>
        View All Services
      </Link>
    </section>
  );
}

export default FirstSection;
