import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Home() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="mb-6 text-sm uppercase tracking-[0.3em] text-stone-500">
        Artist &middot; Painter
      </p>
      <h1 className="font-serif text-5xl leading-tight tracking-tight text-stone-900 sm:text-6xl md:text-7xl">
        Sahar Dolatyari
      </h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
        A quiet practice in paint and pigment — exploring light, memory, and
        the moments between.
      </p>
      <div className="mt-12 flex gap-6">
        <Link
          href="/gallery"
          className="border border-stone-900 px-8 py-3 text-sm uppercase tracking-widest text-stone-900 transition-colors hover:bg-stone-900 hover:text-stone-50"
        >
          View Gallery
        </Link>
        <Link
          href="/about"
          className="px-8 py-3 text-sm uppercase tracking-widest text-stone-600 transition-colors hover:text-stone-900"
        >
          About
        </Link>
      </div>
    </Container>
  );
}
