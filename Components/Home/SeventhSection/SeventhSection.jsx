import React from "react";
import style from "./SeventhSection.module.css";
import { ProfileCard } from "./ProfileCard";
const SeventhSection = () => {
  return (
    <>
      <div className={style.main}>
        <div className={style.first}>
          <h2 className={style.headingText}>Special Occasions We Cater</h2>
          <p className={style.paraText}>
            From intimate birthdays to grand weddings, Chef Choice Menu crafts
            culinary experiences that make every celebration memorable. Our
            chefs design personalized menus tailored to your event style,
            ensuring every bite leaves a lasting impression.
          </p>
        </div>
        <div className={style.second}>
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default SeventhSection;
