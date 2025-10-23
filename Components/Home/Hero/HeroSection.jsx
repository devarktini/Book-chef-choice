"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import styles from "./HeroSection.module.css";

// Optimized Cloudinary video URL
const videoSrc =
  "https://res.cloudinary.com/dzvvb0z0h/video/upload/f_auto,q_auto/v1760203198/8626668-hd_1920_1080_25fps_xxekee.mp4";

// Poster image for LCP
const posterSrc =
  "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1760203335/Screenshot_2025-10-11_225051_rk9kfd.png";

// Slideshow images (fallback for mobile/video error)
const slides = [
  "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953143/1_eofr2u.jpg",
  "https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953145/28_fcqdux.jpg",
];

function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [videoError, setVideoError] = useState(false);

  // Slideshow fallback if video not loaded
  useEffect(() => {
    if (videoError) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [videoError]);

  // Responsive switch (video on desktop, slideshow on mobile)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVideoError(true); // force slideshow on small screens
      } else {
        setVideoError(false); // allow video on larger screens
      }
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.hero}>
      {/* Background video with LCP optimizations */}
      {!videoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          className={styles.videoBackground}
          poster={posterSrc}
          onError={() => setVideoError(true)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Fallback slideshow (mobile/video error) */}
      {videoError &&
        slides.map((src, index) => (
            <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
              fetchPriority={index === 0 ? "high" : undefined}
            decoding="async"
            loading={index === 0 ? "eager" : "lazy"}
            className={`${styles.slide} ${
              index === currentSlide ? styles.active : ""
            }`}
          />
        ))}

      {/* Overlay background */}
      <div className={styles.overlayBackground}></div>

      {/* Overlay text & button */}
      <div className={styles.overlay}>
        <h3 className={styles.heroText}>
          Delightful Experiences, Anytime, Anywhere
        </h3>
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco_e7k5e4.png"
          alt="decorative"
          loading="lazy"
          decoding="async"
        />
        <h1 className={styles.heroText1}>Welcome to Chef Choice Menu</h1>
        <p className={styles.heroText2}>
          Discover the finest dishes crafted with love
        </p>
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco2_wzy8rn.png"
          alt="decorative"
          loading="lazy"
          decoding="async"
        />
      <Link href="/occasion">
  <button className={styles.button}>
    <span>Book Your Chef</span>
  </button>
</Link>
      </div>
    </div>
  );
}

export default HeroSection;
