import React, { Suspense, lazy } from "react";
import HeroSection from "../components/Home/Hero/HeroSection"; // keep Hero direct since it’s first paint

import SeventhSection from "../components/Home/Seventh Section/SeventhSection";

// Lazy-loaded sections
const FirstSection = lazy(() => import("../components/Home/First Section/FirstSection"));
const SecondSection = lazy(() => import("../components/Home/SecondSection/SecondSection"));
const ThirdSection = lazy(() => import("../components/Home/Third Section/ThirdSection"));
const Fourth = lazy(() => import("../components/Home/Fourth Section/Fourth"));
const Fifth = lazy(() => import("../components/Home/Fifth Section/Fifth"));
const FaqSection = lazy(() => import("../components/Home/Sixth Section/FaqSection"));

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
