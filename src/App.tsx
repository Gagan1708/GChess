import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Lightbulb, RotateCcw, Trophy, Check, X, ChevronRight, BookOpen } from 'lucide-react';
import { Move, Line, Opening } from './types';
import { OPENINGS } from './data/openings';

// =====================
// CONSTANTS & DATA
// =====================

const PIECE_IMG: Record<string, string> = {
  wK: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Chess_klt45.svg',
  wQ: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Chess_qlt45.svg',
  wR: 'https://upload.wikimedia.org/wikipedia/commons/7/72/Chess_rlt45.svg',
  wB: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Chess_blt45.svg',
  wN: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Chess_nlt45.svg',
  wP: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Chess_plt45.svg',
  bK: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Chess_kdt45.svg',
  bQ: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Chess_qdt45.svg',
  bR: 'https://upload.wikimedia.org/wikipedia/commons/f/ff/Chess_rdt45.svg',
  bB: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Chess_bdt45.svg',
  bN: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Chess_ndt45.svg',
  bP: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Chess_pdt45.svg',
};

const FILES = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

// =====================
// UTILS
// =====================

function squareToIdx(sq: string) {
  const file = sq.charCodeAt(0) - 97;
  const rank = parseInt(sq[1]) - 1;
  return { row: 7 - rank, col: file };
}

function idxToSquare(row: number, col: number) {
  return FILES[col] + (8 - row);
}

function initBoard() {
  return [
    ['bR', 'bN', 'bB', 'bQ', 'bK', 'bB', 'bN', 'bR'],
    ['bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP', 'bP'],
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    Array(8).fill(null),
    ['wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP', 'wP'],
    ['wR', 'wN', 'wB', 'wQ', 'wK', 'wB', 'wN', 'wR']
  ];
}

// =====================
// COMPONENTS
// =====================

