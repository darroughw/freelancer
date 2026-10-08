"use client";
import { useScrollReveal } from "../hooks/useScrollReveal";

// A client-only island for server components that just need the
// [data-reveal] scroll-in effect wired up — see useScrollReveal.
export default function ScrollReveal() {
  useScrollReveal();
  return null;
}
