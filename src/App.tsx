import { useState, useEffect, useRef } from "react";
import Lenis from "lenis";
import profilePhoto from "./imports/Marko-Stjepanovic.jpg";

import tiesDashboard from "./imports/ties/ties-single-dashboard-details.webp";
import tiesQueryColumns from "./imports/ties/ties-query-columns.webp";
import tiesCardViewDetails from "./imports/ties/ties-card-view-details.webp";
import tiesStartNewJob from "./imports/ties/ties-start-new-job.webp";
import tiesTessaChat from "./imports/ties/ties-tessa-helpchat.webp";

import profinaceAgreement from "./imports/profinance/profinance-agreement-summary.webp";
import profinaceServiceDetails from "./imports/profinance/profinance-service-details.webp";
import profinaceInvoice from "./imports/profinance/profinance-ar-invoices.webp";
import profinaceInvoiceDetail from "./imports/profinance/profinance-invoice-drawer-interest.webp";

import visitGroupCallCenterDashboard from "./imports/visit/callcenter-dashboard.webp";
import visitGroupCallCenterCheckout from "./imports/visit/callcenter-checkout.webp";
import visitGroupBookVisitAdminHome from "./imports/visit/bookvisit-admin-home.webp";
import visitGroupBookVisitAdminManage from "./imports/visit/bookvisit-admin-manage.webp";

import empireHotelArrivalDateField from "./imports/empire/empire-hotel-select-a-room-arrival-date-field.webp";
import empireHotelBookMoreRooms from "./imports/empire/empire-hotel-select-a-room-book-more-rooms.webp";
import empireHotelCheckout from "./imports/empire/empire-hotel-checkout-vc-info-popup.webp";
import empireHotelConfirmationEmail from "./imports/empire/empire-hotel-confirmation-email.webp";


/* ── theme tokens ── */
const themes = {
  light: {
    bg: "#f9f9f7",
    surface: "#ffffff",
    text: "#111111",
    textMid: "#555555",
    textMuted: "#999999",
    border: "#e4e4e0",
    tag: { bg: "#eeeeeb", text: "#555555" },
    toggle: { bg: "#111", text: "#fff" },
    marqueeBg: "#f0f0ed",
    marqueeText: "#333",
    divider: "#e4e4e0",
    imgOverlay: "rgba(249,249,247,0.1)",
    linkHover: "#111",
  },
  dark: {
    bg: "#0c0c0c",
    surface: "#161616",
    text: "#f0f0ee",
    textMid: "rgba(240,240,238,0.55)",
    textMuted: "rgba(240,240,238,0.32)",
    border: "rgba(255,255,255,0.08)",
    tag: { bg: "rgba(255,255,255,0.07)", text: "rgba(240,240,238,0.6)" },
    toggle: { bg: "#f0f0ee", text: "#0c0c0c" },
    marqueeBg: "#1a1a1a",
    marqueeText: "rgba(240,240,238,0.7)",
    divider: "rgba(255,255,255,0.08)",
    imgOverlay: "rgba(12,12,12,0.1)",
    linkHover: "#c8ff00",
  },
} as const;

type Theme = typeof themes.light;

const stackItems = [
  "Figma", "UI/UX Design", "Responsive Design", "Design Systems", "Component Libraries", "TypeScript", "JavaScript", "AI-Assisted Development", "HTML & CSS", "SASS/SCSS", "Blazor", "ASP.NET Core", "C#", "Aurelia JS", "Git", "Enterprise SaaS"
];

