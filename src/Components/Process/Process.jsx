/** @format */

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "Deep dive into your technical infrastructure to identify optimization bottlenecks and opportunities.",
  },
  {
    number: "02",
    title: "Solution Architecture",
    description:
      "Designing a custom blueprint using state-of-the-art tech stacks tailored to your scaling needs.",
  },
  {
    number: "03",
    title: "Precision Deployment",
    description:
      "Pixel-perfect implementation with continuous integration and real-time monitoring protocols.",
  },
  {
    number: "04",
    title: "Optimization & Scale",
    description:
      "Post-launch refinement and automated scaling systems to ensure long-term frontier leadership.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-white relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.3em] text-brand-emerald font-bold mb-4">
            Deployment Protocol
          </h2>
          <p className="text-3xl font-bold text-brand-navy">
            How We Build The Future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-3xl transition-all duration-500 hover:bg-brand-navy hover:shadow-2xl border border-transparent hover:border-white/10"
            >
              <div className="text-5xl font-bold  text-gray-600 mb-6 tracking-tighter transition-colors group-hover:text-green-800">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-brand-navy mb-4 group-hover:text-white transition-colors">
                {step.title}
              </h3>
              <p className="text-brand-steel text-sm leading-relaxed group-hover:text-brand-silver transition-colors">
                {step.description}
              </p>

              {/* Connector line for desktop - hidden on hover to keep it clean */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 -right-4 w-8 h-px bg-brand-navy/5 group-hover:opacity-0 transition-opacity" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
