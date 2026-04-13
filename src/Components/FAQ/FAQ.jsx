import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What industries does LuthorCorp specialize in?",
    answer: "We focus on high-scale tech startups, fintech institutions, and enterprise-level businesses requiring complex automation and robust web infrastructure."
  },
  {
    question: "How long does a typical deployment take?",
    answer: "Timeline varies by scope, but our 'Fast-Track' protocols can deliver core infrastructure in as little as 4-6 weeks."
  },
  {
    question: "Do you offer post-deployment support?",
    answer: "Yes, all our solutions come with 24/7 technical monitoring and maintenance protocols to ensure 100% uptime."
  },
  {
    question: "Can you integrate with existing legacy systems?",
    answer: "Our engineers are experts at building 'Bridge Protocols' that modernize legacy data without interrupting current operations."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-brand-offwhite relative">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-emerald font-bold mb-4">Inquiry Center</h2>
          <p className="text-3xl font-bold text-brand-navy">Frequently Asked Protocols</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="group bg-white rounded-2xl border border-brand-navy/5 overflow-hidden transition-all duration-500 hover:bg-brand-navy hover:shadow-2xl"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-7 text-left transition-colors"
              >
                <span className={`font-bold text-sm tracking-tight transition-colors ${openIndex === i ? 'text-brand-emerald' : 'text-brand-navy group-hover:text-white'}`}>
                  {faq.question}
                </span>
                <div className={`transition-all duration-300 ${openIndex === i ? 'text-brand-emerald rotate-90' : 'text-brand-navy group-hover:text-brand-emerald group-hover:rotate-180'}`}>
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-7 pt-0 text-brand-steel text-sm leading-relaxed group-hover:text-brand-silver transition-colors">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
