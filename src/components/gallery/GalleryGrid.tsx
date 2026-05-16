import type { Artwork } from "@/lib/artworks";
import ArtworkCard from "./ArtworkCard";

type Props = {
  artworks: Artwork[];
};

export default function GalleryGrid({ artworks }: Props) {
  if (artworks.length === 0) {
    return (
      <p className="py-24 text-center font-serif italic text-stone-500">
        Artworks coming soon.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {artworks.map((artwork) => (
        <ArtworkCard key={artwork.slug} artwork={artwork} />
      ))}
    </div>
  );
}
