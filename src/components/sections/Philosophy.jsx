import { useState } from 'react';
import ImageSequence from '../ui/ImageSequence';

export default function Philosophy() {
    const [orbLoaded, setOrbLoaded] = useState(false);

    return (
        <section id="philosophy" className="relative min-h-screen flex flex-col md:flex-row bg-brand-black overflow-hidden">

            {/* Central Orb Animation (Absolute Centered) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 md:opacity-100">
                <div className="w-[800px] h-[800px] relative">
                    <ImageSequence
                        folderPath="/assets/animations/orb"
                        frameCount={284}
                        fileNamePrefix="frame_"
                        onLoadComplete={() => setOrbLoaded(true)}
                        className={`w-full h-full object-contain transition-opacity duration-1000 ${orbLoaded ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </div>

            {/* Left Side: Data / Code */}
            <div className="flex-1 z-10 flex flex-col justify-center items-center md:items-end p-8 md:p-16 border-b md:border-b-0 md:border-r border-brand-dark-tide/30 bg-gradient-to-b from-brand-black via-transparent to-brand-black">
                <div className="max-w-md text-center md:text-right">
                    <h2 className="font-mono text-4xl md:text-5xl font-bold text-brand-white mb-6 tracking-tighter">
                        DATA<br />BACKED
                    </h2>
                    <p className="font-mono text-brand-silver text-sm md:text-base mb-8 leading-relaxed">
            // Strategic Blueprints <br />
            // Engagement Architecture <br />
            // Scalable Infrastructure
                    </p>
                    <div className="font-mono text-xs text-brand-tahiti">
                        {`{ system: "optimized", growth: "engineered" }`}
                    </div>
                </div>
            </div>

            {/* Right Side: Human / Soul */}
            <div className="flex-1 z-10 flex flex-col justify-center items-center md:items-start p-8 md:p-16 bg-gradient-to-t from-brand-black via-transparent to-brand-black">
                <div className="max-w-md text-center md:text-left">
                    <h2 className="font-sans text-4xl md:text-5xl font-bold text-brand-white mb-6 tracking-tight">
                        HUMAN<br />LED
                    </h2>
                    <p className="font-sans text-brand-silver text-sm md:text-base mb-8 leading-relaxed">
                        Real connection cannot be automated.<br />
                        We build spaces that feel alive,<br />
                        turning members into advocates.
                    </p>
                    <div className="font-sans text-xs font-bold text-brand-pink tracking-widest uppercase">
                        The Soul of Community
                    </div>
                </div>
            </div>

        </section>
    );
}
