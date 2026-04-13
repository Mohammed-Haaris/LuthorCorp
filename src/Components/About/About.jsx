/** @format */

import { motion } from "framer-motion";
import { Target, Users } from "lucide-react";
import hqImage from "../../assets/luthorcorp_hq.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-brand-emerald font-bold mb-6"> Our Legacy </h2>
            <h3 className="text-4xl font-bold text-brand-navy mb-8 leading-tight">
              Pioneering Enterprise Solutions for the <span className="text-brand-steel font-medium text-3xl"> Modern Age </span>
            </h3>
            <p className="text-brand-grey text-lg mb-8 leading-relaxed">
              Founded on the principles of technical precision and innovative thinking, 
              LuthorCorp has emerged as a leader in digital transformation. We don't just 
              build software; we architect the infrastructure that powers tomorrow's industries.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { 
                  icon: Target, 
                  title: "Mission", 
                  desc: "To bridge the gap between human ambition and technical possibility." 
                },
                { 
                  icon: Users, 
                  title: "Excellence", 
                  desc: "A specialized team of engineers dedicated to pixel-perfect deployment." 
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="group flex flex-col p-6 rounded-3xl transition-all duration-500 hover:bg-brand-navy border border-transparent hover:border-white/10 bg-white/80 backdrop-blur-xl border border-brand-navy/5 shadow-xl"
                >

                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-white/10 group-hover:text-brand-emerald transition-colors">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-2 text-xs uppercase tracking-wider group-hover:text-white transition-colors">{item.title}</h4>
                    <p className="text-brand-steel text-xs leading-relaxed group-hover:text-brand-silver transition-colors">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-[2.5rem] bg-brand-navy overflow-hidden shadow-2xl relative border border-brand-navy/5">
              <img 
                src={hqImage} 
                alt="LuthorCorp HQ Interior" 
                className="w-full h-full object-cover transition-transform duration-[2s] hover:scale-105"
              />
              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
