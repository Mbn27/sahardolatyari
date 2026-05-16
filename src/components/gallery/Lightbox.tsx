"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

type Props = {
  artworks: Artwork[];
  index: number;
  onClose: () => void;
  onNavigate: (delta: number) => void;
};

const SWIPE_THRESHOLD = 50;

export default function Lightbox({ artworks, index, onClose, onNavigate }: Props) {
  const artwork = artworks[index];
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onNavigate(-1);
      else if (e.key === "ArrowRight") onNavigate(1);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onNavigate]);

  // Lock body scroll while open
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;
      const dx = e.changedTouches[0].clientX - touchStart.current.x;
      const dy = e.changedTouches[0].clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
        onNavigate(dx < 0 ? 1 : -1);
      }
    },
    [onNavigate],
  );

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!artwork) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-stone-950/95 p-4 backdrop-blur-sm sm:p-8"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center text-2xl text-stone-300 transition-colors hover:text-stone-50 sm:right-6 sm:top-6"
      >
        ×
      </button>

      {/* Counter */}
      <p className="absolute left-4 top-4 z-10 text-xs uppercase tracking-widest text-stone-400 sm:left-6 sm:top-6">
        {index + 1} / {artworks.length}
      </p>

      {/* Prev button (hidden on mobile — use swipe instead) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(-1);
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-stone-300 transition-colors hover:text-stone-50 sm:flex"
      >
        ‹
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNavigate(1);
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center text-3xl text-stone-300 transition-colors hover:text-stone-50 sm:flex"
      >
        ›
      </button>

      {/* Image + caption */}
      <figure className="flex max-h-full w-full max-w-6xl flex-col items-center gap-6">
        <div className="flex max-h-[70vh] w-full items-center justify-center">
          <Image
            key={artwork.slug}
            src={artwork.image}
            alt={artwork.title}
            width={artwork.width}
            height={artwork.height}
            sizes="100vw"
            priority
            className="max-h-[70vh] w-auto object-contain"
          />
        </div>
        <figcaption className="max-w-xl text-center text-stone-200">
          <h2 className="font-serif text-2xl text-stone-50 sm:text-3xl">
            {artwork.title}
          </h2>
          <p className="mt-2 text-sm tracking-wide text-stone-400">
            {[artwork.year, artwork.medium, artwork.dimensions]
              .filter(Boolean)
              .join(" · ")}
          </p>
          {artwork.description ? (
            <p className="mt-4 text-base leading-relaxed text-stone-300">
              {artwork.description}
            </p>
          ) : null}
        </figcaption>
      </figure>
    </div>
  );
}
