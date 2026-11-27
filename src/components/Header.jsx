import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-chess-bark text-chess-cream sticky top-0 z-50 shadow-lg">
      <nav className="container-x flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:text-chess-gold transition-colors">
          <span className="text-2xl">♟️</span>
          <span className="hidden sm:inline">Chess Scholar</span>
        </Link>
        <ul className="flex items-center gap-1 sm:gap-4 text-sm sm:text-base">
          <li>
            <Link href="/" className="px-3 py-2 rounded-full hover:bg-chess-barkLight transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/lessons" className="px-3 py-2 rounded-full hover:bg-chess-barkLight transition-colors">
              Lessons
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
