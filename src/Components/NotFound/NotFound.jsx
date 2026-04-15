import { motion } from "framer-motion";
import { Terminal, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white relative">
      <div className="noise-overlay" />
      <Navbar />
      
      <div className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
        {/* Background Anomalies */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-navy/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-brand-emerald/5 rounded-full blur-[100px] pointer-events-none animate-pulse" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center"
        >
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-emerald shadow-2xl">
              <Terminal size={24} />
            </div>
            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-steel uppercase bg-brand-offwhite px-4 py-2 rounded-full border border-brand-navy/5">
              Protocol Error: 404
            </span>
          </div>

          <h1 className="text-7xl md:text-9xl font-bold text-brand-navy leading-none mb-6 tracking-tighter heading-gradient">
            Lost in <br />
            <span className="font-light italic text-brand-steel">the Void.</span>
          </h1>

          <p className="max-w-md mx-auto text-brand-steel text-sm md:text-base mb-12 leading-relaxed opacity-70">
            The target coordinate does not exist within our secure infrastructure. 
            The connection has been terminated to preserve architectural integrity.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/" 
              className="group relative px-10 py-4 bg-brand-navy text-white text-[10px] font-bold uppercase tracking-[0.3em] rounded-full overflow-hidden transition-all hover:shadow-2xl active:scale-95"
            >
              <div className="absolute inset-0 bg-brand-emerald opacity-0 group-hover:opacity-10 transition-opacity" />
              <span className="relative z-10 flex items-center gap-3">
                <Home size={14} /> Reconnect to HQ
              </span>
            </Link>
            
            <button 
              onClick={() => window.history.back()}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-navy border-b-2 border-brand-navy/10 pb-2 hover:border-brand-emerald hover:text-brand-emerald transition-all flex items-center gap-3"
            >
              <ArrowLeft size={14} /> Revert To Previous State
            </button>
          </div>
        </motion.div>

        {/* Decorative Grid */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-navy/10 to-transparent" />
      </div>

      <Footer />
    </main>
  );
}
