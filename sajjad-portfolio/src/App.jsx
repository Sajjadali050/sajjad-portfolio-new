import React, { useState, useEffect } from 'react';
import { 
  FileText, Database, ShieldCheck, Mail, Phone, MapPin, 
  Download, Menu, X, CheckCircle2, Award, GraduationCap, Briefcase, 
  ArrowUpRight, FileSpreadsheet, Layers, Cpu, CheckCircle, Calendar, MessageCircle, Globe
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

  const profilePhotoUrl = "https://imgur.com/zYbPdnl.jpg";
  const cvLink = "https://drive.google.com/file/d/1HsF6R3ee-G9Q5uEgCrS4Ueqk6WsyFEhr/view?usp=drivesdk";
  const whatsappLink = "https://wa.me/966542475245";

  const colors = {
    bgPrimary: "#18211B",
    bgSecondary: "#253328",
    sageGreen: "#A3B899",
    lightSage: "#CCE0C5",
    creamWhite: "#F5F5F0",
    mutedText: "#9EADA0"
  };

  const content = {
    en: {
      roleTitle: "Procurement & Purchasing Professional | Document Control & Odoo ERP Specialist",
      heroDesc: "Organized procurement specialist with practical experience in RFQs, Purchase Orders, supplier follow-ups, and advanced data management using Odoo ERP and Excel tracking systems at Scientific Systems Construction Company (SSCC).",
      exploreBtn: "Explore Projects",
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
      client: "SSCC",
      desc: "Real-time stock level tracking system for sewer materials, rubber rings, and safety equipment with dynamic balance formulas using Odoo ERP and Excel.",
      tags: ["Odoo ERP", "Advanced Excel", "Material Tracking", "Inventory"],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project B.V.4 - Procurement & Material Log",
      client: "SSCC",
      desc: "Comprehensive procurement log tracking UPVC pipes, fittings, and safety gear with rigorous balance verification using Odoo and Excel logs.",
      tags: ["Procurement", "Excel Logs", "Supplier Follow-up", "Material Log"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project Homes - MSR & PO Tracking Log",
      client: "SSCC",
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
    <div style={{ backgroundColor: colors.bgPrimary, color: colors.creamWhite }} className={`min-h-screen font-sans relative ${lang === 'ar' ? 'rtl' : 'ltr'}`}>
      
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group font-bold"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
        <span style={{ backgroundColor: colors.bgSecondary, color: colors.creamWhite, borderColor: `${colors.sageGreen}40` }} className="absolute right-16 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border">
          {t.whatsappChat}
        </span>
      </a>

      <nav style={{ backgroundColor: scrolled ? `${colors.bgPrimary}F0` : 'transparent', borderColor: `${colors.sageGreen}30` }} className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'backdrop-blur-md border-b py-3 shadow-lg' : 'py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <div style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }} className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg font-extrabold text-lg">
              SA
            </div>
            <div>
              <span style={{ color: colors.creamWhite }} className="font-bold text-lg tracking-tight">Sajjad Ali Ansari</span>
              <span style={{ color: colors.mutedText }} className="block text-[10px] font-medium tracking-wider uppercase">SSCC Procurement</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} style={{ color: colors.mutedText }} className="text-sm font-medium hover:opacity-80 transition-opacity">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}40`, color: colors.sageGreen }}
              className="px-3 py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5"
            >
              <Globe className="w-4 h-4" />
              <span>{lang === 'en' ? t.arabicBtn : t.englishBtn}</span>
            </button>

            <a href={cvLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }} className="px-5 py-2.5 rounded-xl font-semibold text-sm shadow-lg transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>{t.downloadCv}</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}40`, color: colors.sageGreen }}
              className="px-2.5 py-1.5 rounded-lg border text-xs font-bold"
            >
              {lang === 'en' ? 'AR' : 'EN'}
            </button>
            <button onClick={() => setNavOpen(!navOpen)} style={{ color: colors.mutedText }} className="p-2">
              {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {navOpen && (
          <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="lg:hidden border-b px-4 pt-3 pb-6 space-y-3 mt-3">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setNavOpen(false)} style={{ color: colors.creamWhite }} className="block px-3 py-2 rounded-lg text-base font-medium">
                {link.name}
              </a>
            ))}
            <div className="pt-2">
              <a href={cvLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }} className="w-full text-center block py-2.5 rounded-xl font-semibold shadow-lg">
                {t.downloadCv}
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}40`, color: colors.sageGreen }} className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full border text-xs font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{t.location}</span>
              </div>

              <h1 style={{ color: colors.creamWhite }} className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
                Hi, I'm <span style={{ color: colors.sageGreen }}>Sajjad Ali Ansari</span>
              </h1>

              <p style={{ color: colors.mutedText }} className="text-xl sm:text-2xl font-medium">
                {t.roleTitle}
              </p>

              <p style={{ color: colors.mutedText }} className="text-base max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                {t.heroDesc}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <a href="#projects" style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }} className="px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center space-x-2">
                  <span>{t.exploreBtn}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a href="#contact" style={{ borderColor: `${colors.mutedText}60`, color: colors.creamWhite }} className="px-6 py-3 rounded-xl bg-transparent border font-bold text-sm transition-all flex items-center space-x-2">
                  <span>{t.contactBtn}</span>
                </a>
              </div>

              <div className="pt-8 grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
                <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}25` }} className="p-4 rounded-xl border">
                  <p style={{ color: colors.sageGreen }} className="text-2xl font-bold">03+</p>
                  <p style={{ color: colors.mutedText }} className="text-xs">Projects</p>
                </div>
                <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}25` }} className="p-4 rounded-xl border">
                  <p style={{ color: colors.creamWhite }} className="text-2xl font-bold">Clean</p>
                  <p style={{ color: colors.mutedText }} className="text-xs">Code & UI</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group">
                <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}40` }} className="w-72 sm:w-80 h-96 rounded-2xl overflow-hidden p-2 border shadow-2xl relative">
                  <img 
                    src={profilePhotoUrl} 
                    alt="Sajjad Ali" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div style={{ backgroundColor: `${colors.bgPrimary}FA`, borderColor: `${colors.sageGreen}30` }} className="absolute bottom-4 left-4 right-4 backdrop-blur-md p-3 rounded-xl border text-center">
                    <p style={{ color: colors.creamWhite }} className="text-sm font-bold">Sajjad Ali Ansari</p>
                    <p style={{ color: colors.sageGreen }} className="text-xs font-medium">Procurement Officer @ SSCC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ backgroundColor: `${colors.bgSecondary}60`, borderColor: `${colors.sageGreen}20` }} className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.aboutTitle}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
            <p style={{ color: colors.mutedText }} className="text-base sm:text-lg">
              {t.aboutDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="lg:col-span-6 p-8 rounded-2xl border space-y-4">
              <h3 style={{ color: colors.creamWhite }} className="text-xl font-bold flex items-center space-x-3">
                <Briefcase style={{ color: colors.sageGreen }} className="w-6 h-6" />
                <span>Professional Background</span>
              </h3>
              <p style={{ color: colors.mutedText }} className="leading-relaxed text-sm sm:text-base">
                Organized Procurement professional with proven practical experience in handling Requests for Quotations (RFQs), Purchase Orders (POs), supplier follow-ups, and procurement records at <strong>Scientific Systems Construction Company (SSCC)</strong> in Riyadh.
              </p>
              <p style={{ color: colors.mutedText }} className="leading-relaxed text-sm sm:text-base">
                أخصائي مشريات ذو خبرة عملية في إدارة أوامر الشراء، طلبات الأسعار، ومتابعة الموردين في شركة الأنظمة العلمية للمقاولات بالرياض.
              </p>
            </div>

            <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="lg:col-span-6 p-8 rounded-2xl border space-y-6">
              <h3 style={{ color: colors.creamWhite }} className="text-xl font-bold flex items-center space-x-3">
                <Award style={{ color: colors.sageGreen }} className="w-6 h-6" />
                <span>Core Strengths & Expertise</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Odoo ERP (RFQs & POs)", "Advanced Excel Tracking", "Professional Document Control", "Supplier & Vendor Management"].map((item, idx) => (
                  <div key={idx} style={{ backgroundColor: colors.bgPrimary, borderColor: `${colors.sageGreen}20` }} className="flex items-start space-x-3 p-3 rounded-xl border">
                    <CheckCircle style={{ color: colors.sageGreen }} className="w-5 h-5 shrink-0 mt-0.5" />
                    <span style={{ color: colors.creamWhite }} className="text-sm font-medium">{item}</span>
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
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.skillsTitle}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, idx) => (
              <div key={idx} style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="p-6 rounded-2xl border space-y-3">
                <div className="flex justify-between items-center">
                  <span style={{ color: colors.creamWhite }} className="font-bold text-base">{skill.name}</span>
                  <span style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }} className="text-xs font-bold px-2.5 py-1 rounded-md">{skill.category}</span>
                </div>
                <div style={{ backgroundColor: colors.bgPrimary }} className="w-full h-2.5 rounded-full overflow-hidden">
                  <div style={{ backgroundColor: colors.sageGreen }} className="h-full rounded-full" style={{ width: `${skill.level}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" style={{ backgroundColor: `${colors.bgSecondary}60`, borderColor: `${colors.sageGreen}20` }} className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.certTitle}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <div key={idx} style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="p-8 rounded-2xl border space-y-4 hover:scale-[1.02] transition-transform">
                <div style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen }} className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <h3 style={{ color: colors.creamWhite }} className="text-xl font-bold">{cert.title}</h3>
                <p style={{ color: colors.sageGreen }} className="font-semibold text-sm">{cert.issuer}</p>
                <p style={{ color: colors.mutedText }} className="text-sm leading-relaxed">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.projTitle}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
            <p style={{ color: colors.mutedText }} className="text-base">{t.projDesc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((proj, idx) => (
              <div key={idx} style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="rounded-2xl overflow-hidden border flex flex-col justify-between group hover:scale-[1.02] transition-transform">
                <div>
                  <div style={{ backgroundColor: colors.bgPrimary }} className="relative h-48 overflow-hidden">
                    <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span style={{ backgroundColor: `${colors.bgPrimary}D0`, color: colors.sageGreen, borderColor: `${colors.sageGreen}40` }} className="absolute top-3 right-3 px-3 py-1 rounded-full backdrop-blur-md text-xs font-semibold border">
                      {proj.client}
                    </span>
                  </div>
                  <div className="p-6 space-y-4">
                    <h3 style={{ color: colors.creamWhite }} className="text-xl font-bold">{proj.title}</h3>
                    <p style={{ color: colors.mutedText }} className="text-sm leading-relaxed">{proj.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0 flex flex-wrap gap-1.5">
                  {proj.tags.map((t, tIdx) => (
                    <span key={tIdx} style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen, borderColor: `${colors.sageGreen}30` }} className="px-2.5 py-1 rounded-lg text-xs font-medium border">
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
      <section id="experience" style={{ backgroundColor: `${colors.bgSecondary}60`, borderColor: `${colors.sageGreen}20` }} className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.expTitle}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="p-8 rounded-2xl border space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h3 style={{ color: colors.creamWhite }} className="text-xl font-bold">{exp.role}</h3>
                    <p style={{ color: colors.sageGreen }} className="font-semibold">{exp.company}</p>
                  </div>
                  <div style={{ color: colors.mutedText }} className="text-xs space-y-1 sm:text-right">
                    <span style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen, borderColor: `${colors.sageGreen}30` }} className="inline-block px-3 py-1 rounded-full border font-medium">{exp.period}</span>
                    <p className="flex items-center sm:justify-end space-x-1 pt-1"><MapPin className="w-3.5 h-3.5" /><span>{exp.location}</span></p>
                  </div>
                </div>
                <p style={{ color: colors.mutedText }} className="text-sm leading-relaxed">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.eduTitle}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, idx) => (
              <div key={idx} style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="p-8 rounded-2xl border space-y-4">
                <div style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen }} className="w-12 h-12 rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 style={{ color: colors.creamWhite }} className="text-xl font-bold">{edu.degree}</h3>
                <p style={{ color: colors.sageGreen }} className="font-semibold text-sm">{edu.institution}</p>
                <p style={{ color: colors.mutedText }} className="text-sm leading-relaxed">{edu.desc}</p>
                <div style={{ borderColor: `${colors.sageGreen}20`, color: colors.mutedText }} className="flex items-center justify-between text-xs pt-4 border-t">
                  <span>{edu.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ backgroundColor: `${colors.bgSecondary}60`, borderColor: `${colors.sageGreen}20` }} className="py-24 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 style={{ color: colors.creamWhite }} className="text-3xl sm:text-4xl font-extrabold mb-4">
              {t.getInTouch}
            </h2>
            <div style={{ backgroundColor: colors.sageGreen }} className="w-16 h-1 mx-auto rounded-full mb-6"></div>
            <p style={{ color: colors.mutedText }} className="text-base">Feel free to reach out for procurement roles or professional inquiries in Riyadh.</p>
          </div>

          <div style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}30` }} className="max-w-3xl mx-auto p-8 rounded-2xl border text-center space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div style={{ color: colors.creamWhite }} className="flex items-center space-x-3">
                <div style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen }} className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p style={{ color: colors.mutedText }} className="text-xs uppercase font-semibold">Location</p>
                  <p className="text-sm font-bold">{t.location}</p>
                </div>
              </div>

              <div style={{ color: colors.creamWhite }} className="flex items-center space-x-3">
                <div style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen }} className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p style={{ color: colors.mutedText }} className="text-xs uppercase font-semibold">WhatsApp</p>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ color: colors.sageGreen }} className="text-sm font-bold hover:underline">+966 54 247 5245</a>
                </div>
              </div>

              <div style={{ color: colors.creamWhite }} className="flex items-center space-x-3">
                <div style={{ backgroundColor: `${colors.sageGreen}20`, color: colors.sageGreen }} className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p style={{ color: colors.mutedText }} className="text-xs uppercase font-semibold">Company</p>
                  <p className="text-sm font-bold">SSCC</p>
                </div>
              </div>
            </div>

            <div style={{ borderColor: `${colors.sageGreen}20` }} className="pt-6 border-t flex justify-center gap-4">
              <a href={cvLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors.sageGreen, color: colors.bgPrimary }} className="px-6 py-3 rounded-xl font-bold text-sm shadow-md transition-all flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <span>{t.downloadCv}</span>
              </a>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: colors.bgSecondary, borderColor: `${colors.sageGreen}40`, color: colors.sageGreen }} className="px-6 py-3 rounded-xl border font-bold text-sm shadow-md transition-all flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>{t.whatsappChat}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: colors.bgPrimary, borderColor: `${colors.sageGreen}20`, color: colors.mutedText }} className="py-8 border-t text-center text-sm">
        <p>© {new Date().getFullYear()} Sajjad Ali Ansari. All rights reserved.</p>
      </footer>
    </div>
  );
}
