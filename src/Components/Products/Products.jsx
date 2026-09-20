/** @format */

import { motion } from "framer-motion";
import {
  Bot,
  Glasses,
  Globe,
  Building2,
  Receipt,
  Monitor,
  Workflow,
  ServerCog,
  Sparkles,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const products = [
  {
    title: "LuthorAI",
    category: "Artificial Intelligence",
    description:
      "Intelligent AI systems designed for automation, business intelligence, productivity, customer interaction, and next-generation digital experiences.",
    icon: Bot,
    size: "md:col-span-4",
    dark: true,
    tags: ["AI", "LLM", "Agents", "Automation"],
  },

  {
    title: "LuthorAI Glasses",
    category: "AI Hardware",
    description:
      "Next-generation smart eyewear combining AI assistance, computer vision, communication, and intelligent safety features into an everyday wearable.",
    icon: Glasses,
    size: "md:col-span-2",
    dark: false,
    tags: ["Wearable AI", "Vision", "Safety"],
    badge: "In Development",
  },

  {
    title: "Web Applications",
    category: "Digital Products",
    description:
      "Scalable web applications built for real business operations, customer portals, dashboards, SaaS platforms, marketplaces, and enterprise workflows.",
    icon: Globe,
    size: "md:col-span-2",
    dark: false,
    tags: ["React", "Node.js", "PostgreSQL", "Cloud"],
  },

  {
    title: "Business Software",
    category: "Business Systems",
    description:
      "Custom software engineered around the way your business actually operates — from small businesses and startups to complex enterprise environments.",
    icon: Building2,
    size: "md:col-span-4",
    dark: false,
    tags: ["CRM", "ERP", "Operations", "Analytics"],
  },

  {
    title: "Billing & POS",
    category: "Commerce Infrastructure",
    description:
      "Flexible billing, invoicing, inventory, POS, customer management, reporting, and business operations software designed to grow with your company.",
    icon: Receipt,
    size: "md:col-span-3",
    dark: false,
    tags: ["Billing", "POS", "Inventory", "GST"],
  },

  {
    title: "Desktop Applications",
    category: "Business Applications",
    description:
      "Reliable desktop applications for organizations that need dedicated software for billing, operations, internal tools, data processing, and specialized workflows.",
    icon: Monitor,
    size: "md:col-span-3",
    dark: false,
    tags: ["Windows", "Offline", "Business Tools"],
  },

  {
    title: "Luthor Automation",
    category: "Intelligent Infrastructure",
    description:
      "Connected automation systems that integrate applications, APIs, databases, communication platforms, and business processes into intelligent workflows.",
    icon: Workflow,
    size: "md:col-span-2",
    dark: false,
    tags: ["n8n", "APIs", "Workflows"],
  },

  {
    title: "Enterprise Systems",
    category: "Enterprise Technology",
    description:
      "Scalable platforms for larger organizations requiring multi-user systems, role-based access, integrations, analytics, security, and reliable cloud infrastructure.",
    icon: ServerCog,
    size: "md:col-span-4",
    dark: true,
    tags: ["Cloud", "Security", "ERP", "Scalability"],
  },

  {
    title: "Future Labs",
    category: "Research & Development",
    description:
      "Experimental technologies across artificial intelligence, robotics, software, intelligent hardware, and emerging computing systems.",
    icon: Sparkles,
    size: "md:col-span-6",
    dark: false,
    tags: ["Robotics", "AI", "Hardware", "R&D"],
    badge: "Research Division",
  },
];

const LuthorProducts = () => {
  return (
    <section id="products" className="py-32 bg-white relative overflow-hidden">
      {/* Background atmosphere */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-emerald/5 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-navy/5 rounded-full blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.4em] text-brand-emerald font-bold mb-4"
            >
              LuthorCorp Products
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-brand-navy leading-tight tracking-tight"
            >
              Technology built for
              <br />
              <span className="text-brand-steel font-light">
                what comes next.
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-grey text-sm max-w-sm leading-relaxed opacity-70"
          >
            LuthorCorp develops intelligent software, AI systems, automation,
            and emerging hardware designed to solve real-world problems.
          </motion.p>
        </div>

        {/* Product Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className={`
                  ${product.size}
                  relative overflow-hidden
                  p-8 md:p-10
                  rounded-[2rem] md:rounded-[2.5rem]
                  group
                  transition-all duration-500
                  ${
                    product.dark
                      ? "bg-brand-navy text-white border border-white/5"
                      : "bg-white/80 backdrop-blur-xl text-brand-navy border border-brand-navy/5 shadow-xl hover:bg-brand-navy hover:border-white/10"
                  }
                `}
              >
                {/* Decorative glow */}
                <div
                  className={`
                    absolute
                    top-0
                    right-0
                    w-64
                    h-64
                    rounded-full
                    blur-3xl
                    -translate-y-1/2
                    translate-x-1/2
                    transition-all
                    duration-700
                    ${
                      product.dark
                        ? "bg-brand-emerald/10 group-hover:bg-brand-emerald/20"
                        : "bg-brand-emerald/0 group-hover:bg-brand-emerald/10"
                    }
                  `}
                />

                <div className="relative z-10">
                  {/* Top row */}
                  <div className="flex items-start justify-between mb-10">
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 3 }}
                      className={`
                        w-14 h-14
                        rounded-2xl
                        flex items-center justify-center
                        transition-colors duration-500
                        ${
                          product.dark
                            ? "bg-white/5 border border-white/10 text-brand-emerald"
                            : "bg-brand-offwhite border border-brand-navy/5 text-brand-navy group-hover:bg-white/10 group-hover:text-brand-emerald"
                        }
                      `}
                    >
                      <Icon size={28} />
                    </motion.div>

                    {product.badge && (
                      <span
                        className={`
                          px-3 py-1.5
                          rounded-full
                          text-[9px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          ${
                            product.dark
                              ? "bg-brand-emerald/10 text-brand-emerald"
                              : "bg-brand-emerald/10 text-brand-emerald"
                          }
                        `}
                      >
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product information */}
                  <div>
                    <p
                      className={`
                        text-[10px]
                        uppercase
                        tracking-[0.3em]
                        font-bold
                        mb-3
                        ${
                          product.dark
                            ? "text-brand-emerald"
                            : "text-brand-emerald"
                        }
                      `}
                    >
                      {product.category}
                    </p>

                    <h3
                      className={`
                        text-2xl
                        md:text-3xl
                        font-bold
                        tracking-tight
                        mb-4
                        transition-colors
                        ${
                          product.dark
                            ? "text-white"
                            : "text-brand-navy group-hover:text-white"
                        }
                      `}
                    >
                      {product.title}
                    </h3>

                    <p
                      className={`
                        text-sm
                        md:text-base
                        leading-relaxed
                        max-w-xl
                        transition-colors
                        ${
                          product.dark
                            ? "text-brand-silver"
                            : "text-brand-grey group-hover:text-brand-silver"
                        }
                      `}
                    >
                      {product.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-10 flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`
                          px-3
                          py-1.5
                          rounded-full
                          text-[9px]
                          uppercase
                          tracking-widest
                          font-bold
                          transition-colors
                          ${
                            product.dark
                              ? "bg-white/5 border border-white/5 text-brand-silver"
                              : "bg-brand-navy/5 border border-brand-navy/5 text-brand-steel group-hover:bg-white/5 group-hover:border-white/5 group-hover:text-brand-silver"
                          }
                        `}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <motion.div
                  initial={{ opacity: 0, x: -5 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  className={`
                    absolute
                    bottom-8
                    right-8
                    w-10
                    h-10
                    rounded-full
                    flex
                    items-center
                    justify-center
                    transition-all
                    ${
                      product.dark
                        ? "bg-white/5 text-brand-emerald"
                        : "bg-brand-navy/5 text-brand-navy group-hover:bg-white/10 group-hover:text-brand-emerald"
                    }
                  `}
                >
                  <ArrowUpRight size={18} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 pt-12 border-t border-brand-navy/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald">
                <ShieldCheck size={20} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-navy">
                  Built with purpose
                </p>

                <p className="text-xs text-brand-grey mt-1">
                  Engineering technology around real-world problems.
                </p>
              </div>
            </div>

            <span className="text-[10px] font-bold tracking-[0.4em] text-brand-steel uppercase">
              LuthorCorp • Future Systems Division
            </span>
          </div>
        </div>
      </div>

      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-navy/5 to-transparent" />
    </section>
  );
};

export default LuthorProducts;
