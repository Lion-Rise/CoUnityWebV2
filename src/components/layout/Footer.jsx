export default function Footer() {
    return (
        <footer className="bg-brand-black border-t border-brand-dark-tide py-16 text-brand-white">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="col-span-1 md:col-span-2">
                    <img src="/assets/logo.svg" alt="CO/UNITY" className="h-8 mb-6" />
                    <p className="font-mono text-brand-silver max-w-md">
                        The Bridge from Audience to Advocate.
                        <br />
                        Encoding the DNA of belonging into the modern brand.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-brand-tahiti">Explore</h4>
                    <ul className="space-y-2 font-mono text-sm text-brand-silver">
                        <li><a href="#approach" className="hover:text-brand-white transition-colors">Approach</a></li>
                        <li><a href="#testimonials" className="hover:text-brand-white transition-colors">Testimonials</a></li>
                        <li><a href="#about" className="hover:text-brand-white transition-colors">About</a></li>
                        <li><a href="#careers" className="hover:text-brand-white transition-colors">Careers</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4 text-brand-tahiti">Connect</h4>
                    <ul className="space-y-2 font-mono text-sm text-brand-silver">
                        <li><a href="https://twitter.com/counityxyz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">Twitter (X)</a></li>
                        <li><a href="https://linkedin.com/company/counityxyz" target="_blank" rel="noopener noreferrer" className="hover:text-brand-white transition-colors">LinkedIn</a></li>
                        <li><a href="mailto:dan@counity.xyz" className="hover:text-brand-white transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-brand-dark-tide/50 flex flex-col md:flex-row justify-between items-center text-xs text-brand-dark-tide font-mono">
                <p>© 2026 Co/Unity. All rights reserved.</p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="/privacy" className="hover:text-brand-silver transition-colors">Privacy Policy</a>
                    <span>/</span>
                    <a href="/terms" className="hover:text-brand-silver transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}
