import { motion } from "framer-motion";
import { Globe, Code, Zap, Bot, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Web Development Specialists",
    description: "Developing robust, scalable websites and applications in Cuddalore with cutting-edge frameworks and performance-first engineering.",
    icon: Globe,
  },
  {
    title: "Custom Software Solutions",
    description: "Tailored software development designed to solve complex business challenges with intuitive user interfaces and cloud architecture.",
    icon: Code,
  },
  {
    title: "n8n Workflow Automation",
    description: "Streamlining operations through advanced workflow automation and seamless tool integrations.",
    icon: Zap,
  },
  {
    title: "AI Agent Development",
    description: "Deploying autonomous AI agents to handle customer interactions, data analysis, and internal processes.",
    icon: Bot,
  },
  {
    title: "Academic Solutions",
    description: "Providing high-level technical guidance and implementation for advanced college-level engineering projects.",
    icon: GraduationCap,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-brand-offwhite relative overflow-hidden">
      {/* Luminous Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs uppercase tracking-[0.4em] text-brand-emerald font-bold mb-4">Core Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight tracking-tight">
              Sophisticated tech for <br />
              <span className="text-brand-steel font-light">complex infrastructure.</span>
            </h3>
          </div>
          <p className="text-brand-grey text-sm max-w-xs leading-relaxed opacity-70">
            We deliver highly specialized architecture for enterprises that demand 100% reliability and cutting-edge automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Card 1: Large Bento (The Reference Theme) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] bg-brand-navy text-white relative overflow-hidden group border border-white/5"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-colors group-hover:bg-brand-emerald/20" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <motion.div 
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-emerald mb-8 shadow-2xl"
                >
                  <Globe size={28} />
                </motion.div>
                <h4 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight">Enterprise Web Development</h4>
                <p className="text-brand-silver text-sm md:text-base max-w-md leading-relaxed">
                  As a leading software agency in Cuddalore, we build high-performance, 
                  modern websites and web applications. From e-commerce to custom portals, 
                  our solutions are tailored to your business growth.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                {['React.JS','Node.JS', "TypeScript", 'PostgreSQL', 'AWS'].map(tech => (
                  <span key={tech} className="px-3 md:px-4 py-1.5 rounded-full bg-white/5 border border-white/5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold whitespace-nowrap">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 2: Medium Bento (Themes into Navy on Hover) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-brand-navy/5 shadow-xl group relative overflow-hidden transition-all duration-500 hover:bg-brand-navy hover:border-white/10"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-navy flex items-center justify-center text-brand-emerald mb-8 shadow-xl shadow-brand-navy/10 group-hover:bg-white/10 transition-colors">
                <Zap size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 tracking-tight uppercase tracking-[0.1em] group-hover:text-white transition-colors">n8n Automation</h4>
              <p className="text-brand-grey text-sm leading-relaxed group-hover:text-brand-silver transition-colors">
                Industrial-scale workflow automation that bridges your entire software stack into one cohesive unit.
              </p>
            </div>
            {/* Emerald Accent on Hover */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-emerald/0 group-hover:bg-brand-emerald/10 rounded-full blur-2xl transition-all duration-700 -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Card 3: Small Bento (Themes into Navy on Hover) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-brand-navy/5 shadow-xl group transition-all duration-500 hover:bg-brand-navy hover:border-white/10 overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-brand-offwhite border border-brand-navy/5 flex items-center justify-center text-brand-navy mb-8 group-hover:bg-brand-emerald group-hover:text-brand-navy transition-colors">
                <Bot size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-4 tracking-tight group-hover:text-white transition-colors">AI Deployment</h4>
              <p className="text-brand-grey text-sm leading-relaxed group-hover:text-brand-silver transition-colors">
                Autonomous agents that handle complex logic and customer growth 24/7.
              </p>
            </div>
          </motion.div>

          {/* Card 4: Long Bento (Themes into Navy on Hover) */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/80 backdrop-blur-xl border border-brand-navy/5 shadow-xl flex flex-col md:flex-row gap-10 items-center justify-between group transition-all duration-500 hover:bg-brand-navy hover:border-white/10 overflow-hidden relative"
          >
            <div className="flex-1 relative z-10">
              <div className="inline-block px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-[10px] font-bold tracking-widest uppercase mb-6 group-hover:bg-brand-emerald/20 transition-colors">Premium Support</div>
              <h4 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 tracking-tight group-hover:text-white transition-colors">Academic Consultation</h4>
              <p className="text-brand-grey text-sm md:text-base leading-relaxed group-hover:text-brand-silver transition-colors">
                We provide the blueprint and execution for advanced technical theses and engineering projects that push the digital frontier.
              </p>
            </div>
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-brand-navy flex items-center justify-center text-brand-emerald shadow-2xl rotate-3 group-hover:rotate-0 transition-all duration-500 flex-shrink-0 group-hover:bg-white/10 relative z-10">
              <GraduationCap size={40} />
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-emerald/0 group-hover:bg-brand-emerald/10 rounded-full blur-3xl transition-all duration-700 -translate-y-1/2 translate-x-1/2" />
          </motion.div>

        </div>



      </div>
    </section>
  );
}


