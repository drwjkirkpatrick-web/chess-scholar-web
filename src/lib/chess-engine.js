import { Chess } from 'chess.js';

export function createGame(fen = 'start') {
  return new Chess(fen);
}

export function getLegalMoves(fen) {
  const chess = new Chess(fen);
  return chess.moves();
}

export function makeMove(fen, move) {
  const chess = new Chess(fen);
  const result = chess.move(move);
  if (result) {
    return { fen: chess.fen(), move: result, gameOver: chess.isGameOver() };
  }
  return null;
}

export function validateMove(fen, move) {
  const chess = new Chess(fen);
  return chess.move(move) !== null;
}

export function getGameStatus(fen) {
  const chess = new Chess(fen);
  return {
    isCheck: chess.isCheck(),
    isCheckmate: chess.isCheckmate(),
    isStalemate: chess.isStalemate(),
    isDraw: chess.isDraw(),
    turn: chess.turn(),
  };
}
