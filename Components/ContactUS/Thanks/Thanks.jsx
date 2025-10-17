import React from "react";
import Link from "next/link";
import styles from "./Thanks.module.css"; // using the CSS you already created

export default function Thanks() {
  return (
    <section className={styles.thanksSection}>
      <div className={styles.container}>
        <h1 className={styles.title}>🎉 Thank You!</h1>
        <p className={styles.message}>
          Thank you for reaching out! Your message has been received, and our
          culinary team is already preparing a delicious response. We’ll get
          back to you shortly to make your experience truly flavorful
        </p>
        <Link to="/" className={styles.homeBtn}>
          ⬅ Back to Home
        </Link>
      </div>
    </section>
  );
}
