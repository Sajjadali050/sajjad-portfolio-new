import React, { useState, useEffect } from 'react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  const isAr = lang === 'ar';

  return (
    <div className={`min-h-screen bg-[#0B0B12] text-[#f3f6fb] font-sans selection:bg-[#7C3AED] selection:text-white ${isAr ? 'rtl' : 'ltr'}`} style={{ fontFamily: isAr ? '"Noto Sans Arabic", "Tahoma", Arial, sans-serif' : 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      
      {/* Topbar / Navigation */}
      <header className="sticky top-0 z-20 bg-[#0B0B12]/90 border-b border-[#59447A]/38 backdrop-blur-md">
        <div className="max-w-[1160px] mx-auto px-5 min-h-[76px] flex items-center justify-between gap-5">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-[42px] w-[42px] rounded-[13px] grid place-items-center bg-gradient-to-br from-[#7C3AED] to-[#C4B5FD] text-[#100B1B] font-black tracking-tighter">
              SA
            </div>
            <div>
              <span className="text-[0.96rem] font-extrabold leading-tight block">Sajjad Ali Ansari</span>
              <span className="text-stone-400 text-[0.68rem] font-semibold tracking-wider uppercase block mt-1">
                {isAr ? 'المشتريات والأنظمة' : 'Procurement & Systems'}
              </span>
            </div>
          </a>

          <nav className={`lg:flex items-center gap-[22px] text-[#D7CFE8] text-[0.87rem] ${navOpen ? 'flex flex-col absolute top-[68px] left-0 right-0 p-5 bg-[#100D17] border-b border-[#30263F]' : 'hidden lg:flex'}`}>
            <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'نبذة' : 'About'}</a>
            <a href="#skills" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'المهارات' : 'Skills'}</a>
            <a href="#projects" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'المشاريع' : 'Projects'}</a>
            <a href="#experience" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'الخبرة' : 'Experience'}</a>
            <a href="#education" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'التعليم' : 'Education'}</a>
            <a href="#contact" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'التواصل' : 'Contact'}</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button 
              onClick={toggleLanguage} 
              className="border border-[#493765] bg-[#171321] text-[#f3f6fb] px-3.5 py-2.5 rounded-xl cursor-pointer font-bold text-xs hover:border-[#8B5CF6] transition-colors"
            >
              {isAr ? 'English' : 'العربية'}
            </button>
            <button 
              onClick={() => setNavOpen(!navOpen)} 
              className="lg:hidden border border-[#493765] bg-[#171321] text-[#f3f6fb] p-2.5 rounded-xl cursor-pointer font-bold"
            >
              {navOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section id="home" className="py-[74px] px-5 max-w-[1160px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-[54px] items-center">
            <div>
              <div className="inline-flex items-center gap-2.5 border border-[#3B2B5C] bg-[#2C1A4E]/50 px-3 py-1.5 rounded-full text-[#E9DDFF] text-[0.78rem] font-bold">
                <span className="w-1.75 h-1.75 rounded-full bg-[#57dfad] shadow-[0_0_0_4px_rgba(87,223,173,0.1)] inline-block"></span>
                {isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}
              </div>

              <h1 className="text-[clamp(2.75rem,6vw,5rem)] tracking-tight leading-[1.05] my-6 font-extrabold">
                {isAr ? (
                  <>مسؤول مشتريات <span className="block text-[#8B5CF6]">وتوريد</span></>
                ) : (
                  <>Procurement & <span className="block text-[#8B5CF6]">Purchasing Officer</span></>
                )}
              </h1>

              <p className="text-[#C2B8D4] text-[1.07rem] max-w-[660px] mb-6 leading-relaxed">
                {isAr 
                  ? 'متخصص في المشتريات والتوريد، لديه خبرة عملية في طلبات عروض الأسعار وأوامر الشراء ومتابعة الموردين وتتبع المواد وضبط المستندات باستخدام نظام Odoo ERP وجداول Excel.'
                  : 'Procurement and purchasing professional with practical experience in RFQs, purchase orders, supplier follow-ups, material tracking, and document control using Odoo ERP and Excel-based tracking systems.'}
              </p>

              <div className="flex gap-2.5 flex-wrap mb-8">
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">Odoo ERP</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">RFQs & POs</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">Advanced Excel Tracking</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">{isAr ? 'تنسيق الموردين' : 'Supplier Coordination'}</span>
              </div>

              <div className="flex gap-3 flex-wrap">
                <a href="Sajjad_Ali_Ansari_CV.pdf" download className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-[13px] font-bold text-sm bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></svg>
                  {isAr ? 'تحميل السيرة الذاتية (PDF)' : 'Download CV (PDF)'}
                </a>
                <a href="#projects" className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-[13px] font-bold text-sm bg-[#15121F] border border-[#3D3151] text-[#F4EEFF] hover:border-[#8B5CF6] hover:-translate-y-0.5 transition-all">
                  {isAr ? 'استعراض المشاريع ←' : 'Explore Projects ↗'}
                </a>
              </div>
            </div>

            {/* Profile Image Card */}
            <div className="relative max-w-[395px] mx-auto w-full">
              <div className="absolute inset-[8%_0_0_6%] rounded-[42px] bg-gradient-to-br from-[#7C3AED]/35 to-[#C4B5FD]/10 blur-[30px]"></div>
              <div className="relative aspect-[4/4.65] border border-[#493765] rounded-[28px] overflow-hidden bg-gradient-to-br from-[#21182F] to-[#100D17] shadow-2xl flex flex-col items-center justify-center">
                <img src="https://imgur.com/zYbPdnl.jpg" alt="Sajjad Ali Ansari" className="w-full h-full object-cover" />
              </div>
              <div className="absolute z-10 bottom-6 left-[-22px] p-4 rounded-[15px] border border-[#493765] bg-[#100D17]/96 shadow-xl">
                <strong className="block text-sm">Odoo ERP + Excel</strong>
                <span className="block text-[#A79CB8] text-xs mt-0.5">{isAr ? 'سير عمل تتبع المشتريات' : 'Procurement tracking workflow'}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="border-y border-[#59447A]/38 bg-[#100D17]/72 py-6">
          <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:border-r border-[#59447A]/38 pr-4">
              <strong className="block text-base">{isAr ? 'عمليات المشتريات' : 'Procurement Operations'}</strong>
              <span className="block text-[#A79CB8] text-sm mt-1">{isAr ? 'طلبات الأسعار وأوامر الشراء ومتابعة الموردين' : 'RFQs, purchase orders & supplier follow-ups'}</span>
            </div>
            <div className="md:border-r border-[#59447A]/38 pr-4">
              <strong className="block text-base">{isAr ? 'تتبع المواد والمخزون' : 'Material & Inventory Tracking'}</strong>
              <span className="block text-[#A79CB8] text-sm mt-1">{isAr ? 'سجلات Odoo ERP وExcel' : 'Odoo ERP and Excel logs'}</span>
            </div>
            <div>
              <strong className="block text-base">{isAr ? 'ضبط المستندات' : 'Document Control'}</strong>
              <span className="block text-[#A79CB8] text-sm mt-1">{isAr ? 'السجلات وإدارة الإصدارات والأرشفة الرقمية' : 'Records, versioning & digital archives'}</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '01 / الملف المهني' : '01 / Profile'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">
              {isAr ? <>تركيز على المشتريات، <span className="text-[#8B5CF6]">والأنظمة.</span></> : <>Procurement-minded. <span className="text-[#8B5CF6]">Systems-focused.</span></>}
            </h2>
            <p className="text-[#A79CB8]">{isAr ? 'مزيج عملي من تنسيق الشراء ودقة التتبع والإدارة المنظمة للمستندات.' : 'A practical mix of purchasing coordination, tracking discipline, and organized document management.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl">
              <h3 className="text-xl font-bold mb-3">{isAr ? 'الملخص المهني' : 'Professional Summary'}</h3>
              <p className="text-[#C2B8D4] leading-relaxed text-sm md:text-base">
                {isAr 
                  ? 'أعمل في الرياض بالمملكة العربية السعودية، ولدي خبرة في شركة Scientific Systems Construction Company (SSCC) في طلبات عروض الأسعار وأوامر الشراء وتنسيق الموردين وسجلات المشتريات وتتبع المواد. كما تشمل خبرتي السابقة في ضبط المستندات تنظيم الملفات وإدارة الإصدارات والأرشيف الورقي والإلكتروني.'
                  : 'Based in Riyadh, Saudi Arabia, with experience at Scientific Systems Construction Company (SSCC) handling RFQs, POs, supplier coordination, procurement records, and material tracking. Previous document control experience includes file organization, version control, and physical and electronic archives.'}
              </p>
            </article>
            <article className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl">
              <h3 className="text-xl font-bold mb-3">{isAr ? 'نقاط القوة الأساسية' : 'Core Strengths'}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'نظام Odoo ERP: عروض الأسعار وأوامر الشراء' : 'Odoo ERP: RFQs & purchase orders'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'التتبع المتقدم باستخدام Excel' : 'Advanced Excel tracking'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'تنسيق الموردين والبائعين' : 'Supplier and vendor coordination'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'ضبط المستندات وإدارة الإصدارات' : 'Document control and versioning'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'إدارة المخزون والمستودعات' : 'Inventory and stock management'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'أدوات Microsoft Office' : 'MS Office tools'}</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '02 / المهارات' : '02 / Capabilities'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'المهارات والأدوات' : 'Skills & tools'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'الأدوات والمهارات العملية الواردة في الملف المهني الحالي.' : 'Tools and day-to-day capabilities listed in the existing portfolio.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">ERP</div>
              <h3 className="font-bold text-base mb-1">Odoo ERP</h3>
              <p className="text-[#A79CB8] text-sm">{isAr ? 'طلبات عروض الأسعار وأوامر الشراء وسير عمل المشتريات.' : 'RFQs, purchase orders, and procurement workflows.'}</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">XL</div>
              <h3 className="font-bold text-base mb-1">Microsoft Excel</h3>
              <p className="text-[#A79CB8] text-sm">{isAr ? 'جداول تتبع متقدمة والأرصدة وسجلات المواد.' : 'Advanced tracking sheets, balances, and material logs.'}</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">DC</div>
              <h3 className="font-bold text-base mb-1">{isAr ? 'ضبط المستندات' : 'Document Control'}</h3>
              <p className="text-[#A79CB8] text-sm">{isAr ? 'تنظيم الملفات وإدارة الإصدارات واسترجاع السجلات.' : 'File organization, versioning, and record retrieval.'}</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">SC</div>
              <h3 className="font-bold text-base mb-1">{isAr ? 'تنسيق الموردين' : 'Supplier Coordination'}</h3>
              <p className="text-[#A79CB8] text-sm">{isAr ? 'أسعار الموردين والمتابعة وتنسيق التسليم.' : 'Supplier pricing, follow-ups, and delivery coordination.'}</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">INV</div>
              <h3 className="font-bold text-base mb-1">{isAr ? 'المخزون والمواد' : 'Inventory & Materials'}</h3>
              <p className="text-[#A79CB8] text-sm">{isAr ? 'متابعة مستويات المخزون والتحقق من أرصدة المواد.' : 'Stock-level monitoring and material balance verification.'}</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">MS</div>
              <h3 className="font-bold text-base mb-1">Microsoft Office</h3>
              <p className="text-[#A79CB8] text-sm">Word, PowerPoint, and Outlook.</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '03 / نماذج العمل' : '03 / Work samples'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'أبرز مشاريع المشتريات' : 'Featured procurement projects'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'الأوصاف التالية مستندة إلى أمثلة العمل الواردة في الملف المقدم.' : 'Project descriptions based on supplied portfolio records.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18]">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 01</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{isAr ? 'مشروع فنار — ضبط المخزون والمواد' : 'Project Fanar — Inventory & Material Control'}</h3>
                <p className="text-[#C2B8D4] text-sm mb-6 leading-relaxed">{isAr ? 'تتبع مستويات مخزون مواد الصرف الصحي والحلقات المطاطية ومعدات السلامة، مع معادلات ديناميكية للأرصدة باستخدام Odoo ERP وExcel.' : 'Stock-level tracking for sewer materials, rubber rings, and safety equipment, supported by dynamic balance formulas in Odoo ERP and Excel.'}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Odoo ERP</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Excel</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'تتبع المواد' : 'Material Tracking'}</span>
                </div>
              </div>
            </div>

            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18]">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 02</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{isAr ? 'مشروع B.V.4 — سجل المشتريات والمواد' : 'Project B.V.4 — Procurement & Material Log'}</h3>
                <p className="text-[#C2B8D4] text-sm mb-6 leading-relaxed">{isAr ? 'سجل مشتريات لأنابيب UPVC والوصلات ومعدات السلامة، مع التحقق من الأرصدة باستخدام سجلات Odoo وExcel.' : 'Procurement log for UPVC pipes, fittings, and safety gear, with balance verification using Odoo and Excel logs.'}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'المشتريات' : 'Procurement'}</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Excel Logs</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'التحقق من الأرصدة' : 'Balance Verification'}</span>
                </div>
              </div>
            </div>

            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18]">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 03</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-lg mb-2">{isAr ? 'مشروع Homes — سجل تتبع MSR وأوامر الشراء' : 'Project Homes — MSR & PO Tracking Log'}</h3>
                <p className="text-[#C2B8D4] text-sm mb-6 leading-relaxed">{isAr ? 'آلية لتتبع طلبات حالة المواد (MSR) وأوامر الشراء (PO)، تشمل مدفوعات الموردين ونسب الدفعات المقدمة في SSCC.' : 'A Material Status Request (MSR) and Purchase Order (PO) tracking mechanism covering supplier payments and advance percentages at SSCC.'}</p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">MSR / PO</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'سجلات المدفوعات' : 'Payment Logs'}</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'إدارة الموردين' : 'Vendor Management'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '04 / المسار المهني' : '04 / Career'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'الخبرة العملية' : 'Work experience'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'المسميات الوظيفية والتواريخ كما وردت في الملف المهني المقدم.' : 'Roles and dates reproduced from the provided portfolio.'}</p>
          </div>
          <div className="space-y-5">
            <div className="p-6 border border-[#30263F] rounded-[17px] bg-[#15111F]">
              <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                <div>
                  <h3 className="font-bold text-lg">{isAr ? 'متخصص مشتريات وتوريد' : 'Procurement / Purchasing Professional'}</h3>
                  <div className="text-[#d3deec] font-semibold text-sm mt-1">Scientific Systems Construction Company (SSCC)</div>
                  <div className="text-[#A79CB8] text-xs mt-0.5">{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</div>
                </div>
                <div className="text-[#C4B5FD] text-xs font-bold bg-[#7C3AED]/10 px-3 py-1 rounded-full">
                  {isAr ? 'سبتمبر 2026 – حتى الآن' : 'Sep 2026 – Present'}
                </div>
              </div>
              <p className="text-[#aab7c9] text-sm mt-4 leading-relaxed">
                {isAr ? 'إعداد طلبات عروض الأسعار وأوامر الشراء عبر Odoo ERP، وتنسيق أسعار الموردين وعمليات التسليم، وإدارة جداول التتبع باستخدام Excel.' : 'Create RFQs and purchase orders through Odoo ERP; coordinate supplier pricing and deliveries; and maintain Excel-based tracking sheets.'}
              </p>
            </div>

            <div className="p-6 border border-[#30263F] rounded-[17px] bg-[#15111F]">
              <div className="flex flex-col md:flex-row justify-between items-start gap-3">
                <div>
                  <h3 className="font-bold text-lg">{isAr ? 'مراقب مستندات' : 'Document Controller'}</h3>
                  <div className="text-[#d3deec] font-semibold text-sm mt-1">Administrative Business Pattern Co.</div>
                  <div className="text-[#A79CB8] text-xs mt-0.5">{isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</div>
                </div>
                <div className="text-[#C4B5FD] text-xs font-bold bg-[#7C3AED]/10 px-3 py-1 rounded-full">
                  {isAr ? 'سبتمبر 2024 – يونيو 2026' : 'Sep 2024 – Jun 2026'}
                </div>
              </div>
              <p className="text-[#aab7c9] text-sm mt-4 leading-relaxed">
                {isAr ? 'إدارة ملفات المشاريع والتحكم في الإصدارات وحفظ الأرشيف الورقي والإلكتروني لدعم الامتثال وسرعة استرجاع المستندات.' : 'Managed project files and version control, and maintained physical and electronic document archives to support compliance and fast retrieval.'}
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '05 / التطوير المهني' : '05 / Professional learning'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'الشهادات والدورات' : 'Certifications & training'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 border border-[#30263F] rounded-[16px] bg-[#15111F] flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#A79CB8]/15 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">AL</div>
              <div>
                <h3 className="font-bold text-sm mb-1">{isAr ? 'المشتريات' : 'Procurement'}</h3>
                <div className="text-[#C4B5FD] text-xs font-bold">Alison</div>
                <p className="text-[#A79CB8] text-xs mt-1.5">{isAr ? 'شهادة تحقق للمتعلم في أساسيات عمليات المشتريات وإدارة الموردين.' : 'Learner verification certificate in core procurement processes and supplier management.'}</p>
              </div>
            </div>

            <div className="p-5 border border-[#30263F] rounded-[16px] bg-[#15111F] flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#A79CB8]/15 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">Odoo</div>
              <div>
                <h3 className="font-bold text-sm mb-1">Odoo Purchase</h3>
                <div className="text-[#C4B5FD] text-xs font-bold">Odoo eLearning</div>
                <p className="text-[#A79CB8] text-xs mt-1.5">{isAr ? 'دورة رسمية حول وحدة المشتريات في Odoo وطلبات عروض الأسعار وسير العمل الآلي.' : 'Official course covering the Odoo Purchase module, RFQs, and automated workflows.'}</p>
              </div>
            </div>

            <div className="p-5 border border-[#30263F] rounded-[16px] bg-[#15111F] flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#A79CB8]/15 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">EDM</div>
              <div>
                <h3 className="font-bold text-sm mb-1">{isAr ? 'مقدمة في إدارة المستندات الإلكترونية' : 'Introduction to Electronic Document Management'}</h3>
                <div className="text-[#C4B5FD] text-xs font-bold">Alison</div>
                <p className="text-[#A79CB8] text-xs mt-1.5">{isAr ? 'شهادة تحقق للمتعلم تركز على ضبط المستندات الرقمية وأرشفتها.' : 'Learner verification certificate focused on digital document control and archiving.'}</p>
              </div>
            </div>

            <div className="p-5 border border-[#30263F] rounded-[16px] bg-[#15111F] flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#A79CB8]/15 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">AM</div>
              <div>
                <h3 className="font-bold text-sm mb-1">{isAr ? 'دبلوم مهني في الإدارة الإدارية' : 'Professional Diploma in Administration Management'}</h3>
                <div className="text-[#C4B5FD] text-xs font-bold">MTF Institute / Udemy</div>
                <p className="text-[#A79CB8] text-xs mt-1.5">{isAr ? 'تدريب مهني في التنظيم الإداري والعمليات.' : 'Professional training in administrative organization and operations.'}</p>
              </div>
            </div>

            <div className="p-5 border border-[#30263F] rounded-[16px] bg-[#15111F] flex gap-4 items-start md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-[#A79CB8]/15 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">MS</div>
              <div>
                <h3 className="font-bold text-sm mb-1">{isAr ? 'Microsoft Office (Word وExcel وPowerPoint)' : 'Microsoft Office (Word, Excel, PowerPoint)'}</h3>
                <div className="text-[#C4B5FD] text-xs font-bold">Udemy</div>
                <p className="text-[#A79CB8] text-xs mt-1.5">{isAr ? 'تدريب على أدوات المكتب وجداول البيانات.' : 'Training in office tools and spreadsheets.'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '06 / التعليم' : '06 / Education'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'المؤهلات التعليمية' : 'Educational background'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 border border-[#30263F] rounded-[17px] bg-[#15111F]">
              <h3 className="font-bold text-base mb-1">{isAr ? 'دبلوم تطبيقات الحاسب الآلي (DCA)' : 'Diploma in Computer Applications (DCA)'}</h3>
              <p className="text-[#A79CB8] text-sm mb-2">{isAr ? 'Ruma Technical Degree College، ولاية أوتار براديش' : 'Ruma Technical Degree College, UP'}</p>
              <p className="text-[#C2B8D4] text-xs mb-4">{isAr ? 'تدريب في MS Office وExcel المتقدم وإدارة قواعد البيانات وأساسيات الحاسب.' : 'Training in MS Office, advanced Excel, database management, and computer fundamentals.'}</p>
              <span className="text-[#A78BFA] text-xs font-bold">Aug 2023 – Jul 2024</span>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[17px] bg-[#15111F]">
              <h3 className="font-bold text-base mb-1">{isAr ? 'المرحلة الثانوية (الصف العاشر)' : 'High School (10th Pass)'}</h3>
              <p className="text-[#A79CB8] text-sm mb-2">{isAr ? 'مجلس الله أباد، الهند' : 'Allahabad Board, India'}</p>
              <p className="text-[#C2B8D4] text-xs mb-4">{isAr ? 'إكمال التعليم الثانوي.' : 'Completed secondary education.'}</p>
              <span className="text-[#A78BFA] text-xs font-bold">2013</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="p-8 md:p-12 border border-[#493765] rounded-[24px] bg-gradient-to-br from-[#181322] to-[#100D17] grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '07 / تواصل معي' : '07 / Get in touch'}</span>
              <h2 className="text-2xl md:text-3xl font-extrabold mt-2 mb-3">{isAr ? 'لنتواصل بشأن فرص العمل في المشتريات.' : 'Let’s connect about procurement opportunities.'}</h2>
              <p className="text-[#A79CB8] text-sm max-w-[580px]">{isAr ? 'للاستفسارات المهنية المتعلقة بالمشتريات والتوريد ودعم الأنظمة في الرياض.' : 'Available for professional inquiries related to procurement, purchasing, and systems support in Riyadh.'}</p>
              <div className="flex gap-6 flex-wrap mt-6 text-[#DED5EE] text-sm">
                <span className="flex items-center gap-2">📍 {isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
                <span className="flex items-center gap-2">📞 +966 54 247 5245</span>
                <span className="flex items-center gap-2">🏢 SSCC</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 min-w-[200px]">
              <a href="https://wa.me/966542475245" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-lg">
                {isAr ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
              </a>
              <a href="Sajjad_Ali_Ansari_CV.pdf" download className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-[#15121F] border border-[#3D3151] text-[#F4EEFF] hover:border-[#8B5CF6]">
                {isAr ? 'تحميل السيرة الذاتية' : 'Download CV'}
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-[#29223A] text-[#9B91AB] text-xs">
        <div className="max-w-[1160px] mx-auto px-5 flex justify-between flex-wrap gap-4">
          <span className="text-[#DED5EE] font-bold">SA — Sajjad Ali Ansari</span>
          <span>© {new Date().getFullYear()} {isAr ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}</span>
          <span>{isAr ? 'المشتريات • Odoo ERP • ضبط المستندات' : 'Procurement • Odoo ERP • Document Control'}</span>
        </div>
      </footer>
    </div>
  );
}
