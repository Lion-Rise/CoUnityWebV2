import { useState } from 'react';
import ImageSequence from '../ui/ImageSequence';

export default function Hero() {
    const [dnaLoaded, setDnaLoaded] = useState(false);

    return (
        <section id="hero" className="relative min-h-screen w-full bg-brand-black flex items-center pt-24 md:pt-32">

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT: Typography (Pushed down via pt-32 on section) */}
                <div className="z-20 text-left order-2 lg:order-1">
                    <div className="inline-block px-3 py-1 mb-6 border border-brand-tahiti/30 rounded-full bg-brand-tahiti/10">
                        <span className="font-mono text-brand-tahiti text-xs tracking-widest uppercase">
               /// Established 2024
                        </span>
                    </div>

                    <h1 className="font-sans font-black text-5xl md:text-7xl leading-tight text-brand-white mb-6 tracking-tight">
                        The Bridge from<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-white via-brand-silver to-brand-white">Audience to Advocate.</span>
                    </h1>

                    <p className="font-mono text-brand-silver text-sm md:text-base max-w-lg mb-8 leading-relaxed border-l-2 border-brand-dark-tide pl-6">
                        Engineering Ecosystems of Belonging.<br />
                        We turn community into your competitive moat.
                    </p>

                    <div className="flex items-center space-x-6">
                        <a href="#connect" className="bg-brand-white text-brand-black px-8 py-3 rounded-full font-bold hover:bg-brand-tahiti hover:text-brand-white transition-all transform hover:scale-105">
                            Start Building
                        </a>
                        <span className="font-mono text-xs text-brand-dark-tide animate-pulse">
                            _System Online
                        </span>
                    </div>
                </div>

                {/* RIGHT: Visual (Framed Tech Card) */}
                <div className="relative order-1 lg:order-2 flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-lg aspect-square border border-brand-dark-tide/30 bg-brand-black/50 rounded-2xl overflow-hidden backdrop-blur-sm">

                        {/* Tech Accents (Corners) */}
                        <div className="absolute top-4 left-4 w-2 h-2 border-t border-l border-brand-tahiti"></div>
                        <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-brand-tahiti"></div>
                        <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-brand-tahiti"></div>
                        <div className="absolute bottom-4 right-4 w-2 h-2 border-b border-r border-brand-tahiti"></div>

                        {/* Animation */}
                        <ImageSequence
                            folderPath="/assets/animations/dna"
                            frameCount={240}
                            fileNamePrefix="frame_"
                            onLoadComplete={() => setDnaLoaded(true)}
                            className={`w-full h-full object-contain p-8 transition-opacity duration-1000 ${dnaLoaded ? 'opacity-100' : 'opacity-0'}`}
                        />

                        {/* Loading State */}
                        {!dnaLoaded && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 border-2 border-brand-dark-tide border-t-brand-tahiti rounded-full animate-spin"></div>
                            </div>
                        )}
                    </div>
                </div>

            </div>

        </section>
    );
}
