/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Phone, Instagram, Loader2 } from "lucide-react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending request...");
    
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      setResult("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-brand-offwhite relative overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-brand-navy/5 grid grid-cols-1 lg:grid-cols-5">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 bg-brand-navy p-12 text-white relative flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">
                Initiate Communication
              </h3>
              <p className="text-brand-silver text-sm mb-12 leading-relaxed">
                Connect with our deployment specialists to discuss your next
                technical milestone. We operate on a zero-latency response
                protocol.
              </p>

              <div className="space-y-8">
                <div className="flex gap-4 sm:gap-6 items-start group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-brand-emerald group-hover:text-brand-navy mt-1 sm:mt-0">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-silver font-bold mb-1">
                      Direct HQ
                    </label>
                    <p className="text-sm font-medium break-all sm:break-normal">
                      smhhaaris2020@gmail.com
                    </p>
                    <p className="text-sm font-medium break-all sm:break-normal">
                      mohamedfaisalm2004@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 sm:gap-6 items-start sm:items-center group">
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-brand-emerald group-hover:text-brand-navy">
                    <MapPin size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-silver font-bold mb-1">
                      Location
                    </label>
                    <p className="text-sm font-medium">Cuddalore</p>
                  </div>
                </div>

                <a 
                  href="https://www.instagram.com/luthorcorp_official?igsh=MXFuZnQ3emR1NjZleg==" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex gap-4 sm:gap-6 items-start sm:items-center group"
                >
                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group-hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 group-hover:text-white">
                    <Instagram size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-silver font-bold mb-1">
                      Digital Frontier
                    </label>
                    <p className="text-sm font-medium group-hover:text-brand-silver break-all sm:break-normal">@luthorcorp_official</p>
                  </div>
                </a>

                 <div className="flex gap-4 sm:gap-6 items-start group">

                  <div className="w-12 h-12 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-colors group-hover:bg-[#25D366] group-hover:text-white mt-1 sm:mt-0">
                    <svg 
                      viewBox="0 0 24 24" 
                      width="20" 
                      height="20" 
                      fill="currentColor"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-silver font-bold mb-2">
                      WhatsApp Protocols
                    </label>
                    <div className="space-y-1">
                      <a 
                        href="https://wa.me/917904321745" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-sm font-medium hover:text-[#25D366] transition-colors break-all sm:break-normal"
                      >
                        +91 79043 21745
                      </a>
                      <a 
                        href="https://wa.me/919342945085" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="block text-sm font-medium hover:text-[#25D366] transition-colors break-all sm:break-normal"
                      >
                        +91 93429 45085
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/5 flex gap-4">
              <div className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-brand-silver font-bold">
                Encrypted Connection Active
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 p-12 lg:p-16">
            <h4 className="text-brand-navy text-xl font-bold mb-8">
              Service Request
            </h4>
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-steel font-bold mb-2">
                    Subject Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-brand-offwhite border border-brand-navy/5 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-emerald/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-steel font-bold mb-2">
                    Access Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="j.doe@enterprise.com"
                    className="w-full bg-brand-offwhite border border-brand-navy/5 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-emerald/50 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-steel font-bold mb-2">
                  Service Requirement
                </label>
                <select name="service" required className="w-full bg-brand-offwhite border border-brand-navy/5 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-emerald/50 transition-colors appearance-none">
                  <option value="Websites & Web Apps">Websites & Web Apps</option>
                  <option value="Workflow Automation">Workflow Automation</option>
                  <option value="AI Deployment">AI Deployment</option>
                  <option value="Project Consultation">Project Consultation</option>
                  <option value="Academic Projects">Academic Projects</option>
                  <option value="Custom Development">Custom Development</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-brand-steel font-bold mb-2">
                  Detailed Specification
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="Describe your technical requirements..."
                  className="w-full bg-brand-offwhite border border-brand-navy/5 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-brand-emerald/50 transition-colors resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex items-center justify-center gap-3 w-full bg-brand-navy text-white font-bold py-5 rounded-xl transition-all hover:bg-brand-navy/90 active:scale-[0.98] shadow-2xl shadow-brand-navy/10 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      PROCESSING...
                      <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      DISPATCH REQUEST
                      <Send size={18} />
                    </>
                  )}
                </button>
                {result && (
                  <p className={`mt-4 text-center text-sm font-medium ${result.includes("Successfully") ? "text-brand-emerald" : "text-brand-silver"}`}>
                    {result}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
