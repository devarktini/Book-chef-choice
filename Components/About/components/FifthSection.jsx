import styles from "../styles/aboutUs.module.css";
import ReviewCard from "./ReviewCard";

function FifthSection() {
  const dataArr = [
    {
      rating: 5,
      text: "We booked a private chef for our daughter’s birthday in Delhi, and the food was absolutely fantastic! From starters to dessert, everything was fresh and beautifully served. Our guests still talk about the biryani and kebabs.",
      name: "Anjali Mehta",
      city: "New Delhi",
      img: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1758396128/572_uy6llp.jpg",
    },
    {
      rating: 5,
      text: "I hired a chef for a family get-together in Bangalore. The chef not only cooked authentic South Indian dishes but also explained the recipes and traditions behind them. It was both delicious and memorable.",
      name: "Ramesh Iyer",
      city: "Bangalore",
      img: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953149/Ellipse_5_cvaza4.png",
    },
    {
      rating: 3,
      text: "Our office Diwali party in Mumbai was catered by this team, and it exceeded expectations. The live counters, chatpata chaats, and festive sweets were a big hit with everyone. Excellent service and hygiene too.",
      name: "Neha Kapoor",
      city: "Mumbai",
      img: "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1758395700/indian-model-showing-okay-sign-thumbs-up-gesture-studio-giving-like-agreeing-with-optimistic-idea-friendly-positive-approval-ok-symbol-accept-excellent-agreement_vzm107.jpg",
    },
  ];

  return (
    <div
      className={`${styles.fifthSectionContainer} py-10 md:py-20 px-5 flex justify-center flex-wrap gap-6`}
    >
      {dataArr.map((val, index) => (
        <ReviewCard
          key={index}
          rating={val.rating}
          text={val.text}
          name={val.name}
          city={val.city}
          img={val.img}
        />
      ))}
    </div>
  );
}

export default FifthSection;
