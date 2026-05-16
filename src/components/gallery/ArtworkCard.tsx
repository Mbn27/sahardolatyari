"use client";

import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

type Props = {
  artwork: Artwork;
  onSelect: () => void;
};

export default function ArtworkCard({ artwork, onSelect }: Props) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-label={`View ${artwork.title}`}
      className="group mb-6 block w-full break-inside-avoid text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2"
    >
      <div className="relative overflow-hidden bg-stone-100">
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={artwork.width}
          height={artwork.height}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.02]"
        />

        {/* Desktop: hover overlay */}
        <div className="absolute inset-0 hidden items-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:flex">
          <div className="text-stone-50">
            <h3 className="font-serif text-xl">{artwork.title}</h3>
            <p className="mt-1 text-sm text-stone-300">
              {artwork.year ? `${artwork.year} · ` : ""}
              {artwork.medium}
            </p>
          </div>
        </div>
      </div>

      {/* Mobile: caption below image */}
      <div className="mt-3 md:hidden">
        <h3 className="font-serif text-lg text-stone-900">{artwork.title}</h3>
        <p className="text-sm text-stone-500">
          {artwork.year ? `${artwork.year} · ` : ""}
          {artwork.medium}
        </p>
      </div>
    </button>
  );
}
