import { useState } from "react";
import heroBg from "./assets/lycs-architecture-U2BI3GMnSSE-unsplash.jpg";
import objectivesBg from "./assets/anthony-riera-kylWNDQFd5A-unsplash.jpg";
import toolsBg from "./assets/christopher-gower-m_HRfLhgABo-unsplash.jpg";
import whyUsBg from "./assets/bruce-mars-xj8qrWvuOEs-unsplash.jpg";
import bottomCtaBg from "./assets/olena-bohovyk-dIMJWLx1YbE-unsplash.jpg";

/* ─── Design tokens ──────────────────────────────────────────────────────────── */
const C = {
  navy:    "#000000",
  navyMid: "#1A1A1A",
  gold:    "#C9A84C",
  goldLt:  "#F5EDD6",
  cream:   "#FAF8F3",
  white:   "#FFFFFF",
  ink:     "#1C1C1C",
  mist:    "#F0EDE6",
  stone:   "#7A7060",
  border:  "#E2DDD4",
};

/* ─── Shared atoms ───────────────────────────────────────────────────────────── */
const Wrap = ({ children, className = "" }) => (
  <div className={`max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] ${className}`}>{children}</div>
);

const Eyebrow = ({ label, dark = false, center = false }) => (
  <div className={`inline-flex items-center gap-2.5 mb-4 ${center ? "justify-center w-full" : ""}`}>
    <div className="w-7 h-px flex-shrink-0"
      style={{ background: dark ? "rgba(201,168,76,0.5)" : C.gold }} />
    <span className="text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: C.gold }}>{label}</span>
  </div>
);

const Display = ({ children, light = false, className = "" }) => (
  <h2 className={`font-bold leading-[1.12] tracking-tight ${className}`}
    style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,3.5vw,44px)", color: light ? "#fff" : C.navy }}>
    {children}
  </h2>
);

const Em = ({ children }) => <em style={{ color: C.gold, fontStyle: "italic" }}>{children}</em>;

const Lead = ({ children, light = false, className = "" }) => (
  <p className={`text-base leading-[1.75] font-light max-w-[520px] ${className}`}
    style={{ color: light ? "rgba(255,255,255,0.5)" : C.stone }}>{children}</p>
);

const GoldCheck = () => (
  <span className="inline-flex flex-shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full border mt-[2px]"
    style={{ background: "rgba(201,168,76,0.15)", borderColor: C.gold }}>
    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
    </svg>
  </span>
);

const Stars = () => (
  <div className="flex gap-[3px]">
    {[...Array(5)].map((_, i) => (
      <svg key={i} viewBox="0 0 12 12" width="13" height="13" fill={C.gold}>
        <path d="M6 1l1.5 3L11 4.5l-2.5 2.4.6 3.4L6 8.6l-3.1 1.7.6-3.4L1 4.5 4.5 4z" />
      </svg>
    ))}
  </div>
);

const LogoMark = ({ size = 34 }) => (
  <div className="flex items-center justify-center flex-shrink-0 rounded-sm"
    style={{ width: size, height: size, background: C.navy }}>
    <svg viewBox="0 0 18 18" fill="none" width="16" height="16">
      <rect x="2" y="2" width="6" height="6" rx="1" fill={C.gold} />
      <rect x="10" y="2" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="2" y="10" width="6" height="6" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="10" y="10" width="6" height="6" rx="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  </div>
);

const GridBg = ({ opacity = 0.05, size = 60 }) => (
  <div className="absolute inset-0 pointer-events-none" style={{
    backgroundImage: `linear-gradient(rgba(201,168,76,${opacity}) 1px,transparent 1px),linear-gradient(90deg,rgba(201,168,76,${opacity}) 1px,transparent 1px)`,
    backgroundSize: `${size}px ${size}px`,
  }} />
);

const secPy = "py-16 md:py-[88px]";

/* shared input style helper */
const inputStyle = (err) => ({
  background: C.cream, borderColor: err ? C.gold : C.border,
  color: C.ink, fontFamily: "'Outfit',sans-serif",
  borderRadius: "2px", fontSize: "14px", outline: "none",
  width: "100%", padding: "11px 14px", border: "1px solid", appearance: "none",
});

