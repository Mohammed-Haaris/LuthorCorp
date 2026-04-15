import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, Cpu, ArrowRight } from "lucide-react";
import logo from "../../../../assets/LuthorCorp.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-white">

      {/* Background Depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(16,185,129,0.03)_0%,transparent_60%)]" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-[90rem] px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-7 z-10"
          >
            <div className="flex items-center gap-2 sm:gap-3 mb-8 md:mb-10 group">
              <span className="h-[1px] w-6 sm:w-8 md:w-12 bg-brand-navy/20 group-hover:w-12 sm:group-hover:w-20 transition-all duration-500 shrink-0"></span>
              <span className="text-[8px] sm:text-[9px] md:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.3em] md:tracking-[0.4em] text-brand-emerald uppercase">
                Established 2026 | Technical Sovereignty
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tight text-brand-navy mb-8 md:mb-10 leading-[1] md:leading-[0.95] heading-gradient">
              Architecting <br />
              <span className="font-light text-brand-steel italic">the future of</span> <br />
              Infrastructure.
            </h1>
            
            <p className="text-brand-steel text-base md:text-lg lg:text-xl max-w-xl mb-10 md:mb-14 leading-relaxed font-medium opacity-80">
              LuthorCorp deploys high-concurrency systems and autonomous intelligence 
              integrated into your core enterprise matrix. We bridge the frontier of 
              technical possibility and industrial-scale reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center">
              <a 
                href="/#services"
                className="w-full sm:w-auto text-center group relative px-10 md:px-12 py-4 md:py-5 bg-brand-navy text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] rounded-full transition-all hover:shadow-[0_20px_40px_rgba(12,22,35,0.15)] hover:-translate-y-1 active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-brand-emerald opacity-0 group-hover:opacity-10 transition-opacity" />
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Deploy Solutions <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </a>
              <Link 
                to="/mission"
                className="w-full sm:w-auto text-center text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-navy border-b-2 border-brand-navy/10 pb-2 hover:border-brand-emerald hover:text-brand-emerald transition-all"
              >
                Our Mission
              </Link>
            </div>
          </motion.div>

          {/* Right Side: Cinematic Brand Mark */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group p-6 md:p-12">
              {/* Complex Luminous Background */}
              <div className="absolute inset-0 bg-brand-emerald/5 rounded-full blur-[60px] md:blur-[80px] group-hover:bg-brand-emerald/10 transition-all duration-700" />
              
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <div className="relative p-1 bg-gradient-to-tr from-white to-brand-offwhite rounded-full shadow-2xl border border-white/50">
                   <div className="absolute inset-0 bg-brand-navy/5 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img 
                      src={logo} 
                      alt="LuthorCorp Authority Mark" 
                      className="w-56 h-56 sm:w-72 sm:h-72 lg:w-[450px] lg:h-[450px] rounded-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                </div>
                
                {/* Orbital Elements */}
                <div className="flex absolute -top-4 -right-4 sm:-top-6 sm:-right-6 md:-top-10 md:-right-10 w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-xl border border-white/40 shadow-xl items-center justify-center animate-float">
                  <Shield className="text-brand-navy opacity-20 w-6 h-6 sm:w-8 sm:h-8" />
                </div>
                <div className="flex absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 md:-bottom-10 md:-left-10 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl bg-brand-navy text-brand-emerald items-center justify-center shadow-2xl [animation-delay:2s] animate-float">
                  <Cpu className="w-5 h-5 sm:w-7 sm:h-7" />
                </div>
              </motion.div>

              {/* Decorative Geometric Matrix */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-brand-navy/[0.03] rounded-full pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-emerald/[0.02] rounded-full pointer-events-none border-dashed" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
