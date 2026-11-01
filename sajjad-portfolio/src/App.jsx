import React, { useState } from 'react';

export default function App() {
  const [lang, setLang] = useState('en');
  const [navOpen, setNavOpen] = useState(false);

  const toggleLanguage = () => {
    const nextLang = lang === 'en' ? 'ar' : 'en';
    setLang(nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === 'ar' ? 'rtl' : 'ltr';
  };

  const isAr = lang === 'ar';

  const profilePhotoUrl = "https://i.imgur.com/6TM43Gv.jpg";
  const whatsappLink = "https://wa.me/966542475245";
  const cvLink = "https://drive.google.com/file/d/1obKef4eOzFS4D0RPrRpd9lPl6gMSgDMK/view?usp=sharing";

  return (
    <div className={`min-h-screen bg-[#0B0B12] text-[#f3f6fb] font-sans selection:bg-[#7C3AED] selection:text-white ${isAr ? 'rtl' : 'ltr'}`} style={{ fontFamily: isAr ? '"Noto Sans Arabic", "Tahoma", Arial, sans-serif' : 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group"
        title="Chat on WhatsApp"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Topbar / Navigation */}
      <header className="sticky top-0 z-30 bg-[#0B0B12]/90 border-b border-[#59447A]/38 backdrop-blur-md">
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
            <a href="#certifications" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'الشهادات' : 'Certificates'}</a>
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
                <span className="w-2 h-2 rounded-full bg-[#57dfad] shadow-[0_0_0_4px_rgba(87,223,173,0.1)] inline-block"></span>
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
                <a href={cvLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-[13px] font-bold text-sm bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] text-white shadow-lg shadow-purple-900/30 hover:-translate-y-0.5 transition-all">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5M12 15V3"/></svg>
                  {isAr ? 'تحميل السيرة الذاتية (PDF)' : 'Download CV (PDF)'}
                </a>
                <a href="#projects" className="inline-flex items-center gap-2.5 min-h-[48px] px-5 rounded-[13px] font-bold text-sm bg-[#15121F] border border-[#3D3151] text-[#F4EEFF] hover:border-[#8B5CF6] hover:-translate-y-0.5 transition-all">
                  {isAr ? 'استعراض المشاريع ←' : 'Explore Projects ↗'}
                </a>
              </div>
            </div>

            {/* Profile Photo Block */}
            <div className="relative max-w-[380px] mx-auto w-full flex flex-col items-center">
              <div className="absolute inset-[4%_0_0_0] rounded-[32px] bg-gradient-to-br from-[#8B5CF6]/40 via-[#7C3AED]/20 to-transparent blur-[35px] pointer-events-none"></div>
              
              <div className="relative w-full aspect-[4/4.8] border border-[#8B5CF6]/50 rounded-[28px] overflow-hidden bg-[#100D17] shadow-[0_0_35px_rgba(139,92,246,0.35)]">
                <img src={profilePhotoUrl} alt="Sajjad Ali Ansari" className="w-full h-full object-cover" />
              </div>

              <div className="mt-4 w-full p-3.5 rounded-[16px] border border-[#8B5CF6]/40 bg-[#100D17]/95 shadow-[0_4px_20px_rgba(139,92,246,0.2)] flex items-center justify-between text-left">
                <div>
                  <strong className="block text-sm text-[#EDE7F7]">Odoo ERP + Excel</strong>
                  <span className="block text-[#A79CB8] text-xs mt-0.5">{isAr ? 'سير عمل تتبع المشتريات' : 'Procurement tracking workflow'}</span>
                </div>
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
            <article className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{isAr ? 'الملخص المهني' : 'Professional Summary'}</h3>
                <p className="text-[#C2B8D4] leading-relaxed text-sm md:text-base">
                  {isAr 
                    ? 'أعمل في الرياض بالمملكة العربية السعودية، ولدي خبرة في شركة Scientific Systems Construction Company (SSCC) في طلبات عروض الأسعار وأوامر الشراء وتنسيق الموردين وسجلات المشتريات وتتبع المواد. كما تشمل خبرتي السابقة في ضبط المستندات تنظيم الملفات وإدارة الإصدارات والأرشيف الورقي والإلكتروني.'
                    : 'Based in Riyadh, Saudi Arabia, with experience at Scientific Systems Construction Company (SSCC) handling RFQs, POs, supplier coordination, procurement records, and material tracking. Previous document control experience includes file organization, version control, and physical and electronic archives.'}
                </p>
              </div>
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
            
            {/* Odoo ERP */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">ERP</div>
                <h3 className="font-bold text-base mb-1">Odoo ERP</h3>
                <p className="text-[#A79CB8] text-sm">{isAr ? 'طلبات عروض الأسعار وأوامر الشراء وسير عمل المشتريات.' : 'RFQs, purchase orders, and procurement workflows.'}</p>
              </div>
            </div>

            {/* Microsoft Excel */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">XL</div>
                <h3 className="font-bold text-base mb-1">Microsoft Excel</h3>
                <p className="text-[#A79CB8] text-sm">{isAr ? 'جداول تتبع متقدمة والأرصدة وسجلات المواد.' : 'Advanced tracking sheets, balances, and material logs.'}</p>
              </div>
            </div>

            {/* Document Control */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">DC</div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'ضبط المستندات' : 'Document Control'}</h3>
                <p className="text-[#A79CB8] text-sm">{isAr ? 'تنظيم الملفات وإدارة الإصدارات واسترجاع السجلات.' : 'File organization, versioning, and record retrieval.'}</p>
              </div>
            </div>

            {/* Supplier Coordination */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">SC</div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'تنسيق الموردين' : 'Supplier Coordination'}</h3>
                <p className="text-[#A79CB8] text-sm">{isAr ? 'أسعار الموردين والمتابعة وتنسيق التسليم.' : 'Supplier pricing, follow-ups, and delivery coordination.'}</p>
              </div>
            </div>

            {/* Inventory & Materials */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">INV</div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'المخزون والمواد' : 'Inventory & Materials'}</h3>
                <p className="text-[#A79CB8] text-sm">{isAr ? 'متابعة مستويات المخزون والتحقق من أرصدة المواد.' : 'Stock-level monitoring and material balance verification.'}</p>
              </div>
            </div>

            {/* MS Office */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">MS</div>
                <h3 className="font-bold text-base mb-1">MS Office</h3>
                <p className="text-[#A79CB8] text-sm">{isAr ? 'تثبيت وتفعيل مدى الحياة لجميع برامج أوفيس.' : 'Free lifetime installation and activation.'}</p>
              </div>
            </div>

            {/* Windows */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between md:col-span-3">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-2 font-bold">WIN</div>
                  <h3 className="font-bold text-base mb-1">Windows</h3>
                  <p className="text-[#A79CB8] text-sm">{isAr ? 'تثبيت وتفعيل نظام ويندوز مدى الحياة بكل احترافية.' : 'Free lifetime installation and activation of Windows operating system.'}</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '03 / نماذج العمل' : '03 / Work samples'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'أبرز مشاريع المشتريات' : 'Featured procurement projects'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'نظرة عامة على مشاريع المشتريات والأنظمة في SSCC.' : 'Overview of procurement operations and tracking systems at SSCC.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Project 1: Fanar */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div>
                <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                  <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 01</span>
                  <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">SSCC</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{isAr ? 'مشروع فنار — سجلات وتتبع المواد' : 'Project Fanar — Log & Material Control'}</h3>
                  <p className="text-[#C2B8D4] text-sm mb-6 leading-relaxed">{isAr ? 'تتبع مستويات مخزون مواد الصرف الصحي والحلقات المطاطية ومعدات السلامة، مع معادلات ديناميكية للأرصدة باستخدام Odoo ERP وExcel.' : 'Stock-level tracking for sewer materials, rubber rings, and safety equipment, supported by dynamic balance formulas in Odoo ERP and Excel.'}</p>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Odoo ERP</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Excel</span>
                </div>
              </div>
            </div>

            {/* Project 2: B.V.4 */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div>
                <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                  <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 02</span>
                  <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">SSCC</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{isAr ? 'مشروع B.V.4 — تتبع مواد البناء' : 'Project B.V.4 — Material Inventory'}</h3>
                  <p className="text-[#C2B8D4] text-sm mb-6 leading-relaxed">{isAr ? 'سجل شامل لمتابعة أنابيب UPVC والوصلات ومعدات السلامة والمعدات الموقعية.' : 'Comprehensive tracking log for UPVC pipes, fittings, rubber rings, and site safety gear.'}</p>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Logistics</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Inventory</span>
                </div>
              </div>
            </div>

            {/* Project 3: Comparison & Pricing */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div>
                <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                  <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 03</span>
                  <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">SSCC</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">{isAr ? 'تحليل مقارنة الموردين والأسعار' : 'Supplier Price Comparison Sheet'}</h3>
                  <p className="text-[#C2B8D4] text-sm mb-6 leading-relaxed">{isAr ? 'مقارنة دقيقة لعروض أسعار الموردين المتعددين لضمان أفضل تكلفة وشروط سداد.' : 'Structured price comparison across multiple vendors to optimize costs and payment terms.'}</p>
                </div>
              </div>
              <div className="p-6 pt-0 space-y-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Procurement</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Excel</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '04 / الخبرة' : '04 / Experience'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'الخبرة العملية' : 'Work experience'}</h2>
          </div>
          <div className="space-y-6">
            <div className="p-8 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">{isAr ? 'مسؤول مشتريات وتوريد' : 'Procurement & Purchasing Officer'}</h3>
                  <p className="text-[#C4B5FD] text-sm font-semibold mt-1">Scientific Systems Construction Company (SSCC) — {isAr ? 'الرياض' : 'Riyadh'}</p>
                </div>
                <span className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-1 rounded-full font-bold mt-2 md:mt-0 w-fit">
                  {isAr ? 'الحالي' : 'Present'}
                </span>
              </div>
              <ul className="space-y-2.5 text-[#C2B8D4] text-sm leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'إدارة طلبات عروض الأسعار (RFQs) وأوامر الشراء (POs) عبر نظام Odoo ERP.' : 'Managing RFQs, purchase orders, and vendor follow-ups using Odoo ERP.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'متابعة شحنات المواد وأرصدة المخزون للمشاريع الكبرى مثل مشروع فنار وB.V.4.' : 'Tracking material stock levels and balances for major projects like Project Fanar and B.V.4.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'إعداد جداول مقارنة الأسعار بين الموردين لتحسين التكلفة.' : 'Preparing comparative pricing sheets across vendors to optimize procurement costs.'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '05 / الشهادات' : '05 / Certifications'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'الشهادات والدورات' : 'Certifications & Credentials'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <h3 className="font-bold text-base mb-1">Odoo ERP Procurement Certification</h3>
              <p className="text-[#A79CB8] text-sm">Verified expertise in Odoo purchasing and inventory modules.</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <h3 className="font-bold text-base mb-1">Professional Diploma in Administration Management</h3>
              <p className="text-[#A79CB8] text-sm">Udemy Verified Credential</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <h3 className="font-bold text-base mb-1">MS Office Specialist Mastery</h3>
              <p className="text-[#A79CB8] text-sm">Advanced Excel, Word, & PowerPoint</p>
            </div>
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18]">
              <h3 className="font-bold text-base mb-1">Electronic Document Management</h3>
              <p className="text-[#A79CB8] text-sm">Digital Records & Archiving Control</p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '06 / التعليم' : '06 / Education'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'التعليم المؤهل' : 'Education'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96">
              <h3 className="text-lg font-bold mb-1">Diploma in Computer Application (DCA)</h3>
              <p className="text-[#C4B5FD] text-sm">Ruma Technical Degree College</p>
            </div>
            <div className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96">
              <h3 className="text-lg font-bold mb-1">Senior Secondary High School</h3>
              <p className="text-[#C4B5FD] text-sm">Allahabad Board</p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="p-8 md:p-12 border border-[#8B5CF6]/40 rounded-[28px] bg-gradient-to-br from-[#15111F] to-[#100D17] shadow-[0_0_50px_rgba(124,58,237,0.15)]">
            <div className="max-w-[600px]">
              <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '07 / التواصل' : '07 / Contact'}</span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">{isAr ? 'دعنا نتواصل' : 'Get in touch'}</h2>
              <p className="text-[#C2B8D4] mb-8 leading-relaxed">
                {isAr ? 'هل لديك استفسار أو فرصة عمل؟ يسعدني تواصلك معي عبر البريد أو الواتساب.' : 'Looking for a dedicated Procurement Specialist in Riyadh? Feel free to reach out directly via email or WhatsApp.'}
              </p>
              <div className="space-y-4 text-sm font-medium">
                <p className="flex items-center gap-3"><span className="text-[#8B5CF6]">📧</span> Personal Email: <a href="mailto:saddamjacker7@gmail.com" className="text-[#C4B5FD] hover:underline">saddamjacker7@gmail.com</a></p>
                <p className="flex items-center gap-3"><span className="text-[#8B5CF6]">🏢</span> Company Email: <a href="mailto:sajjad.ali@sscc-sa.com" className="text-[#C4B5FD] hover:underline">sajjad.ali@sscc-sa.com</a></p>
                <p className="flex items-center gap-3"><span className="text-[#8B5CF6]">📱</span> Phone / WhatsApp: <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#C4B5FD] hover:underline">+966 54 247 5245</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#30263F] py-8 text-center text-xs text-[#A79CB8]">
        © 2026 Sajjad Ali Ansari. All rights reserved.
      </footer>
    </div>
  );
}
