"use client";

import styles from "../styles/aboutUs.module.css";
import { useState, useEffect } from "react";

function ThirdSection() {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWindowSize({
          windowWidth: window.innerWidth,
          windowHeight: window.innerHeight,
        });
      }
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const dataArr = [
    {
      img: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/01gallery_segzhm.png",
      title: "5+ years of experience",
      decor:
        "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png",
      heading: "A Team of Award-Winning Chefs",
      text: "Our chefs come from rich culinary backgrounds, many of them trained in India’s top hospitality schools and some with international exposure. From Michelin-inspired plating to authentic regional cooking, our team represents a wide spectrum of skills. Whether it is Mughlai, South Indian, Bengali, or modern fusion, our chefs bring creativity and passion to the plate. Over the years, we have been part of thousands of birthdays, anniversaries, weddings, and even intimate puja gatherings, making every occasion truly special.",
    },
    {
      img: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953167/Picsart_pxe2fr.png",
      title: "Custom Menus for Every Occasion",
      decor:
        "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png",
      heading: "Dinner, Wedding or Corporate Party?",
      text: "We know every occasion demands something different — a wedding feast cannot be the same as a cozy dinner for two. That’s why our chefs collaborate with you to design menus based on your preferences, dietary requirements, and cultural traditions. Be it a lavish buffet for 500 guests or an elegant five-course meal for your anniversary, we ensure the same standard of excellence. Our services include live cooking counters, personalized menu planning, and even theme-based dining experiences tailored for Indian celebrations.",
    },
  ];

  const ContentBlock = ({ title, decor, heading, text }) => (
    <div className="w-1/2 w-full md:w-1/2 py-2 md:py-15 flex flex-col items-center px-4 text-center">
      {/* Title */}
      <p className={styles.thirdSectionTitle}>{title}</p>

      {/* Decoration image */}
      <img className="w-16 sm:w-20 md:w-28" src={decor} />

      {/* Heading */}
      <p className={styles.thirdSectionHeading}>{heading}</p>

      {/* Paragraph text (full) */}
      <p className={styles.thirdSectionText}>{text}</p>
    </div>
  );

  return (
    <div className={styles.containerDecor} style={{ backgroundColor: 'var(--background)' }}>
      {dataArr.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index !== 0 ? "md:flex-row-reverse" : ""
          } ${index === 1 ? styles.secondContentBlock : ""}`} // z-index applied to second block
        >
          <div className="w-1/2 w-full md:w-1/2">
            <img
              className="h-full w-full object-cover min-h-[260px]"
              src={item.img}
            />
          </div>
          <ContentBlock {...item} />
        </div>
      ))}

      {/* Decorations */}
      <div className={`${styles.SubcontainerDecor1} hidden sm:block`}>
        <img src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/bg-131_pb6ir0.png" />
      </div>
      <div className={`${styles.SubcontainerDecor2} hidden sm:block`}>
        <img src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953147/bg-141_sj4ryv.png" />
      </div>
    </div>
  );
}

export default ThirdSection;
