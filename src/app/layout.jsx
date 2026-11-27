import './globals.css';

export const metadata = {
  title: 'Chess Scholar — 50 Lessons from Pawn to King',
  description: 'A perfectly scaffolded chess teaching program. Learn chess from the absolute beginning through mastery with piece-persona guided lessons.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-chess-cream text-chess-bark">
        {children}
      </body>
    </html>
  );
}
