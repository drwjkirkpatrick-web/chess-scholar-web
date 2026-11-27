import './globals.css';

export const metadata = {
  title: 'Chess Scholar — 100 Lessons from Pawn to King',
  description: 'A perfectly scaffolded chess curriculum. 50 foundation lessons + 50 opening encyclopedia lessons. Learn chess from absolute beginner to master teacher.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-chess-cream text-chess-bark min-h-screen">
        {children}
      </body>
    </html>
  );
}
