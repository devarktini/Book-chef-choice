import React from "react";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          {/* Logo & About */}
          <div className={`${styles.col} ${styles.col3}`}>
            <div className={styles.box}>
              <span className={styles.shape2}></span>
              <Link href="/" className={styles.logo}>
                <img
                  src="https://res.cloudinary.com/dzvvb0z0h/image/upload/f_auto,q_auto/v1757953170/removeb_sxbskt.png"
                  alt="logo"
                  className={styles.logoLight}
                />
                <img
                  src="https://cdn.tailgrids.com/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className={styles.logoDark}
                />
              </Link>
              <p className={styles.text}>
                Hire professional chefs for birthdays, anniversaries, family
                dinners & corporate events.
              </p>
              <p className={styles.phone}>
                <span className={styles.phoneIcon}>
                  📞 +91 (859) 590 3939<br></br>
                </span>

                <span>
                  <br></br> 📧 info@chefchoicemenu.com
                </span>
              </p>
            </div>
          </div>

          {/* Link Groups */}
          <LinkGroup header="Quick Links">
            <NavLink link="/" label="Home" />
            <NavLink link="/about" label="About" />
            <NavLink link="/service" label="Services" />
            {/* <NavLink link="/#" label="" /> */}
          </LinkGroup>

          <LinkGroup header="Useful links">
            <NavLink link="/contact" label="Contact Us" />
            <NavLink link="/blog" label="Our Blogs" />
            <NavLink link="/occasion" label="Book Chef" />
            {/* <NavLink link="/#" label="Download App" /> */}
          </LinkGroup>

          <LinkGroup header="Legal">
            <NavLink link="/privacy" label="Privacy Policy" />
            <NavLink link="/Terms" label="Terms and Condition" />
            <NavLink link="/Disclaimer" label="Disclaimer" />
          </LinkGroup>

          {/* Social */}
          <div className={`${styles.col} ${styles.col3}`}>
            <div className={styles.box}>
              <h4 className={styles.heading}>Follow Us On</h4>
              <div className={styles.social}>
                <a
                  href="https://www.linkedin.com/company/chef-choice-menu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#0A66C2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 0h-14c-2.77 0-5 2.23-5 5v14c0 
                    2.77 2.23 5 5 5h14c2.77 0 5-2.23 
                    5-5v-14c0-2.77-2.23-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.27c-.96 
                    0-1.73-.79-1.73-1.73s.77-1.73 
                    1.73-1.73 1.73.79 
                    1.73 1.73-.77 1.73-1.73 1.73zm13.5 
                    11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
                    0-2.16 1.46-2.16 2.96v5.71h-3v-10h2.88v1.37h.04c.4-.75 
                    1.38-1.54 2.84-1.54 3.04 0 3.6 2 
                    3.6 4.6v5.57z"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/chefchoicemenu/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="#E1306C"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 
                    3.584.012 4.85.07 1.366.062 
                    2.633.35 3.608 1.325.975.975 
                    1.262 2.242 1.324 3.608.058 
                    1.266.07 1.646.07 4.85s-.012 
                    3.584-.07 4.85c-.062 1.366-.35 
                    2.633-1.324 3.608-.975.975-2.242 
                    1.262-3.608 1.324-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.324-.975-.975-1.262-2.242-1.324-3.608C2.175 
                    15.747 2.163 15.367 2.163 
                    12s.012-3.584.07-4.85c.062-1.366.35-2.633 
                    1.324-3.608.975-.975 2.242-1.262 
                    3.608-1.324C8.416 2.175 8.796 
                    2.163 12 2.163zm0 3.838a6 
                    6 0 1 0 0 12 6 6 0 0 0 0-12zm0 
                    9.8a3.8 3.8 0 1 1 0-7.6 3.8 
                    3.8 0 0 1 0 7.6zm7.2-10.4a1.44 
                    1.44 0 1 1-2.88 0 1.44 
                    1.44 0 0 1 2.88 0z"
                    />
                  </svg>
                </a>
              </div>
              <p className={styles.copy}>&copy; 2025 Chef Choice Menu</p>
            </div>
          </div>
        </div>
      </div>

      {/* Background shapes */}
      <span className={styles.shape1}></span>
      <span className={styles.shape2}></span>
    </footer>
  );
};

export default Footer;

const LinkGroup = ({ children, header }) => {
  return (
    <div className={`${styles.col} ${styles.col2}`}>
      <div className={styles.box}>
        <h4 className={styles.heading}>{header}</h4>
        <ul className={styles.linkList}>{children}</ul>
      </div>
    </div>
  );
};

const NavLink = ({ link, label }) => {
  return (
    <li>
      <Link href={link} className={styles.navLink}>
        {label}
      </Link>
    </li>
  );
};
