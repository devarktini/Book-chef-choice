import React from 'react';
import styles from './SpecialOffer.module.css';

const SpecialOffer = () => {
  return (
    <section className={styles.specialOffer}>
      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.bgCircle} ${styles.circle1}`}></div>
        <div className={`${styles.bgCircle} ${styles.circle2}`}></div>
      </div>
      
      <div className={styles.container}>
        {/* Left Content */}
        <div className={styles.contentLeft}>
          <div className={styles.saveBadge}>
            Save 55%
          </div>
          
          <div className={styles.specialTag}>
            <div className={styles.orangeSquare}></div>
            <h2>TODAY SPECIAL OFFER</h2>
          </div>
          
          <h1 className={styles.heading}>
            Explore Irresistible Promotions!
          </h1>
          
          <p className={styles.description}>
            Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. 
            To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary.
          </p>
          
          <button className={styles.ctaButton}>
            Order Today
          </button>
        </div>
        
        {/* Right Content - Food Image */}
        <div className={styles.contentRight}>
          <img 
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/delicious-food-white-plate_1_ivwvpn.png"
            alt="Delicious Food Special Offer"
            className={styles.foodImage}
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;