"use client";

import { motion, useReducedMotion } from "motion/react";
import { Star } from "lucide-react";

export function TestimonialsColumn({ className = "", reviews, duration = 18 }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className={`flex flex-col gap-4 ${className}`}>
        {reviews.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </div>
    );
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        className="flex flex-col gap-4"
      >
        {[0, 1].map((loop) =>
          reviews.map((review, i) => (
            <ReviewCard key={`${loop}-${review.name}-${i}`} review={review} />
          )),
        )}
      </motion.div>
    </div>
  );
}

function ReviewCard({ review }) {
  const { initials, name, location, rating, quote } = review;

  return (
    <figure className="flex w-full max-w-xs shrink-0 flex-col rounded-[22px] border border-navy-950/8 bg-white p-7">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="size-3.5 fill-accent text-accent" strokeWidth={0} />
          ))}
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-slate-400">
          Verified pickup
        </span>
      </div>

      <blockquote className="mt-5 text-[14.5px] leading-relaxed text-slate-700">
        &ldquo;{quote}&rdquo;
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-navy-950/8 pt-5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-navy-950/[0.04] font-mono text-[11px] font-medium text-navy-800">
          {initials}
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-navy-950">{name}</p>
          <p className="mt-0.5 text-xs text-slate-500">{location}</p>
        </div>
      </figcaption>
    </figure>
  );
}
