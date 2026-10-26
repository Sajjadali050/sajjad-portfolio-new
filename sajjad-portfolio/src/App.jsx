import React, { useState, useEffect } from 'react';
import { 
  FileText, Database, ShieldCheck, Mail, Phone, MapPin, 
  Download, Menu, X, CheckCircle2, Award, GraduationCap, Briefcase, 
  ArrowRight, FileSpreadsheet, Layers, Cpu, CheckCircle, Calendar, MessageCircle
} from 'lucide-react';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profilePhotoUrl = "https://i.imgur.com/6TM43Gv.jpg";
  const cvLink = "https://drive.google.com/file/d/1HsF6R3ee-G9Q5uEgCrS4Ueqk6WsyFEhr/view?usp=drivesdk";
  const whatsappLink = "https://wa.me/966542475245";

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
      desc: "Comprehensive procurement log tracking UPVC pipes, fittings, and safety gear with rigorous balance verification.",
      tags: ["Procurement", "Excel Logs", "Supplier Follow-up"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project Homes - MSR & PO Tracking Log",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "Material Status Request (MSR) and Purchase Order (PO) tracking mechanism managing supplier payments and advance percentages.",
      tags: ["Odoo Purchase", "Payment Logs", "Vendor Management"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const skills = [
    { name: "Odoo ERP (RFQs & POs)", level: 90, category: "ERP & Procurement" },
    { name: "Microsoft Excel (Advanced Tracking)", level: 95, category: "Data Management" },
    { name: "Document Control & Versioning", level: 88, category: "Administration" },
    { name: "Supplier Coordination & Pricing", level: 90, category: "Procurement" },
    { name: "MS Word, PowerPoint & Outlook", level: 92, category: "Office Tools" },
    { name: "Inventory & Stock Management", level: 89, category: "Operations" }
  ];

  const experiences = [
    {
      role: "Procurement / Purchasing Professional",
      company: "Scientific Systems Construction Company (SSCC)",
      period: "September 2026 - Present",
      location: "Riyadh, Saudi Arabia",
      desc: "Creating RFQs and Purchase Orders via Odoo ERP, coordinating supplier pricing and deliveries, and managing advanced Excel tracking sheets."
    },
    {
      role: "Document Controller",
      company: "Administrative Business Pattern Co.",
      period: "September 2024 - June 2026",
      location: "Riyadh, Saudi Arabia",
      desc: "Managed project files, version controls, and maintained physical & electronic document archives ensuring compliance and fast retrieval."
    }
  ];

  const education = [
    {
      degree: "Diploma in Computer Applications (DCA)",
      institution: "Ruma Technical Degree College, UP",
      period: "August 2023 - July 2024",
      desc: "Comprehensive training in MS Office suite, advanced Excel, database management, and computer fundamentals."
    },
    {
      degree: "High School (10th Pass)",
      institution: "Allahabad Board, India",
      period: "2013",
      desc: "Completed secondary education with foundational academic subjects."
    }
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#08080D] text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative">
      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span className="absolute right-16 bg-white text-slate-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-[#08080D]/90 backdrop-blur-md border-b border-purple-500/20 py-3 shadow-lg' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg text-white">SA</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-purple-400 transition-colors">Sajjad Ali</span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wider uppercase">Procurement & Systems</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href={cvLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button onClick={() => setNavOpen(!navOpen)} className="text-slate-300 hover:text-white p-2">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="lg:hidden bg-[#12121A] border-b border-purple-500/20 px-4 pt-3 pb-6 space-y-3 mt-3">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setNavOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-400">
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a href={cvLink} target="_blank" rel="noopener noreferrer" className="w-full text-center block py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg">
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Available in Riyadh, Saudi Arabia</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Sajjad Ali</span>
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                Procurement & Purchasing Professional | Document Control & Odoo ERP Specialist
              </p>

              <p className="text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Organized procurement specialist with practical experience in RFQs, Purchase Orders, supplier follow-ups, and advanced data management using Odoo ERP and Excel tracking systems at Scientific Systems Construction Company (SSCC).
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download CV</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl bg-[#12121A] border border-purple-500/20 text-slate-200 font-bold text-sm hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-slate-400 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
                  <span className="text-emerald-400 font-medium">Active in SSCC</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
                <div className="relative w-72 sm:w-80 h-96 rounded-2xl overflow-hidden bg-[#12121A] p-2 border border-purple-500/30 shadow-2xl">
                  <img 
                    src={profilePhotoUrl} 
                    alt="Sajjad Ali" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-[#08080D]/90 backdrop-blur-md p-3 rounded-xl border border-purple-500/20 text-center">
                    <p className="text-sm font-bold text-white">Sajjad Ali Ansari</p>
                    <p className="text-xs text-purple-400 font-medium">Procurement Officer @ SSCC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#12121A]/50 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-base sm:text-lg">
              Dedicated procurement professional and document control specialist based in Riyadh, bridging operational logistics with advanced ERP management.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Organized Procurement professional with proven practical experience in handling Requests for Quotations (RFQs), Purchase Orders (POs), supplier follow-ups, and procurement records. Currently contributing expertise at <strong>Scientific Systems Construction Company (SSCC)</strong> in Riyadh.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Equipped with strong foundational skills in computer applications (DCA) and comprehensive administrative diplomas, blending accurate data tracking with efficient supplier communication.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <Award className="w-6 h-6 text-purple-400" />
                <span>Core Strengths & Expertise</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Expert in Odoo ERP (RFQs & POs)", "Advanced Excel PO Tracking", "Professional Document Control", "Supplier & Vendor Management"].map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-[#08080D] border border-purple-500/10">
                    <CheckCircle className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Skills</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} className="bg-[#12121A] p-6 rounded-2xl border border-purple-500/20 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white text-base">{skill.name}</span>
                  <span className="text-xs text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">{skill.category}</span>
                </div>
                <div className="w-full bg-[#08080D] h-2.5 rounded-full overflow-hidden">
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 h-full rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-[#12121A]/50 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Projects & Systems</span>
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-base">Real-world procurement logs and ERP tracking systems implemented at SSCC.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} className="bg-[#12121A] rounded-2xl overflow-hidden border border-purple-500/20 flex flex-col justify-between group hover:border-purple-500/50 transition-all">
                <div>
                  <div className="relative h-48 overflow-hidden bg-slate-900">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#08080D]/80 backdrop-blur-md text-purple-400 text-xs font-semibold border border-purple-500/30">
                      {proj.client}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400
