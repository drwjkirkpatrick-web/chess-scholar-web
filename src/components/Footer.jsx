import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-chess-bark text-chess-cream mt-16">
      <div className="container-x py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <span className="text-2xl">♟️</span> Chess Scholar
            </h3>
            <p className="text-chess-creamDark text-sm leading-relaxed">
              A perfectly scaffolded chess curriculum. 100 lessons from absolute beginner to master teacher.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-3">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/lessons" className="hover:text-chess-gold transition-colors">All 100 Lessons</Link></li>
              <li><Link href="/" className="hover:text-chess-gold transition-colors">Home</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3">Built With</h4>
            <ul className="space-y-2 text-sm text-chess-creamDark">
              <li>⚛ Next.js 14 + React</li>
              <li>♟ react-chessboard + chess.js</li>
              <li>🎨 Tailwind CSS</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-chess-barkLight mt-8 pt-6 text-center text-sm text-chess-creamDark">
          <p>Built for chess learners everywhere. MIT License. ♟️</p>
        </div>
      </div>
    </footer>
  );
}
