import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlateLabel from '../components/SlateLabel';
import FilmstripRail from '../components/FilmstripRail';
import { clients } from '../data/clients';

export default function Home() {
  // Hero Interactive Media Switcher state
  const [activeHeroReel, setActiveHeroReel] = useState('padel');

  // Interactive Work Gallery Filter state
  const [workFilter, setWorkFilter] = useState('ALL');

  // Interactive Workflow Step state
  const [activeStep, setActiveStep] = useState(0);

  // Interactive Testimonial Switcher state
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Interactive FAQ Accordion state
  const [openFaq, setOpenFaq] = useState(0);

  // Hero Reels Data
  const heroReels = {
    padel: {
      title: 'PADEL PLAY REEL',
      category: 'Sports & Social Reels',
      img: '/assets/Padel/PADEL POST (10).png',
      stat: '+240% Engagement',
      time: '00:45',
      desc: 'Dynamic sports coverage with aggressive cuts, kinetic typography, and motion overlays.'
    },
    turja: {
      title: 'TURJA TRAVEL DOC',
      category: 'Luxury Travel & Campaign',
      img: '/assets/Turja/Turja 4 post (5).png',
      stat: '87.7K Views',
      time: '01:15',
      desc: 'Cinematic color grading and atmospheric sound design for premium travel experiences.'
    },
    joious: {
      title: 'JOIOUS BRAND REEL',
      category: 'F&B & Lifestyle',
      img: '/assets/Joious/Joious (1).png',
      stat: '4.2x ROAS Boost',
      time: '00:30',
      desc: 'Vibrant product visuals, upbeat soundtrack sync, and modern social ad formatting.'
    },
    iphoners: {
      title: 'IPHONERS TECH LAUNCH',
      category: 'Tech & Retail Ads',
      img: '/assets/Padel/Padel play (11).png',
      stat: '150K+ Reach',
      time: '00:50',
      desc: 'Sleek motion graphics, fast-paced feature highlights, and clear conversion CTAs.'
    }
  };

  const activeReelData = heroReels[activeHeroReel];

  // Bento Capabilities Data
  const capabilities = [
    {
      id: '01',
      title: 'Video Editing & Post-Production',
      desc: '4K editing, 9:16 vertical reels, multi-cam sync, precise audio leveling, and pacing engineered to retain watch time.',
      tags: ['4K Cutting', 'Sound FX', 'Reels / Shorts', 'Color Grading'],
      highlight: 'Turnaround: 48 Hours'
    },
    {
      id: '02',
      title: 'Motion Graphics & Visual FX',
      desc: 'Custom kinetic typography, lower thirds, 2D/3D animated logos, and visual hook overlays that capture instant attention.',
      tags: ['Kinetic Titles', 'Logo Intros', 'Custom Overlays', 'Visual Hooks'],
      highlight: 'Broadcast Grade'
    },
    {
      id: '03',
      title: 'Social Media Growth & Retainers',
      desc: 'Strategic content calendar planning, viral format engineering, and performance analytics to scale online presence.',
      tags: ['Content Calendar', 'Hooks Strategy', 'Analytics', 'Monthly Retainers'],
      highlight: 'Full Execution'
    },
    {
      id: '04',
      title: 'Brand Identity & Visual Direction',
      desc: 'Building consistent visual guidelines, ad creative frameworks, and graphic brand assets that command trust.',
      tags: ['Visual Identity', 'Ad Frameworks', 'Graphic Assets', 'Brand Books'],
      highlight: 'End-to-End'
    }
  ];

  // Workflow Steps Data
  const workflowSteps = [
    {
      step: '01',
      title: 'SCRIPT & CREATIVE DIRECTION',
      subtitle: 'Angle selection, hook writing, and scene breakdown',
      desc: 'We analyze your audience, audit market trends, and draft punchy scripts with strong hooks built specifically for digital conversion.',
      deliverables: ['Creative Brief', 'Hook Variations', 'Storyboards & Timelines']
    },
    {
      step: '02',
      title: 'PRECISION EDITING & CUTTING',
      subtitle: 'Pacing, seamless transitions, and color grading',
      desc: 'Our senior editors structure raw footage into tight narrative arcs, applying precise cut points, color balance, and dynamic framing.',
      deliverables: ['First Cut Draft', 'Color Correction', 'Seamless Transitions']
    },
    {
      step: '03',
      title: 'MOTION GRAPHICS & SOUND POLISH',
      subtitle: 'Kinetic typography, visual FX, and audio mixing',
      desc: 'We layer kinetic titles, custom overlays, sound effects, and voice EQ to create a polished, broadcast-quality final product.',
      deliverables: ['Subtitles & Graphics', 'Audio Wave Mastering', 'Sound FX Layering']
    },
    {
      step: '04',
      title: 'MULTI-CHANNEL LAUNCH',
      subtitle: 'Export in 16:9, 9:16, 1:1 for instant publishing',
      desc: 'Final assets are rendered in all platform-native ratios with optimized compression settings ready for immediate campaign deployment.',
      deliverables: ['16:9 Master Edit', '9:16 Vertical Reel', '1:1 Square Ad Cut']
    }
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote: "Lumé Media completely revitalized our social presence. Their sports reel edits for Padel Play brought an energy that immediately boosted our court bookings.",
      author: "Padel Play Team",
      role: "Sports Facility & Community Lead",
      metric: "+240% Reach Boost"
    },
    {
      quote: "Working directly with Anas and the Lumé team meant zero delay. They delivered our travel campaign edits in 48 hours with visual quality beyond our expectation.",
      author: "Turja Team",
      role: "Luxury Travel & Experiences Lead",
      metric: "87.7K Views Generated"
    },
    {
      quote: "The visual graphics and content strategy Lumé created gave Joious the premium agency feel we needed to stand out in a crowded market.",
      author: "Joious Brand Team",
      role: "F&B & Lifestyle Director",
      metric: "4.2x ROAS Increase"
    }
  ];

  // FAQs Data
  const faqs = [
    {
      q: "How fast do you deliver the first draft of video edits?",
      a: "Our standard turnaround time for initial edit drafts is 48 working hours. For retainer clients with scheduled weekly drops, we deliver according to strict content calendar deadlines."
    },
    {
      q: "Do you work with footage sent remotely from anywhere in the world?",
      a: "Yes! We work with clients across Pakistan, the Gulf (Dubai, Saudi Arabia, UAE), and internationally. Simply upload your raw footage via Drive, Dropbox, or Frame.io, and our post-production team handles the rest."
    },
    {
      q: "Can we hire Lumé Media on a monthly retainer basis?",
      a: "Absolutely. We offer all-in-one monthly creative retainers that cover scriptwriting, video editing, motion graphics, and social media posting schedules under one predictable budget."
    },
    {
      q: "What makes Lumé Media different from traditional agencies?",
      a: "No middleman layers, no inflated retainer fluff, and direct access to creative leads. Every dollar invested goes straight into high-output, purpose-driven production quality."
    }
  ];

  // Filtered Work logic
  const filteredClients = workFilter === 'ALL'
    ? clients
    : clients.filter(c => c.category.toUpperCase().includes(workFilter) || c.scope.toUpperCase().includes(workFilter));

  return (
    <main className="min-h-screen bg-[#F1F4F8] text-[#101828] pt-16">
      
      {/* 1. HERO SECTION WITH INTERACTIVE MEDIA SHOWCASE CANVAS */}
      <section className="relative min-h-[85vh] flex flex-col justify-between px-4 md:px-12 py-12 md:py-16 border-b border-[#191970]/15 bg-[#F1F4F8] overflow-hidden">
        
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1919700a_1px,transparent_1px),linear-gradient(to_bottom,#1919700a_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

        {/* Top Header Metadata */}
        <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 max-w-7xl mx-auto w-full mb-8">
          <SlateLabel scene="01" roll="LUMÉ" take="PROD" label="ONLINE STUDIO" />
          <div className="font-mono text-xs text-[#191970] font-semibold uppercase tracking-widest bg-white border border-[#191970]/20 px-3 py-1.5 rounded-full shadow-sm">
            DIRECTOR: M. ANAS // LAHORE + DUBAI & GULF
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center my-4">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[#191970] bg-[#191970]/10 px-3 py-1 rounded">
              <span className="w-2 h-2 rounded-full bg-[#191970] animate-ping" />
              <span>DESIGN. EDIT. MARKET.</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#101828] leading-[1.05] tracking-tight uppercase">
              CREATIVE MEDIA <br className="hidden sm:inline" />
              <span className="text-[#191970] underline decoration-[#191970]/30 decoration-4">
                &amp; DIGITAL MARKETING
              </span> <br />
              FOR GROWING BRANDS
            </h1>

            <p className="font-sans text-base md:text-lg text-[#101828]/80 leading-relaxed font-normal max-w-xl">
              Lumé Media transforms ideas into presence — delivering premium, purpose-driven video editing, motion graphics, and content strategy that empowers startups with clarity, confidence, and creative direction.
            </p>

            {/* Hero Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/start"
                className="bg-[#191970] text-white font-mono text-xs md:text-sm font-bold uppercase tracking-wider px-8 py-4 hover:bg-[#0D1B3E] transition-all shadow-md rounded-sm"
              >
                START A PROJECT →
              </Link>
              <Link
                to="/work"
                className="border-2 border-[#191970] text-[#191970] font-mono text-xs md:text-sm font-bold uppercase tracking-wider px-8 py-4 hover:bg-[#191970] hover:text-white transition-all rounded-sm"
              >
                EXPLORE WORK →
              </Link>
            </div>

            {/* Trust highlights */}
            <div className="pt-6 border-t border-[#191970]/15 grid grid-cols-3 gap-4 font-mono text-xs text-[#101828]/70">
              <div>
                <span className="block font-bold text-[#191970] text-sm md:text-base">87.7K+</span>
                <span>Monthly Views</span>
              </div>
              <div>
                <span className="block font-bold text-[#191970] text-sm md:text-base">48 Hours</span>
                <span>First Cut SLA</span>
              </div>
              <div>
                <span className="block font-bold text-[#191970] text-sm md:text-base">100%</span>
                <span>Founder Direct</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Media Studio Showcase Canvas */}
          <div className="lg:col-span-6">
            <div className="bg-[#0D1B3E] text-white rounded-xl border-2 border-[#191970] p-4 md:p-6 shadow-2xl relative overflow-hidden space-y-4">
              
              {/* Top Studio Control Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
                  <span className="ml-2 font-bold text-white/80">LUMÉ EDIT ENGINE v2.4</span>
                </div>
                <div className="text-emerald-400 font-mono font-bold text-[11px] animate-pulse">
                  ● 4K RENDERING ACTIVE
                </div>
              </div>

              {/* Interactive Reel Selector Tabs */}
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[11px]">
                {Object.keys(heroReels).map((key) => {
                  const isActive = activeHeroReel === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveHeroReel(key)}
                      className={`px-3 py-1.5 rounded transition-all uppercase tracking-wider font-bold ${
                        isActive
                          ? 'bg-[#191970] text-white border border-white/30 shadow'
                          : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {key.toUpperCase()}
                    </button>
                  );
                })}
              </div>

              {/* Active Visual Reel Preview Frame */}
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden border border-white/20 bg-black group">
                <img
                  src={activeReelData.img}
                  alt={activeReelData.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />

                {/* Video Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

                {/* Timecode Badge Top Right */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-md text-white font-mono text-[11px] px-2.5 py-1 rounded border border-white/20">
                  REC // {activeReelData.time}
                </div>

                {/* Center Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-14 h-14 rounded-full bg-[#191970]/90 backdrop-blur-md border border-white/40 flex items-center justify-center text-white text-xl pl-1 shadow-2xl group-hover:scale-110 transition-transform">
                    ▶
                  </div>
                </div>

                {/* Bottom Frame Details */}
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-widest bg-black/60 px-2 py-0.5 rounded">
                      {activeReelData.category}
                    </span>
                    <h3 className="font-display text-lg text-white font-bold uppercase tracking-tight drop-shadow">
                      {activeReelData.title}
                    </h3>
                  </div>

                  <div className="bg-[#191970] text-white font-mono text-xs font-bold px-3 py-1 rounded shadow">
                    {activeReelData.stat}
                  </div>
                </div>
              </div>

              {/* Audio & Timeline Track Mockup */}
              <div className="pt-2 space-y-2 font-mono text-[11px] text-white/70">
                <div className="flex justify-between text-[10px] text-white/50">
                  <span>TRACK V1: MAIN CUT</span>
                  <span>AUDIO 48KHZ STEREO</span>
                </div>

                {/* Visual Timeline Bar */}
                <div className="w-full h-3 bg-white/10 rounded overflow-hidden flex">
                  <div className="h-full bg-[#191970] w-2/5 border-r border-white/30" />
                  <div className="h-full bg-emerald-500/80 w-1/4 border-r border-white/30" />
                  <div className="h-full bg-indigo-400/60 w-1/3" />
                </div>

                <p className="text-[11px] text-white/80 italic pt-1">
                  "{activeReelData.desc}"
                </p>
              </div>

            </div>
          </div>

        </div>

      </section>

      {/* 2. SIGNAL & IMPACT METRICS TICKER STRIP */}
      <section className="bg-[#191970] text-white py-4 px-4 overflow-hidden border-b border-[#0D1B3E] font-mono text-xs md:text-sm font-bold uppercase tracking-widest">
        <div className="flex justify-between max-w-7xl mx-auto flex-wrap gap-4 items-center">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
            <span>87.7K+ MONTHLY VIEWS</span>
          </div>
          <span className="hidden md:inline text-white/30">|</span>
          <div>48-HOUR QUICK REVISION TURNAROUND</div>
          <span className="hidden md:inline text-white/30">|</span>
          <div>LAHORE + GULF &amp; DUBAI REACH</div>
        </div>
      </section>

      {/* 3. REEL FILMSTRIP CAROUSEL */}
      <section className="bg-[#F1F4F8] border-b border-[#191970]/15">
        <FilmstripRail />
      </section>

      {/* 4. INTERACTIVE BENTO GRID: OUR CORE CAPABILITIES */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-2">
              SECTION — 02 // CAPABILITIES
            </div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#101828]">
              WHAT WE BUILD &amp; SCALE
            </h2>
          </div>
          <Link
            to="/services"
            className="font-mono text-xs font-bold text-[#191970] hover:underline uppercase tracking-wider flex items-center gap-1"
          >
            VIEW FULL SPECIFICATION SHEET →
          </Link>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {capabilities.map((cap, idx) => (
            <div
              key={cap.id}
              className={`p-8 bg-white border-2 border-[#191970]/15 hover:border-[#191970] rounded-xl transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between space-y-6 ${
                idx === 0 ? 'lg:col-span-7 bg-gradient-to-br from-white to-[#F1F4F8]' : idx === 1 ? 'lg:col-span-5' : idx === 2 ? 'lg:col-span-5' : 'lg:col-span-7 bg-gradient-to-br from-white to-[#F1F4F8]'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center font-mono text-xs">
                  <span className="font-bold text-[#191970] text-sm">[{cap.id}]</span>
                  <span className="bg-[#191970]/10 text-[#191970] font-bold px-2.5 py-1 rounded text-[11px]">
                    {cap.highlight}
                  </span>
                </div>

                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-[#101828]">
                  {cap.title}
                </h3>

                <p className="font-sans text-sm md:text-base text-[#101828]/80 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#191970]/10">
                <div className="flex flex-wrap gap-2">
                  {cap.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono text-[11px] px-2.5 py-1 bg-[#F1F4F8] text-[#191970] font-medium border border-[#191970]/15 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE FEATURED WORK GALLERY WITH CATEGORY FILTERS */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-2">
              SECTION — 03 // PORTFOLIO SPOTLIGHT
            </div>
            <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#101828]">
              FEATURED PRODUCTIONS
            </h2>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {['ALL', 'SPORTS', 'TRAVEL', 'REBRAND'].map((cat) => (
              <button
                key={cat}
                onClick={() => setWorkFilter(cat)}
                className={`px-4 py-2 rounded-sm font-bold transition-all uppercase ${
                  workFilter === cat
                    ? 'bg-[#191970] text-white shadow'
                    : 'bg-white text-[#101828]/70 border border-[#191970]/20 hover:bg-[#191970]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Work Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredClients.slice(0, 4).map((item, idx) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-[#191970]/20 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Banner */}
                <div className="relative h-64 w-full overflow-hidden bg-[#0D1B3E]">
                  <img
                    src={item.gallery[0] || item.logo}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#191970] text-white font-mono text-[10px] px-2.5 py-1 uppercase tracking-widest rounded font-bold">
                    {item.category}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-xs text-[#191970] font-bold">SHOT 0{idx + 1}</span>
                    <span className="font-mono text-xs text-[#101828]/60 uppercase">{item.scope}</span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-[#101828]">
                    {item.name}
                  </h3>

                  <p className="font-sans text-sm text-[#101828]/80 leading-relaxed line-clamp-3">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.scopeChips.map((chip, cIdx) => (
                      <span
                        key={cIdx}
                        className="font-mono text-[11px] px-2.5 py-1 bg-[#F1F4F8] text-[#191970] font-semibold border border-[#191970]/10 rounded"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 pt-0">
                {item.hasFullCaseStudy ? (
                  <Link
                    to={`/work/${item.slug}`}
                    className="inline-block w-full text-center bg-[#191970] text-white font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-[#0D1B3E] transition-colors rounded-sm"
                  >
                    VIEW CASE STUDY →
                  </Link>
                ) : (
                  <Link
                    to="/work"
                    className="inline-block w-full text-center border border-[#191970] text-[#191970] font-mono text-xs font-bold uppercase tracking-widest px-6 py-3.5 hover:bg-[#191970] hover:text-white transition-colors rounded-sm"
                  >
                    VIEW SHOT BRIEF →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/work"
            className="inline-block border-2 border-[#191970] text-[#191970] font-mono text-xs font-bold uppercase tracking-widest px-10 py-4 hover:bg-[#191970] hover:text-white transition-all rounded-sm shadow-sm"
          >
            VIEW ALL PORTFOLIO SHOTS →
          </Link>
        </div>
      </section>

      {/* 6. INTERACTIVE 4-STEP PRODUCTION WORKFLOW TIMELINE */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="mb-12">
          <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-2">
            SECTION — 04 // HOW WE EXECUTE
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#101828]">
            FROM SCRIPT TO FINAL RENDER
          </h2>
          <p className="font-sans text-base text-[#101828]/70 max-w-2xl mt-2">
            Our streamlined 4-phase production cycle ensures complete transparency and lightning-fast execution.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {workflowSteps.map((ws, sIdx) => {
            const isActive = activeStep === sIdx;
            return (
              <button
                key={ws.step}
                onClick={() => setActiveStep(sIdx)}
                className={`p-4 text-left rounded-lg transition-all border font-mono text-xs uppercase ${
                  isActive
                    ? 'bg-[#191970] text-white border-[#191970] font-bold shadow-md'
                    : 'bg-white text-[#101828]/70 border-[#191970]/20 hover:bg-[#191970]/5'
                }`}
              >
                <div className="text-[10px] opacity-70 mb-1">STAGE {ws.step}</div>
                <div className="font-display text-sm tracking-tight">{ws.title}</div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-white rounded-xl border-2 border-[#191970] p-8 md:p-12 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest">
              ACTIVE STAGE // {workflowSteps[activeStep].step}
            </div>
            <h3 className="font-display text-2xl md:text-4xl uppercase tracking-tight text-[#101828]">
              {workflowSteps[activeStep].title}
            </h3>
            <p className="font-mono text-xs text-[#191970] font-semibold uppercase">
              {workflowSteps[activeStep].subtitle}
            </p>
            <p className="font-sans text-base text-[#101828]/80 leading-relaxed">
              {workflowSteps[activeStep].desc}
            </p>
          </div>

          <div className="lg:col-span-5 bg-[#F1F4F8] p-6 rounded-lg border border-[#191970]/20 space-y-4">
            <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest pb-2 border-b border-[#191970]/15">
              STAGE DELIVERABLES:
            </div>
            <ul className="space-y-2.5 font-sans text-sm text-[#101828]">
              {workflowSteps[activeStep].deliverables.map((item, dIdx) => (
                <li key={dIdx} className="flex items-center gap-2">
                  <span className="text-[#191970] font-bold">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. CLIENT VOICE & TESTIMONIAL CAROUSEL */}
      <section className="py-20 px-4 md:px-12 max-w-7xl mx-auto border-b border-[#191970]/15">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-2">
            SECTION — 05 // CLIENT PROOF
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#101828]">
            CLIENT STORIES &amp; IMPACT
          </h2>
        </div>

        {/* Testimonial Card Display */}
        <div className="bg-[#0D1B3E] text-white rounded-2xl p-8 md:p-14 shadow-2xl relative overflow-hidden max-w-4xl mx-auto">
          <div className="font-display text-5xl md:text-7xl text-[#191970]/40 absolute top-4 left-6 pointer-events-none">
            “
          </div>

          <div className="relative z-10 space-y-6">
            <blockquote className="font-display text-xl sm:text-2xl md:text-3xl uppercase tracking-tight leading-relaxed text-white">
              "{testimonials[activeTestimonial].quote}"
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex flex-wrap justify-between items-center gap-4">
              <div>
                <div className="font-display text-lg font-bold text-white uppercase">
                  {testimonials[activeTestimonial].author}
                </div>
                <div className="font-mono text-xs text-white/60">
                  {testimonials[activeTestimonial].role}
                </div>
              </div>

              <div className="bg-[#191970] text-white font-mono text-xs font-bold px-4 py-2 rounded shadow">
                {testimonials[activeTestimonial].metric}
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-3 mt-6">
          {testimonials.map((_, tIdx) => (
            <button
              key={tIdx}
              onClick={() => setActiveTestimonial(tIdx)}
              className={`w-3 h-3 rounded-full transition-all ${
                activeTestimonial === tIdx ? 'bg-[#191970] w-8' : 'bg-[#191970]/30'
              }`}
              aria-label={`Testimonial ${tIdx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 8. INTERACTIVE FAQ ACCORDION SECTION */}
      <section className="py-20 px-4 md:px-12 max-w-5xl mx-auto border-b border-[#191970]/15">
        <div className="mb-12 text-center">
          <div className="font-mono text-xs text-[#191970] font-bold uppercase tracking-widest mb-2">
            SECTION — 06 // FREQUENTLY ASKED QUESTIONS
          </div>
          <h2 className="font-display text-3xl sm:text-5xl uppercase tracking-tight text-[#101828]">
            GOT QUESTIONS? WE'VE GOT ANSWERS.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, fIdx) => {
            const isOpen = openFaq === fIdx;
            return (
              <div
                key={fIdx}
                className="bg-white rounded-xl border border-[#191970]/20 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : fIdx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 font-display text-lg md:text-xl uppercase tracking-tight text-[#101828] hover:text-[#191970] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="font-mono text-xl font-bold text-[#191970]">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 font-sans text-sm md:text-base text-[#101828]/80 leading-relaxed border-t border-[#191970]/10">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 9. FINAL CALL TO ACTION SECTION */}
      <section className="py-24 px-4 md:px-12 text-center bg-[#0D1B3E] text-white relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 font-mono text-xs font-bold text-white tracking-widest uppercase bg-[#191970] px-3.5 py-1.5 rounded">
            <span>SCENE — 07 // READY TO ELEVATE</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
            YOUR BRAND DESERVES A PRODUCTION PARTNER, NOT A TEMPLATE.
          </h2>

          <p className="font-sans text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Same-day response during working hours. Let's discuss your brand's narrative, content schedule, or full visual rebrand.
          </p>

          <div>
            <Link
              to="/start"
              className="inline-block bg-[#191970] text-white font-mono text-sm font-bold uppercase tracking-widest px-10 py-5 hover:bg-[#2525A8] transition-all shadow-xl rounded-sm"
            >
              START A PROJECT NOW →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
