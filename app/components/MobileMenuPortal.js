"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function MobileMenuPortal({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const root = document.getElementById("mobile-menu-root");
  return createPortal(children, root);
}
