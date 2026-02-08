import { useState } from 'react';
import ImageSequence from '../ui/ImageSequence';

export default function Hero() {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <section id="hero" className="relative h-screen w-full overflow-hidden bg-brand-black">
            {/* Background Animation */}
            {/* Container ensure full coverage */}
            <div className={`absolute inset-0 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
                <ImageSequence
                    folderPath="/assets/animations/hero"
                    frameCount={82}
                    fileNamePrefix="frame_"
                    onLoadComplete={() => {
                        console.log("Animation Loaded"); // Debug
                        setIsLoaded(true);
                    }}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <div className={`absolute bottom-12 transition-all duration-1000 delay-500 transform ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    <p className="font-mono text-brand-tahiti text-sm tracking-widest uppercase">
                        The Bridge from Audience to Advocate
                    </p>
                </div>
            </div>

            {/* Loading State */}
            {!isLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-brand-black z-20">
                    <div className="w-12 h-12 border-2 border-brand-dark-tide border-t-brand-tahiti rounded-full animate-spin"></div>
                </div>
            )}
        </section>
    );
}
