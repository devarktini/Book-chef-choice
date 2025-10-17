"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function PathLogger() {
  const pathname = usePathname();
  useEffect(() => {
    console.log("PathLogger client pathname:", pathname);
  }, [pathname]);
  return null;
}
