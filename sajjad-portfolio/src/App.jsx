import React, { useState, useEffect } from 'react';
import { 
  FileText, Database, ShieldCheck, Mail, Phone, MapPin, 
  Download, Menu, X, CheckCircle2, Award, GraduationCap, Briefcase, 
  ArrowRight, FileSpreadsheet, Layers, Cpu, CheckCircle, Calendar, MessageCircle, Globe
} from 'lucide-react';

export default function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState('en');

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

  const content = {
    en: {
      roleTitle: "Procurement & Purchasing Professional | Document Control & Odoo ERP Specialist",
      heroDesc: "Organized procurement specialist with practical experience in RFQs, Purchase Orders, supplier follow-ups, and advanced data management using Odoo ERP and Excel tracking systems at Scientific Systems Construction Company (SSCC).",
      exploreBtn: "Explore My Systems",
      contactBtn: "Contact Me",
      aboutTitle: "About Me",
      aboutDesc: "Dedicated procurement professional and document control specialist based in Riyadh, bridging operational logistics with advanced ERP management.",
      skillsTitle: "Technical Skills",
      certTitle: "Certifications & Qualifications",
      projTitle: "Featured Projects & Tracking Systems",
      projDesc: "Real-world procurement logs, material management dashboards, and Excel ERP tracking systems implemented at SSCC.",
      expTitle: "Work Experience",
      eduTitle: "Educational Background",
      getInTouch: "Get In Touch",
      location: "Riyadh, Saudi Arabia",
      company: "Scientific Systems Construction Company (SSCC)",
      downloadCv: "Download CV",
      whatsappChat: "Chat on WhatsApp",
      englishBtn: "English",
      arabicBtn: "العربية"
    },
    ar: {
      roleTitle: "أخصائي المشتريات والتموين | مراقبة الوثائق وأخصائي نظام Odoo ERP",
      heroDesc: "أخصائي مشريات منظم ذو خبرة عمليّة في طلبات الأسعار (RFQs)، أوامر الشراء (POs)، متابعة الموردين، وإدارة البيانات المتقدمة باستخدام نظام Odoo و Excel في شركة الأنظمة العلمية للمقاولات (SSCC).",
      exploreBtn: "استكشف أنظمتي",
      contactBtn: "اتصل بي",
      aboutTitle: "نبذة عني",
      aboutDesc: "أخصائي مشريات محترف ومختص في مراقبة الوثائق مقيم في الرياض، أربط بين الخدمات اللوجستية والإدارة المتقدمة لأنظمة ERP.",
      skillsTitle: "المهارات التقنية",
      certTitle: "الشهادات والمؤهلات",
      projTitle: "المشاريع المميزة وأنظمة التتبع",
      projDesc: "سجلات المشتريات الواقعية، لوحات تحكم إدارة المواد، وأنظمة تتبع Odoo المطبقة في SSCC.",
      expTitle: "خبرة العمل",
      eduTitle: "المخزون التعليمي",
      getInTouch: "ابق على تواصل",
      location: "الرياض، المملكة العربية السعودية",
      company: "شركة الأنظمة العلمية للمقاولات (SSCC)",
      downloadCv: "تحميل السيرة الذاتية",
      whatsappChat: "مراسلة عبر واتساب",
      englishBtn: "English",
      arabicBtn: "العربية"
    }
  };

  const t = content[lang];

  const projects = [
    {
      title: "Project Fanar - Inventory & Material Control",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "Real-time stock level tracking system for sewer materials, rubber rings, and safety equipment with dynamic balance formulas using Odoo ERP and Excel.",
      tags: ["Odoo ERP", "Advanced Excel", "Material Tracking", "Inventory"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project B.V.4 - Procurement & Material Log",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "Comprehensive procurement log tracking UPVC pipes, fittings, and safety gear with rigorous balance verification using Odoo and Excel logs.",
      tags: ["Procurement", "Excel Logs", "Supplier Follow-up", "Material Log"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project Homes - MSR & PO Tracking Log",
      client: "Scientific Systems Construction Company (SSCC)",
      desc: "Material Status Request (MSR) and Purchase Order (PO) tracking mechanism managing supplier payments and advance percentages implemented at SSCC.",
      tags: ["Odoo Purchase", "Payment Logs", "Vendor Management", "MSR"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  const certificates = [
    { title: "Procurement", issuer: "Alison", desc: "Learner Verification Certificate in core procurement processes and supplier management." },
    { title: "Odoo Purchase", issuer: "Odoo eLearning", desc: "Completed official course on Odoo Purchase module, RFQs, and automated workflows." },
    { title: "Introduction to Electronic Document Management", issuer: "Alison", desc: "Learner Verification Certificate focusing on digital document control and archiving." },
    { title: "Professional Diploma in Administration Management", issuer: "MTF Institute / Udemy", desc: "Advanced professional training in administrative organization and operations." },
    { title: "Microsoft Office (Word, Excel, PowerPoint)", issuer: "Udemy", desc: "Comprehensive certification covering advanced office automation and data spreadsheets." }
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
    { name: lang === 'ar' ? 'الرئيسية' : 'Home', href: '#home' },
    { name: lang === 'ar' ? 'عني' : 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: lang === 'ar' ? 'الشهادات' : 'Certificates', href: '#certificates' },
    { name: lang === 'ar' ? 'المشاريع' : 'Projects', href: '#projects' },
    { name: lang === 'ar' ? 'الخبرة' : 'Experience', href: '#experience' },
    { name: lang === 'ar' ? 'التعليم' : 'Education', href: '#education' },
    { name: lang === 'ar' ? 'اتصل بنا' : 'Contact', href: '#contact' },
  ];

  return (
    <div className={`min-h-screen bg-[#08080D] text-slate-100 font-sans selection:bg-purple-600 selection:text-white relative ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      
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
          {t.whatsappChat}
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
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-purple-400 transition-colors">Sajjad Ali Ansari</span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wider uppercase">SSCC Procurement</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-300 hover:text-purple-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-3 py-2 rounded-xl bg-[#12121A] border border-purple-500/30 text-purple-400 text-xs font-bold hover:bg-purple-600/20 transition-all flex items-center space-x-1.5"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? t.arabicBtn : t.englishBtn}</span>
            </button>

            <a href={cvLink} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm shadow-lg hover:opacity-90 transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="px-2.5 py-1.5 rounded-lg bg-[#12121A] border border-purple-500/30 text-purple-400 text-xs font-bold"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setNavOpen(!navOpen)} className="text-slate-300 hover:text-white p-2">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div className="lg:hidden bg-[#12121A] border-b border-purple-500/20 px-4 pt-3 pb-6 space-y-3 mt-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setNavOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-purple-600/20 hover:text-purple-400">
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a href={cvLink} target="_blank" rel="noopener noreferrer" className="w-full text-center block py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold shadow-lg">
                {t.downloadCv}
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
                <span>{t.location}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Sajjad Ali Ansari</span>
              </h1>

              <p className="text-xl sm:text-2xl font-medium text-slate-300">
                {t.roleTitle}
              </p>

              <p className="text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>{t.downloadCv}</span>
                </a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-7 py-3.5 rounded-xl bg-[#12121A] border border-purple-500/20 text-slate-200 font-bold text-sm hover:border-emerald-500 hover:text-emerald-400 transition-all flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>{t.whatsappChat}</span>
                </a>
              </div>

              <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-slate-400 text-sm">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>{t.location}</span>
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
              {t.aboutTitle}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-base sm:text-lg">
              {t.aboutDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <Briefcase className="w-6 h-6 text-purple-400" />
                <span>Professional Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Organized Procurement professional with proven practical experience in handling Requests for Quotations (RFQs), Purchase Orders (POs), supplier follow-ups, and procurement records at <strong>Scientific Systems Construction Company (SSCC)</strong> in Riyadh.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                أخصائي مشريات ذو خبرة عملية في إدارة أوامر الشراء، طلبات الأسعار، ومتابعة الموردين في شركة الأنظمة العلمية للمقاولات بالرياض.
              </p>
            </div>

            <div className="lg:col-span-6 bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <Award className="w-6 h-6 text-purple-400" />
                <span>Core Strengths & Expertise</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Odoo ERP (RFQs & POs)", "Advanced Excel Tracking", "Professional Document Control", "Supplier & Vendor Management"].map((item, idx) => (
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
              {t.skillsTitle}
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

      {/* Certificates Section */}
      <section id="certificates" className="py-24 bg-[#12121A]/50 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.certTitle}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-4 hover:border-purple-500/50 transition-all">
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                <p className="text-purple-400 font-semibold text-sm">{cert.issuer}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.projTitle}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-base">{t.projDesc}</p>
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
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{proj.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex flex-wrap gap-1.5">
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-purple-600/10 text-purple-400 text-xs font-medium border border-purple-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-[#12121A]/50 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.expTitle}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} className="bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <p className="text-purple-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1 sm:text-right">
                    <span className="inline-block bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20 font-medium">{exp.period}</span>
                    <p className="flex items-center sm:justify-end space-x-1 pt-1"><MapPin className="w-3.5 h-3.5" /><span>{exp.location}</span></p>
                  </div>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.eduTitle}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                <p className="text-purple-400 font-semibold text-sm">{edu.institution}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{edu.desc}</p>
                <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800">
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#12121A]/50 border-t border-purple-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              {t.getInTouch}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
            <p className="text-slate-400 text-base">Feel free to reach out for procurement roles or professional inquiries in Riyadh.</p>
          </div>

          <div className="max-w-3xl mx-auto bg-[#12121A] p-8 rounded-2xl border border-purple-500/20 text-center space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                  <p className="text-sm font-bold">{t.location}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 uppercase font-semibold">WhatsApp</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 hover:underline">+966 54 247 5245</a>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-slate-200">
                <div className="w-10 h-10 rounded-xl bg-purple-600/10 flex items-center justify-center text-purple-400 shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-slate-400 uppercase font-semibold">Company</p>
                  <p className="text-sm font-bold">SSCC</p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-800 flex justify-center gap-4">
              <a href={cvLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>{t.downloadCv}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappChat}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm bg-[#12121A]/30">
        <p>© {new Date().getFullYear()} Sajjad Ali Ansari. All rights reserved.</p>
      </footer>
    </div>
  );
}
