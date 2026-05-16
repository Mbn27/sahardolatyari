import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import GalleryView from "@/components/gallery/GalleryView";
import { artworks } from "@/lib/artworks";

export const metadata: Metadata = {
  title: "Gallery",
  description: "A selection of works by Sahar Dolatyari.",
};

export default function GalleryPage() {
  return (
    <Container>
      <header className="mb-16 text-center">
        <h1 className="font-serif text-4xl tracking-tight text-stone-900 sm:text-5xl">
          Gallery
        </h1>
        <p className="mt-4 text-stone-600">
          A selection of recent and ongoing works.
        </p>
      </header>
      <GalleryView artworks={artworks} />
    </Container>
  );
}
