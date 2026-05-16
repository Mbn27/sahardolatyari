import Image from "next/image";
import type { Artwork } from "@/lib/artworks";

type Props = {
  artwork: Artwork;
};

export default function ArtworkCard({ artwork }: Props) {
  return (
    <figure className="group flex flex-col gap-3">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-stone-100">
        <Image
          src={artwork.image}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <figcaption className="flex flex-col gap-1">
        <h3 className="font-serif text-lg text-stone-900">{artwork.title}</h3>
        <p className="text-sm text-stone-500">
          {artwork.medium}
          {artwork.year ? ` · ${artwork.year}` : ""}
        </p>
      </figcaption>
    </figure>
  );
}
