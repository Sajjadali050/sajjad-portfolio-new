import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Download, ShieldCheck, ArrowRight, FileText, Mail, MapPin, 
  CheckCircle2, User, Briefcase, Award, CheckCircle, Database, 
  FileSpreadsheet, Settings, Cpu, Layers, GraduationCap, Calendar, Phone
} from 'lucide-react';

// --- Navbar Component ---
function Navbar({ scrolled }) {
  const [isOpen, setIsOpen] = useState(false);

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-darkBg/90 backdrop-blur-md border-b border-primaryPurple/20 shadow-lg shadow-purple-950/20 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primaryPurple to-neonViolet flex items-center justify-center shadow-glow group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-lg text-white">SA</span>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white group-hover:text-primaryPurple transition-colors">Sajjad Ali</span>
              <span className="block text-[10px] text-slate-400 font-medium tracking-wider uppercase">Procurement & Systems</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-sm font-medium text-slate-300 hover:text-primaryPurple transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a href="#contact" className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-primaryPurple to-neonViolet text-white font-semibold text-sm shadow-glow hover:opacity-95 transition-all flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Get in Touch</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white p-2 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden glass-card border-b border-primaryPurple/20 px-4 pt-3 pb-6 space-y-3 mt-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:bg-primaryPurple/20 hover:text-primaryPurple transition-colors">
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a href="#contact" onClick={() => setIsOpen(false)} className="w-full text-center block py-2.5 rounded-xl bg-gradient-to-r from-primaryPurple to-neonViolet text-white font-semibold shadow-glow">
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

// --- Hero Component ---
function Hero() {
  return (
    <section id="home" className="min-h-screen pt-32 pb-20 flex items-center relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primaryPurple/10 border border-primaryPurple/30 text-primaryPurple text-xs font-semibold tracking-wide animate-pulse">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Available in Riyadh, Saudi Arabia</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Sajjad Ali</span>
            </h1>

            <p className="text-xl sm:text-2xl font-medium text-slate-300">
              Procurement & Purchasing Professional | Document Control & Odoo ERP Specialist
            </p>

            <p className="text-base text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Organized procurement specialist with practical experience in RFQs, Purchase Orders, supplier follow-ups, and advanced data management using Odoo ERP and Excel tracking systems at Scientific Systems Construction Company (SSCC).
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a href="#projects" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-primaryPurple to-neonViolet text-white font-bold text-sm shadow-glow hover:scale-105 transition-all flex items-center space-x-2">
                <span>Explore My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contact" className="px-7 py-3.5 rounded-xl glass-card text-slate-200 font-bold text-sm hover:border-primaryPurple transition-all flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primaryPurple" />
                <span>Contact Me</span>
              </a>
            </div>

            <div className="pt-6 flex items-center justify-center lg:justify-start space-x-6 text-slate-400 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primaryPurple" />
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
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              
              <div className="relative w-72 sm:w-80 h-96 rounded-2xl overflow-hidden glass-card p-2 border border-primaryPurple/30">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
                  alt="Sajjad Ali" 
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-darkBg/80 backdrop-blur-md p-3 rounded-xl border border-primaryPurple/20 text-center">
                  <p className="text-sm font-bold text-white">Sajjad Ali Ansari</p>
                  <p className="text-xs text-primaryPurple font-medium">Procurement Officer @ SSCC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- About Component ---
function About() {
  const highlights = [
    "Expert in Odoo ERP (RFQs & Purchase Orders)",
    "Advanced Excel PO & Material Tracking",
    "Professional Document Control & Versioning",
    "Cross-Departmental & Supplier Coordination"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            Dedicated procurement professional and document control specialist based in Riyadh, bridging operational logistics with advanced ERP management.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-primaryPurple/20 space-y-4">
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <User className="w-6 h-6 text-primaryPurple" />
                <span>Professional Background</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Organized Procurement professional with proven practical experience in handling Requests for Quotations (RFQs), Purchase Orders (POs), supplier follow-ups, and procurement records. Currently contributing expertise at <strong>Scientific Systems Construction Company (SSCC)</strong> in Riyadh.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Equipped with strong foundational skills in computer applications (DCA) and comprehensive administrative diplomas, blending accurate data tracking with efficient supplier communication.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="glass-card p-8 rounded-2xl border border-primaryPurple/20 space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center space-x-3">
                <Award className="w-6 h-6 text-primaryPurple" />
                <span>Core Strengths & Expertise</span>
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3 rounded-xl bg-darkBg/50 border border-primaryPurple/10">
                    <CheckCircle className="w-5 h-5 text-primaryPurple shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-between text-sm text-slate-400">
                <div>
                  <span className="block text-white font-bold text-lg">Odoo ERP</span>
                  <span>System Proficiency</span>
                </div>
                <div>
                  <span className="block text-white font-bold text-lg">Excel</span>
                  <span>Advanced Tracking</span>
                </div>
                <div>
                  <span className="block text-white font-bold text-lg">Riyadh, KSA</span>
                  <span>Current Location</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Skills Component ---
function Skills() {
  const skillCategories = [
    {
      title: "ERP & Procurement",
      icon: <Database className="w-6 h-6 text-primaryPurple" />,
      skills: ["Odoo ERP", "RFQ Management", "Purchase Order Creation", "PO Tracking & Follow-up", "Quotation Analysis"]
    },
    {
      title: "Data & Spreadsheets",
      icon: <FileSpreadsheet className="w-6 h-6 text-neonViolet" />,
      skills: ["Microsoft Excel (Advanced Tracking)", "Data Management", "MSR & Payment Logs", "Formulas & Reporting"]
    },
    {
      title: "Document Control",
      icon: <Layers className="w-6 h-6 text-primaryPurple" />,
      skills: ["Version Control", "Electronic & Physical Filing", "Document Verification", "Confidential Record Handling"]
    },
    {
      title: "Office & Productivity",
      icon: <Cpu className="w-6 h-6 text-neonViolet" />,
      skills: ["Microsoft Word", "Microsoft PowerPoint", "Microsoft Outlook", "Internet & Computer Fundamentals"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-darkBg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Skills</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            Professional competencies backed by formal certifications and hands-on enterprise experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl border border-primaryPurple/20 hover:border-primaryPurple/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primaryPurple/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-4">{cat.title}</h3>
              <ul className="space-y-2.5">
                {cat.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center space-x-2 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primaryPurple"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Projects Component ---
function Projects() {
  const projects = [
    {
      title: "Project Fanar - Material & Stock Control System",
      client: "Scientific Systems Construction Company (SSCC)",
      description: "An advanced Excel and Odoo ERP-integrated tracking system for managing sewer materials, safety equipment, and inventory stock updates in real-time.",
      tech: ["Odoo ERP", "Advanced Excel", "Material Tracking", "Inventory Management"],
      features: [
        "Automated incoming and outgoing material tracking",
        "Dynamic stock level calculations and shortage alerts",
        "Supplier coordination logs and categorization"
      ],
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project B.V.4 - Procurement & Safety Log",
      client: "Scientific Systems Construction Company (SSCC)",
      description: "Comprehensive procurement log tracking UPVC pipes, rubber rings, fittings, and safety gear with strict balance verification and status monitoring.",
      tech: ["Procurement ERP", "Excel Logs", "Supplier Follow-up", "Safety Inventory"],
      features: [
        "Precise unit price and balance reconciliation",
        "Safety gear and worker equipment tracking",
        "Automated status updates for pending orders"
      ],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Project Homes - MSR & PO Tracking Log",
      client: "Scientific Systems Construction Company (SSCC)",
      description: "A robust Material Status Request (MSR) and Purchase Order (PO) tracking mechanism managing supplier payments, advance percentages, and delivery schedules.",
      tech: ["Odoo Purchase", "Excel Dashboards", "Payment Scheduling", "Vendor Management"],
      features: [
        "End-to-end MSR and PO number cross-referencing",
        "Milestone and advance payment term tracking",
        "Delay analysis and supplier follow-up automation"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Projects & Systems</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            Real-world procurement logs, material management dashboards, and ERP tracking systems implemented at SSCC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj, idx) => (
            <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-primaryPurple/20 hover:border-primaryPurple/50 transition-all flex flex-col justify-between group">
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-900">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-darkBg via-transparent to-transparent"></div>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-darkBg/80 backdrop-blur-md text-primaryPurple text-xs font-semibold border border-primaryPurple/30">
                    {proj.client}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primaryPurple transition-colors">{proj.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{proj.description}</p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Features:</p>
                    {proj.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primaryPurple shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t, tIdx) => (
                    <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-primaryPurple/10 text-primaryPurple text-xs font-medium border border-primaryPurple/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Experience Component ---
function Experience() {
  const experiences = [
    {
      role: "Procurement / Purchasing Professional",
      company: "Scientific Systems Construction Company (SSCC)",
      location: "Riyadh, Saudi Arabia",
      period: "September 2026 - Present",
      description: [
        "Create and manage Requests for Quotation (RFQs) and Purchase Orders (POs) using Odoo ERP.",
        "Coordinate with suppliers regarding quotations, pricing, material availability, and delivery updates.",
        "Maintain an Excel-based PO tracking sheet for status, supplier follow-ups, and pending orders.",
        "Coordinate directly with internal departments regarding purchasing requirements and document records."
      ]
    },
    {
      role: "Document Controller",
      company: "Administrative Business Pattern Co.",
      location: "Riyadh, Saudi Arabia",
      period: "September 2024 - June 2026",
      description: [
        "Managed and maintained project documents and records with proper organization and version control.",
        "Updated project and client information in the document management system.",
        "Maintained electronic and physical filing systems ensuring rapid document retrieval.",
        "Checked documents for accuracy, completeness, and compliance with company requirements."
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-darkBg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            My professional career path in procurement, purchasing, and document management in Riyadh.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-primaryPurple/20 relative group hover:border-primaryPurple/50 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primaryPurple transition-colors">{exp.role}</h3>
                  <p className="text-primaryPurple font-semibold text-base">{exp.company}</p>
                </div>
                <div className="flex flex-col sm:items-end space-y-1 text-xs text-slate-400 font-medium">
                  <div className="flex items-center space-x-1.5 bg-primaryPurple/10 px-3 py-1 rounded-full border border-primaryPurple/20 text-primaryPurple">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center space-x-1 pt-1">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2.5 pt-2">
                {exp.description.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start space-x-3 text-sm text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-primaryPurple shrink-0 mt-2"></span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Education Component ---
function Education() {
  const educationList = [
    {
      degree: "Diploma in Computer Applications (DCA)",
      institution: "Ruma Technical Degree College",
      location: "Uttar Pradesh",
      period: "August 2023 - July 2024",
      details: "Focused on MS Word, MS Excel, MS PowerPoint, MS Outlook, Internet & Computer Fundamentals, and Basic Programming."
    },
    {
      degree: "High School (10th Pass)",
      institution: "Allahabad Board",
      location: "India",
      period: "2013",
      details: "Completed foundational secondary education."
    }
  ];

  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Educational <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Background</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            Academic qualifications and computer application training.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationList.map((edu, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl border border-primaryPurple/20 hover:border-primaryPurple/50 transition-all space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primaryPurple/10 flex items-center justify-center text-primaryPurple">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
              <p className="text-primaryPurple font-semibold text-sm">{edu.institution}</p>
              <p className="text-slate-300 text-sm leading-relaxed">{edu.details}</p>
              
              <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-800">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-primaryPurple" />
                  <span>{edu.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3.5 h-3.5 text-primaryPurple" />
                  <span>{edu.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Contact Component ---
function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-darkBg/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-primaryPurple to-neonViolet">Touch</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-primaryPurple to-neonViolet mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-base sm:text-lg">
            Feel free to reach out for procurement roles, collaboration, or professional inquiries in Riyadh.
          </p>
        </div>

        <div className="max-w-2xl mx-auto glass-card p-8 rounded-2xl border border-primaryPurple/20 space-y-6 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-around gap-6">
            <div className="flex items-center space-x-3 text-slate-200">
              <div className="w-10 h-10 rounded-xl bg-primaryPurple/10 flex items-center justify-center text-primaryPurple">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase font-semibold">Location</p>
                <p className="text-sm font-bold">Riyadh, Saudi Arabia</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-slate-200">
              <div className="w-10 h-10 rounded-xl bg-primaryPurple/10 flex items-center justify-center text-primaryPurple">
                <Briefcase className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs text-slate-400 uppercase font-semibold">Company</p>
                <p className="text-sm font-bold">SSCC</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- Footer Component ---
function Footer() {
  return (
    <footer className="py-8 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Sajjad Ali. All rights reserved.</p>
    </footer>
  );
}

// --- Main App Component ---
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-darkBg text-slate-100 overflow-x-hidden relative">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primaryPurple/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-neonViolet/10 rounded-full blur-[140px] pointer-events-none"></div>

      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