const experience = [
  {
    company: "Bridge IQ / Trilogy Energy Solutions",
    role: "Design Engineer",
    period: "Apr 2025 – Jul 2026",
    type: "Full-Time",
    desc: "Enterprise energy trading platform (TIES) — design and frontend across trade capture, query tooling, and TESSA AI assistant.",
  },
  {
    company: "Tietoevry",
    role: "Product Designer & Frontend Developer",
    period: "Oct 2023 – Mar 2025",
    type: "Full-Time",
    desc: "Leasing SaaS (Profinance) used by banks across Europe. Figma to Blazor/C# pipeline with custom components on top of Telerik.",
  },
  {
    company: "Quantum – AutoMarket",
    role: "Frontend Developer & Designer",
    period: "Feb 2019 – Sep 2023",
    type: "Full-Time",
    desc: "Serbia's largest automotive marketplaces (autohub.rs, prodajadelova.rs) on NopCommerce. Owned interaction design and frontend performance.",
  },
  {
    company: "Visit Group",
    role: "Frontend Developer",
    period: "Apr 2015 – Jan 2019",
    type: "Full-Time",
    desc: "Two products in the Nordic tourism platform: Citybreak call center booking system (ten verticals, shared basket) and BookVisit operator admin.",
  },
  {
    company: "SKS365 Group GmbH",
    role: "Web Designer",
    period: "Dec 2013 – Mar 2015",
    type: "Full-Time",
    desc: "Real-time live betting interfaces — odds display, bet slips, match tracking under high-concurrency load.",
  },
  {
    company: "Guidance Ltd",
    role: "Software Engineer",
    period: "Jul 2012 – Dec 2013",
    type: "Full-Time",
    desc: "Cross-platform hotel management apps (PhoneGap) and web portal for iTesso (Breda, Netherlands).",
  },
  {
    company: "Quantum – AutoMarket",
    role: "Graphic & Web Designer",
    period: "Apr 2009 – Jun 2012",
    type: "Full-Time",
    desc: "Umbraco CMS websites and brand work for automotive clients.",
  },
  {
    company: "TDI Radio Belgrade",
    role: "Graphic & Web Designer",
    period: "Nov 2007 – Mar 2009",
    type: "Contract",
    desc: "Flash brand campaigns for Toshiba, Asus, Cooler Master (via Maxim Media). Station website and identity.",
  },
];

