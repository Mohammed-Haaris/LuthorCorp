import { motion } from "framer-motion";
import { Cpu, Zap, Database, Globe, Shield, Code, Server, Bot } from "lucide-react";

const tech = [
  { name: "React", icon: Code, color: "text-blue-400" },
  { name: "Node.js", icon: Server, color: "text-green-500" },
  { name: "n8n", icon: Zap, color: "text-red-500" },
  { name: "OpenAI", icon: Bot, color: "text-emerald-500" },
  { name: "AWS", icon: Globe, color: "text-orange-400" },
  { name: "PostgreSQL", icon: Database, color: "text-indigo-400" },
  { name: "Secure Systems", icon: Shield, color: "text-brand-navy" },
  { name: "API Gateways", icon: Cpu, color: "text-brand-steel" }
];

export default function TechStack() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] text-brand-emerald font-bold mb-4">Architectural Foundation</h2>
          <p className="text-3xl font-bold text-brand-navy tracking-tight">The Core Matrix of Deployment</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tech.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 rounded-3xl bg-brand-offwhite border border-brand-navy/5 flex flex-col items-center justify-center transition-all duration-500 hover:bg-brand-navy hover:shadow-2xl"
            >
              <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center ${item.color} mb-6 shadow-xl group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500`}>
                <item.icon size={28} />
              </div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-navy group-hover:text-white transition-colors">
                {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="mt-16 pt-16 border-t border-brand-navy/5 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
           {/* Add mini tech badges or brands here if needed */}
           <span className="text-[10px] font-bold tracking-[0.4em] text-brand-steel uppercase">Built for 99.9% Operational Integrity</span>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-navy/5 to-transparent" />
    </section>
  );
}
