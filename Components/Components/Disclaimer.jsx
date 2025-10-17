import React from "react";
import styles from "./Disclaimer.module.css";

export default function Disclaimer() {
  return (
    <div className={styles.container}>
      <h1>Disclaimer</h1>
      <p>
        The information provided on Chef Choice Menu is for general
        informational purposes only. While we strive for accuracy, we make no
        warranties regarding the completeness or reliability of the content.
      </p>

      <h2>Service Disclaimer</h2>
      <p>
        Chefs listed on our platform are independent contractors. We are not
        responsible for their actions, cooking methods, food safety handling, or
        the outcome of your dining experience. All arrangements are made at your
        discretion.
      </p>

      <h2>Health & Allergies</h2>
      <p>
        Customers must disclose allergies or dietary restrictions during
        booking. Chef Choice Menu does not guarantee allergen-free meals and
        assumes no liability for undisclosed conditions.
      </p>

      <h2>External Links</h2>
      <p>
        Our website may contain links to third-party sites. We are not
        responsible for the content, privacy policies, or practices of external
        websites.
      </p>

      <h2>Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Chef Choice Menu disclaims
        liability for damages, losses, or issues arising from the use of our
        website, chefs, or services.
      </p>

      <h2>Consent</h2>
      <p>
        By using our website, you hereby consent to our disclaimer and agree to
        its terms.
      </p>

      <h2>Contact Us</h2>
      <p>Email: support@chefchoicemenu.com</p>
      <p>Phone: +91 85 959 039 39</p>
    </div>
  );
}
