import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PHRASE_QUESTIONS } from './data';
import { CheckCircle2, AlertCircle, ArrowRight, Trophy, Car, Music } from 'lucide-react';

interface PlayerState {
  score: number;
  revealedPieces: number[];
}

export default function PuzzleGame({ onBack }: { onBack: () => void }) {
  const [turn, setTurn] = useState<'gor' | 'gayane'>('gor');
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<'success' | 'error' | null>(null);
  
  const [gorState, setGorState] = useState<PlayerState>({ score: 0, revealedPieces: [] });
  const [gayaneState, setGayaneState] = useState<PlayerState>({ score: 0, revealedPieces: [] });
  
  const [winner, setWinner] = useState<'gor' | 'gayane' | null>(null);

  const current = PHRASE_QUESTIONS[index % PHRASE_QUESTIONS.length];
  const totalPieces = 12;

  const handleSelect = (opt: string) => {
    if (selected || winner) return;
    setSelected(opt);
    
    const isCorrect = opt.toLowerCase() === current.correctAnswer.toLowerCase();
    
    if (isCorrect) {
      setFeedback('success');
      if (turn === 'gor') {
        const nextPiece = gorState.revealedPieces.length;
        if (nextPiece < totalPieces) {
          const newPieces = [...gorState.revealedPieces, nextPiece];
          setGorState(prev => ({ ...prev, revealedPieces: newPieces }));
          if (newPieces.length === totalPieces) setWinner('gor');
        }
      } else {
        const nextPiece = gayaneState.revealedPieces.length;
        if (nextPiece < totalPieces) {
          const newPieces = [...gayaneState.revealedPieces, nextPiece];
          setGayaneState(prev => ({ ...prev, revealedPieces: newPieces }));
          if (newPieces.length === totalPieces) setWinner('gayane');
        }
      }
    } else {
      setFeedback('error');
    }
  };

  const handleNext = () => {
    setTurn(turn === 'gor' ? 'gayane' : 'gor');
    setIndex(prev => prev + 1);
    setSelected(null);
    setFeedback(null);
  };

  const gorPuzzle = "https://images.unsplash.com/photo-1592198084033-aade902d1aae?q=80&w=1200&auto=format&fit=crop"; // Vibrant Yellow Supercar (Gor)
  const gayanePuzzle = "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1200&auto=format&fit=crop"; // Elegant Dress (Gayane)

  return (
    <div className="max-w-[1600px] mx-auto py-8 px-4 space-y-12">
      <div className="text-center space-y-4">
        {winner ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block bg-amber-500 text-white px-12 py-8 rounded-[48px] shadow-2xl space-y-4"
          >
            <Trophy className="w-16 h-16 mx-auto" />
            <h2 className="text-5xl font-black uppercase italic">ՇՆՈՐՀԱՎՈՐՈՐՈ՜ՒՄ</h2>
            <p className="text-2xl font-bold tracking-widest">{winner === 'gor' ? 'ԳՈՌԸ' : 'ԳԱՅԱՆԵՆ'} ՀԱՂԹԵՑ:</p>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 bg-white text-amber-600 px-10 py-4 rounded-3xl font-black text-xl hover:scale-105 transition-all shadow-lg"
            >
              ԽԱՂԱԼ ՆՈՐԻՑ
            </button>
          </motion.div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-4xl font-black text-slate-800 uppercase italic tracking-tighter">ԻՍՊԱՆԵՐԵՆԻ ՄՐՑՈՒՅԹ</h2>
            <div className="flex items-center justify-center gap-6">
              <PlayerTag name="ԳՈՌ" active={turn === 'gor'} color="bg-blue-600" />
              <div className="text-slate-300 font-black italic text-2xl">VS</div>
              <PlayerTag name="ԳԱՅԱՆԵ" active={turn === 'gayane'} color="bg-pink-600" />
            </div>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-start">
        {/* Gor's Puzzle (LEFT) */}
        <div className="space-y-6 order-2 lg:order-1">
          <PuzzleBoard 
            name="ԳՈՌԻ ՓԱԶԼԸ" 
            image={gorPuzzle} 
            revealed={gorState.revealedPieces} 
            total={totalPieces} 
            icon={<Car />} 
            color="border-blue-500"
            active={turn === 'gor'}
          />
        </div>

        {/* Question Area (MIDDLE) */}
        <div className="order-1 lg:order-2">
          {!winner && (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`p-10 rounded-[56px] shadow-2xl border-4 relative overflow-hidden bg-white ${
                turn === 'gor' ? 'border-blue-200' : 'border-pink-200'
              }`}
            >
              <div className="space-y-10">
                <div className="text-center space-y-2">
                  <span className={`text-xs font-black uppercase tracking-[0.3em] px-4 py-1 rounded-full ${
                    turn === 'gor' ? 'bg-blue-100 text-blue-600' : 'bg-pink-100 text-pink-600'
                  }`}>
                    ՀԱՐՑ {index + 1}
                  </span>
                  <p className="text-2xl font-bold text-slate-400 italic">
                    {current.translation}
                  </p>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-tight text-center leading-tight min-h-[140px] flex items-center justify-center px-4">
                  {current.sentence.split('___').map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i === 0 && (
                        <span className={`inline-block min-w-[140px] border-b-8 mx-3 italic transition-all ${
                          selected 
                            ? feedback === 'success' ? 'text-emerald-500 border-emerald-200' : 'text-red-500 border-red-200'
                            : 'text-brand-blue border-slate-100'
                        }`}>
                          {selected || '?'}
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </h3>

                <div className="grid grid-cols-1 gap-4">
                  {current.options.map(opt => (
                    <button
                      key={opt}
                      onClick={() => handleSelect(opt)}
                      disabled={!!selected}
                      className={`group py-6 px-10 rounded-[32px] text-2xl font-black transition-all border-b-8 flex items-center justify-between ${
                        selected === opt
                          ? opt.toLowerCase() === current.correctAnswer.toLowerCase()
                            ? 'bg-emerald-500 border-emerald-700 text-white'
                            : 'bg-red-500 border-red-700 text-white'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:scale-[1.02] hover:border-brand-blue active:scale-95'
                      }`}
                    >
                      <span className="uppercase">{opt}</span>
                      {selected === opt && (opt.toLowerCase() === current.correctAnswer.toLowerCase() ? <CheckCircle2 size={32} /> : <AlertCircle size={32} />)}
                    </button>
                  ))}
                </div>

                {selected && (
                  <motion.button 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    onClick={handleNext}
                    className="w-full py-6 bg-slate-800 text-white rounded-[32px] font-black text-2xl flex items-center justify-center gap-4 hover:bg-slate-900 transition-all shadow-xl hover:scale-[1.02]"
                  >
                    ԱՌԱՋ <ArrowRight size={32} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Gayane's Puzzle (RIGHT) */}
        <div className="space-y-6 order-3">
          <PuzzleBoard 
            name="ԳԱՅԱՆԵԻ ՓԱԶԼԸ" 
            image={gayanePuzzle} 
            revealed={gayaneState.revealedPieces} 
            total={totalPieces} 
            icon={<Music />} 
            color="border-pink-500"
            active={turn === 'gayane'}
          />
        </div>
      </div>
    </div>
  );
}

function PlayerTag({ name, active, color }: { name: string, active: boolean, color: string }) {
  return (
    <div className={`px-10 py-3 rounded-full font-black text-2xl transition-all ${
      active ? `${color} text-white scale-110 shadow-2xl ring-4 ring-white` : 'bg-slate-100 text-slate-400'
    }`}>
      {name}
    </div>
  )
}

function PuzzleBoard({ name, image, revealed, total, icon, color, active }: { 
  name: string, image: string, revealed: number[], total: number, icon: React.ReactNode, color: string, active: boolean 
}) {
  const cols = 3;
  const rows = 4;
  
  return (
    <div className={`space-y-4 transition-all duration-500 ${active ? 'scale-105' : 'opacity-40 grayscale-[0.5]'}`}>
      <div className="flex items-center justify-between px-4">
        <h4 className="font-black text-slate-800 italic uppercase tracking-widest text-lg">{name}</h4>
        <div className="font-black text-slate-400 bg-white px-3 py-1 rounded-full shadow-sm">
          {revealed.length} / {total}
        </div>
      </div>
      <div className={`relative aspect-[3/4] w-full bg-slate-200 rounded-[40px] overflow-hidden shadow-2xl border-8 p-1.5 transition-all ${active ? color : 'border-white'}`}>
        <div className="grid grid-cols-3 grid-rows-4 w-full h-full gap-1">
          {[...Array(total)].map((_, i) => {
            const isRevealed = revealed.includes(i);
            const row = Math.floor(i / cols);
            const col = i % cols;
            
            return (
              <div key={i} className="relative overflow-hidden bg-slate-300/50">
                <AnimatePresence>
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, scale: 1.5, rotate: 10 }}
                      animate={{ opacity: 1, scale: 1, rotate: 0 }}
                      className="absolute inset-0 z-10"
                    >
                      <div 
                        className="absolute w-[300%] h-[400%]"
                        style={{
                          backgroundImage: `url(${image})`,
                          backgroundSize: '100% 100%',
                          left: `-${col * 100}%`,
                          top: `-${row * 100}%`,
                          backgroundRepeat: 'no-repeat'
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="absolute inset-0 flex items-center justify-center text-slate-400/30">
                  {React.cloneElement(icon as React.ReactElement<any>, { className: 'w-8 h-8' })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
