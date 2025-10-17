import React from "react";
import styles from "./PrivacyPolicy.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <h1>Privacy Policy</h1>
      <p>
        Chef Choice Menu (“we,” “our,” or “us”) values your privacy and is
        committed to protecting your personal information. This Privacy Policy
        explains how we collect, use, and safeguard the data you provide while
        using our website and services.
      </p>

      <h2>Scope</h2>
      <p>
        This Privacy Policy applies to customers booking chefs, visitors to our
        website, and individuals who interact with our platform.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Contact details: Name, email, phone number, address</li>
        <li>Booking details: Selected services, date, and preferences</li>
        <li>
          Payment information (processed securely through third-party providers)
        </li>
        <li>Technical data: IP address, browser type, device information</li>
      </ul>

      <h2>How We Collect Data</h2>
      <p>
        We collect personal information when you register, book a chef, fill out
        forms, or communicate with us by email, phone, or chat.
      </p>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide chef booking and related services</li>
        <li>To process payments and issue invoices</li>
        <li>To communicate booking updates, promotions, and service alerts</li>
        <li>To improve our website and customer experience</li>
        <li>To comply with legal and regulatory requirements</li>
      </ul>

      <h2>Data Sharing</h2>
      <p>
        We do not sell or rent personal data. We may share limited information
        with trusted service providers (payment processors, SMS platforms)
        solely to deliver our services.
      </p>

      <h2>SMS & Mobile Data</h2>
      <p>
        We will never sell your mobile information or share it with third
        parties for marketing. Any SMS consent is used only for booking updates
        and chef service communication.
      </p>

      <h2>Data Retention</h2>
      <p>
        Your personal data will be retained only as long as necessary to fulfill
        service obligations or comply with legal requirements.
      </p>

      <h2>Security</h2>
      <p>
        We implement encryption, secure servers, and restricted access to
        protect your information.
      </p>

      <h2>Your Rights</h2>
      <p>
        You have the right to request access, correction, or deletion of your
        data at any time by contacting us.
      </p>

      <h2>Contact Us</h2>
      <p>Email: support@chefchoicemenu.com</p>
      <p>Phone: +91 85 959 039 39</p>
    </div>
  );
}
