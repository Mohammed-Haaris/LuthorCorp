import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="bg-brand-navy rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          {/* Background Highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-emerald/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Ready to Secure Your <br />
              <span className="text-brand-emerald">Digital Frontier?</span>
            </h2>
            <p className="text-brand-silver text-sm md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
              Join the elite group of organizations leveraging LuthorCorp's 
              advanced infrastructure and autonomous intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="px-10 py-5 bg-brand-emerald text-brand-navy font-bold rounded-full flex items-center gap-3 transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:-translate-y-1">
                CONTACT HQ NOW
                <ArrowRight size={20} />
              </button>
              <button className="text-white text-sm font-bold uppercase tracking-[0.2em] border-b border-white/20 pb-1 hover:border-brand-emerald transition-all">
                View Deployment Protocols
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
