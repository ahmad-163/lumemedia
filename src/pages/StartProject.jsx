import React, { useState } from 'react';
import SlateLabel from '../components/SlateLabel';

export default function StartProject() {
  const [brandName, setBrandName] = useState('');
  const [projectTypes, setProjectTypes] = useState(['Social Media Strategy']);
  const [budgetRange, setBudgetRange] = useState('Flexible Startup Budget');
  const [timeline, setTimeline] = useState('Immediate / Next 2 Weeks');
  const [message, setMessage] = useState('');

  const projectOptions = [
    'Social Media Strategy & Retainer',
    'Video Editing & Motion Graphics',
    'Graphic Design & Branding',
    'Full Brand Identity Rebrand',
    'Advocacy & Non-Profit Campaign',
    'Other / Custom Scope',
  ];

  const budgetOptions = [
    'Flexible Startup Budget',
    '$500 - $1,500 / mo',
    '$1,500 - $3,000 / mo',
    'Project-Based One-Time',
  ];

  const handleCheckboxToggle = (type) => {
    if (projectTypes.includes(type)) {
      setProjectTypes(projectTypes.filter((t) => t !== type));
    } else {
      setProjectTypes([...projectTypes, type]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `*NEW PROJECT INTAKE — LUMÉ MEDIA*
    
*Brand Name:* ${brandName || 'N/A'}
*Services Requested:* ${projectTypes.join(', ') || 'N/A'}
*Budget Range:* ${budgetRange}
*Timeline:* ${timeline}

*Message / Notes:*
${message || 'No additional notes provided.'}`;

    const encodedText = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/923707165674?text=${encodedText}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] pt-20 pb-24">
      {/* Header */}
      <section className="px-4 md:px-12 py-12 border-b border-[#191970]/15 max-w-5xl mx-auto">
        <SlateLabel scene="START" roll="INTAKE" take="01" label="CALL SHEET FORM" />
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[#101828] mt-6">
          START A <span className="text-[#191970]">PROJECT</span>
        </h1>
        <p className="font-sans text-base md:text-lg text-[#101828]/75 max-w-2xl mt-4">
          Fill out this production intake call sheet to route directly into our WhatsApp workspace.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 font-mono text-xs text-[#191970] font-bold uppercase tracking-widest bg-white border border-[#191970]/30 px-3 py-1.5 rounded shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#191970] animate-ping" />
          <span>SAME-DAY REPLY DURING WORKING HOURS</span>
        </div>
      </section>

      {/* Production Intake Form Section */}
      <section className="px-4 md:px-12 py-12 max-w-5xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-white border-2 border-[#191970] rounded-xl p-6 md:p-10 space-y-8 shadow-xl relative"
        >
          {/* Header Bar */}
          <div className="flex justify-between items-center font-mono text-xs text-[#101828]/60 pb-4 border-b border-[#191970]/15">
            <span className="text-[#191970] font-bold">PRODUCTION CALL SHEET // FORM 01</span>
            <span className="text-emerald-600 font-bold">WHATSAPP HANDOFF READY</span>
          </div>

          {/* 1. BRAND NAME */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              01 // BRAND / COMPANY NAME *
            </label>
            <input
              type="text"
              required
              placeholder="e.g., Padel Play, Turja Travel, My Startup"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              className="w-full bg-[#F1F4F8] border border-[#191970]/30 focus:border-[#191970] text-[#101828] font-mono text-sm px-4 py-3 outline-none rounded transition-colors"
            />
          </div>

          {/* 2. PROJECT TYPE */}
          <div className="space-y-3">
            <label className="block font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              02 // PROJECT TYPE / SCOPE (SELECT ALL THAT APPLY)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {projectOptions.map((option, idx) => {
                const checked = projectTypes.includes(option);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleCheckboxToggle(option)}
                    className={`p-3 text-left font-mono text-xs uppercase tracking-wider border rounded transition-all flex items-center gap-3 ${
                      checked
                        ? 'bg-[#191970] text-white border-[#191970] font-bold shadow'
                        : 'bg-[#F1F4F8] border-[#191970]/20 text-[#101828]/80 hover:border-[#191970]'
                    }`}
                  >
                    <span className={`w-4 h-4 border flex items-center justify-center font-bold text-[10px] rounded ${checked ? 'border-white bg-[#191970] text-white' : 'border-[#191970]'}`}>
                      {checked ? '✓' : ''}
                    </span>
                    <span>{option}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. BUDGET RANGE */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              03 // ESTIMATED BUDGET RANGE
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {budgetOptions.map((b, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setBudgetRange(b)}
                  className={`p-3 text-center font-mono text-xs uppercase tracking-wider border rounded transition-all ${
                    budgetRange === b
                      ? 'bg-[#191970] text-white border-[#191970] font-bold shadow'
                      : 'bg-[#F1F4F8] border-[#191970]/20 text-[#101828]/80 hover:border-[#191970]'
                  }`}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          {/* 4. TIMELINE */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              04 // DESIRED TIMELINE / START DATE
            </label>
            <input
              type="text"
              placeholder="e.g. Immediate, Next 2 weeks, Flexible"
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className="w-full bg-[#F1F4F8] border border-[#191970]/30 focus:border-[#191970] text-[#101828] font-mono text-sm px-4 py-3 outline-none rounded transition-colors"
            />
          </div>

          {/* 5. MESSAGE */}
          <div className="space-y-2">
            <label className="block font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              05 // BRIEF DETAILS / ADDITIONAL NOTES
            </label>
            <textarea
              rows={4}
              placeholder="Tell us about your brand goals, target audience, or specific deliverables needed..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-[#F1F4F8] border border-[#191970]/30 focus:border-[#191970] text-[#101828] font-sans text-sm p-4 outline-none rounded transition-colors resize-y"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-6 border-t border-[#191970]/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-widest px-8 py-4 hover:bg-[#0D1B3E] transition-all rounded shadow-md"
            >
              SUBMIT CALL SHEET VIA WHATSAPP →
            </button>

            <a
              href="mailto:itslumemedia@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#101828]/70 hover:text-[#191970] underline font-semibold"
            >
              OR EMAIL US DIRECTLY →
            </a>
          </div>
        </form>
      </section>
    </main>
  );
}

