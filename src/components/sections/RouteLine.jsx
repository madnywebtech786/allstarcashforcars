"use client";

import { createContext, useContext, useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const RouteProgressContext = createContext(null);

export function useRouteProgress() {
  return useContext(RouteProgressContext);
}

export function RouteLine({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 45%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 22,
    mass: 0.5,
  });
  const scaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      {/* Route spine — grows downward as the section travels through view, like a driven route */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-2 bottom-2 w-px bg-navy-950/10 sm:left-1/2 sm:-translate-x-1/2"
      >
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="h-full w-full bg-linear-to-b from-accent to-accent-hover"
        />
      </div>

      <RouteProgressContext.Provider value={progress}>
        {children}
      </RouteProgressContext.Provider>
    </div>
  );
}
