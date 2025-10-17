"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./Navigation.module.css";

const routes = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "Contact Us", href: "/contact" },
];

const Navigation = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const curr = window.scrollY;
      if (curr > lastScrollY.current && curr > 80) setShowHeader(false);
      else setShowHeader(true);
      lastScrollY.current = curr;
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${!showHeader ? styles.hide : ""}`}>
        <div className={styles.container}>
          {/* Logo (left) */}
          <Link href="/" className={styles.logo}>
            <img
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953170/removeb_sxbskt.png"
              alt="Chef Choice Menu"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className={styles.nav}>
            {routes.map((route, i) => (
              <Link
                key={i}
                href={route.href}
                className={styles.navLink}
                onClick={() => console.log('nav click', route.href)}
              >
                {route.name}
              </Link>
            ))}
          </nav>

          {/* Desktop "Book Chef" button */}
          <div className={styles.right}>
            <Link href="/book-chef" className={styles.button}>
              Book Chef
            </Link>
          </div>

          {/* Mobile/Tablet GIF menu icon (right) */}
          <button
            type="button"
            className={styles.menuIcon}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <img
              src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/icons8_ykt3tj.gif"
              alt=""
            />
          </button>
        </div>
      </header>

      {/* Click-outside backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.show : ""}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Off-Canvas Menu (left, 50% width, full height) */}
      <aside className={`${styles.sidebar} ${menuOpen ? styles.open : ""}`}>
        {/* Background decorations (kept small & behind content) */}
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/56325_vulakb.png"
          className={`${styles.bg} ${styles.bg1}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953144/08_or6jqw.png"
          className={`${styles.bg} ${styles.bg2}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/Group33_xfqtx4.png"
          className={`${styles.bg} ${styles.bg3}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953153/Group27_vdqdh6.png"
          className={`${styles.bg} ${styles.bg4}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-2_1_uops5f.png"
          className={`${styles.bg} ${styles.bg5}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/chef4_aissby.png"
          className={`${styles.bg} ${styles.bg6}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953177/s-icon-4_1_ow08kr.png"
          className={`${styles.bg} ${styles.bg7}`}
          alt=""
        />
        <img
          src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953146/bg-131_pb6ir0.png"
          className={`${styles.bg} ${styles.bg8}`}
          alt=""
        />

        {/* Foreground content wrapper */}
        <div className={styles.sidebarInner}>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>

          {/* Decorative image (top) */}
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco_e7k5e4.png"
            className={styles.decoImg}
            alt=""
          />

          <h2 className={styles.menuHeading}>Menu</h2>

          {/* Decorative image (bottom) */}
          <img
            src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953148/deco2_wzy8rn.png"
            className={styles.decoImg}
            alt=""
          />

          {/* Links: image sits BELOW each link now */}
          <nav className={styles.sidebarNav}>
            {routes.map((route, i) => (
              <div key={i} className={styles.sidebarItem}>
                <Link
                  href={route.href}
                  className={styles.sidebarLink}
                  onClick={() => {
                    console.log('sidebar click', route.href);
                    setMenuOpen(false);
                  }}
                >
                  {route.name}
                </Link>
                <img
                  src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953159/image_reswea.png"
                  alt=""
                  className={styles.linkDivider}
                />
              </div>
            ))}

            {/* ✅ Updated Book Chef button with close handler */}
            <Link href="/book-chef" onClick={() => setMenuOpen(false)}>
              <button className={styles.button}>Book Your Chef</button>
            </Link>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
