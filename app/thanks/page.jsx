"use client";

import Container from "../../Components/Container";

function Thanks() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Thank You!</h1>
        <p style={{ color: 'var(--text-primary)' }}>
          Your booking has been submitted successfully. We will get back to you
          soon.
        </p>
      </div>
    </Container>
  );
}

export default Thanks;
