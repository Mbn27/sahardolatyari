import type { Metadata } from "next";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sahar Dolatyari for inquiries, commissions, and exhibitions.",
};

export default function ContactPage() {
  return (
    <Container className="max-w-2xl text-center">
      <h1 className="font-serif text-4xl tracking-tight text-stone-900 sm:text-5xl">
        Contact
      </h1>
      <p className="mt-6 text-lg leading-relaxed text-stone-600">
        For inquiries, commissions, or exhibitions, please get in touch.
      </p>
      <p className="mt-10 font-serif italic text-stone-500">
        Contact details coming soon.
      </p>
    </Container>
  );
}
