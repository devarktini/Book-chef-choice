import React from "react";
import styles from "./TermsAndConditions.module.css";

export default function TermsAndConditions() {
  return (
    <div className={styles.container}>
      <h1>Terms & Conditions</h1>
      <p>
        Welcome to Chef Choice Menu. By accessing and using our website, you
        agree to the following terms and conditions. Please read carefully
        before booking any services.
      </p>

      <h2>Use of Services</h2>
      <p>
        Our platform allows you to book professional chefs for personal or event
        services. You agree to provide accurate booking details and use the
        service for lawful purposes only.
      </p>

      <h2>Booking & Payments</h2>
      <ul>
        <li>All bookings must be confirmed through our website.</li>
        <li>Payment is required in advance unless otherwise specified.</li>
        <li>
          Cancellation policies and refunds are subject to chef availability and
          service terms displayed during booking.
        </li>
      </ul>

      <h2>Liability</h2>
      <p>
        We connect you with independent chefs. While we verify professional
        qualifications, we are not liable for individual chef actions, food
        allergies, or damages arising during service.
      </p>

      <h2>User Responsibilities</h2>
      <ul>
        <li>Ensure safe working conditions for chefs at your premises</li>
        <li>Disclose any allergies or dietary restrictions in advance</li>
        <li>Refrain from misuse or fraudulent bookings</li>
      </ul>

      <h2>Intellectual Property</h2>
      <p>
        All content on this website, including text, images, and branding,
        remains the property of Chef Choice Menu and may not be copied without
        permission.
      </p>

      <h2>Amendments</h2>
      <p>
        We reserve the right to update these Terms & Conditions at any time.
        Continued use of our website constitutes acceptance of changes.
      </p>

      <h2>Contact Us</h2>
      <p>Email: support@chefchoicemenu.com</p>
      <p>Phone: +91 85 959 039 39</p>
    </div>
  );
}
