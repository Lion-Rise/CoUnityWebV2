import { useState } from 'react';
import ImageSequence from '../ui/ImageSequence';

export default function Hero() {
    const [dnaLoaded, setDnaLoaded] = useState(false);

    return (
        <section id="hero" className="relative min-h-screen w-full bg-brand-black flex items-center pt-24 md:pt-32">

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Visual (Framed Tech Card - Rectangular) */}
                <div className="relative order-1 lg:order-1 flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-md aspect-video border border-brand-tahiti/30 bg-brand-black/50 rounded-lg overflow-hidden backdrop-blur-sm group">

                        {/* Tech Accents (Braded Framing) */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-tahiti to-brand-pink opacity-50"></div>

                        <div className="absolute top-3 left-4 flex space-x-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-silver/20"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-brand-silver/20"></div>
                        </div>

                        <div className="absolute top-3 right-4 font-mono text-[10px] text-brand-tahiti uppercase tracking-widest">
                            Sequence_01 // Active
                        </div>

                        {/* Corner Markers */}
                        <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-brand-white/20"></div>
                        <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-brand-white/20"></div>

                        {/* Animation */}
                        <ImageSequence
                            folderPath="/assets/animations/dna"
                            frameCount={240}
                            fileNamePrefix="frame_"
                            onLoadComplete={() => setDnaLoaded(true)}
                            className={`w-full h-full object-contain p-4 transition-opacity duration-1000 ${dnaLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />

                        {/* Loading State */}
                        {!dnaLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-brand-dark-tide border-t-brand-tahiti rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>
                </div>

                {/* RIGHT: Typography */}
                <div className="z-20 text-left order-2 lg:order-2 lg:pl-12">
                    <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight text-brand-white mb-6 tracking-tight">
                        The Bridge from<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-white via-brand-silver to-brand-white">Audience to Advocate.</span>
                    </h1>

                    <p className="font-mono text-brand-silver text-sm md:text-base max-w-lg mb-8 leading-relaxed border-l-2 border-brand-dark-tide pl-6">
                        Engineering Ecosystems of Belonging.<br />
                        We turn community into your competitive moat.
                    </p>

                    <div className="flex items-center space-x-6">
                        <a href="#connect" className="bg-brand-white text-brand-black px-8 py-3 rounded-full font-bold hover:bg-brand-tahiti hover:text-brand-white transition-all transform hover:scale-105 shadow-lg shadow-brand-tahiti/20">
                            Get Co/nnected
                        </a>
                    </div>
                </div>

            </div>

        </section>
    );
}
