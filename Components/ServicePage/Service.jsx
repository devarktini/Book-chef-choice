// import bgImg from "../assets/Rectangle55.png";
// import ServiceCard from "../Components/ServiceCard";
import First from "./FirstSection/First";
import Hero from "./Hero/Hero";

import Second from "./SecondSection/Second";
import Third from "./ThirdSection/Third";

const Service = () => {
  return (
    <>
      <Hero
        Heading="Services"
        imageUrl="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953170/service_ptmgz8.png"
      />
      <First />

      {/* <ServiceCard
        img1={img1}
        img2={img2}
        Head="Private Chefs"
        imag3={imag3}
        para="Enjoy restaurant-style dining in your own kitchen. Our professional chefs craft personalized meals tailored to your tastes, perfect for cozy dinners, family celebrations, or special surprises."
        imag4={imag4}
      /> */}
      <Second />
      <Third />
    </>
  );
};
export default Service;
