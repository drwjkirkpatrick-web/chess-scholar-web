'use client';

import { useEffect, useState } from 'react';
import { ChessboardDnDProvider } from 'react-chessboard';

/**
 * Wraps all boards on a page in ONE shared react-dnd provider so multiple
 * <Chessboard> instances don't each spawn their own HTML5 backend.
 * The provider reads `window` at render time, so it is only mounted after
 * hydration (SSR passes children through untouched).
 */
export default function BoardsProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return children;
  return <ChessboardDnDProvider>{children}</ChessboardDnDProvider>;
}
