
import React, { useState, useEffect } from 'react';
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
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { talkToPuppy } from './geminiService';
import { TokenomicItem, RoadmapStep, Message } from './types';

const TOKENOMICS: TokenomicItem[] = [
  { name: 'Liquidity Pool (Burned)', value: 80, color: '#fbbf24' },
  { name: 'Marketing & Barking', value: 10, color: '#f59e0b' },
  { name: 'Airdrops (Good Boys)', value: 5, color: '#ef4444' },
  { name: 'Team (Pup Snacks)', value: 5, color: '#dc2626' },
];

const ROADMAP: RoadmapStep[] = [
  { phase: 'Phase 1', title: 'The Whelp', description: 'Fair Launch on Raydium, DEX Screener trending, and first 1,000 holders.', status: 'completed' },
  { phase: 'Phase 2', title: 'The Zoomies', description: 'CoinGecko & CMC listings, influencer partnerships, and the Big Bark marketing campaign.', status: 'in-progress' },
  { phase: 'Phase 3', title: 'The Big Bark', description: 'Tier 1 CEX listings, $BARK NFT collection, and global barking awareness.', status: 'future' },
  { phase: 'Phase 4', title: 'Alpha Dog', description: 'Barking Puppy Metaverse, real-world dog charity donations, and moon landing.', status: 'future' },
];

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Woof! Arf! I am the Barking Puppy! Ask me anything about $BARK! 🐾' }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const userMsg = { role: 'user' as const, text: chatMessage };
    setMessages(prev => [...prev, userMsg]);
    setChatMessage('');
    setIsTyping(true);

    const response = await talkToPuppy(chatMessage);
    setMessages(prev => [...prev, { role: 'model' as const, text: response }]);
    setIsTyping(false);
  };

  const playBark = () => {
    // Simulated bark effect
    console.log("BARK! BARK!");
  };

  return (
    <div className="min-h-screen bg-[#0c0c0c] text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0c0c0c]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center">
                <Dog className="text-black" size={28} />
              </div>
              <span className="text-2xl font-bold bungee tracking-wider text-amber-500">BARK</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <a href="#about" className="hover:text-amber-500 transition-colors">About</a>
                <a href="#tokenomics" className="hover:text-amber-500 transition-colors">Tokenomics</a>
                <a href="#roadmap" className="hover:text-amber-500 transition-colors">Roadmap</a>
                <a href="#howtobuy" className="hover:text-amber-500 transition-colors">How to Buy</a>
                <a href="https://t.me/" target="_blank" className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold hover:bg-amber-400 transition-all flex items-center gap-2">
                  <Send size={18} /> Join Telegram
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#161616] px-4 pt-2 pb-6 space-y-4 border-b border-white/10">
            <a href="#about" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#tokenomics" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Tokenomics</a>
            <a href="#roadmap" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>Roadmap</a>
            <a href="#howtobuy" className="block px-3 py-2 text-lg" onClick={() => setIsMenuOpen(false)}>How to Buy</a>
            <a href="https://t.me/" className="block bg-amber-500 text-black px-4 py-3 rounded-full font-bold text-center">Join Telegram</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-amber-500/20 rounded-full blur-[120px] -z-10"></div>
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-red-500/10 rounded-full blur-[120px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="floating mb-8 relative">
            <img 
              src="https://picsum.photos/id/237/600/600" 
              alt="Barking Puppy Mascot" 
              className="w-48 h-48 md:w-64 md:h-64 rounded-full border-8 border-amber-500 shadow-[0_0_50px_rgba(251,191,36,0.5)] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-red-500 p-4 rounded-full shadow-lg bark-button cursor-pointer" onClick={playBark}>
              <Volume2 size={32} />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-8xl font-bold mb-6 gradient-text uppercase tracking-tighter leading-none">
            The Loudest Meme <br /> on Solana
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-10">
            Stop being a quiet cat. Be a loud puppy! $BARK is the energy of the zoomies turned into a decentralized currency.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center px-4">
            <button className="bg-amber-500 text-black px-10 py-5 rounded-full text-2xl font-bold hover:bg-amber-400 transition-all flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(251,191,36,0.3)]">
              BUY $BARK NOW <Rocket size={24} />
            </button>
            <div className="flex items-center bg-white/5 border border-white/10 rounded-full px-6 py-4 justify-between gap-4">
              <code className="text-amber-500 font-mono text-sm md:text-base">0xBARK...PUppY777</code>
              <button className="hover:text-amber-500 transition-colors">Copy</button>
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
             <div className="flex items-center gap-2"><img src="https://cryptologos.cc/logos/solana-sol-logo.png" className="w-8 h-8" alt="Solana" /><span className="font-bold">SOLANA</span></div>
             <div className="flex items-center gap-2 text-xl font-bold italic tracking-tighter">DEXSCREENER</div>
             <div className="flex items-center gap-2 text-xl font-bold">COINGECKO</div>
             <div className="flex items-center gap-2 text-xl font-bold">RAYDIUM</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 uppercase tracking-tight">The <span className="text-amber-500">Bark</span> Story</h2>
            <div className="space-y-6 text-lg text-gray-300">
              <p>Every dog has its day, but Barking Puppy has its own decade! Born from a viral meme of a pup that wouldn't stop screaming at its own shadow, $BARK is more than a coin; it's a movement.</p>
              <p>We're here to prove that high energy, a great community, and a lot of barking can overcome even the grumpiest of bear markets.</p>
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="p-6 bg-black rounded-2xl border border-amber-500/20">
                  <TrendingUp className="text-amber-500 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">High Hype</h3>
                  <p className="text-sm text-gray-400">Zero tolerance for boring vibes. We keep the barking constant.</p>
                </div>
                <div className="p-6 bg-black rounded-2xl border border-red-500/20">
                  <ShieldCheck className="text-red-500 mb-4" size={32} />
                  <h3 className="text-xl font-bold mb-2">Safe Paws</h3>
                  <p className="text-sm text-gray-400">LP Burned, Ownership Renounced. Secure like a dog cage.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-amber-500 rounded-[40px] rotate-3 -z-10 opacity-20"></div>
            <img 
              src="https://picsum.photos/id/1025/800/800" 
              className="rounded-[40px] shadow-2xl grayscale-0 hover:grayscale transition-all duration-500" 
              alt="Puppy about" 
            />
          </div>
        </div>
      </section>

      {/* Tokenomics */}
      <section id="tokenomics" className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">Puppynomics</h2>
            <p className="text-xl text-gray-400">A fair supply for the fairest boys in crypto.</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={TOKENOMICS}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={150}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {TOKENOMICS.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#161616', border: '1px solid #333', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="space-y-6">
              {TOKENOMICS.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-amber-500/50 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-xl font-bold">{item.name}</span>
                  </div>
                  <span className="text-2xl font-bold text-amber-500">{item.value}%</span>
                </div>
              ))}
              <div className="p-8 bg-amber-500 text-black rounded-3xl mt-8">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="uppercase font-bold text-xs mb-1 opacity-70">Total Supply</p>
                    <h4 className="text-4xl font-bold">1,000,000,000</h4>
                    <p className="text-lg font-bold mt-2">$BARK Tokens</p>
                  </div>
                  <Zap size={64} className="opacity-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="py-24 bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-4">The Puppy Path</h2>
            <p className="text-xl text-gray-400">How we conquer the dog world.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ROADMAP.map((step, idx) => (
              <div key={idx} className={`relative p-8 rounded-3xl border ${step.status === 'completed' ? 'border-amber-500 bg-amber-500/10' : 'border-white/10 bg-black/50'} flex flex-col h-full`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${step.status === 'completed' ? 'bg-amber-500 text-black' : 'bg-white/10 text-white'}`}>
                  {step.status === 'completed' ? <ShieldCheck /> : idx + 1}
                </div>
                <p className="text-amber-500 font-bold mb-2">{step.phase}</p>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 flex-grow">{step.description}</p>
                {step.status === 'in-progress' && (
                  <div className="mt-6 flex items-center gap-2">
                    <div className="flex-grow h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="w-2/3 h-full bg-amber-500 animate-pulse"></div>
                    </div>
                    <span className="text-xs font-bold text-amber-500 uppercase">Live</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Talk to the Puppy AI Chat */}
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-[#161616] rounded-[40px] border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-8 border-b border-white/10 bg-amber-500 text-black flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                <Dog size={24} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Barking Puppy Bot</h3>
                <p className="text-xs uppercase font-bold tracking-widest opacity-70">Powered by Gemini AI</p>
              </div>
            </div>
            <div className="hidden sm:flex gap-2">
              <span className="px-3 py-1 bg-black/10 rounded-full text-xs font-bold">Barking Engine v3.0</span>
            </div>
          </div>
          
          <div className="h-[450px] overflow-y-auto p-8 space-y-4 bg-black/20">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-3xl ${msg.role === 'user' ? 'bg-amber-500 text-black rounded-tr-none' : 'bg-white/5 border border-white/10 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-4 rounded-3xl rounded-tl-none animate-pulse text-gray-500 italic">
                  Puppy is barking...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="p-6 bg-black flex gap-4">
            <input 
              type="text" 
              value={chatMessage}
              onChange={(e) => setChatMessage(e.target.value)}
              placeholder="Type a message to the puppy..."
              className="flex-grow bg-white/5 border border-white/10 rounded-full px-8 py-4 outline-none focus:border-amber-500 transition-all"
            />
            <button type="submit" className="bg-amber-500 text-black p-4 rounded-full hover:bg-amber-400 transition-all flex items-center justify-center">
              <Send size={24} />
            </button>
          </form>
        </div>
      </section>

      {/* How To Buy */}
      <section id="howtobuy" className="py-24 bg-amber-500 text-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-bold uppercase text-center mb-16">How to Adopt $BARK</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: <ShieldCheck size={48} />, title: "Create a Wallet", text: "Download Phantom or your wallet of choice from the app store or google play store for free." },
              { icon: <TrendingUp size={48} />, title: "Get Some SOL", text: "Have SOL in your wallet to switch to $BARK. If you don't have any SOL, you can buy on an exchange." },
              { icon: <Dog size={48} />, title: "Go to Raydium", text: "Connect to Raydium, paste the $BARK address, and confirm. Bark loud when you're done!" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-3xl font-bold mb-4 italic uppercase">{item.title}</h3>
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
            <Dog className="text-amber-500" size={40} />
            <span className="text-3xl font-bold bungee text-amber-500">BARK</span>
          </div>
          
          <div className="flex gap-8">
            <a href="https://twitter.com" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <Twitter size={32} />
            </a>
            <a href="https://t.me" target="_blank" className="text-gray-400 hover:text-white transition-colors">
              <MessageCircle size={32} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <ExternalLink size={32} />
            </a>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">© 2024 Barking Puppy. Built for the good boys.</p>
            <p className="text-gray-700 text-[10px] mt-2 max-w-xs">Disclaimer: $BARK is a meme coin with no intrinsic value. It's for entertainment and barking purposes only. Don't bark more than you can afford to lose.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