const projects = [
  {
    number: "01",
    title: "Trilogy TIES",
    client: "Trilogy Energy Solutions",
    role: "Design + Frontend",
    tools: "Figma, Aurelia, TypeScript",
    period: "2025 – 2026",
    industry: "ETRM",
    summary: "Enterprise platform for energy traders managing jobs, queries, and physical/financial trades against high-value counterparties.",
    desc: [
      "TIES (Trilogy Integrated Energy System) is the platform Trilogy's traders use to manage complex trade lifecycles across physical and financial markets. I was responsible for the product design and frontend implementation, building the component framework from scratch on top of an existing backend. The work spanned trade capture, job scheduling, query tooling, and the TESSA assistant, among other areas.",
      "TESSA is an embedded AI help-chat that surfaces contextual guidance with source citations, reducing onboarding friction for a system where every screen carries high-stakes financial decisions.",
      "The design challenge was density: traders need to see everything at once. Every component was built to maximize information clarity without sacrificing usability under time pressure.",
    ],
    images: [
      { src: tiesDashboard, caption: "Dashboards - Single dashboard details view" },
      { src: tiesQueryColumns, caption: "Query - Filter column detail information" },
      { src: tiesCardViewDetails, caption: "Queries - Single query details" },
      // { src: tiesStartNewJob, caption: "Jobs module — Start new job" },
      { src: tiesTessaChat, caption: "TESSA AI assistant — contextual help chat" },
    ],
  },
  {
    number: "02",
    title: "Tietoevry Profinance",
    client: "Tietoevry",
    role: "Design + Development",
    tools: "Figma, Blazor, Telerik",
    period: "2023 – 2025",
    industry: "	Banking & Leasing",
    summary: "",
    desc: [
      "ProFinance is a leasing and finance SaaS used by banks across Europe to manage agreements, invoices, and regulatory reporting. I designed the interface in Figma and implemented it in Blazor and C#, owning the full design-to-code pipeline for the modules I shipped.",
      "The work was form-heavy and detail-heavy: agreements with layered financial state, invoice breakdowns with line-item drill-down, and side-panel drawers that surfaced sub-views without pulling the user off context.",
      "The tension was between speed and consistency. Telerik gave us production-grade primitives out of the box, but banking workflows demanded custom behaviour Telerik couldn't cover alone. I built a reusable component layer on top — Telerik where it fit, custom where it didn't — so the app felt like one system, not two.",

    ],
    images: [
      { src: profinaceAgreement, caption: "Agreement - Summary view" },
      { src: profinaceServiceDetails, caption: "Agreement - Service details view" },
      { src: profinaceInvoice, caption: "Invoice - AR Invoices detail view" },
      { src: profinaceInvoiceDetail, caption: "Invoice - Drawer with interest/charges" },
    ],
  },
  {
    number: "03",
    title: "Visit Group",
    client: "Visit Group",
    role: "Design + Development",
    tools: "Photoshop, HTML/CSS, JavaScript",
    period: "2015 – 2019",
    industry: "Booking Travel & Tourism",
    summary: "",
    desc: [
      "Visit Group builds software for the Nordic tourism industry. Over four years I worked on two products in their platform: Citybreak, the call center booking system reservation agents use to build multi-vertical trips over the phone, and BookVisit, the operator admin where hotels and travel businesses manage inventory, packages, and distribution.",
      "Citybreak was the harder problem. One booking flow, ten verticals — accommodation, activities, cabins, activity transport, events with seat maps, ferries with cabin selection, trains, buses, flights, and car rentals. Every vertical had a different data shape, search model, and pricing logic, but agents needed one coherent interface they could operate at speed while a customer waited on the line. A shared basket held everything together through checkout, so ferry, hotel, and event ticket became one reservation.",
      "BookVisit was the same problem inverted. Operators configuring the inventory that Citybreak agents were booking — rate plans, package builders, conference rooms, channel distribution. Different users, same constraint: complex work that had to survive being done fast.",
    ],
    images: [
      { src: visitGroupCallCenterDashboard, caption: "Citybreak - Call center dashboard" },
      { src: visitGroupCallCenterCheckout, caption: "Citybreak - Call center checkout" },
      { src: visitGroupBookVisitAdminHome, caption: "BookVisit - Admin home" },
      { src: visitGroupBookVisitAdminManage, caption: "BookVisit - Admin manage" },
    ],
  },
  {
    number: "04",
    title: "The Empire Hotel (New York City)",
    client: "The Empire Hotel",
    role: "Design + Development",
    tools: "Photoshop, WordPress, HTML/CSS",
    period: "2016",
    industry: "Boutique Hospitality",
    summary: "",
    desc: [
      "The Empire Hotel is a boutique property on Manhattan's Upper West Side. I designed the site mobile-first in Photoshop and built the booking widget and landing pages in HTML/CSS, working with one collaborator on the WordPress implementation.",
      "The brand did the heavy lifting — warm palette, editorial photography, restrained typography — so the interface stayed out of its way. Booking flows on hotel sites can feel transactional; the goal was to keep the boutique tone intact from landing page to reservation.",
    ],
    images: [
      // { src: empireHotelArrivalDateField, caption: "Make reservations - Select a room, arrival date field" },
      { src: empireHotelBookMoreRooms, caption: "Make reservations - Select a room, book more rooms" },
      { src: empireHotelCheckout, caption: "Make reservations - Checkout VC info popup" },
      // { src: empireHotelConfirmationEmail, caption: "Make reservations - Confirmation email" }, 
      
    ],
  },
];

