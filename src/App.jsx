import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Philosophy from './components/sections/Philosophy';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-black text-brand-white selection:bg-brand-tahiti selection:text-brand-white">
      <Navbar />

      <main>
        <Hero />
        <Philosophy />

        {/* Placeholder for Next Sections */}
        <section id="system" className="min-h-screen flex items-center justify-center bg-brand-black border-t border-brand-dark-tide/20">
          <div className="text-center font-mono text-brand-silver">
            <p className="mb-4">[ Phase 4: The System ]</p>
            <p className="text-sm">Modular Features / Celestia Style</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
