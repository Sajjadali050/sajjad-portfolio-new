import React, { useState } from 'react';
import { 
  FileText, Database, ShieldCheck, Mail, Phone, MapPin, 
  Download, Menu, X, CheckCircle2, Award, GraduationCap, Briefcase
} from 'lucide-react';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [showCvModal, setShowCvModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Profile photo direct link
  const profilePhotoUrl = "https://i.imgur.com/6TM43Gv.jpg"; 

  const projects = [
    {
      title: "Project Fanar - Inventory & Material Control",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "Real-time stock level tracking system for sewer materials, rubber rings, and safety equipment with dynamic balance formulas.",
      tags: ["Odoo ERP", "Advanced Excel", "Material Tracking"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project B.V.4 - Procurement & Material Log",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "Detailed procurement log managing UPVC pipes, couplings, and safety gear with strict balance reconciliation.",
      tags: ["Procurement ERP", "Excel Dashboards", "Safety Logs"],
      image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project Homes - MSR & Purchase Order Tracking",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "End-to-end MSR and PO tracking system for monitoring advance payments, vendor delivery schedules, and payment terms.",
      tags: ["Odoo Purchase", "PO Tracking", "Vendor Management"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-[#08080D] text-slate-100 font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#08080D]/90 backdrop-blur-md border-b border-[#8B5CF6]/20 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <a href="#" className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#8B5CF6] to-[#A855F7] flex items-center justify-center font-bold text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]">
              SA
            </div>
            <div>
              <span className="font-extrabold text-lg text-white block leading-none">Sajjad Ali</span>
              <span className="text-[10px] text-[#8B5CF6] font-semibold uppercase tracking-wider">Procurement & Systems</span>
            </div>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-[#8B5CF6] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#8B5CF6] transition-colors">Skills</a>
            <a href="#projects" className="hover:text-[#8B5CF6] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#8B5CF6] transition-colors">Experience</a>
            <a href="#contact" className="hover:text-[#8B5CF6] transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowCvModal(true)} 
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-semibold text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:opacity-90 transition-all flex items-center space-x-2"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          <button onClick={() => setNavOpen(!navOpen)} className="md:hidden text-slate-300">
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-[85vh] flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#8B5CF6] text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Procurement Specialist @ SSCC, Riyadh</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#A855F7]">Sajjad Ali</span>
            </h1>

            <p className="text-xl text-slate-300 font-medium">
              Procurement & Purchasing Specialist | Odoo ERP & Document Control Expert
            </p>

            <p className="text-slate-400 leading-relaxed text-base max-w-2xl">
              Organized procurement professional with hands-on experience in managing RFQs, Purchase Orders, supplier follow-ups, and advanced material tracking systems using Odoo ERP and Excel.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] text-white font-bold text-sm shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:scale-105 transition-all">
                Explore Projects
              </a>
              <button onClick={() => setShowCvModal(true)} className="px-7 py-3.5 rounded-xl bg-[#12121A] border border-[#8B5CF6]/30 text-slate-200 font-bold text-sm hover:border-[#8B5CF6] transition-all flex items-center space-x-2">
                <Download className="w-4 h-4 text-[#8B5CF6]" />
                <span>Get CV</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#8B5CF6] to-[#A855F7] rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative w-72 sm:w-80 h-96 rounded-2xl overflow-hidden border border-[#8B5CF6]/30 bg-[#12121A]">
                <img 
                  src={profilePhotoUrl} 
                  alt="Sajjad Ali" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#08080D]/50 border-t border-[#8B5CF6]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white">Featured <span className="text-[#8B5CF6]">Projects</span></h2>
            <div className="w-16 h-1 bg-[#8B5CF6] mx-auto mt-3 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((p, idx) => (
              <div key={idx} className="bg-[#12121A] rounded-2xl overflow-hidden border border-[#8B5CF6]/20 hover:border-[#8B5CF6]/50 transition-all flex flex-col justify-between">
                <div>
                  <img src={p.image} alt={p.title} className="w-full h-48 object-cover" />
                  <div className="p-6 space-y-3">
                    <span className="text-xs font-semibold text-[#8B5CF6]">{p.client}</span>
                    <h3 className="text-lg font-bold text-white">{p.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex flex-wrap gap-2">
                  {p.tags.map((t, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md bg-[#8B5CF6]/10 text-[#8B5CF6] text-xs font-medium border border-[#8B5CF6]/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white">Get In <span className="text-[#8B5CF6]">Touch</span></h2>
          <div className="w-16 h-1 bg-[#8B5CF6] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-4xl mx-auto">
          <div className="lg:col-span-5 bg-[#12121A] p-6 rounded-2xl border border-[#8B5CF6]/20 space-y-6">
            <h3 className="text-xl font-bold text-white">Contact Info</h3>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#8B5CF6]" />
                <span>saddamjacker7@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#8B5CF6]" />
                <span>+966 54 247 5245</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#8B5CF6]" />
                <span>Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#12121A] p-6 rounded-2xl border border-[#8B5CF6]/20">
            {submitted ? (
              <div className="text-center py-8 text-emerald-400 space-y-2">
                <CheckCircle2 className="w-12 h-12 mx-auto" />
                <p className="font-bold text-lg text-white">Message Sent Successfully!</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input type="text" required placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-[#08080D] border border-[#8B5CF6]/20 text-white text-sm focus:outline-none focus:border-[#8B5CF6]" />
                <input type="email" required placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-[#08080D] border border-[#8B5CF6]/20 text-white text-sm focus:outline-none focus:border-[#8B5CF6]" />
                <textarea rows="4" required placeholder="Your Message" className="w-full px-4 py-3 rounded-xl bg-[#08080D] border border-[#8B5CF6]/20 text-white text-sm focus:outline-none focus:border-[#8B5CF6]"></textarea>
                <button type="submit" className="w-full py-3 rounded-xl bg-[#8B5CF6] text-white font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* CV Modal */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#12121A] border border-[#8B5CF6]/30 p-6 rounded-2xl max-w-md w-full space-y-4 text-center">
            <h3 className="text-xl font-bold text-white">Download Sajjad Ali's CV</h3>
            <p className="text-slate-400 text-sm">Official Resume - Procurement & Document Control Specialist</p>
            <div className="pt-2 flex justify-center space-x-3">
              <button onClick={() => alert('CV Download option activated')} className="px-5 py-2.5 rounded-xl bg-[#8B5CF6] text-white font-semibold text-sm">
                Download PDF
              </button>
              <button onClick={() => setShowCvModal(false)} className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 font-semibold text-sm">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}