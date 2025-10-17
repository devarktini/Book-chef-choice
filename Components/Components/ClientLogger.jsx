"use client";

import { useEffect } from "react";

export default function ClientLogger({ message = "mounted" }) {
  useEffect(() => {
    console.log("ClientLogger:", message);
  }, [message]);

  return null;
}
