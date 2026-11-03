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
  const businessCardUrl = "https://drive.google.com/file/d/1-DgiBlf9JHkGFjpOtMyysha99J2KfkSx/view?usp=sharing";
  const whatsappLink = "https://wa.me/966542475245";
  const cvLink = "https://drive.google.com/file/d/1e9Lp08tXyBt0VAPHP-sBGdXWsKdwn_lN/view?usp=sharing";
  const linkedinLink = "https://www.linkedin.com/in/sajjad-ali-880a03338";

  // Sample Work Links
  const sample1DriveLink = "https://drive.google.com/file/d/17yTt58V-Lk_mScmBZYFCxJWJPaGlB_7d/view?usp=sharing"; // PO Tracker
  const sample2DriveLink = "https://drive.google.com/file/d/1cqBXlTmC2XIiamaA2zbGZG0R9081lnyJ/view?usp=sharing"; // Vendor CS
  const sample3DriveLink = "https://drive.google.com/file/d/1GJEJvnw-YNP75Luv66afXLlhbISrtUWn/view?usp=sharing"; // P2P Flow

  // Skill & Projects Specific Links
  const odooSampleLink = "https://drive.google.com/file/d/1_TEdHoNPOUmozXh-m1vG2BMG0Z_oKekM/view?usp=sharing";
  const excelPoTrackingLink = "https://drive.google.com/file/d/1hgBAokxfa8GgLA8i_WqZSQhiwE79Cgi9/view?usp=sharing";
  const dcDocManagementLink = "https://drive.google.com/file/d/1cEVFnmQYM371oIYJmT27zLoi2fvEw2Rq/view?usp=sharing";
  const scSupplierCompLink = "https://drive.google.com/file/d/1cqBXlTmC2XIiamaA2zbGZG0R9081lnyJ/view?usp=sharing";
  const inventoryManagementLink = "https://drive.google.com/file/d/1Oik3W1rHQy9lvfPP5Kc16Ief1XOlaPhQ/view?usp=sharing";
  const msPrPaymentLink = "https://drive.google.com/file/d/1-FWhJ0nsFUOjt8_IY6LYUxan7Xiqf1b6/view?usp=sharing";

  const bv4SampleLink = "https://drive.google.com/file/d/1ocLaA1u7YhRVZrsg86EfTGUDP4K8QpHF/view?usp=sharing";
  const projectDocLink = "https://drive.google.com/file/d/1cEVFnmQYM371oIYJmT27zLoi2fvEw2Rq/view?usp=sharing";
  const fanarBananLink = "https://drive.google.com/file/d/1VEeKPhCBR_D1nQa_IkIGuLqgzhbtFuM0/view?usp=sharing";
  const homesBananLink = "https://drive.google.com/file/d/1fYXKgpBExFu-o0Jn7nFdnM8Z-Ih1s4qx/view?usp=sharing";

  return (
    <div className={`min-h-screen bg-[#0B0B12] text-[#f3f6fb] font-sans selection:bg-[#7C3AED] selection:text-white ${isAr ? 'rtl text-right' : 'ltr text-left'}`} style={{ fontFamily: isAr ? '"Noto Sans Arabic", "Tahoma", Arial, sans-serif' : 'Inter, ui-sans-serif, system-ui, sans-serif' }}>
      
      {/* Floating WhatsApp Button */}
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`fixed bottom-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 group ${isAr ? 'left-6' : 'right-6'}`}
        title={isAr ? 'التواصل عبر الواتساب' : 'Chat on WhatsApp'}
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
              <span className="text-[0.96rem] font-extrabold leading-tight block">{isAr ? 'سجاد علي' : 'Sajjad Ali'}</span>
              <span className="text-stone-400 text-[0.68rem] font-semibold tracking-wider uppercase block mt-1">
                {isAr ? 'مسؤول مشتريات' : 'Procurement Officer'}
              </span>
            </div>
          </a>

          <nav className={`lg:flex items-center gap-[22px] text-[#D7CFE8] text-[0.87rem] ${navOpen ? 'flex flex-col absolute top-[68px] left-0 right-0 p-5 bg-[#100D17] border-b border-[#30263F]' : 'hidden lg:flex'}`}>
            <a href="#about" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'نبذة عنا' : 'About'}</a>
            <a href="#skills" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'المهارات' : 'Skills'}</a>
            <a href="#projects" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'المشاريع' : 'Projects'}</a>
            <a href="#samplework" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'أعمال نموذجية' : 'Sample Work'}</a>
            <a href="#experience" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'الخبرة العملية' : 'Experience'}</a>
            <a href="#certifications" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'الشهادات' : 'Certificates'}</a>
            <a href="#education" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'التعليم' : 'Education'}</a>
            <a href="#contact" onClick={() => setNavOpen(false)} className="hover:text-[#C4B5FD]">{isAr ? 'اتصل بنا' : 'Contact'}</a>
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

              <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] tracking-tight leading-[1.05] my-6 font-extrabold">
                {isAr ? (
                  <>مسؤول <span className="block text-[#8B5CF6]">مشتريات</span></>
                ) : (
                  <>Procurement <span className="block text-[#8B5CF6]">Officer</span></>
                )}
              </h1>

              <p className="text-[#8B5CF6] font-semibold text-lg mb-4">
                {isAr ? 'نظام Odoo ERP | المشتريات | تنسيق الموردين | إكسل المتقدم' : 'Odoo ERP | Purchasing | Supplier Coordination | Excel'}
              </p>

              <p className="text-[#C2B8D4] text-[1.05rem] max-w-[660px] mb-6 leading-relaxed">
                {isAr 
                  ? 'محترف مشتريات يتمتع بخبرة عملية في طلبات عروض الأسعار (RFQs)، وأوامر الشراء، وتنسيق الموردين، ومتابعة المواد، وتوثيق المشتريات باستخدام نظام Odoo ERP وMicrosoft Excel.'
                  : 'Procurement professional with hands-on experience in RFQs, purchase orders, supplier coordination, material tracking, and procurement documentation using Odoo ERP and Microsoft Excel.'}
              </p>

              <div className="flex gap-2.5 flex-wrap mb-8">
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">Odoo ERP</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">{isAr ? 'طلبات الأسعار وأوامر الشراء' : 'RFQs & Purchase Orders'}</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">{isAr ? 'إكسل المتقدم' : 'Advanced Excel'}</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">{isAr ? 'تنسيق الموردين' : 'Supplier Coordination'}</span>
                <span className="border border-[#332843] bg-[#15111F] text-[#E3DCEE] px-3 py-1.5 rounded-[9px] text-[0.78rem] font-medium">{isAr ? 'تتبع المواد' : 'Material Tracking'}</span>
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

            {/* Profile Photo & Personal Business Card Block */}
            <div className="relative max-w-[380px] mx-auto w-full flex flex-col items-center">
              <div className="absolute inset-[4%_0_0_0] rounded-[32px] bg-gradient-to-br from-[#8B5CF6]/40 via-[#7C3AED]/20 to-transparent blur-[35px] pointer-events-none"></div>
              
              <div className="relative w-full aspect-[4/4.8] border border-[#8B5CF6]/50 rounded-[28px] overflow-hidden bg-[#100D17] shadow-[0_0_35px_rgba(139,92,246,0.35)]">
                <img src={profilePhotoUrl} alt="Sajjad Ali" className="w-full h-full object-cover" />
              </div>

              <div className="mt-4 w-full p-3.5 rounded-[16px] border border-[#8B5CF6]/40 bg-[#100D17]/95 shadow-[0_4px_20px_rgba(139,92,246,0.2)]">
                <div className="flex items-center justify-between mb-2">
                  <strong className="block text-sm text-[#EDE7F7]">{isAr ? 'البطاقة المهنية الشخصية' : 'Personal Business Card'}</strong>
                  <a href={businessCardUrl} target="_blank" rel="noopener noreferrer" className="text-[11px] bg-[#7C3AED]/30 text-[#C4B5FD] px-2.5 py-1 rounded-md font-bold hover:bg-[#7C3AED] hover:text-white transition-colors">
                    {isAr ? 'عرض البطاقة ↗' : 'View Card ↗'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Proof Strip */}
        <section className="border-y border-[#59447A]/38 bg-[#100D17]/72 py-6">
          <div className="max-w-[1160px] mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`md:border-r border-[#59447A]/38 ${isAr ? 'md:border-l md:border-r-0' : ''} pr-4`}>
              <strong className="block text-base">{isAr ? 'عمليات المشتريات' : 'Procurement Operations'}</strong>
              <span className="block text-[#A79CB8] text-sm mt-1">{isAr ? 'طلبات الأسعار، أوامر الشراء ومتابعة الموردين' : 'RFQs, purchase orders & supplier follow-ups'}</span>
            </div>
            <div className={`md:border-r border-[#59447A]/38 ${isAr ? 'md:border-l md:border-r-0' : ''} pr-4`}>
              <strong className="block text-base">{isAr ? 'تتبع المواد والمخزون' : 'Material & Inventory Tracking'}</strong>
              <span className="block text-[#A79CB8] text-sm mt-1">{isAr ? 'سجلات نظام Odoo ERP وبرنامج Excel' : 'Odoo ERP and Excel logs'}</span>
            </div>
            <div>
              <strong className="block text-base">{isAr ? 'ضبط المستندات' : 'Document Control'}</strong>
              <span className="block text-[#A79CB8] text-sm mt-1">{isAr ? 'السجلات، إدارة الإصدارات والأرشفة الرقمية' : 'Records, versioning & digital archives'}</span>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '01 / الملف الشخصي' : '01 / Profile'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">
              {isAr ? <>عقلية المشتريات، <span className="text-[#8B5CF6]">والتركيز على الأنظمة.</span></> : <>Procurement-minded. <span className="text-[#8B5CF6]">Systems-focused.</span></>}
            </h2>
            <p className="text-[#A79CB8]">{isAr ? 'مزيج عملي يجمع بين تنسيق الشراء، دقة التتبع، وإدارة المستندات المنظمة.' : 'A practical mix of purchasing coordination, tracking discipline, and organized document management.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">{isAr ? 'الملخص المهني' : 'Professional Summary'}</h3>
                <p className="text-[#C2B8D4] leading-relaxed text-sm md:text-base space-y-3">
                  <span>{isAr ? 'أقيم في الرياض بالمملكة العربية السعودية، وأعمل كمسؤول مشتريات وتوريد ولديه خبرة في عمليات الشراء وإدارة طلبات عروض الأسعار، أوامر الشراء، تنسيق الموردين، وتتبع المواد باستخدام نظام Odoo ERP وMicrosoft Excel.' : 'Based in Riyadh, Saudi Arabia, I am a Procurement & Purchasing Officer with experience in procurement operations, RFQ management, purchase orders, supplier coordination, and material tracking using Odoo ERP and Microsoft Excel.'}</span>
                  <span className="block mt-3">{isAr ? 'خبرتي السابقة كمراقب مستندات عززت مهارات إدارة المستندات، التحكم في التعديلات، تنظيم السجلات والأرشفة الرقمية. أجمع بين تنسيق المشتريات والتوثيق المنظم والتتبع الدقيق لدعم كفاءة العمليات التشغيلية للمشاريع.' : 'My previous experience as a Document Controller strengthened my skills in document management, revision control, record organization, and digital archiving. I combine procurement coordination with structured documentation and accurate tracking to support efficient project operations.'}</span>
                </p>
              </div>
            </article>

            <article className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl">
              <h3 className="text-xl font-bold mb-3">{isAr ? 'نقاط القوة الأساسية' : 'Core Strengths'}</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>Odoo ERP</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>Microsoft Excel</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'ضبط المستندات' : 'Document Control'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'تنسيق الموردين' : 'Supplier Coordination'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>{isAr ? 'المخزون والمواد' : 'Inventory & Materials'}</li>
                <li className="flex items-start gap-2.5 text-[#EDE7F7]"><span className="w-5 h-5 rounded-[7px] bg-[#A79CB8]/16 text-[#A78BFA] flex items-center justify-center font-bold text-xs shrink-0">✓</span>Microsoft Office</li>
              </ul>
            </article>
          </div>
        </section>

        {/* Skills & Tools Section */}
        <section id="skills" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '02 / القدرات والمهارات' : '02 / Capabilities'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'المهارات والأدوات' : 'Skills & Tools'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'الأدوات والقدرات اليومية المدرجة في الملف الشخصي.' : 'Tools and day-to-day capabilities listed in the portfolio.'}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Odoo ERP */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">ERP</div>
                <h3 className="font-bold text-base mb-1">Odoo ERP</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'طلبات الأسعار، أوامر الشراء، وعمليات سير العمل للمشتريات.' : 'RFQs, purchase orders, and procurement workflows.'}</p>
              </div>
              <a href={odooSampleLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-2 rounded-xl font-bold hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض نموذج أودو ↗' : 'View Odoo Sample ↗'}
              </a>
            </div>

            {/* Microsoft Excel */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">XL</div>
                <h3 className="font-bold text-base mb-1">Microsoft Excel</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'جداول تتبع متقدمة، الأرصدة، وسجلات المواد.' : 'Advanced tracking sheets, balances, and material logs.'}</p>
              </div>
              <a href={excelPoTrackingLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-2 rounded-xl font-bold hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'نموذج تتبع أوامر الشراء ↗' : 'po tracking sample ↗'}
              </a>
            </div>

            {/* Document Control */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">DC</div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'ضبط المستندات' : 'Document Control'}</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'تنظيم الملفات، إدارة الإصدارات، واسترجاع السجلات.' : 'File organization, versioning, and record retrieval.'}</p>
              </div>
              <a href={dcDocManagementLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-2 rounded-xl font-bold hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'نموذج إدارة المستندات ↗' : 'document management sample ↗'}
              </a>
            </div>

            {/* Supplier Coordination */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">SC</div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'تنسيق الموردين' : 'Supplier Coordination'}</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'أسعار الموردين، المتابعة، وتنسيق التوصيل والتسليم.' : 'Supplier pricing, follow-ups, and delivery coordination.'}</p>
              </div>
              <a href={scSupplierCompLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-2 rounded-xl font-bold hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'نموذج مقارنة الأسعار للموردين ↗' : 'SUPPLIER comparison sheet sample ↗'}
              </a>
            </div>

            {/* Inventory & Materials */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">INV</div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'المخزون والمواد' : 'Inventory & Materials'}</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'مراقبة مستويات المخزون والتحقق من أرصدة المواد بدقة.' : 'Stock-level monitoring and material balance verification.'}</p>
              </div>
              <a href={inventoryManagementLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-2 rounded-xl font-bold hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'نموذج إدارة المخزون ↗' : 'inventory management sample ↗'}
              </a>
            </div>

            {/* Microsoft Office */}
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <div className="h-10 w-10 rounded-xl bg-[#A79CB8]/16 text-[#C4B5FD] flex items-center justify-center mb-4 font-bold">MS</div>
                <h3 className="font-bold text-base mb-1">Microsoft Office</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'إعداد المستندات، العروض التقديمية وإدارة البيانات بمهارة.' : 'Document preparation, presentation, and data management.'}</p>
              </div>
              <a href={msPrPaymentLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-2 rounded-xl font-bold hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'نموذج طلب الشراء والدفع ↗' : 'pr and payment request sample ↗'}
              </a>
            </div>

          </div>

          {/* Additional IT Skills */}
          <div className="mt-8 p-6 border border-[#30263F]/60 rounded-[18px] bg-[#15111F]/50">
            <h3 className="font-bold text-sm text-[#C4B5FD] mb-4 tracking-wider uppercase">{isAr ? 'مهارات تقنية إضافية (ويندوز 11 ومايكروسوفت أوفيس)' : 'Additional IT Skills (Windows 11 & Microsoft Office)'}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="flex items-center gap-3.5 bg-[#100E18] p-4 rounded-xl border border-[#30263F]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-md">
                  WIN 11
                </div>
                <div>
                  <strong className="block text-sm text-[#EDE7F7]">{isAr ? 'إعداد ويندوز 11' : 'Windows 11 Setup'}</strong>
                  <span className="text-xs text-[#A79CB8]">{isAr ? 'التثبيت والتكوين والإعداد' : 'Installation & Configuration'}</span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-[#100E18] p-4 rounded-xl border border-[#30263F]">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-600 to-amber-500 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-md">
                  OFFICE
                </div>
                <div>
                  <strong className="block text-sm text-[#EDE7F7]">{isAr ? 'حزمة مايكروسوفت أوفيس' : 'Microsoft Office Suite'}</strong>
                  <span className="text-xs text-[#A79CB8]">{isAr ? 'الإعداد واستكشاف الأخطاء وإصلاحها' : 'Setup & Troubleshooting'}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '03 / المشاريع' : '03 / Projects'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'أبرز المشاريع' : 'Projects'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'نظرة عامة على مشاريع المشتريات وأنظمة التتبع التشغيلي.' : 'Overview of key projects and operational tracking systems.'}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Fanar Bannan */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 01</span>
                <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">{isAr ? 'مشتريات المواد' : 'Material Procurement'}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{isAr ? 'مشروع فنار بنان' : 'Fanar Bannan'}</h3>
                <h4 className="text-xs font-bold text-[#8B5CF6] mb-3 uppercase tracking-wider">{isAr ? 'مشتريات المواد ومراقبة المخزون' : 'Material Procurement & Stock Monitoring'}</h4>
                <ul className="text-[#C2B8D4] text-sm mb-6 space-y-1.5 leading-relaxed">
                  <li>• {isAr ? 'متابعة مواد الصرف الصحي وحلقات المطاط' : 'Sewer materials and rubber rings tracking'}</li>
                  <li>• {isAr ? 'مراقبة مخزون معدات السلامة' : 'Safety equipment inventory control'}</li>
                  <li>• {isAr ? 'متابعة رصيد المخزون ومستويات إعادة الطلب' : 'Stock balance and reorder level monitoring'}</li>
                </ul>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'مراقبة المخزون' : 'Stock Monitoring'}</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'لوحة إكسل' : 'Excel Dashboard'}</span>
                </div>
                <a href={fanarBananLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3.5 py-2 rounded-xl text-center hover:bg-[#7C3AED] hover:text-white transition-colors">
                  {isAr ? 'مشروع فنار بنان ↗' : 'project fanar banan ↗'}
                </a>
              </div>
            </div>

            {/* Homes Bannan */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 02</span>
                <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">{isAr ? 'التحكم بطلبات وأوامر الشراء' : 'PR & PO Control'}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{isAr ? 'مشروع هومز بنان' : 'Homes Bannan'}</h3>
                <h4 className="text-xs font-bold text-[#8B5CF6] mb-3 uppercase tracking-wider">{isAr ? 'إدارة طلبات الشراء، وأوامر الشراء، وطلبات الدفع' : 'PR, PO & Payment Request Management'}</h4>
                <ul className="text-[#C2B8D4] text-sm mb-6 space-y-1.5 leading-relaxed">
                  <li>• {isAr ? 'سجل تتبع طلبات الشراء (PR)' : 'Purchase Requisition (PR) tracking log'}</li>
                  <li>• {isAr ? 'نظام مراقبة أوامر الشراء (PO)' : 'Purchase Order (PO) monitoring system'}</li>
                  <li>• {isAr ? 'متابعة حالة دفعات الموردين والتسليم' : 'Supplier payment status & delivery follow-up'}</li>
                </ul>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">Odoo ERP</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'تتبع المدفوعات' : 'Payment Tracking'}</span>
                </div>
                <a href={homesBananLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3.5 py-2 rounded-xl text-center hover:bg-[#7C3AED] hover:text-white transition-colors">
                  {isAr ? 'مشروع هومز بنان ↗' : 'homes banan ↗'}
                </a>
              </div>
            </div>

            {/* Project B.V.4 */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 03</span>
                <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">{isAr ? 'مراقبة التوصيل' : 'Delivery Control'}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{isAr ? 'مشروع B.V.4' : 'B.V.4'}</h3>
                <h4 className="text-xs font-bold text-[#8B5CF6] mb-3 uppercase tracking-wider">{isAr ? 'مشتريات وتوصيل مواد المشروع' : 'Project Material Procurement & Delivery'}</h4>
                <ul className="text-[#C2B8D4] text-sm mb-6 space-y-1.5 leading-relaxed">
                  <li>• {isAr ? 'ميزان كميات مواكب UPVC والوصلات' : 'UPVC pipes and fittings quantity balance'}</li>
                  <li>• {isAr ? 'مطابقة الكميات المطلوبة مقابل المزودة والمستلمة' : 'Required vs. ordered vs. received quantity reconciliation'}</li>
                  <li>• {isAr ? 'متابعة سجلات تسليم المواقع' : 'Site delivery monitoring & logs'}</li>
                </ul>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'رصيد المواد' : 'Material Balance'}</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'اللوجستيات' : 'Logistics'}</span>
                </div>
                <a href={bv4SampleLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3.5 py-2 rounded-xl text-center hover:bg-[#7C3AED] hover:text-white transition-colors">
                  {isAr ? 'نموذج مشروع B.V.4 ↗' : 'project bv.4 sample ↗'}
                </a>
              </div>
            </div>

            {/* Document Control */}
            <div className="border border-[#30263F] rounded-[20px] overflow-hidden bg-[#171321] flex flex-col justify-between">
              <div className="p-5 border-b border-[#30263F] bg-[#100E18] flex justify-between items-center">
                <span className="text-xs text-[#C4B5FD] font-extrabold">PROJECT / 04</span>
                <span className="text-[11px] bg-[#7C3AED]/20 text-[#C4B5FD] px-2 py-0.5 rounded font-bold">{isAr ? 'ضبط المستندات' : 'Document Control'}</span>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">{isAr ? 'سجل المستندات' : 'Document Control'}</h3>
                <h4 className="text-xs font-bold text-[#8B5CF6] mb-3 uppercase tracking-wider">{isAr ? 'سجل المستندات وإدارة التعديلات' : 'Document Register & Revision Management'}</h4>
                <ul className="text-[#C2B8D4] text-sm mb-6 space-y-1.5 leading-relaxed">
                  <li>• {isAr ? 'سجل ترقيم المستندات القياسي' : 'Standardized document numbering register'}</li>
                  <li>• {isAr ? 'تتبع تاريخ التعديلات وحالة الاعتماد' : 'Revision history & approval status tracking'}</li>
                  <li>• {isAr ? 'أرشفة المراجع الرقمية لسهولة الاسترجاع' : 'Digital file referencing & retrieval archive'}</li>
                </ul>
              </div>
              <div className="p-6 pt-0 flex flex-col gap-3">
                <div className="flex gap-2 flex-wrap">
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'سجل المستندات' : 'Doc Register'}</span>
                  <span className="border border-[#3B2B50] rounded-md px-2 py-1 text-xs bg-[#100D17]">{isAr ? 'إدارة التعديلات' : 'Revision Control'}</span>
                </div>
                <a href={projectDocLink} target="_blank" rel="noopener noreferrer" className="text-xs font-bold bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3.5 py-2 rounded-xl text-center hover:bg-[#7C3AED] hover:text-white transition-colors">
                  {isAr ? 'مستندات المشروع ↗' : 'project document ↗'}
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* PROCUREMENT TOOLS & SAMPLE WORK SECTION */}
        <section id="samplework" className="py-20 max-w-[1160px] mx-auto px-5 border-t border-[#30263F]/40">
          <div className="max-w-[720px] mb-12">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '04 / أعمال نموذجية' : '04 / Sample Work & Dashboards'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'أدوات المشتريات وعينات العمل' : 'Procurement Tools & Sample Work'}</h2>
            <p className="text-[#A79CB8]">{isAr ? 'عرض مرئي لطريقة إدارة أوامر الشراء، مقارنة الموردين ودورة سير العمل.' : 'Visual demonstration of how Purchase Order tracking, Vendor Comparisons, and P2P workflows are handled.'}</p>
          </div>

          <div className="space-y-12">
            
            {/* Sample 1 */}
            <div className="border border-[#30263F] rounded-[24px] overflow-hidden bg-[#15111F]/96 shadow-xl">
              <div className="p-6 border-b border-[#30263F] bg-[#100E18] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="text-xs text-[#8B5CF6] font-bold uppercase tracking-wider">Dashboard Sample 01</span>
                  <h3 className="text-xl font-bold text-[#EDE7F7]">{isAr ? 'قالب إكسل لتتبع أوامر الشراء' : 'Purchase Order Tracker Excel Template'}</h3>
                </div>
                <a href={sample1DriveLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED] text-white px-3.5 py-1.5 rounded-full font-bold hover:bg-[#8B5CF6] transition-colors flex items-center gap-1.5 shadow-md">
                  <span>{isAr ? 'فتح لقطة الشاشة الكاملة ↗' : 'Open Full Screenshot ↗'}</span>
                </a>
              </div>
              <div className="p-6">
                <div className="rounded-xl overflow-hidden border border-[#30263F] bg-[#0B0B12] mb-6 p-5">
                  <div className="bg-[#100E18] border border-[#30263F] rounded-xl p-5 space-y-4">
                    <div className="flex justify-between items-center border-b border-[#30263F] pb-3">
                      <span className="font-bold text-sm text-[#E3DCEE]">📊 {isAr ? 'قالب إكسل لتتبع أوامر الشراء' : 'Purchase Order Tracker Excel Template'}</span>
                      <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2.5 py-0.5 rounded font-mono font-semibold">{isAr ? 'متتبع نشط' : 'Active Tracker'}</span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-center">
                      <div className="bg-[#171321] p-3 rounded-lg border border-[#30263F]">
                        <span className="text-[11px] text-[#A79CB8] block">{isAr ? 'إجمالي أوامر الشراء' : 'Total PO'}</span>
                        <strong className="text-lg text-white font-mono">66</strong>
                      </div>
                      <div className="bg-[#171321] p-3 rounded-lg border border-[#30263F]">
                        <span className="text-[11px] text-[#A79CB8] block">{isAr ? 'المبلغ الإجمالي' : 'Total Amount'}</span>
                        <strong className="text-lg text-purple-400 font-mono">$35,127.00</strong>
                      </div>
                      <div className="bg-[#171321] p-3 rounded-lg border border-[#30263F]">
                        <span className="text-[11px] text-[#A79CB8] block">{isAr ? 'المبلغ المدفوع' : 'Amount Paid'}</span>
                        <strong className="text-lg text-emerald-400 font-mono">$25,050.00</strong>
                      </div>
                      <div className="bg-[#171321] p-3 rounded-lg border border-[#30263F]">
                        <span className="text-[11px] text-[#A79CB8] block">{isAr ? 'نسبة المدفوع' : '% Paid'}</span>
                        <strong className="text-lg text-amber-400 font-mono">71.3%</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-[#C2B8D4] text-sm leading-relaxed">
                  {isAr ? 'لوحة تحكم متقدمة بإكسل لتتبع إجمالي أوامر الشراء، الكميات المطلوبة مقابل المسلمة، والمؤشرات المالية (المبلغ الإجمالي، المدفوع، والمتبقي) بنسب مئوية دقيقة.' : 'Advanced Excel dashboard tracking total Purchase Orders, ordered vs. delivered volumes across months, financial metrics (Total Amount, Paid, Due), and monthly distribution percentages to maintain complete oversight over purchasing status.'}
                </p>
              </div>
            </div>

            {/* Sample 2 */}
            <div className="border border-[#30263F] rounded-[24px] overflow-hidden bg-[#15111F]/96 shadow-xl">
              <div className="p-6 border-b border-[#30263F] bg-[#100E18] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="text-xs text-[#8B5CF6] font-bold uppercase tracking-wider">Dashboard Sample 02</span>
                  <h3 className="text-xl font-bold text-[#EDE7F7]">{isAr ? 'جدول مقارنة عروض أسعار الموردين (CS)' : 'Vendor Comparative Statement (CS)'}</h3>
                </div>
                <a href={sample2DriveLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED] text-white px-3.5 py-1.5 rounded-full font-bold hover:bg-[#8B5CF6] transition-colors flex items-center gap-1.5 shadow-md">
                  <span>{isAr ? 'فتح لقطة الشاشة الكاملة ↗' : 'Open Full Screenshot ↗'}</span>
                </a>
              </div>
              <div className="p-6">
                <div className="rounded-xl overflow-hidden border border-[#30263F] bg-[#0B0B12] mb-6 p-5">
                  <div className="bg-[#100E18] border border-[#30263F] rounded-xl p-5 space-y-3">
                    <div className="flex justify-between items-center border-b border-[#30263F] pb-3">
                      <span className="font-bold text-sm text-[#E3DCEE]">📋 {isAr ? 'مقارنة أسعار الموردين — مواكب ووصلات UPVC' : 'Vendor Comparative Statement (CS) — UPVC Pipes & Fittings'}</span>
                      <span className="text-xs bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded font-mono">PR-2025-001</span>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono">
                        <thead>
                          <tr className="border-b border-[#30263F] text-[#A79CB8]">
                            <th className="py-2">{isAr ? 'وصف المادة' : 'Item Description'}</th>
                            <th className="py-2">{isAr ? 'المورد أ' : 'Supplier A'}</th>
                            <th className="py-2 text-emerald-400">{isAr ? 'المورد ب (موصى به)' : 'Supplier B (Recommended)'}</th>
                            <th className="py-2">{isAr ? 'المورد ج' : 'Supplier C'}</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#30263F]/40 text-[#C2B8D4]">
                          <tr>
                            <td className="py-2">UPVC Pipe 110mm (500 Mtr)</td>
                            <td className="py-2">9,000.00 SAR</td>
                            <td className="py-2 text-emerald-400 font-bold">8,750.00 SAR</td>
                            <td className="py-2">9,500.00 SAR</td>
                          </tr>
                          <tr>
                            <td className="py-2">{isAr ? 'الإجمالي الشامل (شامل ضريبة القيمة المضافة 15%)' : 'Grand Total (incl. 15% VAT)'}</td>
                            <td className="py-2">19,650.00 SAR</td>
                            <td className="py-2 text-emerald-400 font-bold">18,890.00 SAR</td>
                            <td className="py-2">20,530.00 SAR</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-2 p-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-lg flex items-center justify-between text-xs text-emerald-300">
                      <span>✓ <strong>{isAr ? 'التوصية:' : 'Recommendation:'}</strong> {isAr ? 'اختيار المورد ب لأفضل سعر (التوفير: 1,640.00 ريال / 7.99%)' : 'Select Supplier B for best price (Savings: 1,640.00 SAR / 7.99%)'}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[#C2B8D4] text-sm leading-relaxed">
                  {isAr ? 'جدول مقارنة منظم لتقييم عدة موردين (أ، ب، ج) لمواد الأنابيب والوصلات. يوضح أسعار الوحدة، الإجماليات الشاملة للضريبة، جداول التسليم، ومنطق التوصية التلقائي لتحقيق أفضل توفير بالتكلفة.' : 'Structured comparison sheet evaluating multiple suppliers (Supplier A, B, C) for UPVC Pipes & Fittings. Highlights unit pricing, grand totals including VAT, delivery timelines, and automatic recommendation logic for optimal cost savings.'}
                </p>
              </div>
            </div>

            {/* Sample 3 */}
            <div className="border border-[#30263F] rounded-[24px] overflow-hidden bg-[#15111F]/96 shadow-xl">
              <div className="p-6 border-b border-[#30263F] bg-[#100E18] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <div>
                  <span className="text-xs text-[#8B5CF6] font-bold uppercase tracking-wider">Process Workflow Sample 03</span>
                  <h3 className="text-xl font-bold text-[#EDE7F7]">{isAr ? 'دورة سير العمل للمشتريات (P2P)' : 'P2P (Procure to Pay) Process Flow'}</h3>
                </div>
                <a href={sample3DriveLink} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED] text-white px-3.5 py-1.5 rounded-full font-bold hover:bg-[#8B5CF6] transition-colors flex items-center gap-1.5 shadow-md">
                  <span>{isAr ? 'فتح الرسم التخطيطي الكامل ↗' : 'Open Full Diagram ↗'}</span>
                </a>
              </div>
              <div className="p-6">
                <div className="rounded-xl overflow-hidden border border-[#30263F] bg-[#0B0B12] mb-6 p-5">
                  <div className="bg-[#100E18] border border-[#30263F] rounded-xl p-5">
                    <div className="flex justify-between items-center border-b border-[#30263F] pb-3 mb-4">
                      <span className="font-bold text-sm text-[#E3DCEE]">🔄 {isAr ? 'دورة سير العمل الكاملة من الشراء إلى الدفع (P2P)' : 'P2P (Procure to Pay) End-to-End Process Flow'}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 text-center text-xs font-semibold">
                      <div className="p-2.5 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-300">1. {isAr ? 'طلب الشراء (PR)' : 'Requisition (PR)'}</div>
                      <div className="p-2.5 rounded-lg bg-emerald-600/20 border border-emerald-500/40 text-emerald-300">2. {isAr ? 'طلب عرض (RFQ)' : 'RFQ'}</div>
                      <div className="p-2.5 rounded-lg bg-orange-600/20 border border-orange-500/40 text-orange-300">3. {isAr ? 'مقارنة (CS)' : 'CS Compare'}</div>
                      <div className="p-2.5 rounded-lg bg-indigo-600/20 border border-indigo-500/40 text-indigo-300">4. {isAr ? 'أمر الشراء (PO)' : 'Order (PO)'}</div>
                      <div className="p-2.5 rounded-lg bg-teal-600/20 border border-teal-500/40 text-teal-300">5. {isAr ? 'الاستلام (GR)' : 'Receipt (GR)'}</div>
                      <div className="p-2.5 rounded-lg bg-purple-600/20 border border-purple-500/40 text-purple-300">6. {isAr ? 'الفاتورة (IV)' : 'Invoice (IV)'}</div>
                      <div className="p-2.5 rounded-lg bg-amber-600/20 border border-amber-500/40 text-amber-300 col-span-2 sm:col-span-1">7. {isAr ? 'الدفع' : 'Payment'}</div>
                    </div>
                  </div>
                </div>
                <p className="text-[#C2B8D4] text-sm leading-relaxed">
                  {isAr ? 'توضيح لدورة حياة المشتريات من البداية للنهاية تشمل طلبات الشراء، طلبات عروض الأسعار، مقارنات العروض، أوامر الشراء، استلام البضائع، التحقق من الفواتير، ومدفوعات الموردين.' : 'End-to-end procurement lifecycle illustration covering Purchase Requisitions (PR), Request for Quotations (RFQ), Quotation Comparisons, Purchase Orders (PO), Goods Receipts (GR), Invoice Verification (IV), and Vendor Payments.'}
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '05 / الخبرة المهنية' : '05 / Experience'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'الخبرة العملية' : 'Work experience'}</h2>
          </div>
          <div className="space-y-6">
            
            <div className="p-8 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">{isAr ? 'مسؤول مشتريات وتوريد' : 'Procurement & Purchasing Officer'}</h3>
                  <p className="text-[#C4B5FD] text-sm font-semibold mt-1">Scientific Systems Construction Company (SSCC) – Riyadh, Saudi Arabia</p>
                </div>
                <span className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-1 rounded-full font-bold mt-2 md:mt-0 w-fit">
                  {isAr ? 'سبتمبر 2026 – حتى الآن' : 'September 2026 – Present'}
                </span>
              </div>
              <ul className="space-y-2 text-[#C2B8D4] text-sm leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'إدارة طلبات عروض الأسعار، أوامر الشراء، وعمليات المشتريات عبر نظام Odoo ERP.' : 'Managing RFQs, purchase orders, and procurement workflows using Odoo ERP.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'التنسيق مع الموردين بخصوص الأسعار، عروض الأسعار، ومواعيد التسليم.' : 'Coordinating with suppliers regarding quotations, pricing, and delivery schedules.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'مراقبة متطلبات مواد المشاريع، أرصدة المخزون، وحالة المشتريات.' : 'Monitoring project material requirements, stock balances, and procurement status.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'إعداد متتبعات المشتريات وجداول مقارنة الموردين باستخدام برنامج Excel.' : 'Preparing Excel-based procurement trackers and vendor comparison sheets.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'الحفاظ على سجلات الشراء وتنسيق متابعة المدفوعات والتسليم.' : 'Maintaining purchase records and coordinating payment and delivery follow-ups.'}</li>
              </ul>
            </div>

            <div className="p-8 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
                <div>
                  <h3 className="text-xl font-bold">{isAr ? 'مراقب مستندات' : 'Document Controller'}</h3>
                  <p className="text-[#C4B5FD] text-sm font-semibold mt-1">Administrative Business Pattern Co. – Riyadh, Saudi Arabia</p>
                </div>
                <div className="flex flex-col md:items-end gap-2 mt-2 md:mt-0">
                  <span className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-1 rounded-full font-bold w-fit">
                    {isAr ? 'سبتمبر 2024 – أبريل 2026' : 'September 2024 – April 2026'}
                  </span>
                  <a href="https://drive.google.com/file/d/1_9JsMfHwicUWWI51nR274xEhJ47ILINt/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/30 text-[#C4B5FD] border border-[#8B5CF6]/50 px-3 py-1.5 rounded-xl font-bold w-fit hover:bg-[#7C3AED] hover:text-white transition-colors">
                    {isAr ? 'عرض خطاب الخبرة ↗' : 'View Experience Letter ↗'}
                  </a>
                </div>
              </div>
              <ul className="space-y-2 text-[#C2B8D4] text-sm leading-relaxed">
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'الحفاظ على أنظمة حفظ الملفات الورقية والإلكترونية.' : 'Maintained physical and electronic document filing systems.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'إدارة ترقيم المستندات، مراقبة التعديلات، وسجلات المستندات.' : 'Managed document numbering, revision control, and document registers.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'تنظيم السجلات الفنية والإدارية لسهولة الاسترجاع.' : 'Organized technical and administrative records for easy retrieval.'}</li>
                <li className="flex items-start gap-2.5"><span className="text-[#8B5CF6]">▹</span>{isAr ? 'دعم توزيع المستندات، الأرشفة، وصيانة السجلات.' : 'Supported document distribution, archiving, and record maintenance.'}</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '06 / الشهادات والاعتمادات' : '06 / Certifications & Credentials'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'الشهادات والدورات' : 'Certifications & Credentials'}</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base mb-1">Odoo Purchase eLearning</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'إثبات التعلم الإلكتروني من أودو' : 'Odoo eLearning Proof'}</p>
              </div>
              <a href="https://drive.google.com/file/d/1RNmouiSc8x9jfsoC0C3O03oGspnD9UXG/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض إثبات التعلم ↗' : 'View eLearning Proof ↗'}
              </a>
            </div>

            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'التحقق من متعلم المشتريات' : 'Procurement Learner Verification'}</h3>
                <p className="text-[#A79CB8] text-sm mb-4">Alison Learner Verification</p>
              </div>
              <a href="https://drive.google.com/file/d/1FlLTFgKeP5UT9lgDhszskRJSS8lAIwYs/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض التحقق من المتعلم ↗' : 'View Learner Verification ↗'}
              </a>
            </div>

            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'إدارة المستندات الإلكترونية' : 'Electronic Document Management'}</h3>
                <p className="text-[#A79CB8] text-sm mb-4">Alison Learner Verification</p>
              </div>
              <a href="https://drive.google.com/file/d/12_BDAQxV2XUwRcBKcZteNpSpF4jWzUcX/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض التحقق من المتعلم ↗' : 'View Learner Verification ↗'}
              </a>
            </div>

            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base mb-1">Microsoft Excel, Word & PowerPoint</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'شهادة معتمدة من يوديمي' : 'Udemy Verified Certification'}</p>
              </div>
              <a href="https://drive.google.com/file/d/1l0XKPGNxr2jLh95vhPPDibKlnRuWaoC9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض الشهادة ↗' : 'View Certificate ↗'}
              </a>
            </div>

            <div className="p-6 border border-[#30263F] rounded-[18px] bg-[#100E18] flex flex-col justify-between md:col-span-2">
              <div>
                <h3 className="font-bold text-base mb-1">{isAr ? 'دبلوم مهني في الإدارة الإدارية' : 'Professional Diploma in Administration Management'}</h3>
                <p className="text-[#A79CB8] text-sm mb-4">{isAr ? 'شهادة معتمدة من يوديمي' : 'Udemy Verified Certification'}</p>
              </div>
              <a href="https://drive.google.com/file/d/1X24QJp9AE3IrQfgYHbql4B4aZKi1uptL/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض الشهادة ↗' : 'View Certificate ↗'}
              </a>
            </div>

          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="max-w-[720px] mb-8">
            <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '07 / التعليم والمؤهلات' : '07 / Education'}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">{isAr ? 'التعليم' : 'Education'}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">{isAr ? 'دبلوم في تطبيقات الحاسب الآلي (DCA)' : 'Diploma in Computer Application (DCA)'}</h3>
                <p className="text-[#C4B5FD] text-sm mb-4">{isAr ? 'كلية روما التقنية للدرجات العلمية' : 'Ruma Technical Degree College'}</p>
              </div>
              <a href="https://drive.google.com/file/d/1pkIBjxwRBQWQD4PA3GI99KIQndSXdLr9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض شهادة الدبلوم ↗' : 'View Diploma Certificate ↗'}
              </a>
            </div>
            <div className="p-7 border border-[#30263F] rounded-[22px] bg-[#15111F]/96 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-1">{isAr ? 'شهادة الثانوية العامة' : 'Senior Secondary Certificate'}</h3>
                <p className="text-[#C4B5FD] text-sm mb-4">{isAr ? 'مجلس ألهاباد، أتر برديش، الهند' : 'Allahabad Board, Uttar Pradesh, India'}</p>
              </div>
              <a href="https://drive.google.com/file/d/1h07TBOATE0AMpMOyVzDf72khpn9I1Xwz/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-[#C4B5FD] bg-[#7C3AED]/20 border border-[#8B5CF6]/40 px-3 py-2 rounded-xl hover:bg-[#7C3AED] hover:text-white transition-colors text-center">
                {isAr ? 'عرض شهادة الثانوية العامة ↗' : 'View High School Certificate ↗'}
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 max-w-[1160px] mx-auto px-5">
          <div className="p-8 md:p-12 border border-[#8B5CF6]/40 rounded-[28px] bg-gradient-to-br from-[#15111F] to-[#100D17] shadow-[0_0_50px_rgba(124,58,237,0.15)]">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-center">
              
              <div>
                <span className="text-[#C4B5FD] text-xs font-extrabold tracking-widest uppercase">{isAr ? '08 / التواصل' : '08 / Contact'}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">{isAr ? 'دعنا نتواصل' : 'Get in touch'}</h2>
                <p className="text-[#C2B8D4] mb-8 leading-relaxed">
                  {isAr ? 'هل تبحث عن مسؤول مشتريات متخصص في الرياض؟ تواصل معي مباشرة عبر البريد الإلكتروني أو الواتساب أو لينكد إن.' : 'Looking for a dedicated Procurement Specialist in Riyadh? Feel free to reach out directly via email, WhatsApp or LinkedIn.'}
                </p>
                <div className="space-y-4 text-sm font-medium">
                  <p className="flex items-center gap-3">
                    <span className="text-[#8B5CF6]">📧</span> {isAr ? 'البريد الإلكتروني الشخصي:' : 'Personal Email:'} <a href="mailto:sajjad.ali.procurement@gmail.com" className="text-[#C4B5FD] hover:underline">sajjad.ali.procurement@gmail.com</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#8B5CF6]">📱</span> {isAr ? 'دردشة الواتساب:' : 'WhatsApp Chat:'} <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#C4B5FD] hover:underline">{isAr ? 'انقر للدردشة عبر الواتساب ↗' : 'Click to Chat on WhatsApp ↗'}</a>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-[#8B5CF6]">📇</span> {isAr ? 'البطاقة المهنية الشخصية:' : 'Personal Business Card:'} <a href={businessCardUrl} target="_blank" rel="noopener noreferrer" className="text-xs bg-[#7C3AED]/20 text-[#C4B5FD] border border-[#8B5CF6]/40 px-3 py-1.5 rounded-lg hover:bg-[#7C3AED] hover:text-white transition-colors">{isAr ? 'عرض البطاقة الرقمية ↗' : 'View Digital Business Card ↗'}</a>
                  </p>
                </div>
              </div>

              {/* Right Side: Two Cards Side by Side (WhatsApp QR & LinkedIn Box) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* WhatsApp QR Card */}
                <div className="bg-[#100E18] border border-[#30263F] p-5 rounded-2xl flex flex-col items-center text-center shadow-xl">
                  <div className="w-28 h-28 bg-white p-2 rounded-xl shadow-inner mb-3 flex items-center justify-center">
                    <img 
                      src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/966542475245" 
                      alt="WhatsApp QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-sm text-[#EDE7F7] mb-1">{isAr ? 'امسح للدردشة' : 'Scan to Chat'}</h3>
                  <p className="text-[11px] text-[#A79CB8] mb-3">{isAr ? 'تواصل معنا فورا عبر الواتساب.' : 'Chat on WhatsApp.'}</p>
                  <a 
                    href={whatsappLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-2 px-3 rounded-xl bg-[#25D366] text-white font-bold text-xs hover:bg-[#20ba59] transition-colors shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>💬 WhatsApp</span> ↗
                  </a>
                </div>

                {/* LinkedIn Professional Box */}
                <div className="bg-[#100E18] border border-[#30263F] p-5 rounded-2xl flex flex-col items-center text-center shadow-xl justify-between">
                  <div className="w-28 h-28 bg-[#0A66C2] p-2 rounded-xl shadow-inner mb-3 flex flex-col items-center justify-center text-white">
                    <span className="text-3xl font-black tracking-tighter">in</span>
                    <span className="text-[10px] font-semibold mt-1">Sajjad Ali</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#EDE7F7] mb-1">{isAr ? 'الملف المهني' : 'LinkedIn Profile'}</h3>
                  <p className="text-[11px] text-[#A79CB8] mb-3">{isAr ? 'تواصل معي عبر لينكد إن.' : 'Connect on LinkedIn.'}</p>
                  <a 
                    href={linkedinLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full py-2 px-3 rounded-xl bg-[#0A66C2] text-white font-bold text-xs hover:bg-[#084e96] transition-colors shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>💼 LinkedIn</span> ↗
                  </a>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#30263F] py-8 text-center text-xs text-[#A79CB8]">
        © 2026 Sajjad Ali. All rights reserved.
      </footer>
    </div>
  );
}
