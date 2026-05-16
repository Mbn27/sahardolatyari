"use client";

import { useCallback, useState } from "react";
import type { Artwork } from "@/lib/artworks";
import GalleryGrid from "./GalleryGrid";
import Lightbox from "./Lightbox";

type Props = {
  artworks: Artwork[];
};

export default function GalleryView({ artworks }: Props) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const navigate = useCallback(
    (delta: number) => {
      setIndex((current) => {
        if (current === null || artworks.length === 0) return current;
        const next = (current + delta + artworks.length) % artworks.length;
        return next;
      });
    },
    [artworks.length],
  );

  return (
    <>
      <GalleryGrid artworks={artworks} onSelect={setIndex} />
      {index !== null ? (
        <Lightbox
          artworks={artworks}
          index={index}
          onClose={close}
          onNavigate={navigate}
        />
      ) : null}
    </>
  );
}
