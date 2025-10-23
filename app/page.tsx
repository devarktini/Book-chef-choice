import React, { Suspense, lazy } from "react";
// import HeroSection from "../components/Home/Hero/HeroSection"; // keep Hero direct since it’s first paint

// import SeventhSection from "../components/Home/Seventh Section/SeventhSection";

// Lazy-loaded sections
const HeroSection = lazy(() => import("../Components/Home/Hero/HeroSection"));
const FirstSection = lazy(() => import("../Components/Home/FirstSection/FirstSection"));
const SecondSection = lazy(() => import("../Components/Home/SecondSection/SecondSection"));
const ThirdSection = lazy(() => import("../Components/Home/ThirdSection/ThirdSection"));
const Fourth = lazy(() => import("../Components/Home/FourthSection/Fourth"));
const Fifth = lazy(() => import("../Components/Home/FifthSection/Fifth"));
const FaqSection = lazy(() => import("../Components/Home/SixthSection/FaqSection"));
const SeventhSection = lazy(() => import("../Components/Home/SeventhSection/SeventhSection"));
// const SpecialOffer = lazy(() => import("../components/Home/SpecialModule/SpecialOffer"));

const Home = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<div>Loading...</div>}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <Fourth />
        {/* <SpecialOffer /> */}
        <SeventhSection />
        <Fifth />
        <FaqSection />
      </Suspense>
    </>
  );
};

export default Home;
