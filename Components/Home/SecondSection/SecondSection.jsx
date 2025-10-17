"use client";

import React from "react";
import styles from "./SecondSection.module.css";
import ActionAreaCard from "./ActionAreaCard";

const SecondSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Our Services</h2>
      <div className={styles.iconWrapper}>
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco23_oucobt.png"
          alt="Decoration Icon"
        />
      </div>

      <div className={styles.cardContainer}>
        <ActionAreaCard
          image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/PR2_nfaxdv.jpg"
          title="Private chefs"
          description="Handpicked chefs who bring restaurant-quality dining to your kitchen. Perfect for intimate gatherings, anniversaries, or cozy get-togethers."
          bgColor="#0F0F0F"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/03_tqlqtq.jpg"
          title="Catering services"
          description="Seamless catering solutions for weddings, corporate events, birthdays, and festivals—crafted with precision and warmth."
          bgColor="#151920"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/04_glszua.jpg"
          title="Chef’s table"
          description="An exclusive fine-dining experience where you watch our culinary masters create exquisite dishes right in front of you."
          bgColor="#0F0F0F"
          colors="#FFFFFF"
        />
        <ActionAreaCard
          image="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/10_sn5shz.png"
          title="Bartender"
          description="From classic cocktails to refreshing mocktails, our bartenders ensure your guests enjoy every sip at your celebration."
          bgColor="#151920"
          colors="#FFFFFF"
        />
      </div>

      <div className={styles.backgroundImage}></div>
    </section>
  );
};

export default SecondSection;