/* ══════════════════════════════════════════════════════════════════════════════
   ANNOUNCE BANNER
══════════════════════════════════════════════════════════════════════════════ */
const AnnounceBanner = () => (
  <div className="text-center px-4 py-2.5 text-[12px] sm:text-[13px]"
    style={{ background: C.navy, color: "rgba(255,255,255,0.8)" }}>
    Next intake opens <strong style={{ color: C.gold }}>August 2025</strong> — Limited seats per batch.{" "}
    <a href="#enrol" className="font-semibold text-white underline underline-offset-[3px]">Reserve yours →</a>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   NAV
══════════════════════════════════════════════════════════════════════════════ */
const Nav = () => {
  const [open, setOpen] = useState(false);
  const scroll = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 68, behavior: "smooth" });
  };
  const links = [
    { label: "Curriculum", id: "curriculum" },
    { label: "Tools", id: "tools" },
    { label: "Methodology", id: "methodology" },
    { label: "Career Services", id: "career" },
    { label: "FAQ", id: "faq" },
  ];
  return (
    <nav className="sticky top-0 z-[100] border-b" style={{ background: C.cream, borderColor: C.border }}>
      <div className="flex items-center justify-between px-5 sm:px-8 lg:px-[60px] h-[64px]">
        <a href="#" className="flex items-center gap-3 no-underline flex-shrink-0">
          <LogoMark />
          <div className="flex flex-col">
            <strong className="font-bold text-[15px] leading-[1.1] tracking-[-0.3px]"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>CodersBloom</strong>
            <span className="hidden sm:block text-[9px] font-medium tracking-[1.5px] uppercase" style={{ color: C.stone }}>
              Business Analyst Training
            </span>
          </div>
        </a>

        {/* 17+ Years Badge */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 border rounded-sm flex-shrink-0"
          style={{ borderColor: C.border, background: C.goldLt }}>
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
            <circle cx="6.5" cy="6.5" r="5.5" stroke={C.gold} strokeWidth="1.2" />
            <path d="M6.5 3.5v3l2 1.5" stroke={C.gold} strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] font-bold tracking-[0.8px] uppercase whitespace-nowrap" style={{ color: "#7A5A10" }}>
            17+ Years Experience
          </span>
        </div>

        {/* Desktop links */}
        <ul className="hidden lg:flex list-none items-center gap-0.5">
          {links.map(l => (
            <li key={l.id}>
              <button onClick={() => scroll(l.id)}
                className="text-[13px] font-medium px-3.5 py-1.5 rounded-sm cursor-pointer border-none bg-transparent transition-colors duration-150"
                style={{ color: C.stone }}
                onMouseEnter={e => e.target.style.color = C.navy}
                onMouseLeave={e => e.target.style.color = C.stone}>{l.label}</button>
            </li>
          ))}
          <li>
            <button onClick={() => scroll("enrol")}
              className="ml-2 text-[13px] font-semibold px-5 py-2 rounded-sm text-white cursor-pointer border-none"
              style={{ background: C.navy }}
              onMouseEnter={e => e.currentTarget.style.background = C.navyMid}
              onMouseLeave={e => e.currentTarget.style.background = C.navy}>Enroll Now</button>
          </li>
        </ul>

        <div className="flex items-center gap-3 lg:hidden">
          <a href="#enrol" className="text-[12px] font-semibold px-4 py-1.5 rounded-sm text-white no-underline"
            style={{ background: C.navy }}>Enroll</a>
          <button onClick={() => setOpen(!open)}
            className="flex flex-col justify-center gap-[5px] w-8 h-8 border-none bg-transparent cursor-pointer" aria-label="Menu">
            <span className="block w-5 h-[2px] mx-auto transition-all duration-200"
              style={{ background: C.navy, transform: open ? "rotate(45deg) translate(5px,5px)" : "" }} />
            <span className="block w-5 h-[2px] mx-auto transition-all duration-200"
              style={{ background: C.navy, opacity: open ? 0 : 1 }} />
            <span className="block w-5 h-[2px] mx-auto transition-all duration-200"
              style={{ background: C.navy, transform: open ? "rotate(-45deg) translate(5px,-5px)" : "" }} />
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t flex flex-col px-5 pb-4 pt-2"
          style={{ background: C.cream, borderColor: C.border }}>
          {links.map((l, i) => (
            <button key={l.id} onClick={() => scroll(l.id)}
              className="text-left text-[15px] font-medium py-3 bg-transparent border-none cursor-pointer w-full"
              style={{ color: C.navy, borderBottom: i < links.length - 1 ? `1px solid ${C.border}` : "none" }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   HERO
══════════════════════════════════════════════════════════════════════════════ */
const HeroForm = ({ compact = false }) => {
  const [form, setForm] = useState({ firstName: "", lastName: "", phone: "", email: "", status: "", domain: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleSubmit = () => {
    const errs = {};
    Object.keys(form).forEach(k => { if (!form[k]) errs[k] = true; });
    setErrors(errs);
    if (!Object.keys(errs).length) setSubmitted(true);
  };

  const fld = (key) => inputStyle(errors[key]);

  return (
    <div className={`bg-white rounded ${compact ? "p-6" : "p-7 sm:p-9"}`}
      style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.25)" }}>
      <div className="font-bold text-[18px] sm:text-[20px] tracking-[-0.3px] mb-1"
        style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>
        Start Your BA Journey
      </div>
      <div className="text-[12px] sm:text-[13px] mb-5" style={{ color: C.stone }}>
        Speak with a program advisor. No pressure — just honest guidance.
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        {[{ label: "First Name", key: "firstName", placeholder: "Priya" }, { label: "Last Name", key: "lastName", placeholder: "Sharma" }].map(f => (
          <div key={f.key} className="flex flex-col gap-1.5">
            <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>{f.label}</label>
            <input style={fld(f.key)} placeholder={f.placeholder} value={form[f.key]}
              onChange={e => setForm({ ...form, [f.key]: e.target.value })}
              onFocus={e => e.target.style.borderColor = C.navy}
              onBlur={e => e.target.style.borderColor = errors[f.key] ? C.gold : C.border} />
          </div>
        ))}
      </div>

      {[
        { label: "Phone / WhatsApp", key: "phone", type: "tel", placeholder: "+91 98765 43210" },
        { label: "Email Address", key: "email", type: "email", placeholder: "priya@example.com" },
      ].map(f => (
        <div key={f.key} className="flex flex-col gap-1.5 mb-3">
          <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>{f.label}</label>
          <input type={f.type} style={fld(f.key)} placeholder={f.placeholder} value={form[f.key]}
            onChange={e => setForm({ ...form, [f.key]: e.target.value })}
            onFocus={e => e.target.style.borderColor = C.navy}
            onBlur={e => e.target.style.borderColor = errors[f.key] ? C.gold : C.border} />
        </div>
      ))}

      <div className="flex flex-col gap-1.5 mb-3">
        <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Current Status</label>
        <select style={fld("status")} value={form.status} onChange={e => setForm({ ...form, status: e.target.value })}>
          <option value="">Select...</option>
          <option>Final Year Student</option>
          <option>Recent Graduate (0–2 yrs)</option>
          <option>Working Professional (2–5 yrs)</option>
          <option>Working Professional (5+ yrs)</option>
          <option>Career Break / Returning to Work</option>
        </select>
      </div>

      <div className="flex flex-col gap-1.5 mb-4">
        <label className="text-[10px] sm:text-[11px] font-semibold tracking-[0.8px] uppercase" style={{ color: C.navy }}>Domain of Interest</label>
        <select style={fld("domain")} value={form.domain} onChange={e => setForm({ ...form, domain: e.target.value })}>
          <option value="">Select a domain...</option>
          <option>Banking &amp; Finance</option>
          <option>Insurance</option>
          <option>Healthcare</option>
          <option>Technology / Fintech</option>
          <option>Help me decide</option>
        </select>
      </div>

      <button onClick={handleSubmit} disabled={submitted}
        className="w-full text-white border-none text-[14px] font-semibold py-3.5 rounded-sm cursor-pointer transition-colors duration-150"
        style={{ background: submitted ? "#16A34A" : C.navy }}
        onMouseEnter={e => { if (!submitted) e.currentTarget.style.background = C.navyMid; }}
        onMouseLeave={e => { if (!submitted) e.currentTarget.style.background = submitted ? "#16A34A" : C.navy; }}>
        {submitted ? "✓ We'll be in touch within 24 hours" : "Book My Free Session →"}
      </button>
      <p className="text-[11px] text-center mt-2.5 leading-[1.5]" style={{ color: C.stone }}>
        🔒 No spam. No pressure. Your information is completely confidential.
      </p>
    </div>
  );
};

const Hero = () => {
  const stats = [
    { n: "34.5L", l: "Highest Salary Offered" },
    { n: "3,200+", l: "Careers Transitioned" },
    { n: "55%", l: "Average Hike Offered" },
    { n: "185+", l: "Companies Hired So Far" },
  ];
  return (
    <section className="relative overflow-hidden" style={{ background: C.navy ,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${heroBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
    }}>
      <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: C.gold }} />
      <GridBg opacity={0.06} />
      <div className="max-w-[1160px] mx-auto px-5 sm:px-8 lg:px-[60px] relative z-10
                      grid grid-cols-1 lg:grid-cols-[1fr_400px] lg:gap-[60px]">
        {/* LEFT */}
        <div className="py-12 sm:py-16 lg:py-20 hero-left">
          <div className="inline-flex items-center gap-2.5 mb-6">
            <div className="w-8 h-px flex-shrink-0" style={{ background: C.gold }} />
            <span className="text-[10px] sm:text-[11px] font-semibold tracking-[2.5px] uppercase" style={{ color: C.gold }}>
              Business Analyst Training with GenAI
            </span>
          </div>
          <h1 className="font-bold leading-[1.08] tracking-[-1px] mb-5 text-white"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(32px,5vw,62px)" }}>
            Master Business<br />Analysis Through<br /><em style={{ color: C.gold }}>Real Practice.</em>
          </h1>
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-5">
            {["Practical", "Industry-Aligned", "Experience-Driven"].map(t => (
              <span key={t} className="text-[11px] font-semibold tracking-[1.5px] uppercase flex items-center gap-2"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: C.gold }} />{t}
              </span>
            ))}
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[1.75] font-light mb-8 max-w-[500px]"
            style={{ color: "rgba(255,255,255,0.6)" }}>
            Build the confidence to lead projects independently from day one — with hands-on training designed for today's project environments, not just certification exams.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#enrol" className="inline-block text-[14px] font-bold px-6 py-3 rounded-sm no-underline transition-colors duration-150"
              style={{ background: C.gold, color: C.navy }}
              onMouseEnter={e => e.currentTarget.style.background = "#d4b060"}
              onMouseLeave={e => e.currentTarget.style.background = C.gold}>Enroll Now</a>
            <a href="#curriculum" className="inline-block text-[14px] font-medium px-6 py-3 rounded-sm no-underline border transition-colors duration-150"
              style={{ color: "rgba(255,255,255,0.75)", borderColor: "rgba(255,255,255,0.2)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.75)"; }}>
              Explore Curriculum
            </a>
          </div>
          <div className="flex flex-wrap gap-y-4 mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
            {stats.map((s, i) => (
              <div key={i} className="pr-5 sm:pr-8 mr-5 sm:mr-8 last:border-r-0 last:pr-0 last:mr-0"
                style={{ borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none" }}>
                <div className="font-bold text-white leading-none mb-1"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(20px,2.5vw,32px)" }}>{s.n}</div>
                <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT form — desktop only */}
        <div className="hidden lg:block my-10 relative z-10">
          <HeroForm />
        </div>
      </div>

      {/* Mobile CTA strip */}
      <div className="lg:hidden px-5 sm:px-8 pb-10 relative z-10">
        <div className="rounded p-5" style={{ background: C.gold }}>
          <div className="font-bold text-[18px] mb-1 tracking-[-0.5px]"
            style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>Start Your BA Journey</div>
          <div className="text-[13px] mb-4" style={{ color: "rgba(0,0,0,0.6)" }}>Speak with a program advisor — no pressure.</div>
          <a href="#enrol" className="block text-center text-[14px] font-bold py-3 rounded-sm no-underline"
            style={{ background: C.navy, color: "#fff" }}>Book Free Counselling Call →</a>
        </div>
      </div>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TRUST STRIP — infinite marquee
══════════════════════════════════════════════════════════════════════════════ */
const TrustStrip = () => {
  const companies = [
    { name: "ICICI Bank", sector: "Banking" , 
      logo: <img
        src="https://e7.pngegg.com/pngimages/988/978/png-clipart-icici-bank-logo-thumbnail-bank-logos-thumbnail.png"
        alt=""
        srcset=""
      />
    },
    { name: "Bajaj Allianz", sector: "Insurance" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0dBGBxGxlv32ru2f2G1QiH2oTv7VL_T0bzw&s"
        alt=""
        srcset=""
      />
    },
    { name: "Apollo Hospitals", sector: "Healthcare" ,
      logo: <img
        src="https://thumbnail.imgbin.com/13/1/14/imgbin-apollo-hospitals-city-centre-apollo-hospital-indraprastha-health-care-hospital-rREpSfLCiSpmaYWSwtDsi4qAz_t.jpg"
        alt=""
        srcset=""
      />
    },
    { name: "Wipro", sector: "Technology" ,
      logo: <img
        src="https://static.vecteezy.com/system/resources/previews/075/561/491/non_2x/wipro-glossy-logo-transparent-background-free-png.png"
        alt=""
        srcset=""
      />
    },
    { name: "Razorpay", sector: "Fintech" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EvJxYike5wLY78TG6Nr5s5f6_mwOFmf4Bw&s"
        alt=""
        srcset=""
      />
    },
    { name: "Max Life", sector: "Insurance" ,
      logo: <img
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjR6Q5tn_dfh_YYlDv0VsT6QbYA9AFGqcecfSVoVte8UXyhrJRQ9HqEAe1ly-8JLglHwWiFJNZ36jt2-a2pXWtvd2yQk35ph3iZqSsI4blsTeSGqCRQTGgOuIEDB5JL3JdYx86C6yes_Vv4/s1600/max-life-insurance.jpg"
        alt=""
        srcset=""
      />
    },
    { name: "Infosys", sector: "Technology" ,
      logo: <img
        src="https://w7.pngwing.com/pngs/687/655/png-transparent-infosys-logo.png"
        alt=""
        srcset=""
      />
    },
    { name: "Capgemini", sector: "Consulting" ,
      logo: <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwKr5vvxXgNUB3XWwp3zY_WvJvYq7KAX2fXA&s"
        alt=""
        srcset=""
      />
    },
  ];
  const items = [...companies, ...companies];
  
  return (
    <div className="border-b relative" style={{ background: C.mist, borderColor: C.border }}>
      <style>{`
        @keyframes marquee-ba { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @media(prefers-reduced-motion:reduce){.ba-track{animation-play-state:paused!important}}
        .ba-wrap:hover .ba-track{animation-play-state:paused}
      `}</style>
      <div className="flex items-stretch" style={{ height: 52 }}>
        <div className="flex-shrink-0 flex items-center px-4 sm:px-6 lg:px-[60px] z-10 border-r"
          style={{ background: C.mist, borderColor: C.border, boxShadow: `6px 0 12px 0 ${C.mist}` }}>
          <span className="text-[10px] font-bold tracking-[2px] uppercase whitespace-nowrap" style={{ color: C.stone }}>
            Trained &amp; Placed In
          </span>
        </div>
        <div className="ba-wrap flex-1 overflow-hidden relative"
          style={{ maskImage: "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)", WebkitMaskImage: "linear-gradient(to right,transparent 0%,black 5%,black 95%,transparent 100%)" }}>
          <div className="ba-track flex items-center h-full"
            style={{ width: "max-content", animation: "marquee-ba 28s linear infinite" }}>
            {items.map((c, i) => (
              <div key={i} className="flex items-center gap-2 px-4 sm:px-6 h-full whitespace-nowrap"
                style={{ borderRight: `1px solid ${C.border}` }}>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center flex-shrink-0"
                  >{c.logo} </div>
                <strong className="text-[12px] sm:text-[13px] font-semibold" style={{ color: C.navy }}>{c.name}</strong>
                <span className="text-[11px] hidden sm:inline" style={{ color: C.stone }}>{c.sector}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   ABOUT
══════════════════════════════════════════════════════════════════════════════ */
const About = () => {
  const stats = [
    { n: "34.5L", l: "Highest salary offered to a BACentric graduate", dark: false },
    { n: "3,200+", l: "Careers successfully transitioned since inception", dark: true },
    { n: "55%", l: "Average salary hike for working professionals", dark: false },
    { n: "185+", l: "Companies that have hired BACentric graduates", dark: false },
  ];
  return (
    <section id="about" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          <div>
            <Eyebrow label="What We Do" />
            <Display>We Train You for the<br /><Em>Job. Not the Exam.</Em></Display>
            <p className="text-[15px] leading-[1.8] font-light mt-5 mb-5" style={{ color: C.stone }}>
              Our Business Analyst Training with GenAI is built to deliver what the industry actually expects from a modern Business Analyst — clarity of thinking, structured problem-solving, stakeholder management, and the ability to drive projects with confidence.
            </p>
            <blockquote className="text-[18px] sm:text-[22px] font-serif italic leading-[1.5] pl-5 sm:pl-6 my-6"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy, borderLeft: `3px solid ${C.gold}` }}>
              True Business Analysis cannot be learned from slides alone. It is built through experience.
            </blockquote>
            <p className="text-[15px] leading-[1.8] font-light mb-4" style={{ color: C.stone }}>
              From requirements elicitation and documentation to stakeholder communication, project delivery, and post-implementation support — every part of the program is designed around{" "}
              <strong style={{ color: C.navy, fontWeight: 600 }}>practical application</strong>.
            </p>
            <p className="text-[15px] leading-[1.8] font-light" style={{ color: C.stone }}>
              Unlike conventional institutes that rely on textbook-heavy teaching and part-time trainers, our programs are led by{" "}
              <strong style={{ color: C.navy, fontWeight: 600 }}>full-time working professionals</strong> from our in-house delivery teams — experts who have successfully delivered projects across insurance, fintech, banking, mobile applications, and US healthcare.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-px" style={{ background: C.border, border: `1px solid ${C.border}` }}>
            {stats.map((s, i) => (
              <div key={i} className="p-6 sm:p-7 flex flex-col gap-1.5" style={{ background: i === 1 ? C.navy : C.cream }}>
                <div className="font-bold leading-none tracking-[-1px]"
                  style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(26px,3vw,40px)", color: i === 1 ? C.gold : C.navy }}>
                  {s.n}
                </div>
                <div className="text-[12px] leading-[1.5]" style={{ color: i === 1 ? "rgba(255,255,255,0.5)" : C.stone }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   PATH / LOGISTICS
══════════════════════════════════════════════════════════════════════════════ */
const Path = () => {
  const cards = [
    { label: "Duration", value: "12–16 Weeks", sub: "Intensive program designed to match real project timelines, not classroom calendars.", dark: false },
    { label: "Timings", value: "Weekday Evenings & Weekends", sub: "Schedules built for working professionals. Study without leaving your current job.", dark: false },
    { label: "Mode", value: "Live Online + LMS", sub: "Real-time live sessions with 24×7 LMS access for recorded content and resources.", dark: false },
    { label: "Batch Size", value: "5 Students Per Class", sub: "Small batches ensure every participant receives focused mentorship and personal attention.", dark: false },
    { label: "Who Can Join?", value: "All Graduates Welcome", sub: "No technical background required. Open to freshers, career changers, and working professionals.", dark: false },
    { label: "Course Fee", value: "EMI Available", sub: "Zero-cost EMI across all major credit cards. No hidden fees. Scholarship options available.", dark: true },
  ];
  return (
    <section id="path" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <Eyebrow label="Program Details" />
        <Display>Your Path to <Em>Success.</Em></Display>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px mt-10 sm:mt-[52px]"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {cards.map((c, i) => (
            <div key={i} className="p-6 sm:p-7 lg:p-8 flex flex-col gap-2.5" style={{ background: c.dark ? C.navy : C.cream }}>
              <div className="text-[10px] font-bold tracking-[2px] uppercase" style={{ color: C.gold }}>{c.label}</div>
              <div className="font-bold leading-[1.2] tracking-[-0.5px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(17px,2vw,24px)", color: c.dark ? "#fff" : C.navy }}>
                {c.value}
              </div>
              <div className="text-[13px] leading-[1.5] font-light" style={{ color: c.dark ? "rgba(255,255,255,0.45)" : C.stone }}>{c.sub}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   OBJECTIVES
══════════════════════════════════════════════════════════════════════════════ */
const Objectives = () => {
  const steps = [
    { num: "01", title: "Learn", desc: "Build strong hands-on exposure to Business Analysis essentials and develop a solid professional foundation — from requirements elicitation to stakeholder management and SDLC frameworks." },
    { num: "02", title: "Practice", desc: "Every concept you learn is reinforced through workshops, simulations, and practical exercises that mirror real project scenarios. Because mastery is built through repetition — not observation." },
    { num: "03", title: "Work", desc: "Execute 2 complete end-to-end project implementations as a Business Analyst and gain the kind of experience employers value most — regardless of what's on your resume today." },
  ];
  return (
    <section id="objectives" className={`relative overflow-hidden ${secPy}`} style={{ background: C.navy,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${objectivesBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
     }}>
      <GridBg opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Program Objectives" dark />
        <Display light className="mt-1">Three Areas to Work<br />Towards <Em>Success.</Em></Display>
        <Lead light className="mt-4">This is not a random list of topics. It is a carefully structured experience designed to build competence, confidence, and credibility.</Lead>
        <div className="obj-grid grid grid-cols-1 md:grid-cols-3 mt-10 sm:mt-[60px]"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          {steps.map((s, i) => (
            <div key={i} className={`obj-step obj-step-${i} flex flex-col gap-3.5 py-8 md:py-10`}>
              <div className="font-bold leading-none tracking-[-2px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(42px,5vw,56px)", color: "rgba(255,255,255,0.06)" }}>{s.num}</div>
              <div className="w-2 h-2 rounded-full" style={{ background: C.gold }} />
              <h3 className="font-bold text-[20px] sm:text-[24px] text-white tracking-[-0.5px] leading-[1.2]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>{s.title}</h3>
              <p className="text-[14px] leading-[1.75] font-light" style={{ color: "rgba(255,255,255,0.5)" }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   CURRICULUM
══════════════════════════════════════════════════════════════════════════════ */
const Curriculum = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const modules = [
    { title: "Introduction to Business Analysis", body: "Understand what a Business Analyst actually does inside a real organization. We go beyond job descriptions — you will learn how BA fits within project structures, how to navigate cross-functional teams, and what it means to be the bridge between business and technology.", tags: ["Foundation", "Role Clarity"] },
    { title: "Requirements Elicitation & Elicitation Techniques", body: "Master the art of drawing out accurate, complete requirements from stakeholders who don't always know what they want. Covers interviews, workshops, prototyping, observation, and document analysis — applied through live simulation exercises.", tags: ["Core Skill", "Stakeholder Management"] },
    { title: "SDLC — Waterfall & Agile Frameworks", body: "Learn how software delivery actually works — from traditional Waterfall to modern Agile delivery. Understand where the BA role shifts in each model, and how to adapt your approach for the environment you're placed in.", tags: ["Waterfall", "Agile", "Scrum"] },
    { title: "Scrum Framework in Practice", body: "Go beyond reading the Scrum guide. Participate in sprint ceremonies, write user stories that developers can actually build from, manage backlogs under time pressure, and understand the Product Owner–BA dynamic from the inside.", tags: ["Scrum", "User Stories", "Backlog"] },
    { title: "Requirement Documentation", body: "Write BRDs, FRDs, SRS documents, and use-case specifications the way senior BAs produce them — with precision, traceability, and zero ambiguity. Every document you produce is reviewed and refined until it meets professional standards.", tags: ["BRD", "FRD", "Use Cases"] },
    { title: "Software Testing for Business Analysts", body: "Understand how testing connects to BA responsibilities. Learn to write test cases, participate in UAT, raise and track defects, and communicate with QA teams — skills that make you far more valuable in any project environment.", tags: ["UAT", "Test Cases", "Defect Tracking"] },
    { title: "Operational Challenges & Post-Implementation Support", body: "Most courses end at go-live. We train you for what happens after — handling change requests, managing stakeholder expectations post-delivery, and navigating the operational realities that define a BA's long-term credibility.", tags: ["Change Management", "Post-Go-Live"] },
    { title: "Elective — SQL for Business Analysts", body: "A practical introduction to SQL designed for BAs — not developers. Learn to query databases, understand data structures, and validate business logic through data, so you can have intelligent conversations with technical teams and make better decisions.", tags: ["Elective", "SQL", "Data Analysis"] },
    { title: "Elective — Power BI for Business Analysts", body: "Learn to build dashboards and reports that communicate business insights to stakeholders. In an environment where data-driven decision making is standard, Power BI fluency is rapidly becoming an expected BA skill across industries.", tags: ["Elective", "Power BI", "Data Visualization"] },
  ];
  return (
    <section id="curriculum" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[80px]">
            <Eyebrow label="Course Syllabus" />
            <Display>The Most<br />Comprehensive<br />Curriculum. <Em>Period.</Em></Display>
            <Lead className="mt-4">We bridge every gap that conventional programs leave open — combining traditional BA foundations with modern project realities and future-ready thinking.</Lead>
            <div className="mt-6 p-4 sm:p-5 flex items-center gap-4"
              style={{ background: C.goldLt, borderLeft: `3px solid ${C.gold}` }}>
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[15px]"
                style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>RA</div>
              <div>
                <strong className="block text-[14px] font-bold" style={{ color: C.navy }}>Reeti Ahuja</strong>
                <span className="text-[12px]" style={{ color: C.stone }}>Program Lead, BACentric</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {modules.map((m, i) => (
              <div key={i} className="cursor-pointer border-b"
                style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="flex items-center justify-between gap-4 py-4 sm:py-5 text-[14px] sm:text-[15px] font-semibold" style={{ color: C.navy }}>
                  {m.title}
                  <span className="flex-shrink-0 w-7 h-7 border rounded-full flex items-center justify-center text-[18px] font-light leading-none transition-all duration-150"
                    style={{ borderColor: openIdx === i ? C.navy : C.border, background: openIdx === i ? C.navy : "transparent", color: openIdx === i ? "#fff" : C.stone }}>
                    {openIdx === i ? "−" : "+"}
                  </span>
                </div>
                {openIdx === i && (
                  <div className="pb-5 text-[13px] sm:text-[14px] leading-[1.75] font-light" style={{ color: C.stone }}>
                    {m.body}
                    <div className="flex gap-2 flex-wrap mt-2.5">
                      {m.tags.map(t => (
                        <span key={t} className="text-[11px] font-semibold px-2.5 py-0.5 rounded-sm"
                          style={{ color: C.gold, background: C.goldLt }}>{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TOOLS
══════════════════════════════════════════════════════════════════════════════ */
const Tools = () => {
  const tools = [
    { icon: <img src="https://w7.pngwing.com/pngs/935/1018/png-transparent-jira-cloud-macos-bigsur-icon-thumbnail.png" alt="" srcset="" />, name: "JIRA", desc: "Backlog management, sprint tracking, user story creation and defect logging in Agile projects." },
    { icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/atlassian-confluence-icon.png" alt="" srcset="" />, name: "Confluence", desc: "Documentation collaboration, requirement pages, and knowledge management across project teams." },
    { icon: <img src="https://images.softwaresuggest.com/software_logo/1649329367_5246_mock.png" alt="" srcset="" />, name: "Balsamiq", desc: "Rapid wireframing and low-fidelity prototyping to communicate UI requirements to developers." },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQby45tq6mdmiBFtf2UefYQtrdudg_0LZlAsg&s" alt="" srcset="" />, name: "MS Visio", desc: "Process flow diagrams, swimlane charts, and UML modelling for requirements documentation." },
    { icon: <img src="https://www.shutterstock.com/image-vector/vector-illustration-database-flash-sign-260nw-435595501.jpg" alt="" srcset="" />, name: "Power BI", desc: "Building stakeholder dashboards and data visualizations that turn business data into decisions." },
    { icon: <img src="https://gimgs.nohat.cc/thumb/f/640/mysql-logo-database-microsoft-sql-server-proprietary-background--5855662718320640.jpg" alt="" srcset="" />, name: "SQL", desc: "Querying and validating data to support requirements analysis, testing, and business reporting." },
    { icon: <img src="https://cdn-icons-png.flaticon.com/512/8194/8194264.png" alt="" srcset="" />, name: "MS Excel", desc: "Advanced data analysis, gap analysis matrices, traceability documents and requirement tracking." },
    { icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwp189ShNf3hz93R0lWV6ribtm1ECdvs8YSg&s" alt="" srcset="" />, name: "GenAI Tools", desc: "Leveraging AI to accelerate documentation, requirements drafting, and stakeholder communication." },
  ];
  return (
    <section id="tools" className={`relative overflow-hidden ${secPy} border-b`}
      style={{ background: C.navy, borderColor: "rgba(255,255,255,0.08)" ,
        backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${toolsBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
      }}>
      <GridBg opacity={0.04} />
      <Wrap className="relative z-10">
        <Eyebrow label="Tools We Cover" dark />
        <Display light className="mt-1">Professional <Em>Readiness,</Em><br />Not Just Familiarity.</Display>
        <Lead light className="mt-4">You must know how to use tools confidently under real project conditions. Our participants leave with the practical confidence to contribute from day one.</Lead>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 mt-10 sm:mt-[52px]">
          {tools.map((t, i) => (
            <div key={i} className="flex flex-col items-start gap-3 p-4 sm:p-5 lg:p-6 rounded-lg border cursor-default transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.08)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.transform = ""; }}>
              <div className="w-10 h-10 sm:w-[52px] sm:h-[52px] rounded-xl bg-white flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] sm:text-[24px] leading-none">{t.icon}</span>
              </div>
              <div className="text-[13px] sm:text-[14px] font-semibold text-white leading-[1.3]">{t.name}</div>
              <div className="text-[11px] sm:text-[12px] leading-[1.5]" style={{ color: "rgba(255,255,255,0.4)" }}>{t.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   METHODOLOGY — Kolb cycle SVG + percentage bars
══════════════════════════════════════════════════════════════════════════════ */
const Methodology = () => {
  const bars = [
    { pct: "40%", title: "Case Studies & Discussion", desc: "We use real project cases to create meaningful exercises and practical understanding. Every case is drawn from actual engagements our trainers have delivered.", dark: false },
    { pct: "30%", title: "Simulation & Games", desc: "People learn best when they engage deeply. Our simulations create decision-making under realistic project conditions — ambiguity, pressure, conflicting stakeholders.", dark: true },
    { pct: "30%", title: "Theory & Application", desc: "We use theory only where it adds value — and immediately connect it to application. No isolated concepts. No passive memorization. Only what matters.", dark: false },
  ];
  return (
    <section id="methodology" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="text-center mb-10 sm:mb-14">
          <Eyebrow label="Our Learning Methodology" center />
          <Display>How Real <Em>Professionals</Em><br />Are Made.</Display>
        </div>

        {/* Kolb cycle SVG — hidden on very small screens, shown from sm */}
        <div className="hidden sm:block mb-10 sm:mb-14 overflow-x-auto">
          <div className="rounded-lg p-6 sm:p-8 relative overflow-hidden" style={{ background: C.navy }}>
            <GridBg opacity={0.05} />
            <svg className="w-full relative z-10" viewBox="0 0 780 340" xmlns="http://www.w3.org/2000/svg"
              role="img" aria-label="Kolb learning cycle diagram">
              <defs>
                <marker id="lc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                  <path d="M2 1L8 5L2 9" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </marker>
              </defs>
              {/* Connector arcs */}
              <path d="M 178 128 Q 260 60 322 128" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#lc-arrow)" opacity="0.7" />
              <path d="M 422 170 Q 490 230 422 258" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#lc-arrow)" opacity="0.7" />
              <path d="M 322 258 Q 260 320 178 258" fill="none" stroke="#C9A84C" strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#lc-arrow)" opacity="0.7" />
              <path d="M 78 170 Q 10 95 78 95" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeDasharray="5 4" markerEnd="url(#lc-arrow)" opacity="0.9" />
              <text x="250" y="192" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="13" fontStyle="italic" fill="#C9A84C" opacity="0.6">continuous</text>
              <text x="250" y="208" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="13" fontStyle="italic" fill="#C9A84C" opacity="0.6">cycle</text>
              {/* Node 1: Experiment */}
              <rect x="18" y="110" width="120" height="80" rx="4" fill="#000000" />
              <rect x="18" y="110" width="120" height="3" rx="2" fill="#C9A84C" />
              <text x="78" y="147" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="16" fontWeight="700" fill="#C9A84C">Experiment</text>
              <text x="78" y="164" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="11" fill="rgba(255,255,255,0.5)">Try it in practice</text>
              <circle cx="30" cy="122" r="8" fill="#C9A84C" />
              <text x="30" y="126" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="10" fontWeight="700" fill="#000">1</text>
              {/* Node 2: Experience */}
              <rect x="322" y="95" width="124" height="80" rx="4" fill="#1A1A1A" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="322" y="95" width="124" height="3" rx="2" fill="rgba(201,168,76,0.4)" />
              <text x="384" y="132" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="16" fontWeight="700" fill="rgba(255,255,255,0.9)">Experience</text>
              <text x="384" y="149" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="11" fill="rgba(255,255,255,0.45)">Concrete encounter</text>
              <circle cx="334" cy="107" r="8" fill="rgba(201,168,76,0.3)" />
              <text x="334" y="111" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="10" fontWeight="700" fill="#C9A84C">2</text>
              {/* Node 3: Reflect */}
              <rect x="322" y="225" width="124" height="80" rx="4" fill="#1A1A1A" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="322" y="225" width="124" height="3" rx="2" fill="rgba(201,168,76,0.4)" />
              <text x="384" y="262" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="16" fontWeight="700" fill="rgba(255,255,255,0.9)">Reflect</text>
              <text x="384" y="279" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="11" fill="rgba(255,255,255,0.45)">Observe &amp; review</text>
              <circle cx="334" cy="237" r="8" fill="rgba(201,168,76,0.3)" />
              <text x="334" y="241" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="10" fontWeight="700" fill="#C9A84C">3</text>
              {/* Node 4: Conceptualize */}
              <rect x="18" y="225" width="120" height="80" rx="4" fill="#1A1A1A" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.3" />
              <rect x="18" y="225" width="120" height="3" rx="2" fill="rgba(201,168,76,0.4)" />
              <text x="78" y="259" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="14" fontWeight="700" fill="rgba(255,255,255,0.9)">Conceptualize</text>
              <text x="78" y="276" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="11" fill="rgba(255,255,255,0.45)">Form new ideas</text>
              <circle cx="30" cy="237" r="8" fill="rgba(201,168,76,0.3)" />
              <text x="30" y="241" textAnchor="middle" fontFamily="'Outfit',sans-serif" fontSize="10" fontWeight="700" fill="#C9A84C">4</text>
              {/* Legend */}
              <line x1="530" y1="55" x2="576" y2="55" stroke="#C9A84C" strokeWidth="1" opacity="0.5" />
              <circle cx="576" cy="55" r="3" fill="#C9A84C" opacity="0.8" />
              <text x="590" y="59" fontFamily="'Outfit',sans-serif" fontSize="12" fill="rgba(255,255,255,0.6)">Active testing in real scenarios</text>
              <line x1="530" y1="95" x2="576" y2="95" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
              <circle cx="576" cy="95" r="3" fill="rgba(201,168,76,0.5)" />
              <text x="590" y="99" fontFamily="'Outfit',sans-serif" fontSize="12" fill="rgba(255,255,255,0.45)">Hands-on project execution</text>
              <line x1="530" y1="135" x2="576" y2="135" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
              <circle cx="576" cy="135" r="3" fill="rgba(201,168,76,0.5)" />
              <text x="590" y="139" fontFamily="'Outfit',sans-serif" fontSize="12" fill="rgba(255,255,255,0.45)">Mentor feedback &amp; review</text>
              <line x1="530" y1="175" x2="576" y2="175" stroke="rgba(201,168,76,0.35)" strokeWidth="1" />
              <circle cx="576" cy="175" r="3" fill="rgba(201,168,76,0.5)" />
              <text x="590" y="179" fontFamily="'Outfit',sans-serif" fontSize="12" fill="rgba(255,255,255,0.45)">Abstract frameworks &amp; theory</text>
              <text x="390" y="310" textAnchor="middle" fontFamily="'Playfair Display',Georgia,serif" fontSize="12" fontStyle="italic" fill="rgba(201,168,76,0.45)">Based on Kolb's Experiential Learning Cycle</text>
            </svg>
          </div>
        </div>

        {/* Mobile Kolb fallback — 4-step list */}
        <div className="sm:hidden mb-10 flex flex-col gap-4">
          {[
            { num: "1", title: "Experiment", sub: "Try it in practice — active testing in real scenarios" },
            { num: "2", title: "Experience", sub: "Hands-on project execution — concrete encounter" },
            { num: "3", title: "Reflect", sub: "Mentor feedback & review — observe and review" },
            { num: "4", title: "Conceptualize", sub: "Abstract frameworks & theory — form new ideas" },
          ].map(s => (
            <div key={s.num} className="flex items-start gap-4 p-4 rounded-lg border"
              style={{ background: C.navy, borderColor: "rgba(201,168,76,0.2)" }}>
              <span className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center font-bold text-[13px]"
                style={{ background: C.gold, color: C.navy }}>{s.num}</span>
              <div>
                <div className="text-[15px] font-bold text-white mb-0.5" style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>{s.title}</div>
                <div className="text-[12px]" style={{ color: "rgba(255,255,255,0.45)" }}>{s.sub}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Percentage bars */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {bars.map((b, i) => (
            <div key={i} className="p-7 sm:p-9 flex flex-col gap-3" style={{ background: b.dark ? C.navy : C.cream }}>
              <div className="font-bold leading-none tracking-[-2px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(36px,4vw,52px)", color: b.dark ? C.gold : C.navy }}>{b.pct}</div>
              <div className="text-[14px] sm:text-[15px] font-bold" style={{ color: b.dark ? "#fff" : C.navy }}>{b.title}</div>
              <div className="text-[13px] leading-[1.65] font-light" style={{ color: b.dark ? "rgba(255,255,255,0.45)" : C.stone }}>{b.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   DOMAINS
══════════════════════════════════════════════════════════════════════════════ */
const Domains = () => {
  const [hov, setHov] = useState(null);
  const domains = [
    { icon: "🏦", title: "Banking", tags: ["Retail", "Corporate", "Wealth", "Credit", "Investment"] },
    { icon: "🛡️", title: "Insurance", tags: ["Life", "P&C", "General Insurance"] },
    { icon: "🏥", title: "Healthcare", tags: ["RCM", "Medical Coding", "EMR/EHR", "Operations"] },
    { icon: "⚙️", title: "Operations", tags: ["BPO", "KPO", "Risk Management", "Fraud Investigation"] },
    { icon: "💻", title: "Technology", tags: ["CRM/ERP", "HCM", "Fintech", "Mobile Apps", "Salesforce"] },
    { icon: "📈", title: "Finance", tags: ["Capital Markets", "Trade Finance", "Forex", "Mutual Funds"] },
  ];
  return (
    <section id="domains" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-[52px]">
          <div>
            <Eyebrow label="Domain Expertise" />
            <Display>We Work Across<br />Every Major <Em>Industry.</Em></Display>
          </div>
          <Lead className="md:max-w-[320px]">Our trainers have delivered projects in these domains — and they bring that lived experience into every session.</Lead>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {domains.map((d, i) => (
            <div key={i} className="relative overflow-hidden flex flex-col gap-4 p-6 sm:p-7 lg:p-8 transition-colors duration-200 cursor-default"
              style={{ background: hov === i ? C.cream : C.white }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                style={{ background: C.gold, transform: hov === i ? "scaleX(1)" : "scaleX(0)" }} />
              <div className="w-10 h-10 sm:w-11 sm:h-11 border rounded-sm flex items-center justify-center text-[18px] sm:text-[20px]"
                style={{ borderColor: C.border, background: C.cream }}>{d.icon}</div>
              <div className="font-bold text-[16px] sm:text-[17px] tracking-[-0.3px]"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.navy }}>{d.title}</div>
              <div className="flex gap-1.5 flex-wrap">
                {d.tags.map(t => (
                  <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-sm"
                    style={{ color: C.stone, background: C.mist }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   CASE STUDIES
══════════════════════════════════════════════════════════════════════════════ */
const CaseStudies = () => {
  const steps = [
    { num: "01", title: "Assignment", body: "Real project case studies are explained in detail and assigned to participants for practical execution — across banking, insurance, healthcare, and technology domains." },
    { num: "02", title: "Review", body: "Once participants submit their work, our mentors review every detail and provide structured feedback during live sessions — not automated suggestions." },
    { num: "03", title: "Revise / Rework", body: "Based on mentor feedback, participants improve their documentation, correct mistakes, and strengthen their approach. This is where real learning happens." },
    { num: "04", title: "Adapt", body: "This process continues until participants naturally adopt the working style, thinking process, and professional discipline of a Business Analyst." },
  ];
  const outcomes = [
    "2 complete end-to-end project implementations as a Business Analyst",
    "BRD, FRD, and SRS documents reviewed to professional standard",
    "Stakeholder workshop simulations with live role-playing",
    "Sprint ceremonies and backlog grooming exercises in real Scrum format",
    "UAT planning and test case writing against real business scenarios",
    "Domain-specific capstone projects — banking, insurance, healthcare, and tech",
    "Post-implementation review and change request handling",
  ];
  return (
    <section id="projects" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-start">
          <div>
            <Eyebrow label="Case Studies & Assignments" />
            <Display>Built Through<br /><Em>Doing,</Em> Not Watching.</Display>
            <Lead className="mt-4">Mastery is built through repetition — not observation. Every assignment cycle takes you closer to operating like a professional.</Lead>
            <div className="flex flex-col mt-6">
              {steps.map((s, i) => (
                <div key={i} className="grid gap-4 py-5 sm:py-6 border-b items-start"
                  style={{ gridTemplateColumns: "36px 1fr", borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}>
                  <div className="w-9 h-9 rounded-sm flex items-center justify-center font-bold text-[13px] flex-shrink-0 mt-0.5"
                    style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>{s.num}</div>
                  <div>
                    <h4 className="text-[14px] sm:text-[15px] font-bold mb-1.5" style={{ color: C.navy }}>{s.title}</h4>
                    <p className="text-[13px] sm:text-[14px] leading-[1.65] font-light" style={{ color: C.stone }}>{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded p-7 sm:p-10" style={{ background: C.navy }}>
            <GridBg opacity={0.06} size={40} />
            <div className="relative z-10">
              <div className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3" style={{ color: C.gold }}>What You'll Work On</div>
              <div className="font-bold text-[22px] sm:text-[26px] text-white leading-[1.2] tracking-[-0.5px] mb-6"
                style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>
                Beyond<br /><em style={{ color: C.gold }}>Theoretical Classes.</em>
              </div>
              <div className="flex flex-col gap-3.5">
                {outcomes.map((o, i) => (
                  <div key={i} className="flex items-start gap-3 text-[13px] sm:text-[14px] leading-[1.5]"
                    style={{ color: "rgba(255,255,255,0.7)" }}>
                    <GoldCheck />{o}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   WHY US
══════════════════════════════════════════════════════════════════════════════ */
const WhyUs = () => {
  const cards = [
    { icon: "🏋️", title: "Professional Workshop", desc: "Completely practical. Real-time. A strong BA foundation built through actual project work across every major responsibility of the role." },
    { icon: "🎯", title: "Hands-On Experience", desc: "Our facilitators are experienced professionals with deep project delivery experience as practicing Business Analysts — not part-time educators." },
    { icon: "👁️", title: "Personal Attention", desc: "We limit every batch to 5 students to ensure every participant receives focused mentorship based on their individual learning needs." },
    { icon: "🕐", title: "24×7 LMS Access", desc: "Access premium learning resources including articles, white papers, case studies, frameworks, and practical reference material throughout the year." },
    { icon: "📹", title: "Video Tutorials Included", desc: "Beyond live sessions, visual learning support helps reinforce concepts and improve retention on your own schedule." },
    { icon: "🔄", title: "Resit Anytime for Free", desc: "Missed sessions or need deeper clarity? You can revisit the course anytime at no additional cost — because learning doesn't stop on a fixed date." },
    { icon: "📱", title: "Phone & Email Support", desc: "Ongoing support from faculty whenever guidance is needed — before, during, and after the program." },
    { icon: "📚", title: "100+ Lessons Included", desc: "Extensive learning modules and practical resources built to strengthen your long-term career growth, not just your first 90 days." },
    { icon: "✅", title: "100% Placement Assistance", desc: "Training is only the beginning. We actively support placement outcomes by strengthening both your capability and your employability." },
  ];
  return (
    <section id="why" className={`relative overflow-hidden ${secPy}`} style={{ background: C.navy ,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${whyUsBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
    }}>
      <GridBg opacity={0.05} />
      <Wrap className="relative z-10">
        <Eyebrow label="Why BACentric" dark />
        <Display light className="mt-1">What Makes<br />Us <Em>Different.</Em></Display>
        <Lead light className="mt-4">We train you to become the kind of Business Analyst we would trust on our own projects. That standard shows in everything we do.</Lead>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-10 sm:mt-[52px]">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-3 p-5 sm:p-6 lg:p-7 rounded-lg border transition-all duration-200"
              style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(255,255,255,0.08)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(201,168,76,0.07)"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.25)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; }}>
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-lg flex items-center justify-center text-[18px] sm:text-[20px] border"
                style={{ background: "rgba(201,168,76,0.12)", borderColor: "rgba(201,168,76,0.25)" }}>{c.icon}</div>
              <div className="text-[14px] sm:text-[15px] font-bold text-white leading-[1.3]">{c.title}</div>
              <div className="text-[12px] sm:text-[13px] leading-[1.65] font-light" style={{ color: "rgba(255,255,255,0.45)" }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   CAREER SERVICES
══════════════════════════════════════════════════════════════════════════════ */
const Career = () => {
  const [hov, setHov] = useState(null);
  const cards = [
    { icon: "🤝", title: "One-to-One Mentoring", desc: "Every career journey is different. We provide personalized mentoring based on your background, goals, and transition path." },
    { icon: "🧭", title: "Career Coaching", desc: "Our dedicated career coaches help define a clear strategy for your next professional move — not a generic job search plan." },
    { icon: "📄", title: "Portfolio & Resume", desc: "Build a strong professional profile that reflects your capability, credibility, and project readiness." },
    { icon: "🔗", title: "Recruitment & Profile Marketing", desc: "We actively market participant profiles through alumni networks, corporate HRs, and recruitment firms across India." },
    { icon: "🎤", title: "Mock Interview Events", desc: "Practice with mentors and industry professionals so real interviews feel familiar — not intimidating." },
    { icon: "🔍", title: "Interview Analysis", desc: "We prepare you based on real job descriptions and analyze your interview performance so every attempt becomes stronger." },
    { icon: "🏗️", title: "Capstone Projects", desc: "Domain-specific projects across banking, insurance, healthcare, fintech, operations, HR, and technology for your portfolio." },
    { icon: "🛡️", title: "Job Support", desc: "Our support continues after placement. Because the first few months on the job matter just as much as getting hired." },
  ];
  return (
    <section id="career" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-[52px]">
          <div>
            <Eyebrow label="Career Services" />
            <Display>From Job Search<br />to <Em>Job Success.</Em></Display>
          </div>
          <Lead className="md:max-w-[320px]">BACentric connects top talent with recruiters across India. Our participants have been hired by leading global enterprises and consulting firms.</Lead>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: C.border, border: `1px solid ${C.border}` }}>
          {cards.map((c, i) => (
            <div key={i} className="relative overflow-hidden flex flex-col gap-3 p-6 sm:p-7 transition-colors duration-200 cursor-default"
              style={{ background: hov === i ? C.mist : C.white }}
              onMouseEnter={() => setHov(i)} onMouseLeave={() => setHov(null)}>
              <div className="absolute top-0 left-0 right-0 h-[2px] transition-transform duration-300 origin-left"
                style={{ background: C.gold, transform: hov === i ? "scaleX(1)" : "scaleX(0)" }} />
              <div className="text-[20px] sm:text-[22px] leading-none">{c.icon}</div>
              <div className="text-[13px] sm:text-[14px] font-bold leading-[1.3]" style={{ color: C.navy }}>{c.title}</div>
              <div className="text-[12px] sm:text-[13px] leading-[1.65] font-light" style={{ color: C.stone }}>{c.desc}</div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   TESTIMONIALS
══════════════════════════════════════════════════════════════════════════════ */
const Testimonials = () => {
  const cards = [
    { initials: "AM", name: "Ananya Mehta", role: "Business Analyst, ICICI Bank", sector: "Banking", quote: "I came in with zero BA experience and left with two full project implementations on my portfolio. Within six weeks of completing the program I had three offers. BACentric doesn't just train you — they build you." },
    { initials: "RS", name: "Rohan Shetty", role: "Senior BA, Bajaj Allianz", sector: "Insurance", quote: "After 7 years in operations I thought switching to BA would take years of effort. The batch of 5 model meant I got personal attention every class. The mentor feedback on my documents was what actually made the difference." },
    { initials: "KR", name: "Kavya Reddy", role: "Product BA, Razorpay", sector: "Fintech", quote: "The GenAI integration in the curriculum was something no other program offered. I walked into interviews talking about how I use AI tools to accelerate documentation — and the interviewers were genuinely impressed. Got a 68% hike." },
  ];
  return (
    <section id="testimonials" className={`${secPy} border-b`} style={{ background: C.cream, borderColor: C.border }}>
      <Wrap>
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-10 sm:mb-[52px]">
          <div>
            <Eyebrow label="What Our Graduates Say" />
            <Display>Real Careers.<br /><Em>Real Results.</Em></Display>
          </div>
          <a href="#enrol" className="text-[13px] font-semibold no-underline self-start transition-colors duration-150"
            style={{ color: C.gold }}
            onMouseEnter={e => e.target.style.color = C.navy}
            onMouseLeave={e => e.target.style.color = C.gold}>
            Read all success stories →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {cards.map((c, i) => (
            <div key={i} className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-8 rounded border" style={{ background: C.white, borderColor: C.border }}>
              <Stars />
              <div className="font-serif italic text-[14px] sm:text-[15px] leading-[1.75] flex-1"
                style={{ fontFamily: "'Playfair Display',Georgia,serif", color: C.ink }}>
                <span className="text-[36px] sm:text-[40px] leading-none align-[-14px] sm:align-[-16px] mr-1" style={{ color: C.gold }}>"</span>
                {c.quote}
              </div>
              <div className="flex items-center gap-3 pt-4 border-t" style={{ borderColor: C.border }}>
                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[13px]"
                  style={{ background: C.navy, color: C.gold, fontFamily: "'Playfair Display',Georgia,serif" }}>{c.initials}</div>
                <div className="flex-1 min-w-0">
                  <strong className="block text-[13px] font-semibold truncate" style={{ color: C.navy }}>{c.name}</strong>
                  <span className="text-[11px] sm:text-[12px] block truncate" style={{ color: C.stone }}>{c.role}</span>
                </div>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-sm whitespace-nowrap flex-shrink-0"
                  style={{ color: C.stone, background: C.mist }}>{c.sector}</span>
              </div>
            </div>
          ))}
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   FAQ
══════════════════════════════════════════════════════════════════════════════ */
const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);
  const faqs = [
    { q: "Do I need a technical background to enroll?", a: "No. The Business Analyst program is open to all graduates regardless of background. We train engineers, MBAs, commerce graduates, science graduates, and working professionals from non-IT roles. Our curriculum is designed to build your technical fluency from the ground up — alongside your BA skills." },
    { q: "Can I study while working full-time?", a: "Yes — this is how the majority of our students enroll. All sessions run on weekday evenings and weekends. Every live session is recorded and accessible via LMS, so if you miss a class you can catch up on your own schedule. The workload is designed around employed professionals." },
    { q: "What is the batch size and why does it matter?", a: "We limit every batch to 5 students. This is not a marketing claim — it is central to our training model. With 5 participants, every person's assignment gets reviewed in detail, every question gets answered fully, and your mentor can adapt the session to your specific challenges. No one gets left behind." },
    { q: "What makes this different from other BA training programs?", a: "Three things: our trainers are full-time working BA professionals from active delivery teams (not part-time educators), our batch size is capped at 5 for genuine mentorship, and participants execute 2 complete end-to-end project implementations — not just case study exercises. We prepare you for the interview, the onboarding, and the first year on the job." },
    { q: "Is placement assistance included? What does it cover?", a: "Yes. 100% placement assistance is included — meaning dedicated, active support from your assigned placement manager until you receive an offer. This covers resume building, profile marketing through our recruiter network, mock interview preparation, job description analysis, and post-placement support for your first few months." },
    { q: "What payment and financing options are available?", a: "We offer zero-cost EMI across all major credit cards, direct bank transfer, and merit-based scholarships for eligible candidates. There are no hidden fees. Your advisor will walk you through all options during your counselling call so you can make a fully informed decision without any pressure." },
  ];
  return (
    <section id="faq" className={`${secPy} border-b`} style={{ background: C.white, borderColor: C.border }}>
      <Wrap>
        <div className="grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-8 lg:gap-[80px] items-start">
          <div className="lg:sticky lg:top-[80px]">
            <Eyebrow label="Common Questions" />
            <Display>Everything<br />You Need to <Em>Know.</Em></Display>
            <Lead className="mt-4">Honest answers to the questions every prospective student asks before enrolling.</Lead>
            <div className="mt-6 p-5 sm:p-6" style={{ background: C.goldLt, borderLeft: `3px solid ${C.gold}` }}>
              <p className="text-[13px] sm:text-[14px] leading-[1.6] font-light" style={{ color: C.navy }}>
                Still have questions? Our advisors are available for a free 30-minute call — no obligation, no sales pitch.
              </p>
              <a href="#enrol" className="inline-block mt-3 text-[13px] font-bold no-underline transition-colors duration-150"
                style={{ color: C.navy }}
                onMouseEnter={e => e.target.style.color = C.gold}
                onMouseLeave={e => e.target.style.color = C.navy}>Schedule a free call →</a>
            </div>
          </div>
          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <div key={i} className="cursor-pointer border-b"
                style={{ borderTop: i === 0 ? `1px solid ${C.border}` : "none", borderColor: C.border }}
                onClick={() => setOpenIdx(openIdx === i ? -1 : i)}>
                <div className="flex items-start justify-between gap-4 py-4 sm:py-5 text-[13px] sm:text-[15px] font-semibold leading-[1.4]"
                  style={{ color: C.navy }}>
                  {f.q}
                  <span className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 border rounded-full flex items-center justify-center text-[16px] sm:text-[18px] font-light leading-none transition-all duration-150 mt-[1px]"
                    style={{ borderColor: openIdx === i ? C.navy : C.border, background: openIdx === i ? C.navy : "transparent", color: openIdx === i ? "#fff" : C.stone }}>
                    {openIdx === i ? "−" : "+"}
                  </span>
                </div>
                {openIdx === i && (
                  <div className="pb-5 text-[13px] sm:text-[14px] leading-[1.8] font-light max-w-[600px]" style={{ color: C.stone }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   BOTTOM CTA
══════════════════════════════════════════════════════════════════════════════ */
const BottomCTA = () => {
  const checklist = [
    "Free 1:1 career counselling call (30 minutes)",
    "Personalised program walkthrough for your background",
    "Salary benchmarking for your target BA role",
    "EMI & scholarship options discussed upfront",
    "No obligation — learn everything, decide later",
    "Enabling Enterprises Change™",
  ];
  return (
    <section id="enrol" className="relative overflow-hidden" style={{ background: C.navy ,
      backgroundImage: `
      linear-gradient(
        rgba(0,0,0,0.82),
        rgba(0,0,0,0.86)
      ),
      url(${bottomCtaBg})
    `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backdropFilter: "blur(6px)",
    }}>
      <GridBg opacity={0.05} />
      <div className="absolute bottom-0 left-0 right-0 h-[3px]" style={{ background: C.gold }} />
      <Wrap>
        <div className="relative z-10 py-14 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-[80px] items-center">
          <div>
            <h2 className="font-bold leading-[1.12] tracking-[-0.8px] text-white mb-4"
              style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(24px,3.5vw,42px)" }}>
              One Conversation<br />Can Change Your <em style={{ color: C.gold }}>Career.</em>
            </h2>
            <p className="text-[14px] sm:text-[15px] leading-[1.7] font-light mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              Our advisors are working professionals who have been exactly where you are. No scripts, no hard sell — just honest guidance about whether this program is right for you and your goals.
            </p>
            <ul className="flex flex-col gap-3 list-none">
              {checklist.map(item => (
                <li key={item} className="flex items-start gap-3 text-[13px] sm:text-[14px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <span className="inline-flex flex-shrink-0 items-center justify-center w-[18px] h-[18px] rounded-full border mt-[2px]"
                    style={{ background: "rgba(201,168,76,0.2)", borderColor: C.gold }}>
                    <svg viewBox="0 0 10 10" width="10" height="10" fill="none">
                      <polyline points="2,5 4.5,7.5 8,2.5" stroke={C.gold} strokeWidth="1.5" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <HeroForm compact />
          </div>
        </div>
      </Wrap>
    </section>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   FOOTER
══════════════════════════════════════════════════════════════════════════════ */
const Footer = () => {
  const scroll = (id) => {
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + scrollY - 68, behavior: "smooth" });
  };
  const cols = [
    { title: "Program", links: [{ label: "Curriculum", id: "curriculum" }, { label: "Tools Covered", id: "tools" }, { label: "Methodology", id: "methodology" }, { label: "Case Studies", id: "projects" }] },
    { title: "Institution", links: [{ label: "About BACentric", href: "#" }, { label: "Our Trainers", href: "#" }, { label: "Hiring Partners", href: "#" }, { label: "Blog & Insights", href: "#" }] },
    { title: "Contact", links: [{ label: "1800-000-0000 (Free)", href: "tel:+911800000000" }, { label: "admissions@bacentric.in", href: "mailto:admissions@bacentric.in" }, { label: "WhatsApp Us", href: "#" }, { label: "Student Portal", href: "#" }] },
  ];
  return (
    <footer style={{ background: C.ink, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      <Wrap>
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-8 sm:gap-10 py-10 sm:py-14 border-b"
          style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 no-underline mb-4">
              <LogoMark size={28} />
              <strong className="font-bold text-[15px] text-white" style={{ fontFamily: "'Playfair Display',Georgia,serif" }}>BACentric</strong>
            </a>
            <p className="text-[13px] leading-[1.7] font-light max-w-[260px]" style={{ color: "rgba(255,255,255,0.4)" }}>
              Practical, industry-aligned Business Analyst training with GenAI — designed for the job, not the exam. Training is the beginning. Placement is the promise.
            </p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <h4 className="text-[10px] font-bold tracking-[2px] uppercase mb-4" style={{ color: C.gold }}>{col.title}</h4>
              <ul className="flex flex-col gap-2.5 list-none">
                {col.links.map(l => (
                  <li key={l.label}>
                    {l.id ? (
                      <button onClick={() => scroll(l.id)}
                        className="text-[12px] sm:text-[13px] font-light bg-transparent border-none cursor-pointer p-0 text-left transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={e => e.target.style.color = "#fff"}
                        onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{l.label}</button>
                    ) : (
                      <a href={l.href} className="text-[12px] sm:text-[13px] font-light no-underline transition-colors duration-150"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={e => e.target.style.color = "#fff"}
                        onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.4)"}>{l.label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-5 text-[11px] sm:text-[12px]"
          style={{ color: "rgba(255,255,255,0.25)" }}>
          <p>© 2025 BACentric. All rights reserved. Enabling Enterprises Change™</p>
          <div className="flex gap-4 sm:gap-6 flex-wrap">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(t => (
              <a key={t} href="#" className="no-underline transition-colors duration-150"
                style={{ color: "rgba(255,255,255,0.25)" }}
                onMouseEnter={e => e.target.style.color = "rgba(255,255,255,0.5)"}
                onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.25)"}>{t}</a>
            ))}
          </div>
        </div>
      </Wrap>
    </footer>
  );
};

/* ══════════════════════════════════════════════════════════════════════════════
   STICKY MOBILE BAR
══════════════════════════════════════════════════════════════════════════════ */
const StickyMob = () => (
  <div className="fixed bottom-0 left-0 right-0 z-[200] flex items-center justify-between px-4 sm:px-5 py-3 lg:hidden"
    style={{ background: C.navy, borderTop: `2px solid ${C.gold}` }}>
    <p className="text-[12px] font-medium mr-3" style={{ color: "rgba(255,255,255,0.75)" }}>Free career counselling available</p>
    <a href="#enrol" className="text-[12px] sm:text-[13px] font-bold px-4 py-2 rounded-sm no-underline whitespace-nowrap flex-shrink-0"
      style={{ background: C.gold, color: C.navy }}>Book Now →</a>
  </div>
);

/* ══════════════════════════════════════════════════════════════════════════════
   APP ROOT
══════════════════════════════════════════════════════════════════════════════ */
export default function App() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,700&family=Outfit:wght@300;400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'Outfit', sans-serif; background: #FAF8F3; color: #1C1C1C; overflow-x: hidden; }
        body::before {
          content: ''; position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 0; opacity: 0.4;
        }
        /* Hero fade-up */
        @keyframes fadeUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .hero-left > * { animation: fadeUp 0.6s ease both; }
        .hero-left > *:nth-child(1) { animation-delay: 0.1s; }
        .hero-left > *:nth-child(2) { animation-delay: 0.2s; }
        .hero-left > *:nth-child(3) { animation-delay: 0.3s; }
        .hero-left > *:nth-child(4) { animation-delay: 0.4s; }
        .hero-left > *:nth-child(5) { animation-delay: 0.5s; }
        .hero-left > *:nth-child(6) { animation-delay: 0.6s; }
        /* Objectives responsive borders */
        .obj-step { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .obj-step:last-child { border-bottom: none; }
        @media (min-width: 768px) {
          .obj-step { border-bottom: none; }
          .obj-step-0 { padding-right: 36px; border-right: 1px solid rgba(255,255,255,0.08); }
          .obj-step-1 { padding-left: 36px; padding-right: 36px; border-right: 1px solid rgba(255,255,255,0.08); }
          .obj-step-2 { padding-left: 36px; }
        }
        input:focus, select:focus { outline: none; border-color: #000 !important; background: #fff !important; }
        @media (max-width: 1023px) { body { padding-bottom: 60px; } }
      `}</style>
      <div className="relative">
        <AnnounceBanner />
        <Nav />
        <Hero />
        <TrustStrip />
        <About />
        <Path />
        <Objectives />
        <Curriculum />
        <Tools />
        <Methodology />
        <Domains />
        <CaseStudies />
        <WhyUs />
        <Career />
        <Testimonials />
        <FAQ />
        <BottomCTA />
        <Footer />
        <StickyMob />
      </div>
    </>
  );
}
