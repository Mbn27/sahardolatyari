import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "About",
  description: "About the artist Sahar Dolatyari — her practice and approach.",
};

export default function AboutPage() {
  return (
    <Container className="max-w-3xl">
      <h1 className="font-serif text-4xl tracking-tight text-stone-900 sm:text-5xl">
        About
      </h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-stone-700">
        <p>
          Sahar Dolatyari is a painter whose work explores the intersection of
          memory, light, and the quiet rhythms of everyday life.
        </p>
        <p className="font-serif italic text-stone-500">
          Biography coming soon.
        </p>
      </div>
    </Container>
  );
}
