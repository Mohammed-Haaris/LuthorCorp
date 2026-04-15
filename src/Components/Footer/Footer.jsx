import logo from "../../assets/LuthorCorp.jpg";

export default function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#hero" className="flex items-center gap-4 mb-6 group transition-all">
              <img src={logo} alt="LuthorCorp" className="h-10 w-10 rounded-full border border-white/10 group-hover:border-brand-emerald/50 transition-all" />
              <span className="text-xl font-bold tracking-[0.2em] text-white">LUTHOR<span className="text-brand-emerald">CORP</span></span>
            </a>
            <p className="text-brand-silver text-sm max-w-sm leading-relaxed">
              Engineering the digital frontier with sophisticated automation, 
              advanced AI, and robust web architecture. Leading the way in 
              technical excellence and enterprise solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-brand-silver text-sm">
              <li><a href="#hero" className="hover:text-brand-emerald transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-emerald transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-brand-emerald transition-colors">Service</a></li>
              <li><a href="#contact" className="hover:text-brand-emerald transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Connect HQ</h4>
            <ul className="space-y-4 text-brand-silver text-xs leading-relaxed">
              <li className="hover:text-brand-emerald transition-colors">
                <a href="mailto:smhhaaris2020@gmail.com">smhhaaris2020@gmail.com</a>
              </li>
              <li className="hover:text-brand-emerald transition-colors">
                <a href="mailto:mohamedfaisalm2004@gmail.com">mohamedfaisalm2004@gmail.com</a>
              </li>
              <li className="text-brand-silver pt-2 uppercase tracking-widest text-[9px] font-bold">WhatsApp Protocols</li>
              <li className="hover:text-[#25D366] transition-colors">
                <a href="https://wa.me/917904321745" target="_blank" rel="noreferrer">+91 79043 21745</a>
              </li>
              <li className="hover:text-[#25D366] transition-colors">
                <a href="https://wa.me/919342945085" target="_blank" rel="noreferrer">+91 93429 45085</a>
              </li>
              <li className="pt-2 text-brand-silver block uppercase tracking-widest text-[9px] font-bold">Social Frontier</li>
              <li className="hover:text-brand-emerald transition-colors italic">
                <a href="https://www.instagram.com/luthorcorp_official" target="_blank" rel="noreferrer">@luthorcorp_official</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-silver text-[10px] uppercase tracking-[0.2em]">
            &copy; 2026 LuthorCorp. All Rights Reserved. | SECURED CONNECTION
          </p>
          <div className="flex gap-6 text-brand-silver text-[10px] uppercase tracking-[0.2em]">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

