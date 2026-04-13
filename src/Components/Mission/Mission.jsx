import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Compass, ShieldCheck, Zap, Terminal, Globe, Cpu } from "lucide-react";

export default function Mission() {
  return (
    <main className="min-h-screen bg-white relative">
      <div className="noise-overlay" />
      <Navbar />
      
      <section className="pt-40 pb-32 relative overflow-hidden">
        {/* Cinematic Backdrop */}
        <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-navy opacity-[0.02] -skew-x-12 translate-x-1/4 pointer-events-none" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-emerald/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="lg:col-span-8"
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="text-[10px] font-bold tracking-[0.4em] text-brand-emerald uppercase">Mission Blueprint v2.0</span>
                <span className="h-px w-12 bg-brand-navy/10 tracking-widest"></span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-brand-navy leading-[0.85] mb-12 heading-gradient">
                Engineering <br />
                <span className="font-light text-brand-steel italic">Order in the</span> <br />
                Digital Chaos.
              </h1>
              
              <div className="max-w-2xl">
                <p className="text-brand-grey text-lg lg:text-xl leading-relaxed font-medium mb-12 opacity-80">
                   LuthorCorp exists to build the technical order, security, and boundless progress 
                  required for modern enterprises to scale beyond their current horizon. We focus 
                  on the unseen infrastructure that makes the impossible, inevitable.
                </p>
              </div>

              {/* Technical Value Proposition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { 
                    icon: ShieldCheck, 
                    title: "Operational Integrity", 
                    desc: "Every deployment is a fortress. We prioritize zero-vulnerability architectures that protect your sovereign data assets." 
                  },
                  { 
                    icon: Zap, 
                    title: "Hyper-Scale DNA", 
                    desc: "Systems built to handle 100x user growth with zero architectural friction or performance degradation." 
                  },
                  { 
                    icon: Cpu, 
                    title: "Autonomous Intelligence", 
                    desc: "Beyond simple code—we deploy intelligent agents that manage complex workflows 24/7 without fatigue." 
                  },
                  { 
                    icon: Globe, 
                    title: "Global Reach", 
                    desc: "Distributed infrastructure designed for the modern borderless economy, ensuring low-latency access everywhere." 
                  }
                ].map((pillar, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="p-8 rounded-[2rem] bg-brand-navy/5 border border-brand-navy/5 group hover:bg-brand-navy transition-all duration-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-brand-navy flex items-center justify-center text-brand-emerald mb-6 group-hover:bg-white/10 transition-colors">
                      <pillar.icon size={20} />
                    </div>
                    <h3 className="text-lg font-bold mb-3 tracking-tight text-brand-navy group-hover:text-white uppercase tracking-[0.1em]">{pillar.title}</h3>
                    <p className="text-brand-steel text-xs leading-relaxed group-hover:text-brand-silver transition-colors">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Side Column: The Partner Advantage */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="lg:col-span-4 lg:pt-32"
            >
              <div className="p-10 rounded-[2.5rem] bg-brand-navy text-white relative shadow-2xl overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <div className="inline-block px-3 py-1 rounded-full bg-brand-emerald/20 text-brand-emerald text-[10px] font-bold tracking-widest uppercase mb-8">Partner Advantage</div>
                  <h4 className="text-2xl font-bold mb-6 tracking-tight leading-tight">Why the most ambitious scale with us.</h4>
                  <ul className="space-y-6">
                    {[
                      { l: "99.9% Performance Guarantee", d: "Zero-latency reliability for mission-critical core apps." },
                      { l: "Bespoke Intelligence", d: "Automation agents tailored specifically to your business logic." },
                      { l: "Infinite Architectural Scale", d: "Own the fortress—we build for tomorrow's user numbers." }
                    ].map((item, i) => (
                      <li key={i} className="flex gap-4">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-emerald flex-shrink-0" />
                        <div>
                          <span className="block text-xs font-bold uppercase tracking-wider mb-1">{item.l}</span>
                          <span className="text-[10px] text-brand-silver leading-relaxed">{item.d}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-[10px] text-brand-silver font-medium leading-relaxed italic">
                      "We provide the technical bedrock upon which your scaling ambitions can finally take flight."
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
