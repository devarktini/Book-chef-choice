import styles from "../styles/aboutUs.module.css";

function ReviewCard({ rating, name, text, img, city }) {
  return (
    <div className={`${styles.reviewCardContainer}`}>
      {/* Stars */}
      <div className="flex mb-3">
        {Array.from({ length: rating }).map((_, i) => (
          <img
            key={i}
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/Star_16_kmx0ug.svg"
            alt="star"
          />
        ))}
      </div>

      {/* Testimonial text */}
      <div>
        <p className={styles.reviewCardText}>{text}</p>
      </div>

      {/* Reviewer info */}
      <div className="flex space-x-4 items-center mt-3">
        <div>
          <img
            className="rounded-full w-14 h-14 object-cover"
            src={img}
            alt={name}
          />
        </div>
        <div className="text-left">
          <p className={styles.reviewCardName}>{name.toUpperCase()}</p>
          <p className={styles.reviewCardCity}>{city}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
