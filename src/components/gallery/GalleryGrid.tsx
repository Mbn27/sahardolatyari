"use client";

import type { Artwork } from "@/lib/artworks";
import ArtworkCard from "./ArtworkCard";

type Props = {
  artworks: Artwork[];
  onSelect: (index: number) => void;
};

export default function GalleryGrid({ artworks, onSelect }: Props) {
  if (artworks.length === 0) {
    return (
      <p className="py-24 text-center font-serif italic text-stone-500">
        Artworks coming soon.
      </p>
    );
  }

  return (
    <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
      {artworks.map((artwork, index) => (
        <ArtworkCard
          key={artwork.slug}
          artwork={artwork}
          onSelect={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
