"use client";
import { useEffect, useRef } from "react";

// Must match the number of radial-gradient layers in .masthead-dot-spotlight
// (--mx0/--my0 .. --mx(N-1)/--my(N-1)).
const TRAIL_LENGTH = 6;
// Per-frame interpolation toward each link's target — the head eases toward
// the cursor, and every link behind it eases toward the link ahead, which is
// what turns a single chasing dot into a tapering tail.
const EASE = 0.25;
const SETTLE_EPSILON = 0.3;

type Point = { x: number; y: number };

// Tracks the cursor over .masthead and drives a short chain of eased
// positions behind it, writing them straight onto the DOM node (not through
// React state — mousemove never touches the render path). The actual
// spotlight/tail reveal is pure CSS; this just supplies already-eased
// positions for its mask layers to read.
export default function DotSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const masthead = ref.current?.closest<HTMLElement>(".masthead");
    if (!masthead) return;

    let target: Point = { x: 0, y: 0 };
    let trail: Point[] = Array.from({ length: TRAIL_LENGTH }, () => ({ x: 0, y: 0 }));
    let hasTarget = false;
    let rafId: number | null = null;

    function tick() {
      let settled = true;

      const leadBefore = trail[0];
      trail[0] = {
        x: leadBefore.x + (target.x - leadBefore.x) * EASE,
        y: leadBefore.y + (target.y - leadBefore.y) * EASE,
      };
      if (Math.abs(target.x - trail[0].x) > SETTLE_EPSILON || Math.abs(target.y - trail[0].y) > SETTLE_EPSILON) {
        settled = false;
      }

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const ahead = trail[i - 1];
        const behind = trail[i];
        trail[i] = {
          x: behind.x + (ahead.x - behind.x) * EASE,
          y: behind.y + (ahead.y - behind.y) * EASE,
        };
        if (Math.abs(ahead.x - trail[i].x) > SETTLE_EPSILON || Math.abs(ahead.y - trail[i].y) > SETTLE_EPSILON) {
          settled = false;
        }
      }

      trail.forEach((p, i) => {
        masthead!.style.setProperty(`--mx${i}`, `${p.x}px`);
        masthead!.style.setProperty(`--my${i}`, `${p.y}px`);
      });

      rafId = settled ? null : requestAnimationFrame(tick);
    }

    function handleMove(e: MouseEvent) {
      const rect = masthead!.getBoundingClientRect();
      target = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      if (!hasTarget) {
        // Snap the whole chain to the entry point so the tail doesn't
        // streak in from a stale (0,0) the first time the cursor arrives.
        trail = Array.from({ length: TRAIL_LENGTH }, () => ({ ...target }));
        hasTarget = true;
      }
      if (rafId === null) rafId = requestAnimationFrame(tick);
    }

    masthead.addEventListener("mousemove", handleMove);
    return () => {
      masthead.removeEventListener("mousemove", handleMove);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div ref={ref} className="masthead-dot-spotlight" aria-hidden="true" />;
}