/* ── Scroll reveal hook ── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add("visible"); obs.unobserve(el); } },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* ── Marquee ── */
function StackMarquee({ t }: { t: Theme }) {
  const items = [...stackItems, ...stackItems];
  return (
    <div
      className="overflow-hidden py-1"
      style={{ borderTop: `1px solid ${t.divider}`, borderBottom: `1px solid ${t.divider}` }}
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 px-8 text-sm whitespace-nowrap"
            style={{
              color: t.marqueeText,
              fontFamily: "'Ubuntu', sans-serif",
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: "3rem",
            }}
          >
            {item}
            <span style={{ color: t.divider, fontSize: "0.6rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Project Image Gallery ── */
function ProjectGallery({ images, t }: { images: { src: string; caption: string }[]; t: Theme }) {
  const [active, setActive] = useState(0);
  return (
    <div className="mt-10">
      {/* Main image */}
      <div
        className="w-full overflow-hidden rounded-xl mb-3"
        style={{ background: t.border, boxShadow: "0 4px 16px rgba(0,0,0,0.08)" }}
      >
        <img
          key={active}
          src={images[active].src}
          alt={images[active].caption}
          className="w-full h-full object-cover"
          style={{ display: "block" }}
        />
      </div>
      <p className="text-xs mb-5" style={{ color: t.textMuted, fontFamily: "'Ubuntu', sans-serif" }}>
        {images[active].caption}
      </p>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="overflow-hidden rounded-lg flex-1 transition-all duration-200"
              style={{
                aspectRatio: "16/9",
                background: t.border,
                border: i === active ? `2px solid ${t.border}` : `2px solid transparent`,
                padding: 0,
                cursor: "pointer",
                opacity: i === active ? 1 : 0.5,
              }}
            >
              <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Divider ── */
function Divider({ t }: { t: Theme }) {
  return (
    <div style={{ borderTop: `1px solid ${t.divider}`, margin: "72px 0" }} />
  );
}

/* ── Section Label ── */
function Label({ children, t }: { children: string; t: Theme }) {
  return (
    <p
      className="text-xs font-medium tracking-widest uppercase mb-8"
      style={{ color: t.textMuted, fontFamily: "'Ubuntu', sans-serif", letterSpacing: "0.12em" }}
    >
      {children}
    </p>
  );
}

/* ── Theme icons ── */
function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4.2" />
      <path d="M12 2.4v2.3M12 19.3v2.3M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.4 12h2.3M19.3 12h2.3M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.5 14.4A8.6 8.6 0 0 1 9.6 3.5a8.6 8.6 0 1 0 10.9 10.9z" />
    </svg>
  );
}

/* ── App ── */
export default function App() {
  const [isDark, setIsDark] = useState(false);
  const t = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.3, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf); }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const [nameOut, setNameOut] = useState(false);
  const [bgOut, setBgOut] = useState(false);
  const [loaderGone, setLoaderGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setNameOut(true), 2400);  // name blurs up
    const t2 = setTimeout(() => setBgOut(true),   2650);  // curtain drops down
    const t3 = setTimeout(() => setLoaderGone(true), 3500); // unmount
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div
      style={{
        background: t.bg,
        color: t.text,
        fontFamily: "'Ubuntu', sans-serif",
        minHeight: "100%",
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >

      {/* ── LOADER ── */}
      {!loaderGone && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 999,
            pointerEvents: bgOut ? "none" : "all",
            overflow: "hidden",
          }}
        >
          {/* Curtain background — slides DOWN on exit */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: t.bg,
              transform: bgOut ? "translateY(100%)" : "translateY(0)",
              transition: "transform 0.75s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
          />

          {/* Name — letter by letter, then blurs up on exit */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              filter: nameOut ? "blur(10px)" : "blur(0px)",
              opacity: nameOut ? 0 : 1,
              transform: nameOut ? "translateY(-36px)" : "translateY(0)",
              transition: "opacity 0.5s ease, transform 0.6s cubic-bezier(0.4, 0, 0.2, 1), filter 0.5s ease",
            }}
          >
            <p
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                letterSpacing: "-0.01em",
                color: t.text,
                lineHeight: 1,
                whiteSpace: "nowrap",
                fontWeight: 400,
              }}
            >
              {"Marko Stjepanović".split("").map((char, i) => (
                <span
                  key={i}
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    animation: `charReveal 0.45s ${i * 55}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
                  }}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

      {/* ── FLOATING TOGGLE ── */}
      <button
        onClick={() => setIsDark(!isDark)}
        title={isDark ? "Switch to light mode" : "Switch to dark mode"}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          position: "fixed",
          top: 20,
          right: 24,
          zIndex: 100,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1px solid ${t.border}`,
          background: t.surface,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: t.text,
          boxShadow: isDark
            ? "0 4px 16px rgba(0,0,0,0.4)"
            : "0 4px 16px rgba(0,0,0,0.1)",
          transition: "background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease",
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </button>

      {/* ── HERO ── */}
      <section
        className={isDark ? "hero-dots-dark" : "hero-dots-light"}
        style={{ position: "relative" }}
      >
        {/* fade out dots at bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(to bottom, transparent 50%, ${t.bg} 100%)`,
            pointerEvents: "none",
          }}
        />

        <div
          className="px-6 pt-24 pb-20 max-w-4xl mx-auto"
          style={{ position: "relative" }}
        >
          <div className="flex items-start justify-between gap-12">
            {/* Left: text */}
            <div className="flex-1">
              <p
                className="text-sm mb-6"
                style={{ color: t.textMuted, fontFamily: "'Ubuntu', sans-serif" }}
              >
                Designer & Developer · Belgrade, Serbia
              </p>
              <h1
                style={{
                  fontFamily: "'Fraunces', serif",
                  fontSize: "clamp(3rem, 7vw, 5.5rem)",
                  lineHeight: 1.0,
                  letterSpacing: "-0.03em",
                  fontWeight: 600,
                  color: t.text,
                  marginBottom: "2rem",
                  transition: "color 0.3s ease",
                }}
              >
                Marko<br />
                Stjepanović
              </h1>
              <p
                className="text-base max-w-lg flex flex-col items-center gap-2"
                style={{ color: t.textMid, lineHeight: 1.75, fontWeight: 300, textWrap: 'pretty' }}
              >
                <span>
                  I read design files the way engineers read code — because I write both.
                </span>
                <span>
                  Nearly two decades of experience shipping frontend, most recently on enterprise systems where interface clarity has direct financial consequences. Figma to production code, full pipeline.
                </span>
                <span>
                  Over the past year I've integrated AI into my daily workflow — using Claude for design-to-code translation and rapid iteration on complex UI states.
                  <br/>
                  Same craft, faster process.
                </span>
              </p>

              <div className="flex items-center gap-5 mt-10 flex-wrap">
                <div className="flex items-center gap-2">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#22c55e", boxShadow: "0 0 6px #22c55e" }}
                  />
                  <span className="text-xs" style={{ color: t.textMuted }}>
                    Available for work
                  </span>
                </div>
                <span style={{ color: t.divider }}>·</span>
                <span className="text-xs" style={{ color: t.textMuted }}>
                  <a
                    href="mailto:marko4286@gmail.com"
                    className="text-xs transition-all duration-150"
                    style={{ color: t.textMuted, textDecoration: "none" }}
                    onMouseEnter={e => (e.currentTarget.style.color = t.text)}
                    onMouseLeave={e => (e.currentTarget.style.color = t.textMuted)}
                  >
                    marko4286@gmail.com
                  </a>
                </span>
                <span style={{ color: t.divider }}>·</span>
                <span className="text-xs" style={{ color: t.textMuted }}>
                  Banking · Leasing · ETRM · Hospitality · Automotive
                </span>
              </div>
            </div>

            {/* Right: profile photo with rings + badges */}
            <div
              className="flex-shrink-0 hidden md:flex items-center justify-center"
              style={{ width: 360, height: 360, position: "relative" }}
            >
              {/* SVG animated dashed rings */}
              <svg
                width="360" height="360"
                viewBox="0 0 360 360"
                style={{ position: "absolute", inset: 0, overflow: "visible" }}
              >
                {[
                  { r: 144, dur: 18, dir: "cw" },
                  { r: 175, dur: 28, dir: "ccw" },
                ].map(({ r, dur, dir }, i) => (
                  <circle
                    key={i}
                    cx={180} cy={180} r={r}
                    fill="none"
                    stroke={isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.14)"}
                    strokeWidth="1"
                    strokeDasharray="6 9"
                    style={{
                      animation: `dash-${dir} ${dur}s linear infinite`,
                    }}
                  />
                ))}
              </svg>

              {/* Photo */}
              <div
                style={{
                  width: 230,
                  height: 230,
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  zIndex: 2,
                  flexShrink: 0,
                  boxShadow: isDark
                    ? "0 24px 64px rgba(0,0,0,0.55)"
                    : "0 24px 64px rgba(0,0,0,0.13)",
                }}
              >
                <img
                  src={profilePhoto}
                  alt="Marko Stjepanović"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>

              {/* Badge: Ideas into Impact — top right, lime */}
              {/* <div style={{
                position: "absolute", top: 14, right: 6, zIndex: 4,
                background: "#c8ff00", color: "#111",
                padding: "7px 16px", borderRadius: 999,
                fontSize: "0.78rem", fontWeight: 700,
                fontFamily: "'Ubuntu', sans-serif",
                boxShadow: "0 4px 18px rgba(200,255,0,0.35)",
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
              }}>
                Ideas into Products
              </div> */}

              {/* Badge: Pixel-Perfect — left, white/gray */}
              {/* <div style={{
                position: "absolute", top: "36%", left: -18, zIndex: 4,
                background: isDark ? "#2a2a2a" : "#efefed",
                color: isDark ? "#f0f0ee" : "#333",
                padding: "7px 16px", borderRadius: 999,
                fontSize: "0.78rem", fontWeight: 700,
                fontFamily: "'Ubuntu', sans-serif",
                boxShadow: isDark ? "0 4px 18px rgba(0,0,0,0.4)" : "0 4px 14px rgba(0,0,0,0.08)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
              }}>
                Human First
              </div> */}

              {/* Badge: Empathy First — right bottom, lime */}
              {/* <div style={{
                position: "absolute", bottom: "20%", right: 4, zIndex: 4,
                background: "#c8ff00", color: "#111",
                padding: "7px 16px", borderRadius: 999,
                fontSize: "0.78rem", fontWeight: 700,
                fontFamily: "'Ubuntu', sans-serif",
                boxShadow: "0 4px 18px rgba(200,255,0,0.35)",
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
              }}>
                Pixel Precision
              </div> */}

              {/* Badge: Future-Ready — bottom left, white/gray */}
              {/* <div style={{
                position: "absolute", bottom: 16, left: 8, zIndex: 4,
                background: isDark ? "#2a2a2a" : "#efefed",
                color: isDark ? "#f0f0ee" : "#333",
                padding: "7px 16px", borderRadius: 999,
                fontSize: "0.78rem", fontWeight: 700,
                fontFamily: "'Ubuntu', sans-serif",
                boxShadow: isDark ? "0 4px 18px rgba(0,0,0,0.4)" : "0 4px 14px rgba(0,0,0,0.08)",
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)"}`,
                whiteSpace: "nowrap",
                letterSpacing: "0.01em",
              }}>
                AI-Enhanced
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ── STACK CAROUSEL ── */}
      <Reveal><StackMarquee t={t} /></Reveal>

      {/* ── EXPERIENCE ── */}
      <section className="px-6 py-24 max-w-4xl mx-auto">
        <Label t={t}>Experience</Label>
        <div className="flex flex-col">
          {experience.map((e, i) => (
            <Reveal key={e.company + i} delay={i * 80}>
            <div>
              <div className="grid gap-8" style={{ gridTemplateColumns: "1fr 2fr" }}>
                <div>
                  <p
                    className="text-sm font-medium mb-1"
                    style={{ color: t.text, letterSpacing: "-0.01em" }}
                  >
                    {e.company}
                  </p>
                  <p className="text-xs mb-1" style={{ color: t.textMid }}>{e.role}</p>
                  <p className="text-xs" style={{ color: t.textMuted }}>
                    {e.period} · {e.type}
                  </p>
                </div>
                <p
                  className="text-sm"
                  style={{ color: t.textMid, lineHeight: 1.75, fontWeight: 300 }}
                >
                  {e.desc}
                </p>
              </div>
              {i < experience.length - 1 && (
                <div style={{ borderTop: `1px solid ${t.divider}`, margin: "36px 0" }} />
              )}
            </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section
        className="px-6 py-24 max-w-4xl mx-auto"
        style={{ borderTop: `1px solid ${t.divider}` }}
      >
        <Label t={t}>Selected Work</Label>

        {projects.map((p, idx) => (
          <Reveal key={p.title}>
          <div>
            {/* Project header */}
            <div className="flex items-baseline gap-4 mb-6">
              <span
                className="text-xs"
                style={{ color: t.textMuted, fontFamily: "'Ubuntu', sans-serif", fontStyle: "italic" }}
              >
                {p.number}
              </span>
              <h2
                style={{
                  fontFamily: "'Ubuntu', sans-serif",
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.025em",
                  color: t.text,
                  transition: "color 0.3s ease",
                }}
              >
                {p.title}
              </h2>
            </div>

            {/* Meta row */}
            <div
              className="flex flex-wrap gap-x-8 gap-y-2 mb-8 pb-6"
              style={{ borderBottom: `1px solid ${t.divider}` }}
            >
              {[
                { label: "Client", value: p.client },
                { label: "Role", value: p.role },
                { label: "Tools", value: p.tools },
                { label: "Year", value: p.period },
                { label: "Industry", value: p.industry },
              ].map(m => (
                <div key={m.label}>
                  <p className="text-xs mb-0.5" style={{ color: t.textMuted, letterSpacing: "0.08em", textTransform: "uppercase", fontSize: "0.65rem" }}>
                    {m.label}
                  </p>
                  <p className="text-sm" style={{ color: t.textMid }}>
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="flex flex-col gap-4">
              {p.desc.map((para, i) => (
                <p key={i} className="text-sm" style={{ color: t.textMid, lineHeight: 1.8, fontWeight: 300 }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Image gallery */}
            <ProjectGallery images={p.images} t={t} />

            {idx < projects.length - 1 && <Divider t={t} />}
          </div>
          </Reveal>
        ))}

        {/* Availability note */}
        <Reveal>
          <div style={{ borderTop: `1px solid ${t.divider}`, marginTop: "72px", paddingTop: "48px" }}>
            <p
              className="text-xs font-medium tracking-widest uppercase mb-6"
              style={{ color: t.text, fontFamily: "'Ubuntu', sans-serif", letterSpacing: "0.12em" }}
            >
              Currently available for work
            </p>
            <div className="flex flex-col gap-4">
              <p className="text-sm" style={{ color: t.textMid, lineHeight: 1.8, fontWeight: 300 }}>
                The four projects above are a selection. There's more work behind them — smaller
                commissions, part-time collaborations, and projects under NDA.
              </p>
              <p className="text-sm" style={{ color: t.textMid, lineHeight: 1.8, fontWeight: 300 }}>
                For production screens, extended case studies, or references — get in touch.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── FOOTER ── */}
      <footer
        className="px-6 py-12"
        style={{ borderTop: `1px solid ${t.divider}` }}
      >
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="mailto:marko4286@gmail.com"
              className="text-xs transition-all duration-150"
              style={{ color: t.textMuted, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = t.text)}
              onMouseLeave={e => (e.currentTarget.style.color = t.textMuted)}
            >
              marko4286@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/markostjepanovic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-all duration-150"
              style={{ color: t.textMuted, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = t.text)}
              onMouseLeave={e => (e.currentTarget.style.color = t.textMuted)}
            >
              LinkedIn ↗
            </a>
            {/* <a
              href="https://github.com/cvelinho"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs transition-all duration-150"
              style={{ color: t.textMuted, textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = t.text)}
              onMouseLeave={e => (e.currentTarget.style.color = t.textMuted)}
            >
              GitHub ↗
            </a> */}
          </div>
          <span className="text-xs" style={{ color: t.textMuted }}>
            © 2026 Marko Stjepanović
          </span>
        </div>
      </footer>

    </div>
  );
}
