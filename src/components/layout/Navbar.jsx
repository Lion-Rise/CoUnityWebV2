import { useState, useEffect } from 'react';
import Logo from './Logo';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Logo className="h-8 md:h-10 w-auto" />

                <div className="hidden md:flex items-center space-x-8 font-sans font-medium text-brand-white">
                    <a href="#approach" className="hover:text-brand-tahiti transition-colors">Approach</a>
                    <a href="#testimonials" className="hover:text-brand-tahiti transition-colors">Testimonials</a>
                    <a href="#about" className="hover:text-brand-tahiti transition-colors">About</a>
                    <a href="#connect" className="bg-brand-white text-brand-black px-6 py-2 rounded-full font-bold hover:bg-brand-tahiti hover:text-brand-white transition-all transform hover:scale-105">
                        Co/nnect
                    </a>
                </div>

                {/* Mobile Menu Icon Placeholder */}
                <button className="md:hidden text-brand-white">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>
        </nav>
    );
}
