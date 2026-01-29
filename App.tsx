import React, { useState } from 'react';
import {
  Dog,
  MessageCircle,
  Twitter,
  Send,
  TrendingUp,
  ShieldCheck,
  Flame,
  Rocket,
  Menu,
  X,
  ExternalLink
} from 'lucide-react';
import { TokenomicItem, RoadmapStep } from './types';

const TOKENOMICS: TokenomicItem[] = [
  { name: 'Liquidity Pool (Burned)', value: 100, color: '#111111' },
  { name: 'Marketing Wallet', value: 1, color: '#e60012' },
];

const ROADMAP: RoadmapStep[] = [
  {
    phase: 'Signal 01',
    title: 'The speculation',
    description: 'Before we Barked, there was simply one dev alone eating popcorn, we did not know what he meant, Hours later @BPuppy80020 posted exactly that.',
    status: 'completed',
    imageSrc: '/com.png',
    imageAlt: 'Community',
    imageSrcSecondary: '/pop.png',
    imageAltSecondary: 'Pop',
    imageText: 'Could it be?'
  },
  {
    phase: 'Signal 02',
    title: 'The Conviction',
    description: 'Through FUD, Pumps, Dumps, ATH whatever the price is, The dev buys and burns with over 4% of the supply already gone forever, its not about the money.',
    status: 'future',
    imageSrc: '/tx.png',
    imageAlt: 'TX',
    imageSrcSecondary: '/h.png',
    imageAltSecondary: 'H',
    imageText: (
      <a
        href="https://solscan.io/account/AfxRMLKoc3Y6rGwG7Ry6DspGag6g6w8g5qTKrPSVZ7i2?page=5&page_size=40#activities"
        target="_blank"
        rel="noreferrer"
        className="text-red-500 hover:text-red-400 transition-colors"
      >
        Dev Buys
      </a>
    )
  },
  {
    phase: 'Signal 03',
    title: 'The Dev? ',
    description: 'A community memeber lost his tokens, the dev in pumpfun chat sent him some (based) then @kevinlegend14 liked his comment thanking him for the $BP on instgram. Are you here Kev?',
    status: 'future',
    imageSrc: '/kk.png',
    imageAlt: 'KK',
    imageSrcSecondary: '/air.png',
    imageAltSecondary: 'Air',
    imageText: (
      <>
        Follow <a
          href="https://www.instagram.com/kevinlegend14/tagged/?hl=en"
          target="_blank"
          rel="noreferrer"
          className="text-red-500 hover:text-red-400 transition-colors"
        >@kevinlegend14</a>
      </>
    )
  },
  {
    phase: 'Signal 04',
    title: 'The Confirmation',
    description: 'Community made meme is posted, many hours later @BPuppy80020 posts the same meme aligning speculations.',
    status: 'future',
    imageSrc: '/lfg.png',
    imageAlt: 'LFG',
    imageSrcSecondary: '/proof.png .png',
    imageAltSecondary: 'Proof',
    imageText: 'The internet is not ready for $BP.'
  },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pupilOffset, setPupilOffset] = useState({ x: 0, y: 0 });
  const [hoverImage, setHoverImage] = useState<{ src: string; alt: string } | null>(null);
  const CONTRACT_ADDRESS = '3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump';

  const handleEyeMove = (
    event: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement> | React.PointerEvent<HTMLDivElement>
  ) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const point = 'touches' in event && event.touches.length
      ? event.touches[0]
      : 'changedTouches' in event && event.changedTouches.length
        ? event.changedTouches[0]
        : event;
    const relX = (point.clientX - rect.left) / rect.width - 0.5;
    const relY = (point.clientY - rect.top) / rect.height - 0.5;
    const maxOffset = 12;
    setPupilOffset({
      x: Math.max(Math.min(relX * maxOffset * 2, maxOffset), -maxOffset),
      y: Math.max(Math.min(relY * maxOffset * 2, maxOffset), -maxOffset),
    });
  };

  const resetEyes = () => {
    setPupilOffset({ x: 0, y: 0 });
  };

  const openHoverImage = (src?: string, alt?: string) => {
    if (!src) return;
    setHoverImage({ src, alt: alt ?? '' });
  };

  const closeHoverImage = () => {
    setHoverImage(null);
  };

  const copyContractAddress = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(CONTRACT_ADDRESS);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {hoverImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          onMouseLeave={closeHoverImage}
          onClick={closeHoverImage}
        >
          <img
            src={hoverImage.src}
            alt={hoverImage.alt}
            className="max-h-[80vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
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
        <div className="absolute inset-0 bg-black/92 sm:bg-black/80 md:bg-black/70"></div>
        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <div className="floating mb-8 relative fade-up">
              <img
                src="/laser-eyes%20(3).png"
                alt="Barking Puppy Mascot"
                className="h-40 w-40 md:h-52 md:w-52 object-contain -rotate-6 hover-lift"
              />
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
                { title: 'Diamond Paws', text: 'Hodl, Bark break the internet.' },
                { title: 'Stonks Mode', text: 'I LIKE THE COIN.' },
                { title: 'BARK BARK', text: 'We bark when the bell rings.' },
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
              <span>HODL THE BP</span>
              <span className="text-red-500">$BP</span>
              <span>TO THE MOON</span>
              <span>BARK BARK</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-24 border-y border-white/10 bg-white/5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="flyer slow" style={{ top: '6%', left: '-28%' }}>
            <img src="/download.png" alt="" className="h-8 w-8 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '12%', left: '-36%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '18%', left: '-24%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-3" style={{ top: '24%', left: '-32%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-1" style={{ top: '30%', left: '-26%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-2" style={{ top: '36%', left: '-38%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-3" style={{ top: '42%', left: '-30%' }}>
            <img src="/download.png" alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '48%', left: '-34%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '54%', left: '-26%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-3" style={{ top: '60%', left: '-40%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-1" style={{ top: '66%', left: '-28%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-2" style={{ top: '72%', left: '-36%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-3" style={{ top: '78%', left: '-30%' }}>
            <img src="/download.png" alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '84%', left: '-34%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '90%', left: '-38%' }}>
            <img src="/download.png" alt="" className="h-8 w-8 object-contain" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center relative">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold wordmark uppercase tracking-tight">
              The <span className="text-red-600">Bark</span> Story
            </h2>
            <div className="mt-6 space-y-6 text-lg text-gray-300">
              <p>Barking Puppy is taking over from here. No one knows whats coming next, the thesis? GILLIONS. Our community embraces the return of roaring kitty.</p>
              <p>The breadcrumbs left by @BPuppy80020 tell us we are in the right place, $BP is the next $GME. Just enter the rabbithole and you'll find our conviction.</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/70 p-4 hover-lift">
                  <p className="text-xs uppercase tracking-[0.3em] text-red-500">Pumpfun Deployment</p>
                  <p className="mt-2 text-sm text-gray-300">$BP was minted on pump.fun and sat quietly for 9 days, no insiders, no artifical volume just waiting to be found.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/70 p-4 hover-lift">
                  <p className="text-xs uppercase tracking-[0.3em] text-red-500">@BPuppy80020</p>
                  <p className="mt-2 text-sm text-gray-300">The account was made shortly after token deployment, leaving further clues to follow.</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-black rounded-2xl border border-white/10 hover-lift">
                  <TrendingUp className="text-red-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">The First Post</h3>
                  <p className="text-sm text-gray-400">The first post from @BPuppy80020 egnited speculation around the $BP chart, and a cult quickly formed. </p>
                </div>
                <div className="p-6 bg-black rounded-2xl border border-white/10 hover-lift">
                  <ShieldCheck className="text-red-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">The Clues</h3>
                  <p className="text-sm text-gray-400">In true Roaring Kitty style many clues are actively being left, $BP community has decoded the timeline. </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[40px] bg-red-600/20 blur-2xl -z-10"></div>
            <div className="relative mx-auto w-full max-w-md">
              <div
                className="absolute inset-[-50%] z-20"
                onMouseMove={handleEyeMove}
                onMouseLeave={resetEyes}
                onTouchStart={handleEyeMove}
                onTouchMove={handleEyeMove}
                onTouchEnd={resetEyes}
                onPointerMove={handleEyeMove}
                onPointerLeave={resetEyes}
              />
              <div className="absolute inset-0 z-0">
                <div className="eye-socket" style={{ left: '31%', top: '40%' }}>
                  <span
                    className="eye-pupil"
                    style={{ transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))` }}
                  />
                </div>
                <div className="eye-socket" style={{ left: '58%', top: '40%' }}>
                  <span
                    className="eye-pupil"
                    style={{ transform: `translate(calc(-50% + ${pupilOffset.x}px), calc(-50% + ${pupilOffset.y}px))` }}
                  />
                </div>
              </div>
              <img
                src="/mask.png"
                className="relative z-10 rounded-[40px] shadow-2xl"
                alt="Puppy about"
              />
            </div>
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
                      className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 w-40 sm:w-52 md:w-64 opacity-20 hidden sm:block"
                    />
                  )}
                  {idx === 1 && (
                    <img
                      src="/kev.png"
                      alt="Kev"
                      className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 w-20 sm:w-28 md:w-36 opacity-20 hidden sm:block"
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
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
                  <div>
                    <p className="uppercase font-bold text-xs mb-1 opacity-70">Total Supply</p>
                    <div className="relative inline-block">
                      <h4 className="text-4xl font-bold">1,000,000,000</h4>
                      <span className="pointer-events-none absolute left-[-6%] top-1/2 h-3 w-[112%] -translate-y-1/2 -rotate-6 rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-700 shadow-[0_4px_10px_rgba(220,38,38,0.45)]"></span>
                      <span className="pointer-events-none absolute left-[-6%] top-1/2 h-3 w-[112%] -translate-y-1/2 -rotate-6 rounded-full border border-red-900/50"></span>
                    </div>
                    <p className="text-lg font-bold mt-2">$BP Tokens</p>
                    <p className="mt-3 text-sm font-semibold text-red-700">Supply is actively being burned from the devs&apos; buybacks.</p>
                  </div>
                  <a
                    href="https://solscan.io/token/3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-red-700 hover:text-red-800 transition-colors"
                  >
                    <Flame size={28} className="opacity-80" />
                    Check total supply here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="relative py-24 bg-white/5 overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="flyer slow" style={{ top: '8%', left: '-30%' }}>
            <img src="/download.png" alt="" className="h-8 w-8 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '14%', left: '-38%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '20%', left: '-26%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-3" style={{ top: '26%', left: '-34%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-1" style={{ top: '32%', left: '-28%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-2" style={{ top: '38%', left: '-40%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-3" style={{ top: '44%', left: '-32%' }}>
            <img src="/download.png" alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '50%', left: '-36%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '56%', left: '-28%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-3" style={{ top: '62%', left: '-42%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-1" style={{ top: '68%', left: '-30%' }}>
            <img src="/download.png" alt="" className="h-9 w-9 object-contain" />
          </div>
          <div className="flyer fast delay-2" style={{ top: '74%', left: '-38%' }}>
            <img src="/download.png" alt="" className="h-7 w-7 object-contain" />
          </div>
          <div className="flyer slow delay-3" style={{ top: '80%', left: '-34%' }}>
            <img src="/download.png" alt="" className="h-10 w-10 object-contain" />
          </div>
          <div className="flyer fast delay-1" style={{ top: '86%', left: '-40%' }}>
            <img src="/download.png" alt="" className="h-6 w-6 object-contain" />
          </div>
          <div className="flyer slow delay-2" style={{ top: '92%', left: '-36%' }}>
            <img src="/download.png" alt="" className="h-8 w-8 object-contain" />
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold uppercase wordmark mb-4">The Puppy Pack</h2>
            <p className="text-xl text-gray-400">There will be signs.</p>
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
                {step.imageSrc && (
                  <div className="mt-6 flex flex-col items-center text-center">
                    <div className="flex items-center justify-center gap-4">
                      <img
                        src={step.imageSrc}
                        alt={step.imageAlt ?? ''}
                        className="h-24 w-24 object-contain transition-transform duration-200 hover:scale-110 cursor-zoom-in"
                        onMouseEnter={() => openHoverImage(step.imageSrc, step.imageAlt)}
                        onClick={() => openHoverImage(step.imageSrc, step.imageAlt)}
                      />
                      {step.imageSrcSecondary && (
                        <img
                          src={step.imageSrcSecondary}
                          alt={step.imageAltSecondary ?? ''}
                          className="h-24 w-24 object-contain transition-transform duration-200 hover:scale-110 cursor-zoom-in"
                          onMouseEnter={() => openHoverImage(step.imageSrcSecondary, step.imageAltSecondary)}
                          onClick={() => openHoverImage(step.imageSrcSecondary, step.imageAltSecondary)}
                        />
                      )}
                    </div>
                    {step.imageText && (
                      <p className="mt-3 text-sm text-gray-400">{step.imageText}</p>
                    )}
                  </div>
                )}
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
        <div className="relative max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center mb-16 wordmark">How to Adopt $BP</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={48} />, title: 'Visit pump.fun', text: 'Open the $BP page on pump.fun and review the details.', link: 'https://pump.fun/coin/3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump' },
              { icon: <TrendingUp size={48} />, title: 'INSTALL WALLET', text: 'Install a wallet for storing your tokens, such as phantom', link: 'https://phantom.com/download' },
              { icon: <Dog size={48} />, title: 'Buy $BP', text: 'Buy $BP tokens on pump.fun, Jupiter, Phantom, MEXC, or your favorite DEX.', link: 'https://www.mexc.com/en-GB/exchange/BP_USDT' }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 text-red-600">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-4 uppercase wordmark">{item.title}</h3>
                <p className="text-lg font-medium opacity-80">
                  {item.title === 'Visit pump.fun' ? (
                    <>
                      Open the $BP page on pump.<a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500 hover:text-red-400 transition-colors"
                      >fun</a> and review the details.
                    </>
                  ) : item.title === 'INSTALL WALLET' ? (
                    <>
                      Install a wallet such as <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-500 hover:text-red-400 transition-colors"
                      >phantom</a>, buy Solana and enter the{' '}
                      <button
                        type="button"
                        onClick={copyContractAddress}
                        className="text-red-500 hover:text-red-400 transition-colors underline underline-offset-4"
                      >
                        CA
                      </button>.
                    </>
                  ) : (
                    item.title === 'Buy $BP' ? (
                      <>
                        Buy $BP tokens on pump.fun, Jupiter, Phantom, <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-red-500 hover:text-red-400 transition-colors"
                        >MEXC</a>, or your favorite DEX.
                      </>
                    ) : item.text
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10">
          <div className="flex items-center gap-2 md:w-1/3 md:justify-start">
            <img src="/laser-eyes%20(3).png" alt="Barking Puppy" className="h-10 w-10 object-contain -rotate-6" />
            <span className="text-3xl font-bold wordmark tracking-[0.04em]">
              <span className="text-white">Barking</span>
              <span className="text-red-600">Puppy</span>
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 md:w-1/3">
            <div className="flex gap-8">
            <a href="https://x.com/BPuppy80020" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={32} />
            </a>
            <a href="https://x.com/i/communities/2015764395733708955" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={32} />
            </a>
            <a href="https://pump.fun/coin/3B1ijcocM5EDga6XxQ7JLW7weocQPWWjuhBYG8Vepump" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <TrendingUp size={32} />
            </a>
            </div>
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.2em] text-gray-500">Community made</p>
              <p className="text-sm text-gray-400">
                If you like the site, leave a tip
                <span className="mx-2 text-gray-600">•</span>
                <span className="font-mono text-xs text-gray-500 break-all">FY3vRfUKVecZ2XpJei5vAZ4nFMoiqzKU6gcTna6g2EWs</span>
              </p>
            </div>
          </div>

          <div className="text-center md:text-right md:w-1/3 md:justify-end">
            <p className="text-gray-500 text-sm">© 2026 Barking Puppy. Built for the good boys.</p>
            <p className="text-gray-700 text-[10px] mt-2 max-w-xs">Built by the community, We are not responsible for financial losses, NFA. Memecoin. Do your own research.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
