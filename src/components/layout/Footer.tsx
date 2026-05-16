export default function Footer() {
  return (
    <footer className="border-t border-stone-200">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-sm text-stone-500 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Sahar Dolatyari</p>
        <p className="font-serif italic">Artist &middot; Painter</p>
      </div>
    </footer>
  );
}
