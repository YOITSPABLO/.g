import React, { useState } from 'react';
import {
  Dog,
  MessageCircle,
  Twitter,
  Send,
  TrendingUp,
  ShieldCheck,
  Zap,
  Rocket,
  Menu,
  X,
  Volume2,
  ExternalLink
} from 'lucide-react';
import { TokenomicItem, RoadmapStep } from './types';

const TOKENOMICS: TokenomicItem[] = [
  { name: 'Liquidity Pool (Burned)', value: 100, color: '#111111' },
  { name: 'Marketing Wallet', value: 1, color: '#e60012' },
];

const ROADMAP: RoadmapStep[] = [
  { phase: 'Phase 1', title: 'The Whelp', description: 'Fair launch, first community wave, and early holders.', status: 'completed' },
  { phase: 'Phase 2', title: 'The Zoomies', description: 'Listings, creator collabs, and the Big Bark campaign.', status: 'in-progress' },
  { phase: 'Phase 3', title: 'The Big Bark', description: 'More reach, more lore, and pack partnerships.', status: 'future' },
  { phase: 'Phase 4', title: 'Alpha Dog', description: 'Events, merch drops, and community-led activations.', status: 'future' },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const playBark = () => {
    console.log('BARK! BARK!');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center">
              <img src="/laser-eyes%20(3).png" alt="Barking Puppy" className="h-8 w-8 object-contain -rotate-6" />
            </div>
            <span className="text-2xl font-bold wordmark tracking-[0.04em]">
              <span className="text-white">Barking</span>
              <span className="text-red-600">Puppy</span>
            </span>
          </div>

          <div className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-[0.2em] md:flex">
            <a href="#about" className="transition-colors hover:text-red-600">About</a>
            <a href="#tokenomics" className="transition-colors hover:text-red-600">Tokenomics</a>
            <a href="#roadmap" className="transition-colors hover:text-red-600">Roadmap</a>
            <a href="#howtobuy" className="transition-colors hover:text-red-600">How to Buy</a>
            <a href="https://x.com/i/communities/2015764395733708955" target="_blank" rel="noreferrer" className="rounded-full bg-red-600 px-6 py-2 text-black transition hover:bg-red-500">
              <span className="flex items-center gap-2"><Send size={16} /> Join X</span>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-black px-4 pb-6 pt-3 space-y-3">
            <a href="#about" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#tokenomics" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
            <a href="#roadmap" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
            <a href="#howtobuy" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>How to Buy</a>
            <a href="https://x.com/i/communities/2015764395733708955" className="block rounded-full bg-red-600 px-4 py-3 text-center font-semibold text-black">Join X</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/her.png')" }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="floating mb-8 relative fade-up">
              <img
                src="/laser-eyes%20(3).png"
                alt="Barking Puppy Mascot"
                className="h-40 w-40 md:h-52 md:w-52 object-contain -rotate-6 hover-lift"
              />
              <div className="absolute -bottom-4 -right-4 rounded-full bg-red-600 p-4 shadow-lg bark-button cursor-pointer" onClick={playBark}>
                <Volume2 size={26} />
              </div>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold wordmark tracking-[0.04em] leading-none text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.85)] fade-up delay-1">
              Barking<span className="text-red-600">Puppy</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-200 drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)] fade-up delay-2">
              <span className="block">The underdog howls at the moon.</span>
              <span className="block">bark bark</span>
              <span className="block emoji-muted">🍻🔓🇺🇸🐱🤖😹🐶</span>
            </p>

            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full justify-center px-4 fade-up delay-3">
              <a
                href="https://pump.fun/coin/3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-red-600 text-black px-8 md:px-10 py-4 md:py-5 rounded-full text-lg md:text-2xl font-bold hover:bg-red-500 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(230,0,18,0.35)] pulse-glow btn-press"
              >
                BUY $BP NOW <Rocket size={22} />
              </a>
              <a
                href="https://dexscreener.com/solana/gywaqp8lb3vqg7q2c58zguevyff8hyogg8besa1fncpz"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/10 text-white px-6 md:px-8 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-3 border border-white/20 btn-press glow-border"
              >
                DexScreener Chart <ExternalLink size={18} />
              </a>
              <a
                href="https://jup.ag/tokens/3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-white/10 text-white px-6 md:px-8 py-4 md:py-5 rounded-full text-base md:text-lg font-semibold hover:bg-white/20 transition-all flex items-center justify-center gap-3 border border-white/20 btn-press glow-border"
              >
                Trade on Jupiter <ExternalLink size={18} />
              </a>
              <button
                type="button"
                onClick={() => navigator.clipboard?.writeText('3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump')}
                className="w-full sm:w-auto text-left text-red-500 font-mono text-xs sm:text-sm md:text-base break-all hover:text-red-400 transition-colors"
              >
                CA: 3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump
              </button>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 w-full max-w-4xl fade-up delay-4">
              {[
                { title: 'Diamond Paws', text: 'Hold the Bark. Stay with the pack.' },
                { title: 'Stonks Mode', text: 'Charts up. Energy louder.' },
                { title: 'Rocket Ready', text: 'We bark when the bell rings.' },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border border-white/10 bg-black/70 p-4 text-left shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover-lift">
                  <p className="text-xs uppercase tracking-[0.25em] text-red-500">{item.title}</p>
                  <p className="mt-2 text-sm text-gray-300">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Strip */}
      <section className="border-y border-white/10 bg-black/90 py-3 overflow-hidden">
        <div className="ticker gap-10 pr-10 text-xs uppercase tracking-[0.4em] text-gray-400">
          {Array.from({ length: 2 }).map((_, idx) => (
            <div key={idx} className="flex gap-10">
              <span className="text-red-500">WSB</span>
              <span>STONKS</span>
              <span>DIAMOND PAWS</span>
              <span>HOLD THE BARK</span>
              <span className="text-red-500">$BP</span>
              <span>TO THE MOON</span>
              <span>NOISE OVER FEAR</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 border-y border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold wordmark uppercase tracking-tight">
              The <span className="text-red-600">Bark</span> Story
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-300">
              <p>Every dog has its day, but Barking Puppy has its own decade. Born from meme energy and a relentless community, $BP is more than a coin; it is a movement.</p>
              <p>We are here to keep the bark loud, the design sharp, and the pack growing.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/70 p-4 hover-lift">
                  <p className="text-xs uppercase tracking-[0.3em] text-red-500">WSB Vibe</p>
                  <p className="mt-2 text-sm text-gray-300">High conviction, high culture. Keep the bark loud.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/70 p-4 hover-lift">
                  <p className="text-xs uppercase tracking-[0.3em] text-red-500">Stonks Energy</p>
                  <p className="mt-2 text-sm text-gray-300">Bullish visuals with a GameStop color core.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-black rounded-2xl border border-white/10 hover-lift">
                  <TrendingUp className="text-red-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">High Hype</h3>
                  <p className="text-sm text-gray-400">Zero tolerance for boring vibes. The bark stays constant.</p>
                </div>
                <div className="p-6 bg-black rounded-2xl border border-white/10 hover-lift">
                  <ShieldCheck className="text-red-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Safe Paws</h3>
                  <p className="text-sm text-gray-400">LP burned, ownership renounced. Built to last.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-red-600/20 blur-2xl -z-10"></div>
            <img
              src="/mask.png"
              className="rounded-[40px] shadow-2xl"
              alt="Puppy about"
            />
          </div>
        </div>
      </section>
      {/* Tokenomics */}
      <section
        id="tokenomics"
        className="relative py-24 px-4 overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/gil.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/85"></div>
        <div className="max-w-7xl mx-auto">
          <div className="relative text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold uppercase wordmark">Puppynomics</h2>
            <a
              href="https://pump.fun/coin/3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump"
              target="_blank"
              rel="noreferrer"
              className="text-xl text-white hover:text-red-500 transition-colors"
            >
              Launched on <span className="text-red-600 pulse-glow">pump.fun</span>
            </a>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {TOKENOMICS.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between p-6 bg-black/70 rounded-2xl border border-white/20 hover:border-red-600/60 transition-all hover-lift overflow-hidden backdrop-blur-sm">
                  {idx === 0 && (
                    <img
                      src="/roaring.png"
                      alt="Roaring pup"
                      className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-64 opacity-20"
                    />
                  )}
                  {idx === 1 && (
                    <img
                      src="/kev.png"
                      alt="Kev"
                      className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-36 opacity-20"
                    />
                  )}
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                  {idx === 1 ? (
                    <a
                      href="https://pump.fun/profile/AfxRMLKoc3Y6rGwG7Ry6DspGag6g6w8g5qTKrPSVZ7i2?tab=coins"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl font-bold hover:text-red-500 transition-colors"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <span className="text-xl font-bold">{item.name}</span>
                  )}
                  </div>
                  <span className="relative z-10 text-2xl font-bold text-red-600">
                    {item.value}%{idx === 1 ? ' fee' : ''}
                  </span>
                </div>
              ))}
              <div className="relative z-10 p-8 bg-white text-black rounded-3xl mt-8 border border-black/20 shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_36px_rgba(255,255,255,0.22)] ring-2 ring-white/60">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="uppercase font-bold text-xs mb-1 opacity-70">Total Supply</p>
                    <h4 className="text-4xl font-bold">1,000,000,000</h4>
                    <p className="text-lg font-bold mt-2">$BP Tokens</p>
                  </div>
                  <Zap size={64} className="opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-24 bg-white/5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="flyer slow" style={{ top: '14%', left: '-32%' }}>
            <img src="/download.png" alt="" className="h-8 w-8 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '22%', left: '-40%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '30%', left: '-28%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-3" style={{ top: '38%', left: '-36%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-1" style={{ top: '46%', left: '-30%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-2" style={{ top: '54%', left: '-42%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-3" style={{ top: '62%', left: '-34%' }}>
            <img src="/download.png" alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '70%', left: '-38%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '78%', left: '-30%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast" style={{ top: '86%', left: '-44%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold uppercase wordmark mb-4">The Puppy Path</h2>
            <p className="text-xl text-gray-400">Built for momentum, driven by the pack.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROADMAP.map((step, idx) => (
              <div key={idx} className={`relative p-8 rounded-3xl border ${step.status === 'completed' ? 'border-red-600 bg-red-600/10' : 'border-white/10 bg-black/50'} flex flex-col h-full`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${step.status === 'completed' ? 'bg-red-600 text-black' : 'bg-white/10 text-white'}`}>
                  {step.status === 'completed' ? <ShieldCheck /> : idx + 1}
                </div>
                <p className="text-red-500 font-bold mb-2">{step.phase}</p>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 flex-grow">{step.description}</p>
                {step.status === 'in-progress' && (
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-red-600 animate-pulse"></div>
                    </div>
                    <span className="text-xs font-bold text-red-500 uppercase">Live</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Buy */}
      <section id="howtobuy" className="py-24 bg-white text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center mb-16 wordmark">How to Adopt $BP</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={48} />, title: 'Create a Wallet', text: 'Download Phantom or your wallet of choice from the app store for free.' },
              { icon: <TrendingUp size={48} />, title: 'Get Some SOL', text: 'Have SOL in your wallet to swap for $BP. If you do not have SOL, buy on an exchange.' },
              { icon: <Dog size={48} />, title: 'Go to Raydium', text: 'Connect to Raydium, paste the $BP address, and confirm.' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 text-red-600">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-4 uppercase wordmark">{item.title}</h3>
                <p className="text-lg font-medium opacity-80">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <img src="/laser-eyes%20(3).png" alt="Barking Puppy" className="h-10 w-10 object-contain -rotate-6" />
            <span className="text-3xl font-bold wordmark tracking-[0.04em]">
              <span className="text-white">Barking</span>
              <span className="text-red-600">Puppy</span>
            </span>
          </div>

          <div className="flex gap-8">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={32} />
            </a>
            <a href="https://t.me" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={32} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">© 2024 Barking Puppy. Built for the good boys.</p>
            <p className="text-gray-700 text-[10px] mt-2 max-w-xs">Disclaimer: $BP is a meme coin with no intrinsic value. It is for entertainment and barking purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
