import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="border-b border-stone-200">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <Link
          href="/"
          className="font-serif text-xl tracking-wide text-stone-900"
        >
          Sahar Dolatyari
        </Link>
        <ul className="flex gap-8 text-sm tracking-wide text-stone-600">
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-stone-900"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
