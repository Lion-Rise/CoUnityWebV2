import { useState } from 'react';
import ImageSequence from '../ui/ImageSequence';

export default function Hero() {
    const [dnaLoaded, setDnaLoaded] = useState(false);

    return (
        <section id="hero" className="relative min-h-screen w-full overflow-hidden bg-brand-black flex flex-col items-center justify-center pt-24">

            {/* Content Container */}
            <div className="z-20 text-center px-4 max-w-5xl mx-auto mb-8 md:mb-16">
                <h1 className="font-sans font-black text-4xl md:text-6xl lg:text-7xl leading-tight text-brand-white mb-6 tracking-tight">
                    The Bridge from<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-white via-brand-silver to-brand-white">Audience to Advocate.</span>
                </h1>
                <p className="font-mono text-brand-tahiti text-sm md:text-base tracking-widest uppercase">
                    Engineering Ecosystems of Belonging
                </p>
            </div>

            {/* DNA Animation Container */}
            <div className="relative w-full max-w-4xl h-[400px] md:h-[600px] pointer-events-none">
                <ImageSequence
                    folderPath="/assets/animations/dna"
                    frameCount={240}
                    fileNamePrefix="frame_"
                    onLoadComplete={() => setDnaLoaded(true)}
                    className={`w-full h-full object-contain transition-opacity duration-1000 ${dnaLoaded ? 'opacity-100' : 'opacity-0'}`}
                />

                {/* Loading Spinner for DNA */}
                {!dnaLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-8 h-8 border-2 border-brand-dark-tide border-t-brand-tahiti rounded-full animate-spin"></div>
                    </div>
                )}
            </div>

        </section>
    );
}
