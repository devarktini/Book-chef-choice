"use client";

import Container from "../../Components/Container";

function Thanks() {
  return (
    <Container>
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
        <p className="text-white">
          Your booking has been submitted successfully. We will get back to you
          soon.
        </p>
      </div>
    </Container>
  );
}

export default Thanks;
