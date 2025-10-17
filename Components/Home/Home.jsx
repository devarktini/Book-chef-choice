import React, { Suspense, lazy } from "react";
import HeroSection from "./Hero/HeroSection"; // keep Hero direct since it’s first paint

import SeventhSection from "./Seventh Section/SeventhSection";

// Lazy-loaded sections
const FirstSection = lazy(() => import("./First Section/FirstSection"));
const SecondSection = lazy(() => import("./SecondSection/SecondSection"));
const ThirdSection = lazy(() => import("./Third Section/ThirdSection"));
const Fourth = lazy(() => import("./Fourth Section/Fourth"));
const Fifth = lazy(() => import("./Fifth Section/Fifth"));
const FaqSection = lazy(() => import("./Sixth Section/FaqSection"));

const Home = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Fourth />
        <SeventhSection />
        <Fifth />
        <FaqSection />
      </Suspense>
    </>
  );
};

export default Home;
