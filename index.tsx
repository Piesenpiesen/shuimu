import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { GoogleGenAI } from "@google/genai";

// --- Icons (SVG Components) ---
const ArrowRight = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);

const Sparkles = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M19 17v4"/><path d="M15 19h4"/></svg>
);

const Loader = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg className={`animate-spin ${className || ''}`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
);

// --- Components ---

// 1. Navigation
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-4 bg-black/50 backdrop-blur-md border-b border-white/5" : "py-8 bg-transparent"}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="serif text-2xl font-bold tracking-widest text-white">
          CENTI<span className="text-gray-500">-</span>TENKA
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-400">
          <a href="#philosophy" className="hover:text-white transition-colors">Philosophy</a>
          <a href="#gallery" className="hover:text-white transition-colors">Works</a>
          <a href="#oracle" className="hover:text-white transition-colors">Oracle</a>
        </div>
      </div>
    </nav>
  );
};

// 2. Hero Section
const Hero = () => {
  return (
    <header className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden">
      {/* Background Gradient Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-3xl opacity-50"></div>

      <div className="relative z-10 space-y-8 max-w-4xl">
        <p className="text-gray-400 uppercase tracking-[0.3em] text-sm fade-in-up">Digital Sanctuary</p>
        <h1 className="text-5xl md:text-8xl font-thin serif leading-tight text-white fade-in-up delay-100">
          Weaving Logic <br /> 
          <span className="italic text-gray-400">into</span> Aesthetics
        </h1>
        <p className="text-gray-400 max-w-lg mx-auto leading-relaxed fade-in-up delay-200">
          A minimalistic exploration of code, design, and artificial intelligence. 
          Where the digital void meets human creativity.
        </p>
        <div className="pt-8 fade-in-up delay-300">
           <a href="#oracle" className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 hover:border-white hover:bg-white hover:text-black transition-all duration-300 rounded-full uppercase text-xs tracking-widest group">
             Consult the Oracle <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </a>
        </div>
      </div>
    </header>
  );
};

// 3. Philosophy Section
const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-neutral-900/50">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
           <h2 className="serif text-4xl text-white">The Concept</h2>
           <div className="w-12 h-px bg-white/30"></div>
           <p className="text-gray-400 leading-loose">
             "Tenka" (天下) implies all under heaven. "Centi" represents a fraction. 
             This space is a fraction of the world, curated and distilled. We believe that UI is not just about buttons and inputs, 
             but about the silent rhythm between elements.
           </p>
           <p className="text-gray-400 leading-loose">
             Less noise. More signal. Every pixel serves a purpose, or it vanishes.
           </p>
        </div>
        <div className="relative h-96 w-full glass rounded-sm overflow-hidden flex items-center justify-center group">
           <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-white/5 opacity-50"></div>
           <Star />
           <span className="absolute bottom-4 right-4 text-xs text-gray-600 uppercase tracking-widest group-hover:text-white transition-colors">Figure 01. Essence</span>
        </div>
      </div>
    </section>
  );
};

// 4. Works / Gallery
const works = [
  { id: 1, title: "Mono", category: "Interface", color: "bg-stone-800" },
  { id: 2, title: "Nebula", category: "Experiential", color: "bg-slate-800" },
  { id: 3, title: "Void", category: "Architecture", color: "bg-zinc-800" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="serif text-4xl text-white">Selected Works</h2>
          <span className="text-xs text-gray-500 uppercase tracking-widest">2024 — 2025</span>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {works.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className={`h-[400px] w-full ${item.color} relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Abstract shape */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-white/10 rounded-full group-hover:scale-150 transition-transform duration-700 opacity-50"></div>
              </div>
              <div className="mt-6 flex justify-between items-center border-t border-white/10 pt-4">
                <h3 className="serif text-xl text-white group-hover:text-gray-300 transition-colors">{item.title}</h3>
                <span className="text-xs text-gray-500 uppercase tracking-widest">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// 5. AI Oracle Section (Gemini Integration)
const Oracle = () => {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askOracle = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse("");
    setError("");

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
      
      const result = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: input,
        config: {
          systemInstruction: "You are the 'Digital Oracle' of this website called Centi-Tenka. You speak in a poetic, slightly cryptic, but insightful manner. You value minimalism, aesthetics, and digital philosophy. Keep answers concise (under 80 words) and profound. Do not act like a robot, act like a curator of a digital museum.",
        }
      });
      
      setResponse(result.text || "The void is silent today.");
    } catch (e) {
      console.error(e);
      setError("The connection to the ether is disrupted. (Check API Key)");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="oracle" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neutral-900/80 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10 max-w-2xl text-center">
        <div className="mb-8 flex justify-center">
          <Sparkles className="text-white opacity-50 w-8 h-8" />
        </div>
        <h2 className="serif text-3xl md:text-5xl text-white mb-6">Ask the Oracle</h2>
        <p className="text-gray-400 mb-12 font-light">
          Query the machine spirit. Ask about design, life, or the code that binds us.
        </p>

        <div className="glass p-1 rounded-full flex items-center shadow-2xl shadow-purple-900/10 mb-8">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askOracle()}
            placeholder="What is the essence of beauty?"
            className="flex-1 bg-transparent border-none outline-none text-white px-6 py-3 placeholder-gray-600 font-light"
          />
          <button 
            onClick={askOracle}
            disabled={loading}
            className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center hover:bg-gray-200 transition-colors disabled:opacity-50"
          >
            {loading ? <Loader className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
          </button>
        </div>

        {/* Response Area */}
        <div className="min-h-[100px] flex items-center justify-center">
           {response && (
             <p className="text-xl serif text-gray-200 leading-relaxed italic animate-[fadeIn_1s_ease-in-out]">
               "{response}"
             </p>
           )}
           {error && <p className="text-red-400 text-sm">{error}</p>}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-12 border-t border-white/5 bg-black text-center">
    <div className="serif text-lg text-white mb-4">CENTI-TENKA</div>
    <p className="text-xs text-gray-600 uppercase tracking-widest">© 2025. Crafted by Gemini.</p>
  </footer>
);

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Philosophy />
      <Gallery />
      <Oracle />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);