const ChessBoard = ({ 
  board, 
  playerSide, 
  onSquareClick, 
  selectedSq, 
  lastMove, 
  feedbackSq, 
  showHints, 
  currentMove 
}: {
  board: (string | null)[][];
  playerSide: 'w' | 'b';
  onSquareClick: (sq: string) => void;
  selectedSq: string | null;
  lastMove: { from: string; to: string } | null;
  feedbackSq: { sq: string; type: 'correct' | 'wrong' } | null;
  showHints: boolean;
  currentMove: Move | null;
}) => {
  const isFlipped = playerSide === 'b';

  return (
    <div className="flex gap-2 items-center">
      {/* Rank Labels */}
      <div className="flex flex-col h-[min(560px,85vw)]">
        {Array.from({ length: 8 }).map((_, r) => {
          const actualRow = isFlipped ? 7 - r : r;
          return (
            <div key={r} className="flex-1 flex items-center text-[0.7rem] text-[#7a7570] font-mono">
              {8 - actualRow}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col">
        <div 
          id="chess-board" 
          className="grid grid-cols-8 grid-rows-8 border-[3px] border-[#2a2218] rounded-[4px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.6)] w-[min(560px,85vw)] h-[min(560px,85vw)] select-none"
        >
          {Array.from({ length: 8 }).map((_, r) => (
            Array.from({ length: 8 }).map((__, c) => {
              // Flip logic: if player is black, reverse the visual grid mapping
              const row = isFlipped ? 7 - r : r;
              const col = isFlipped ? 7 - c : c;
              
              const sqName = idxToSquare(row, col);
              const isLight = (row + col) % 2 === 0;
              const piece = board[row][col];
              const isSelected = selectedSq === sqName;
              const isLastMove = lastMove && (sqName === lastMove.from || sqName === lastMove.to);
              const isHint = showHints && currentMove && currentMove.color === playerSide && sqName === currentMove.to;
              const feedback = feedbackSq && feedbackSq.sq === sqName ? feedbackSq.type : null;

              return (
                <div 
                  key={sqName}
                  onClick={() => onSquareClick(sqName)}
                  className={`square ${isLight ? 'light' : 'dark'} ${isSelected ? 'selected' : ''} ${isLastMove ? 'last-move' : ''} ${isHint ? 'hint-sq' : ''} select-none`}
                >
                  {piece && (
                    <div className="piece">
                      <img src={PIECE_IMG[piece]} alt={piece} draggable="false" />
                    </div>
                  )}
                  {feedback && (
                    <div className={`feedback-mark ${feedback}`}>
                      {feedback === 'correct' ? <Check size={12} /> : <X size={12} />}
                    </div>
                  )}
                </div>
              );
            })
          ))}
        </div>

        {/* File Labels */}
        <div className="flex w-[min(560px,85vw)]">
          {Array.from({ length: 8 }).map((_, f) => {
            const actualCol = isFlipped ? 7 - f : f;
            return (
              <div key={f} className="flex-1 text-center text-[0.7rem] text-[#7a7570] font-mono">
                {FILES[actualCol]}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Landing = ({ onSelectOpening }: { onSelectOpening: (o: Opening) => void }) => {
  const [filter, setFilter] = useState('all');

  const filteredOpenings = useMemo(() => {
    if (filter === 'all') return OPENINGS;
    if (filter === 'white') return OPENINGS.filter(o => o.side === 'white');
    if (filter === 'black') return OPENINGS.filter(o => o.side === 'black');
    if (filter === 'beginner') return OPENINGS.filter(o => o.difficulty <= 2);
    return OPENINGS.filter(o => o.difficulty >= 3);
  }, [filter]);

  return (
    <div id="landing" className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-12 py-6 border-b border-[#2a2a2f]">
        <div className="font-serif text-2xl text-[#c9a84c] tracking-wider">G<span className="text-[#f5efe0]">Chess</span>♟️</div>
        <div className="flex gap-8">
          <a href="#" className="text-[#7a7570] hover:text-[#c9a84c] transition-colors text-sm font-medium">Openings</a>
          <a href="#" className="text-[#7a7570] hover:text-[#c9a84c] transition-colors text-sm font-medium">Tactics</a>
          <a href="#" className="text-[#7a7570] hover:text-[#c9a84c] transition-colors text-sm font-medium">Endgames</a>
        </div>
      </nav>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-8 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_30%,rgba(201,168,76,0.07)_0%,transparent_70%)] pointer-events-none" />
        <div className="inline-flex items-center gap-2 bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.25)] rounded-full px-4 py-1.5 text-[0.78rem] text-[#c9a84c] uppercase tracking-widest mb-8">
          <span>♟</span> Opening Trainer
        </div>
        <h1 className="font-serif text-5xl md:text-7xl font-black leading-[1.05] text-[#f5efe0] max-w-3xl">
          Master Chess Openings<br />Through <span className="text-[#c9a84c]">Active Recall</span>
        </h1>
        <p className="mt-6 text-lg text-[#7a7570] max-w-lg leading-relaxed font-light">
          Learn every line, every variation. Our guided trainer walks you through book moves with explanations — building muscle memory that lasts.
        </p>
        <div className="mt-12 flex gap-4 flex-wrap justify-center">
          <button 
            onClick={() => document.getElementById('openings')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#c9a84c] hover:bg-[#e8c97a] text-[#0e0e0f] font-bold py-3.5 px-8 rounded-lg transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(201,168,76,0.3)]"
          >
            Start Training →
          </button>
        </div>
      </section>

      <section id="openings" className="px-12 py-16">
        <div className="text-[0.75rem] tracking-[0.15em] uppercase text-[#c9a84c] font-semibold mb-4">Choose Your Opening</div>
        <h2 className="font-serif text-3xl text-[#f5efe0] mb-3">Select an Opening to Master</h2>
        <p className="text-[#7a7570] text-sm mb-12">Each opening contains multiple variations and book lines. Work through them systematically.</p>

        <div className="flex gap-2 mb-10 flex-wrap">
          {['all', 'white', 'black', 'beginner', 'intermediate'].map(f => (
            <button 
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full border transition-all text-xs font-medium capitalize ${filter === f ? 'bg-[#c9a84c] text-[#0e0e0f] border-[#c9a84c]' : 'border-[#2a2a2f] text-[#7a7570] hover:border-[#c9a84c] hover:text-[#c9a84c]'}`}
            >
              {f} {f === 'all' ? 'Openings' : f === 'white' || f === 'black' ? 'Pieces' : ''}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOpenings.map(o => (
            <motion.div 
              key={o.id}
              whileHover={{ y: -4 }}
              onClick={() => onSelectOpening(o)}
              className="bg-[#161618] border border-[#2a2a2f] rounded-2xl p-6 cursor-pointer relative overflow-hidden group hover:border-[rgba(201,168,76,0.4)] transition-colors"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,168,76,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="text-3xl mb-4">{o.icon}</div>
              <div className="font-serif text-xl text-[#f5efe0] mb-1.5">{o.name}</div>
              <div className="text-sm text-[#7a7570] leading-relaxed mb-4">{o.desc}</div>
              <div className="flex items-center gap-4">
                <span className={`text-[0.72rem] font-semibold px-3 py-1 rounded-full uppercase tracking-wider ${o.side === 'white' ? 'bg-[rgba(245,239,224,0.12)] text-[#f5efe0]' : 'bg-[rgba(122,117,112,0.2)] text-[#7a7570]'}`}>
                  {o.side === 'white' ? '⬜ White' : '⬛ Black'}
                </span>
                <span className="text-[0.78rem] text-[#7a7570] ml-auto">{o.lines.length} lines</span>
                <div className="flex gap-1">
                  {[1, 2, 3].map(d => (
                    <div key={d} className={`w-1.5 h-1.5 rounded-full ${d <= o.difficulty ? 'bg-[#c9a84c]' : 'bg-[#2a2a2f]'}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Trainer = ({ opening, line, onBack }: { opening: Opening; line: Line; onBack: () => void }) => {
  const [board, setBoard] = useState<(string | null)[][]>(initBoard());
  const [moveIndex, setMoveIndex] = useState(0);
  const [playerSide] = useState<'w' | 'b'>(opening.side === 'white' ? 'w' : 'b');
  const [selectedSq, setSelectedSq] = useState<string | null>(null);
  const [lastMove, setLastMove] = useState<{ from: string; to: string } | null>(null);
  const [feedbackSq, setFeedbackSq] = useState<{ sq: string; type: 'correct' | 'wrong' } | null>(null);
  const [playedMoves, setPlayedMoves] = useState<{ san: string; color: 'w' | 'b' }[]>([]);
  const [showHints, setShowHints] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: string } | null>(null);

  const currentMove = line.moves[moveIndex] || null;

  const showToast = (msg: string, type = '') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 2500);
  };

  const executeMoveOnBoard = useCallback((move: Move) => {
    setBoard(prev => {
      const newBoard = prev.map(row => [...row]);
      const from = squareToIdx(move.from);
      const to = squareToIdx(move.to);
      const piece = newBoard[from.row][from.col];

      // Castling
      if (move.san === 'O-O') {
        if (move.color === 'w') {
          newBoard[7][6] = 'wK'; newBoard[7][4] = null;
          newBoard[7][5] = 'wR'; newBoard[7][7] = null;
        } else {
          newBoard[0][6] = 'bK'; newBoard[0][4] = null;
          newBoard[0][5] = 'bR'; newBoard[0][7] = null;
        }
        return newBoard;
      }
      if (move.san === 'O-O-O') {
        if (move.color === 'w') {
          newBoard[7][2] = 'wK'; newBoard[7][4] = null;
          newBoard[7][3] = 'wR'; newBoard[7][0] = null;
        } else {
          newBoard[0][2] = 'bK'; newBoard[0][4] = null;
          newBoard[0][3] = 'bR'; newBoard[0][0] = null;
        }
        return newBoard;
      }

      // En passant check (simplified)
      if (piece && piece[1] === 'P' && from.col !== to.col && !newBoard[to.row][to.col]) {
        newBoard[from.row][to.col] = null;
      }

      newBoard[to.row][to.col] = piece;
      newBoard[from.row][from.col] = null;
      return newBoard;
    });
  }, []);

  useEffect(() => {
    if (moveIndex < line.moves.length) {
      const next = line.moves[moveIndex];
      if (next.color !== playerSide) {
        const timer = setTimeout(() => {
          executeMoveOnBoard(next);
          setLastMove({ from: next.from, to: next.to });
          setPlayedMoves(prev => [...prev, { san: next.san, color: next.color }]);
          setMoveIndex(prev => prev + 1);
          setFeedbackSq(null);
        }, 800);
        return () => clearTimeout(timer);
      }
    } else if (moveIndex === line.moves.length && line.moves.length > 0) {
      const timer = setTimeout(() => setIsComplete(true), 700);
      return () => clearTimeout(timer);
    }
  }, [moveIndex, line.moves, playerSide, executeMoveOnBoard]);

  const handleSquareClick = (sqName: string) => {
    if (isComplete) return;
    const move = line.moves[moveIndex];
    if (!move || move.color !== playerSide) return;

    const { row, col } = squareToIdx(sqName);
    const piece = board[row][col];

    if (selectedSq === null) {
      if (piece && piece[0] === playerSide) {
        setSelectedSq(sqName);
      }
    } else {
      if (sqName === selectedSq) {
        setSelectedSq(null);
        return;
      }
      if (piece && piece[0] === playerSide) {
        setSelectedSq(sqName);
        return;
      }

      // Attempt move
      const isCorrect = (selectedSq === move.from && sqName === move.to);
      setFeedbackSq({ sq: sqName, type: isCorrect ? 'correct' : 'wrong' });

      if (isCorrect) {
        executeMoveOnBoard(move);
        setLastMove({ from: selectedSq, to: sqName });
        setPlayedMoves(prev => [...prev, { san: move.san, color: move.color }]);
        setMoveIndex(prev => prev + 1);
        setSelectedSq(null);
      } else {
        showToast('❌ Wrong move! Check the hint.', 'error');
        setTimeout(() => setFeedbackSq(null), 1200);
      }
    }
  };

  const resetLine = () => {
    setBoard(initBoard());
    setMoveIndex(0);
    setLastMove(null);
    setFeedbackSq(null);
    setPlayedMoves([]);
    setSelectedSq(null);
    setIsComplete(false);
  };

  const progressPct = Math.round((moveIndex / line.moves.length) * 100);

  return (
    <div id="trainer" className="flex flex-col min-h-screen">
      <nav className="flex items-center justify-between px-8 py-4 border-b border-[#2a2a2f] bg-[#161618]">
        <button 
          onClick={onBack}
          className="flex items-center gap-2 bg-transparent border border-[#2a2a2f] text-[#7a7570] px-4 py-2 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-sm"
        >
          <ArrowLeft size={16} /> Back to Openings
        </button>
        <div className="text-center">
          <div className="font-serif text-xl text-[#f5efe0]">{opening.name}</div>
          <div className="text-[0.78rem] text-[#7a7570]">{line.name}</div>
        </div>
        <div className="text-sm text-[#7a7570] text-right">
          You play: <strong className="text-[#f5efe0]">{opening.side.charAt(0).toUpperCase() + opening.side.slice(1)}</strong>
        </div>
      </nav>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_auto_380px] gap-8 p-8 max-w-[1300px] mx-auto w-full items-start">
        <div className="flex flex-col items-center gap-6">
          <ChessBoard 
            board={board}
            playerSide={playerSide}
            onSquareClick={handleSquareClick}
            selectedSq={selectedSq}
            lastMove={lastMove}
            feedbackSq={feedbackSq}
            showHints={showHints}
            currentMove={currentMove}
          />
          <div className="flex gap-3 justify-center flex-wrap">
            <button onClick={resetLine} className="bg-[#1e1e21] border border-[#2a2a2f] text-[#e8e2d5] px-5 py-2.5 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-sm flex items-center gap-2">
              <RotateCcw size={16} /> Restart Line
            </button>
            <button onClick={() => setShowHints(!showHints)} className="bg-[#1e1e21] border border-[#2a2a2f] text-[#e8e2d5] px-5 py-2.5 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-sm flex items-center gap-2">
              <Lightbulb size={16} /> {showHints ? 'Hide Hints' : 'Show Hints'}
            </button>
          </div>
        </div>

        <div className="hidden lg:block w-px bg-[#2a2a2f] self-stretch mt-4" />

        <div className="flex flex-col gap-6">
          <div className="bg-[#161618] border border-[rgba(91,141,238,0.3)] rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5b8dee] to-[#8bb5f5]" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-full bg-[rgba(91,141,238,0.15)] flex items-center justify-center text-[#5b8dee]">
                <Lightbulb size={18} />
              </div>
              <div className="text-[0.75rem] uppercase tracking-wider text-[#5b8dee] font-semibold">Your Move</div>
            </div>
            {currentMove && currentMove.color === playerSide ? (
              <>
                <div className="font-serif text-3xl text-[#f5efe0] font-bold mb-3">{currentMove.hint}</div>
                <div className="text-sm text-[#7a7570] leading-relaxed">{currentMove.reason}</div>
              </>
            ) : (
              <div className="text-center py-4">
                <div className="spinner w-8 h-8 border-3 border-[#2a2a2f] border-t-[#5b8dee] rounded-full mx-auto mb-3" />
                <div className="text-sm text-[#7a7570]">Opponent is thinking...</div>
              </div>
            )}
          </div>

          <div className="bg-[#161618] border border-[#2a2a2f] rounded-2xl p-6">
            <div className="text-[0.75rem] uppercase tracking-wider text-[#7a7570] font-semibold mb-4">Line Progress</div>
            <div className="bg-[#1e1e21] rounded-full h-1.5 overflow-hidden mb-2">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: `${progressPct}%` }}
                className="h-full bg-gradient-to-r from-[#c9a84c] to-[#e8c97a] rounded-full"
              />
            </div>
            <div className="flex justify-between text-xs text-[#7a7570]">
              <span>Move {moveIndex} of {line.moves.length}</span>
              <span>{progressPct}%</span>
            </div>
          </div>

          <div className="bg-[#161618] border border-[#2a2a2f] rounded-2xl p-6">
            <div className="text-[0.75rem] uppercase tracking-wider text-[#7a7570] font-semibold mb-4">Moves Played</div>
            <div className="flex flex-col gap-1.5 max-h-[200px] overflow-y-auto pr-2">
              {Array.from({ length: Math.ceil(playedMoves.length / 2) }).map((_, i) => (
                <div key={i} className="flex gap-2 items-center text-sm">
                  <span className="text-[#7a7570] font-mono text-[0.78rem] min-w-[1.8rem]">{i + 1}.</span>
                  <span className="bg-[rgba(245,239,224,0.08)] text-[#f5efe0] px-2.5 py-1 rounded-md font-mono text-[0.82rem] flex-1">
                    {playedMoves[i * 2]?.san}
                  </span>
                  {playedMoves[i * 2 + 1] && (
                    <span className="bg-[rgba(122,117,112,0.12)] text-[#7a7570] px-2.5 py-1 rounded-md font-mono text-[0.82rem] flex-1">
                      {playedMoves[i * 2 + 1].san}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isComplete && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000] flex items-center justify-center p-6"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-[#161618] border border-[#c9a84c] rounded-[24px] p-12 text-center max-w-md"
            >
              <div className="text-6xl mb-4"><Trophy className="mx-auto text-[#c9a84c]" size={64} /></div>
              <div className="font-serif text-3xl text-[#c9a84c] mb-2">Line Complete!</div>
              <p className="text-[#7a7570] mb-8 leading-relaxed">You've completed this opening line. Great work! Keep practicing to build muscle memory.</p>
              <div className="flex gap-4 justify-center">
                <button onClick={resetLine} className="border border-[#2a2a2f] text-[#e8e2d5] px-6 py-2.5 rounded-lg hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all text-sm">
                  Practice Again
                </button>
                <button onClick={onBack} className="bg-[#c9a84c] text-[#0e0e0f] font-bold px-6 py-2.5 rounded-lg hover:bg-[#e8c97a] transition-all text-sm">
                  Try Another
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`toast fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#161618] border border-[#2a2a2f] rounded-xl px-6 py-3 text-sm z-[500] transition-all duration-300 ${toast ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} ${toast?.type === 'error' ? 'border-[#e05252] text-[#e05252]' : 'border-[#4caf7d] text-[#4caf7d]'}`}>
        {toast?.msg}
      </div>
    </div>
  );
};

export default function App() {
  const [view, setView] = useState<'landing' | 'line-selection' | 'trainer'>('landing');
  const [selectedOpening, setSelectedOpening] = useState<Opening | null>(null);
  const [selectedLine, setSelectedLine] = useState<Line | null>(null);

  const handleSelectOpening = (opening: Opening) => {
    setSelectedOpening(opening);
    if (opening.lines.length === 1) {
      setSelectedLine(opening.lines[0]);
      setView('trainer');
    } else {
      setView('line-selection');
    }
  };

  const handleSelectLine = (line: Line) => {
    setSelectedLine(line);
    setView('trainer');
  };

  return (
    <div className="min-h-screen bg-[#0e0e0f] text-[#e8e2d5] font-sans">
      {view === 'landing' && (
        <Landing onSelectOpening={handleSelectOpening} />
      )}

      {view === 'line-selection' && selectedOpening && (
        <div className="max-w-4xl mx-auto px-6 py-16">
          <button 
            onClick={() => setView('landing')}
            className="flex items-center gap-2 text-[#7a7570] hover:text-[#c9a84c] transition-colors mb-12 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Openings
          </button>

          <div className="flex items-center gap-6 mb-12">
            <div className="text-6xl">{selectedOpening.icon}</div>
            <div>
              <h1 className="font-serif text-4xl text-[#f5efe0] mb-2">{selectedOpening.name}</h1>
              <p className="text-[#7a7570]">{selectedOpening.desc}</p>
            </div>
          </div>

          <div className="grid gap-4">
            {selectedOpening.lines.map((line, idx) => (
              <motion.div
                key={line.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => handleSelectLine(line)}
                className="bg-[#161618] border border-[#2a2a2f] p-6 rounded-2xl cursor-pointer hover:border-[rgba(201,168,76,0.4)] group transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e1e21] flex items-center justify-center text-[#c9a84c] group-hover:bg-[#c9a84c] group-hover:text-[#0e0e0f] transition-colors">
                    <BookOpen size={18} />
                  </div>
                  <div>
                    <div className="font-serif text-lg text-[#f5efe0] group-hover:text-[#c9a84c] transition-colors">{line.name}</div>
                    <div className="text-xs text-[#7a7570] mt-1">{line.moves.length} book moves</div>
                  </div>
                </div>
                <ChevronRight size={20} className="text-[#2a2a2f] group-hover:text-[#c9a84c] group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {view === 'trainer' && selectedOpening && selectedLine && (
        <Trainer 
          opening={selectedOpening} 
          line={selectedLine} 
          onBack={() => setView(selectedOpening.lines.length > 1 ? 'line-selection' : 'landing')} 
        />
      )}
    </div>
  );
}
