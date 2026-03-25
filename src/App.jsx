import { useState, useEffect, useRef, createContext, useContext } from "react";

/* ─────────────────────────────────────────────────────────────────────────
   THEME CONTEXT  — every colour token lives here, nothing is hardcoded
───────────────────────────────────────────────────────────────────────── */
const ThemeCtx = createContext();
const useTheme = () => useContext(ThemeCtx);

function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);
  const toggle = () => setDark(d => !d);

  const t = dark ? {
    dark: true,
    gold:"#C9A84C", goldL:"#E8C97A", goldD:"#8a6f2e",
    bg:"#080808",       bg2:"#0f0f0f",
    panel:"#141414",    mid:"#1c1c1c",   steel:"#262626",
    border:"rgba(201,168,76,0.14)",   borderS:"rgba(201,168,76,0.08)",
    t1:"#F0EDE6",  t2:"#9a9a90",  t3:"#585850",  white:"#FDFAF4",
    navBg:"rgba(8,8,8,0.96)",
    heroFilter:"brightness(0.28)",
    clientFilter:"grayscale(100%) brightness(0.45)",
    cardBg:"#141414",   inputBg:"#141414",   loaderBg:"#080808",
    shadow:"0 22px 55px rgba(0,0,0,0.65)",
    toggleTrack:"rgba(201,168,76,0.22)",
  } : {
    dark: false,
    gold:"#9A6F1E", goldL:"#C9A84C", goldD:"#6b4c10",
    bg:"#F5F2EC",       bg2:"#EAE6DE",
    panel:"#FFFFFF",    mid:"#F0EBE0",   steel:"#D5CEBC",
    border:"rgba(154,111,30,0.18)",   borderS:"rgba(154,111,30,0.10)",
    t1:"#18160F",  t2:"#52504A",  t3:"#8a8680",  white:"#18160F",
    navBg:"rgba(245,242,236,0.97)",
    heroFilter:"brightness(0.35)",
    clientFilter:"grayscale(100%) brightness(0.65)",
    cardBg:"#FFFFFF",   inputBg:"#FDFAF4",   loaderBg:"#F5F2EC",
    shadow:"0 16px 44px rgba(0,0,0,0.12)",
    toggleTrack:"rgba(154,111,30,0.15)",
  };

  return <ThemeCtx.Provider value={{ dark, toggle, t }}>{children}</ThemeCtx.Provider>;
}

/* ─────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────── */
const BASE = "https://www.vineengineer.com/image";

const SLIDES = [
  { src:`${BASE}/slider/slide_1.jpg`,  label:"Our Factory" },
  { src:`${BASE}/slider/slide_2.jpg`,  label:"Process Equipment & Pressure Vessels" },
  { src:`${BASE}/slider/slide_3.jpg`,  label:"Heavy Fabrication" },
  { src:`${BASE}/slider/slide_4.jpg`,  label:"On-site Large Dia Tanks" },
  { src:`${BASE}/slider/slide_5.jpg`,  label:"IBR/NIBR Piping" },
  { src:`${BASE}/slider/slide_6.jpg`,  label:"EPC Projects" },
  { src:`${BASE}/slider/slide_7.jpeg`, label:"Fire Protection Systems" },
  { src:`${BASE}/slider/slide_8.jpeg`, label:"Commercial Explosive Skids" },
];

const SERVICES = [
  { num:"01", title:"Process Equipment & Pressure Vessels",    desc:"Design engineering and fabrication of process equipment and pressure vessels to the highest international standards.", img:`${BASE}/slider/slide_2.jpg`,  link:"https://www.vineengineer.com/s_design_engineering_and_fabrication.php" },
  { num:"02", title:"Heavy Fabrication",                       desc:"Structural and heavy fabrication for industrial plants leveraging our fully equipped 4-acre modern facility.",          img:`${BASE}/slider/slide_3.jpg`,  link:"https://www.vineengineer.com/s_heavy_fabrication.php" },
  { num:"03", title:"On-site Large Dia Tanks",                 desc:"Specialized on-site fabrication and erection of large diameter storage and process tanks across sectors.",               img:`${BASE}/services/3.jpg`,       link:"https://www.vineengineer.com/s_fabrication_and_erection.php" },
  { num:"04", title:"IBR / NIBR Piping",                       desc:"Industrial IBR and NIBR piping fabrication and erection — precision-engineered for safety and long-term performance.",  img:`${BASE}/services/4.jpg`,       link:"https://www.vineengineer.com/s_piping.php" },
  { num:"05", title:"EPC Projects",                            desc:"End-to-end Engineering, Procurement and Construction management from concept through to complete commissioning.",        img:`${BASE}/services/5.jpg`,       link:"https://www.vineengineer.com/s_epc_projects.php" },
  { num:"06", title:"Fire Protection Systems",                 desc:"Licensed design, installation, auditing and training for fire protection systems — safe and fully compliant.",          img:`${BASE}/slider/slide_7.jpeg`,  link:"https://www.vineengineer.com/s_fire_protection.php" },
  { num:"07", title:"Process Skids for Commercial Explosives", desc:"Specialised process skids, BMD and ANFO Pump Trucks designed to the most stringent safety and quality standards.",      img:`${BASE}/slider/slide_8.jpeg`,  link:"https://www.vineengineer.com/s_skids_commercial.php" },
];

const CLIENTS = [
  { name:"Adani",          img:`${BASE}/adani.png` },
  { name:"Ambuja",         img:`${BASE}/ambuja.png` },
  { name:"BGR",            img:`${BASE}/bgr.png` },
  { name:"Bharat",         img:`${BASE}/bharat.png` },
  { name:"Reliance Power", img:`${BASE}/reliance_power.png` },
  { name:"GEA",            img:`${BASE}/gea.png` },
  { name:"Dorr-Oliver",    img:`${BASE}/dorr.png` },
  { name:"Reliance",       img:`${BASE}/reliance.png` },
  { name:"Triveni",        img:`${BASE}/triveni.png` },
  { name:"L&T",            img:`${BASE}/larsen.png` },
  { name:"Gammon",         img:`${BASE}/gammon.png` },
  { name:"Grasim",         img:`${BASE}/grasim.png` },
  { name:"Thermax",        img:`${BASE}/thermax.png` },
  { name:"Morarjee",       img:`${BASE}/morarjee.png` },
  { name:"RPG",            img:`${BASE}/rpg.png` },
  { name:"Tata",           img:`${BASE}/tata.png` },
  { name:"KEC",            img:`${BASE}/kec.png` },
  { name:"Grindwell",      img:`${BASE}/grindwell.png` },
  { name:"Haldiram",       img:`${BASE}/haldiram.png` },
  { name:"Dinshaw's",      img:`${BASE}/dinshaws.png` },
  { name:"Pidilite",       img:`${BASE}/pidilite.png` },
  { name:"IVRCL",          img:`${BASE}/ivrcl.png` },
  { name:"Karamtara",      img:`${BASE}/karamtara.png` },
  { name:"Petron",         img:`${BASE}/petron.png` },
  { name:"MBE",            img:`${BASE}/mbe.png` },
  { name:"CDET",           img:`${BASE}/client-logo/cdet.jpeg` },
];

const MARQUEE_ITEMS = [
  "Process Equipment Design","Pressure Vessels","Heavy Fabrication",
  "Large Dia Tank Erection","IBR / NIBR Piping","EPC Projects",
  "Fire Protection Systems","Commercial Explosive Skids",
];

/* ─────────────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────────────── */
function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

function useCounter(target, active, dur = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let v = 0;
    const step = Math.ceil(target / (dur / 16));
    const id = setInterval(() => {
      v += step;
      if (v >= target) { setN(target); clearInterval(id); } else setN(v);
    }, 16);
    return () => clearInterval(id);
  }, [active, target, dur]);
  return n;
}

/* ─────────────────────────────────────────────────────────────────────────
   SCROLL HELPER
───────────────────────────────────────────────────────────────────────── */
function scrollTo(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ─────────────────────────────────────────────────────────────────────────
   GLOBAL CSS  — only animations and cursor, no colour values
───────────────────────────────────────────────────────────────────────── */
const GCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap');
  *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
  html{scroll-behavior:smooth}
  body{font-family:'Jost',sans-serif;font-weight:300;overflow-x:hidden;cursor:none}
  a{text-decoration:none;color:inherit}
  ::-webkit-scrollbar{width:4px}
  ::-webkit-scrollbar-track{background:transparent}
  ::-webkit-scrollbar-thumb{background:#C9A84C66;border-radius:2px}

  @keyframes lDrop   {from{opacity:0;transform:translateY(26px)}to{opacity:1;transform:translateY(0)}}
  @keyframes lBar    {from{width:0}to{width:100%}}
  @keyframes fadeUp  {from{opacity:0;transform:translateY(13px)}to{opacity:1;transform:translateY(0)}}
  @keyframes marquee {from{transform:translateX(0)}to{transform:translateX(-50%)}}
  @keyframes gDrift  {from{transform:translateY(0)}to{transform:translateY(80px)}}
  @keyframes gFloat  {0%,100%{opacity:.45;transform:translate(-50%,-50%) scale(1)}50%{opacity:.85;transform:translate(-50%,-50%) scale(1.1)}}
  @keyframes scrlLn  {0%{transform:scaleY(0);transform-origin:top}50%{transform:scaleY(1);transform-origin:top}51%{transform:scaleY(1);transform-origin:bottom}100%{transform:scaleY(0);transform-origin:bottom}}
  @keyframes sZoom   {from{transform:scale(1.07)}to{transform:scale(1)}}
  @keyframes tSpin   {from{opacity:0;transform:scale(.75) rotate(-15deg)}to{opacity:1;transform:scale(1) rotate(0)}}

  .ll{display:inline-block;animation:lDrop .72s cubic-bezier(.16,1,.3,1) both}
  .lb{animation:lBar 2s .3s cubic-bezier(.4,0,.2,1) both}
  .hs{animation:sZoom 8s ease-out both}
  .gd{animation:gDrift 20s linear infinite}
  .gf{animation:gFloat 7s ease-in-out infinite}
  .sl{animation:scrlLn 2s ease-in-out infinite}
  .mq{animation:marquee 32s linear infinite}

  .rv  {opacity:0;transform:translateY(30px);transition:opacity .7s ease,transform .7s ease}
  .rvl {opacity:0;transform:translateX(-30px);transition:opacity .7s ease,transform .7s ease}
  .rvr {opacity:0;transform:translateX(30px);transition:opacity .7s ease,transform .7s ease}
  .rv.on,.rvl.on,.rvr.on{opacity:1;transform:translate(0)}

  .sc:hover{transform:translateY(-5px)!important}
  .si{transition:transform .55s ease}
  .sc:hover .si{transform:scale(1.05)}
  .sb{transition:width .4s}
  .sc:hover .sb{width:52px!important}
  .ssl{transform:scaleY(0);transform-origin:top;transition:transform .38s}
  .sc:hover .ssl{transform:scaleY(1)}
  .sa{opacity:0;transform:translateX(-8px);transition:opacity .3s,transform .3s}
  .sc:hover .sa{opacity:1;transform:translateX(0)}

  #cur,#ring{position:fixed;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%)}
  #cur {width:10px;height:10px;background:#C9A84C;transition:width .22s,height .22s}
  #ring{width:38px;height:38px;border:1.5px solid rgba(201,168,76,.5);transition:width .22s,height .22s}
  @media(max-width:860px){body{cursor:auto}#cur,#ring{display:none}.dsk{display:none!important}.mob{display:flex!important}}
  @media(min-width:861px){.mob{display:none!important}}
`;

/* ─────────────────────────────────────────────────────────────────────────
   REVEAL
───────────────────────────────────────────────────────────────────────── */
function Reveal({ children, dir="", delay=0, style={} }) {
  const [ref, vis] = useScrollReveal();
  const cls = dir==="l"?"rvl":dir==="r"?"rvr":"rv";
  return (
    <div ref={ref} className={`${cls}${vis?" on":""}`} style={{ transitionDelay:`${delay}s`, ...style }}>
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   THEME TOGGLE
───────────────────────────────────────────────────────────────────────── */
function ThemeToggle() {
  const { dark, toggle, t } = useTheme();
  return (
    <button onClick={toggle}
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      style={{
        display:"flex", alignItems:"center", gap:"6px",
        background: t.panel,
        border:`1px solid ${t.border}`,
        borderRadius:30, padding:"5px 12px 5px 8px",
        cursor:"pointer", transition:"background .35s,border .35s",
      }}>
      {/* Pill track */}
      <span style={{ position:"relative", width:32, height:17, background: t.toggleTrack, borderRadius:10, border:`1px solid ${t.gold}55`, transition:"background .35s", flexShrink:0 }}>
        <span style={{ position:"absolute", top:2, left: dark ? 15 : 2, width:11, height:11, borderRadius:"50%", background:t.gold, transition:"left .32s cubic-bezier(.4,0,.2,1)" }} />
      </span>
      {/* Emoji */}
      <span style={{ fontSize:".95rem", lineHeight:1, animation:"tSpin .3s ease" }} key={String(dark)}>
        {dark ? "🌙" : "☀️"}
      </span>
      {/* Label */}
      <span style={{ fontSize:".56rem", letterSpacing:".18em", color:t.gold, textTransform:"uppercase", fontWeight:400, fontFamily:"'Jost',sans-serif" }}>
        {dark ? "Dark" : "Light"}
      </span>
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   CURSOR
───────────────────────────────────────────────────────────────────────── */
function Cursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ mx:0, my:0, rx:0, ry:0 });
  useEffect(() => {
    const mv = e => { pos.current.mx=e.clientX; pos.current.my=e.clientY; if(curRef.current){ curRef.current.style.left=e.clientX+"px"; curRef.current.style.top=e.clientY+"px"; } };
    document.addEventListener("mousemove", mv);
    let raf;
    const loop = () => { const p=pos.current; p.rx+=(p.mx-p.rx)*.12; p.ry+=(p.my-p.ry)*.12; if(ringRef.current){ringRef.current.style.left=p.rx+"px";ringRef.current.style.top=p.ry+"px";} raf=requestAnimationFrame(loop); };
    loop();
    const big  = () => { if(curRef.current){curRef.current.style.width="18px";curRef.current.style.height="18px";} if(ringRef.current){ringRef.current.style.width="56px";ringRef.current.style.height="56px";} };
    const small= () => { if(curRef.current){curRef.current.style.width="10px";curRef.current.style.height="10px";} if(ringRef.current){ringRef.current.style.width="38px";ringRef.current.style.height="38px";} };
    const attach = () => document.querySelectorAll("a,button,[data-hover]").forEach(el=>{ el.addEventListener("mouseenter",big); el.addEventListener("mouseleave",small); });
    attach();
    const mo = new MutationObserver(attach);
    mo.observe(document.body,{childList:true,subtree:true});
    return () => { document.removeEventListener("mousemove",mv); cancelAnimationFrame(raf); mo.disconnect(); };
  },[]);
  return (<><div id="cur" ref={curRef}/><div id="ring" ref={ringRef}/></>);
}

/* ─────────────────────────────────────────────────────────────────────────
   LOADER
───────────────────────────────────────────────────────────────────────── */
function Loader({ done }) {
  const { t } = useTheme();
  return (
    <div style={{ position:"fixed",inset:0,background:t.loaderBg,zIndex:8000,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",opacity:done?0:1,visibility:done?"hidden":"visible",transition:"opacity .8s,visibility .8s" }}>
      <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(2rem,5.5vw,3.8rem)",fontWeight:300,letterSpacing:".3em",color:t.t1 }}>
        {"VINEENGINEER".split("").map((c,i)=>(
          <span key={i} className="ll" style={{ animationDelay:`${i*.06}s` }}>{c}</span>
        ))}
      </div>
      <div style={{ marginTop:".7rem",fontSize:".55rem",letterSpacing:".45em",color:t.gold,textTransform:"uppercase",animation:"fadeUp .8s .85s both" }}>
        Engineering Excellence · Since 2000
      </div>
      <div style={{ marginTop:"2rem",width:170,height:1,background:t.steel,position:"relative",overflow:"hidden" }}>
        <div className="lb" style={{ position:"absolute",top:0,left:0,height:"100%",width:0,background:`linear-gradient(90deg,${t.goldD},${t.goldL})` }}/>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   NAVBAR
───────────────────────────────────────────────────────────────────────── */
function Navbar() {
  const { t } = useTheme();
  const [scrolled,setScrolled] = useState(false);
  const [active,setActive] = useState("hero");
  const [open,setOpen] = useState(false);

  useEffect(()=>{
    const fn = () => {
      setScrolled(window.scrollY>60);
      ["hero","about","services","clients","enquire"].slice().reverse().some(id=>{
        const el=document.getElementById(id);
        if(el && window.scrollY>=el.offsetTop-140){ setActive(id); return true; }
        return false;
      });
    };
    window.addEventListener("scroll",fn);
    return ()=>window.removeEventListener("scroll",fn);
  },[]);

  const links=[{id:"hero",l:"Home"},{id:"about",l:"About"},{id:"services",l:"Services"},{id:"clients",l:"Clients"},{id:"enquire",l:"Contact"}];
  const nav = id => { scrollTo(id); setOpen(false); };

  const nbtn = { background:"none",border:"none",cursor:"pointer",fontFamily:"'Jost',sans-serif",fontWeight:300,fontSize:".6rem",letterSpacing:".22em",textTransform:"uppercase",padding:"2px 0",position:"relative",transition:"color .3s" };

  return (
    <>
      <nav style={{ position:"fixed",top:0,left:0,right:0,zIndex:700,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 5vw",height:scrolled?62:78,background:scrolled?t.navBg:"transparent",backdropFilter:scrolled?"blur(22px)":"none",borderBottom:scrolled?`1px solid ${t.border}`:"none",transition:"height .4s,background .4s,border .4s" }}>

        {/* Logo */}
        <button onClick={()=>nav("hero")} style={{ ...nbtn,fontSize:"1.5rem",letterSpacing:".15em",color:t.t1,fontFamily:"'Cormorant Garamond',serif",fontWeight:300 }}>
          Vine<span style={{ color:t.gold }}>engineer</span>
        </button>

        {/* Desktop */}
        <ul className="dsk" style={{ display:"flex",gap:"2rem",listStyle:"none",alignItems:"center" }}>
          {links.map(({id,l})=>(
            <li key={id}>
              <button onClick={()=>nav(id)} style={{ ...nbtn,color:active===id?t.gold:t.t2 }}>
                {l}
                <span style={{ position:"absolute",bottom:-4,left:0,width:active===id?"100%":0,height:1,background:t.gold,transition:"width .3s",display:"block" }}/>
              </button>
            </li>
          ))}
          <li><ThemeToggle/></li>
          <li>
            <button onClick={()=>nav("enquire")}
              style={{ padding:".5rem 1.3rem",border:`1px solid ${t.gold}`,color:t.gold,fontSize:".57rem",letterSpacing:".2em",textTransform:"uppercase",background:"transparent",cursor:"pointer",transition:"background .3s,color .3s" }}
              onMouseEnter={e=>{e.currentTarget.style.background=t.gold;e.currentTarget.style.color=t.loaderBg;}}
              onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color=t.gold;}}>
              Enquire Now
            </button>
          </li>
        </ul>

        {/* Mobile */}
        <div className="mob" style={{ alignItems:"center",gap:".8rem" }}>
          <ThemeToggle/>
          <button onClick={()=>setOpen(o=>!o)} style={{ background:"none",border:"none",color:t.gold,fontSize:"1.45rem",cursor:"pointer" }}>
            {open?"✕":"☰"}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {open && (
        <div style={{ position:"fixed",inset:0,zIndex:699,background:t.dark?`rgba(8,8,8,.97)`:t.navBg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"1.8rem" }}>
          {links.map(({id,l})=>(
            <button key={id} onClick={()=>nav(id)}
              style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"2.1rem",fontWeight:300,color:active===id?t.gold:t.t1,background:"none",border:"none",cursor:"pointer",letterSpacing:".1em",transition:"color .3s" }}>
              {l}
            </button>
          ))}
          <button onClick={()=>nav("enquire")}
            style={{ marginTop:".8rem",padding:".65rem 2.2rem",border:`1px solid ${t.gold}`,color:t.gold,fontFamily:"'Jost',sans-serif",fontSize:".68rem",letterSpacing:".25em",textTransform:"uppercase",background:"transparent",cursor:"pointer" }}>
            Enquire Now
          </button>
        </div>
      )}
    </>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────────────────── */
function Hero() {
  const { t } = useTheme();
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState(null);
  const [paused, setPaused] = useState(false);
  const parRef = useRef(null);
  const timerRef = useRef(null);

  const goTo = (i) => { setPrev(idx); setIdx(i); };
  const goNext = () => goTo((idx + 1) % SLIDES.length);
  const goPrev = () => goTo((idx - 1 + SLIDES.length) % SLIDES.length);

  /* Auto-advance every 4.5s, pause on hover */
  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, 4500);
    return () => clearInterval(timerRef.current);
  }, [idx, paused]);

  /* Parallax */
  useEffect(() => {
    const fn = () => { if (parRef.current) parRef.current.style.transform = `translateY(${window.scrollY * .28}px)`; };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <section id="hero"
      style={{ position:"relative", height:"100vh", overflow:"hidden", display:"flex", alignItems:"center", justifyContent:"center" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}>

      {/* ── Slide images ── */}
      <div ref={parRef} style={{ position:"absolute", inset:0, willChange:"transform" }}>
        {SLIDES.map((s, i) => (
          <div key={i} style={{
            position:"absolute", inset:0,
            opacity: i === idx ? 1 : 0,
            transition:"opacity 1.1s cubic-bezier(.4,0,.2,1)",
            zIndex: i === idx ? 1 : 0,
          }}>
            <img
              src={s.src} alt={s.label}
              style={{
                width:"100%", height:"100%", objectFit:"cover",
                filter: t.heroFilter,
                /* Ken Burns: each active slide slowly zooms */
                transform: i === idx ? "scale(1.08)" : "scale(1)",
                transition: i === idx ? "transform 4.5s ease-out" : "none",
              }}
            />
          </div>
        ))}
      </div>

      {/* ── Grid overlay ── */}
      <div className="gd" style={{ position:"absolute", inset:0, zIndex:2,
        backgroundImage:`linear-gradient(${t.gold}06 1px,transparent 1px),linear-gradient(90deg,${t.gold}06 1px,transparent 1px)`,
        backgroundSize:"80px 80px" }}/>

      {/* ── Glow orb ── */}
      <div className="gf" style={{ position:"absolute", top:"50%", left:"50%", width:580, height:580,
        borderRadius:"50%", background:`radial-gradient(circle,${t.gold}0D 0%,transparent 68%)`,
        pointerEvents:"none", zIndex:2 }}/>

      {/* ── Bottom vignette ── */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"45%",
        background:`linear-gradient(to top,${t.bg} 0%,transparent 100%)`,
        transition:"background .4s", zIndex:2 }}/>

      {/* ── Left vignette ── */}
      <div style={{ position:"absolute", top:0, left:0, bottom:0, width:"18%",
        background:"linear-gradient(to right,rgba(0,0,0,.45),transparent)", zIndex:2 }}/>

      {/* ── Right vignette ── */}
      <div style={{ position:"absolute", top:0, right:0, bottom:0, width:"18%",
        background:"linear-gradient(to left,rgba(0,0,0,.45),transparent)", zIndex:2 }}/>

      {/* ── Prev / Next arrows ── */}
      {[{fn:goPrev, side:"left",  icon:"‹"},
        {fn:goNext, side:"right", icon:"›"}].map(({fn, side, icon}) => (
        <button key={side} onClick={fn}
          style={{
            position:"absolute", [side]: "2vw", top:"50%", transform:"translateY(-50%)",
            zIndex:5, width:44, height:44,
            background:"rgba(0,0,0,.35)", backdropFilter:"blur(6px)",
            border:`1px solid rgba(201,168,76,.35)`,
            color:"#C9A84C", fontSize:"1.8rem", lineHeight:1,
            cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center",
            transition:"background .3s, border-color .3s",
          }}
          onMouseEnter={e=>{ e.currentTarget.style.background="rgba(201,168,76,.25)"; e.currentTarget.style.borderColor="#C9A84C"; }}
          onMouseLeave={e=>{ e.currentTarget.style.background="rgba(0,0,0,.35)"; e.currentTarget.style.borderColor="rgba(201,168,76,.35)"; }}>
          {icon}
        </button>
      ))}

      {/* ── Slide label (bottom-left) ── */}
      <div style={{
        position:"absolute", bottom:"5.5rem", left:"5vw", zIndex:5,
        display:"flex", alignItems:"center", gap:"1rem",
      }}>
        {/* Counter */}
        <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-end" }}>
          <span style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"1.8rem", fontWeight:300, color:"#F0EDE6", lineHeight:1 }}>
            {String(idx + 1).padStart(2,"0")}
          </span>
          <span style={{ fontSize:".48rem", letterSpacing:".3em", color:"rgba(201,168,76,.7)", textTransform:"uppercase" }}>
            / {String(SLIDES.length).padStart(2,"0")}
          </span>
        </div>
        {/* Divider */}
        <div style={{ width:1, height:36, background:"rgba(201,168,76,.4)" }}/>
        {/* Label text */}
        <div key={idx} style={{ animation:"slideLabel .5s ease both" }}>
          <div style={{ fontSize:".5rem", letterSpacing:".35em", color:"rgba(201,168,76,.8)", textTransform:"uppercase", marginBottom:".25rem" }}>
            Now Showing
          </div>
          <div style={{ fontSize:".82rem", fontFamily:"'Cormorant Garamond',serif", color:"#F0EDE6", letterSpacing:".06em" }}>
            {SLIDES[idx].label}
          </div>
        </div>
      </div>

      {/* ── Progress dots (bottom-right) ── */}
      <div style={{ position:"absolute", bottom:"5.5rem", right:"5vw", zIndex:5, display:"flex", flexDirection:"column", gap:".4rem", alignItems:"flex-end" }}>
        {SLIDES.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            style={{
              width: i === idx ? 22 : 5, height: 2,
              background: i === idx ? "#C9A84C" : "rgba(201,168,76,.3)",
              border:"none", cursor:"pointer",
              transition:"width .4s, background .4s", padding:0,
            }}/>
        ))}
      </div>

      {/* ── Auto-play progress bar ── */}
      <div style={{ position:"absolute", bottom:0, left:0, right:0, height:2, background:"rgba(201,168,76,.1)", zIndex:5 }}>
        <div key={`${idx}-${paused}`}
          style={{
            height:"100%",
            background:`linear-gradient(90deg,${t.goldD},${t.gold})`,
            animation: paused ? "none" : "heroProgress 4.5s linear forwards",
          }}/>
      </div>

      {/* ── Central hero content ── */}
      <div style={{ position:"relative", zIndex:3, textAlign:"center", padding:"0 5vw", maxWidth:880 }}>
        <div style={{ fontSize:".55rem", letterSpacing:".5em", color:t.gold, textTransform:"uppercase", marginBottom:"1.3rem", animation:"fadeUp .9s 1.8s both" }}>
          Over 20+ Years of Industrial Service Experience
        </div>
        <h1 style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:"clamp(2.6rem,7vw,6.2rem)", fontWeight:300, lineHeight:1.06, letterSpacing:".04em", color:"#F0EDE6", animation:"fadeUp .9s 2s both" }}>
          Engineering &amp; <em style={{ fontStyle:"italic", color:t.gold }}>Fabrication</em><br/>Redefined
        </h1>
        <div style={{ marginTop:"1rem", fontSize:".63rem", letterSpacing:".26em", textTransform:"uppercase", color:"#9a9a90", animation:"fadeUp .9s 2.2s both" }}>
          ISO Certified · SMPV Licensed · Make in India
        </div>
        <p style={{ marginTop:"1.3rem", maxWidth:520, margin:"1.3rem auto 0", fontSize:".84rem", lineHeight:2, color:"#9a9a90", animation:"fadeUp .9s 2.4s both" }}>
          Preferred partner for End-to-End Concept to Commissioning solutions for Process Plants — from design engineering to EPC projects.
        </p>
        <div style={{ marginTop:"2.5rem", display:"flex", gap:"1.1rem", justifyContent:"center", flexWrap:"wrap", animation:"fadeUp .9s 2.6s both" }}>
          <button onClick={() => scrollTo("services")}
            style={{ padding:".88rem 2.1rem", background:`linear-gradient(135deg,${t.goldD},${t.gold})`, color:"#0a0a0a", fontSize:".59rem", letterSpacing:".22em", textTransform:"uppercase", fontWeight:600, border:"none", cursor:"pointer", transition:"opacity .3s" }}
            onMouseEnter={e=>e.currentTarget.style.opacity=".8"} onMouseLeave={e=>e.currentTarget.style.opacity="1"}>
            Explore Services
          </button>
          <button onClick={() => scrollTo("enquire")}
            style={{ padding:".88rem 2.1rem", border:"1px solid rgba(201,168,76,.42)", color:"#9a9a90", fontSize:".59rem", letterSpacing:".22em", textTransform:"uppercase", background:"transparent", cursor:"pointer", transition:"border-color .3s,color .3s" }}
            onMouseEnter={e=>{ e.currentTarget.style.borderColor="#C9A84C"; e.currentTarget.style.color="#C9A84C"; }}
            onMouseLeave={e=>{ e.currentTarget.style.borderColor="rgba(201,168,76,.42)"; e.currentTarget.style.color="#9a9a90"; }}>
            Get in Touch
          </button>
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div style={{ position:"absolute", bottom:"1.5rem", left:"50%", transform:"translateX(-50%)", display:"flex", flexDirection:"column", alignItems:"center", gap:".4rem", zIndex:5 }}>
        <span style={{ fontSize:".48rem", letterSpacing:".4em", color:"rgba(88,88,80,.8)", textTransform:"uppercase" }}>Scroll</span>
        <div className="sl" style={{ width:1, height:38, background:"linear-gradient(to bottom,#C9A84C,transparent)" }}/>
      </div>

      {/* ── Extra keyframes for this section ── */}
      <style>{`
        @keyframes heroProgress { from{width:0} to{width:100%} }
        @keyframes slideLabel   { from{opacity:0;transform:translateX(-10px)} to{opacity:1;transform:translateX(0)} }
      `}</style>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   MARQUEE
───────────────────────────────────────────────────────────────────────── */
function MarqueeBand() {
  const { t } = useTheme();
  const items = [...MARQUEE_ITEMS,...MARQUEE_ITEMS];
  return (
    <div style={{ padding:"1.2rem 0",background:t.panel,borderTop:`1px solid ${t.borderS}`,borderBottom:`1px solid ${t.borderS}`,overflow:"hidden",transition:"background .4s,border .4s" }}>
      <div className="mq" style={{ display:"flex",gap:"2.8rem",width:"max-content",whiteSpace:"nowrap" }}>
        {items.map((txt,i)=>(
          <span key={i} style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"1.08rem",fontStyle:"italic",color:t.t3,letterSpacing:".1em",display:"inline-flex",alignItems:"center",gap:"2.8rem",transition:"color .4s" }}>
            {txt}<span style={{ color:t.gold,fontStyle:"normal",fontSize:".4rem" }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────────────────────────────────── */
function About() {
  const { t } = useTheme();
  const [sRef,sVis] = useScrollReveal();
  const yr = useCounter(20,sVis);
  const cl = useCounter(25,sVis);

  return (
    <section id="about" style={{ padding:"8rem 6vw",background:t.bg2,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"7vw",alignItems:"center",transition:"background .4s" }}>

      {/* Visual */}
      <Reveal dir="l">
        <div style={{ position:"relative",aspectRatio:"4/5",maxWidth:460 }}>
          <div style={{ position:"absolute",inset:0,border:`1px solid ${t.border}`,transform:"translate(15px,15px)",transition:"border .4s" }}/>
          <div style={{ position:"absolute",inset:0,overflow:"hidden",background:t.mid }}>
            <img src={`${BASE}/slider/slide_1.jpg`} alt="Factory" style={{ width:"100%",height:"100%",objectFit:"cover",opacity:t.dark?.72:.85,transition:"transform .7s,opacity .4s" }}
              onMouseEnter={e=>{e.currentTarget.style.transform="scale(1.05)";e.currentTarget.style.opacity=".95";}}
              onMouseLeave={e=>{e.currentTarget.style.transform="scale(1)";e.currentTarget.style.opacity=t.dark?".72":".85";}}/>
          </div>
          {/* Gold badge */}
          <div style={{ position:"absolute",bottom:-16,right:-16,width:104,height:104,background:t.gold,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",transition:"background .4s" }}>
            <span style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"2rem",fontWeight:400,color:"#0a0a0a",lineHeight:1 }}>{yr}+</span>
            <span style={{ fontSize:".48rem",letterSpacing:".2em",color:"#0a0a0a",textTransform:"uppercase" }}>Years</span>
          </div>
          {/* ISO chip */}
          <div style={{ position:"absolute",top:-12,left:-12,padding:".3rem .85rem",background:t.bg,border:`1px solid ${t.border}`,fontSize:".5rem",letterSpacing:".2em",color:t.gold,textTransform:"uppercase",transition:"background .4s,border .4s,color .4s" }}>
            ISO Certified
          </div>
        </div>
      </Reveal>

      {/* Text */}
      <Reveal dir="r">
        <div style={{ fontSize:".53rem",letterSpacing:".42em",color:t.gold,textTransform:"uppercase",marginBottom:".8rem",transition:"color .4s" }}>Who We Are</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,3.6vw,3rem)",fontWeight:300,lineHeight:1.18,color:t.t1,marginBottom:"1.5rem",transition:"color .4s" }}>
          A Preferred Partner for<br/><em style={{ fontStyle:"italic",color:t.gold }}>Process Plants</em>
        </h2>
        {[
          <><strong style={{color:t.t1}}>Vineengineers</strong> — specializing in <strong style={{color:t.t1}}>End-to-End Concept to Commissioning</strong> solutions for process plants. We fabricate Storage and Process Tanks, Silos, Hoppers, Pressure Vessels and specialized equipment.</>,
          <>Our fabrication shop spans <strong style={{color:t.t1}}>4 Acres</strong>, is <strong style={{color:t.t1}}>ISO Certified</strong>, equipped with a State-of-The-Art <strong style={{color:t.t1}}>Shot &amp; Grit Blast Chamber</strong> and dedicated <strong style={{color:t.t1}}>Paint Booth</strong>. We hold an <strong style={{color:t.t1}}>SMPV license</strong>.</>,
          <>Experts in <strong style={{color:t.t1}}>Bulk Explosive Plants</strong>, <strong style={{color:t.t1}}>BMD</strong> and <strong style={{color:t.t1}}>ANFO Pump Trucks</strong>, with extensive experience in large diameter tank fabrication and industrial IBR/NIBR pipeline erection.</>,
        ].map((p,i)=>(
          <p key={i} style={{ fontSize:".83rem",lineHeight:2,color:t.t2,marginBottom:".9rem",transition:"color .4s" }}>{p}</p>
        ))}

        {/* Stats */}
        <div ref={sRef} style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1.6rem",marginTop:"2.2rem",paddingTop:"1.8rem",borderTop:`1px solid ${t.steel}`,transition:"border .4s" }}>
          {[[`${yr}+`,"Years Exp."],[`4ac`,"Factory Area"],[`${cl}+`,"Major Clients"]].map(([n,l],i)=>(
            <div key={i}>
              <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"2.1rem",fontWeight:300,color:t.gold,lineHeight:1,transition:"color .4s" }}>{n}</div>
              <div style={{ fontSize:".53rem",letterSpacing:".17em",color:t.t3,textTransform:"uppercase",marginTop:".28rem",transition:"color .4s" }}>{l}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────────────────────────────────── */
function Services() {
  const { t } = useTheme();
  return (
    <section id="services" style={{ padding:"8rem 6vw",background:t.bg,transition:"background .4s" }}>
      <Reveal>
        <div style={{ textAlign:"center",marginBottom:"3.8rem" }}>
          <div style={{ fontSize:".53rem",letterSpacing:".45em",color:t.gold,textTransform:"uppercase",marginBottom:".8rem",transition:"color .4s" }}>What We Do</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,4vw,3.3rem)",fontWeight:300,color:t.t1,transition:"color .4s" }}>
            Our <em style={{ fontStyle:"italic",color:t.gold }}>Services</em>
          </h2>
          <div style={{ width:52,height:1,background:`linear-gradient(90deg,transparent,${t.gold},transparent)`,margin:"1.2rem auto 0" }}/>
        </div>
      </Reveal>

      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(285px,1fr))",gap:"1.5px",background:t.steel,transition:"background .4s" }}>
        {SERVICES.map((s,i)=>(
          <Reveal key={i} delay={i*.06}>
            <a href={s.link} target="_blank" rel="noreferrer" data-hover className="sc"
              style={{ background:t.cardBg,display:"block",overflow:"hidden",position:"relative",transition:"transform .4s,box-shadow .4s,background .4s",textDecoration:"none" }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow=t.shadow;e.currentTarget.style.background=t.mid;}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow="none";e.currentTarget.style.background=t.cardBg;}}>
              {/* Image */}
              <div style={{ height:190,overflow:"hidden" }}>
                <img src={s.img} alt={s.title} className="si" style={{ width:"100%",height:"100%",objectFit:"cover",filter:t.heroFilter }}/>
              </div>
              {/* Left gold bar */}
              <div className="ssl" style={{ position:"absolute",top:0,left:0,width:3,height:"100%",background:t.gold }}/>
              {/* Body */}
              <div style={{ padding:"1.5rem 1.8rem" }}>
                <div style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"2.4rem",fontWeight:300,color:`${t.gold}1A`,lineHeight:1,marginBottom:".8rem" }}>{s.num}</div>
                <div className="sb" style={{ width:30,height:1,background:t.gold,marginBottom:".9rem" }}/>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"1.18rem",fontWeight:400,color:t.t1,lineHeight:1.35,marginBottom:".7rem",transition:"color .4s" }}>{s.title}</h3>
                <p style={{ fontSize:".76rem",lineHeight:1.9,color:t.t3,transition:"color .4s" }}>{s.desc}</p>
                <div className="sa" style={{ display:"inline-flex",alignItems:"center",gap:".35rem",marginTop:".9rem",fontSize:".56rem",letterSpacing:".2em",color:t.gold,textTransform:"uppercase" }}>
                  Learn More →
                </div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   CLIENTS
───────────────────────────────────────────────────────────────────────── */
function Clients() {
  const { t } = useTheme();
  return (
    <section id="clients" style={{ padding:"8rem 6vw",background:t.bg2,textAlign:"center",transition:"background .4s" }}>
      <Reveal>
        <div style={{ fontSize:".53rem",letterSpacing:".45em",color:t.gold,textTransform:"uppercase",marginBottom:".8rem",transition:"color .4s" }}>Trusted By</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,4vw,3.3rem)",fontWeight:300,color:t.t1,transition:"color .4s" }}>
          Our <em style={{ fontStyle:"italic",color:t.gold }}>Clients</em>
        </h2>
        <p style={{ marginTop:".85rem",fontSize:".82rem",lineHeight:2,color:t.t2,maxWidth:440,margin:".85rem auto 0",transition:"color .4s" }}>
          India's most respected industrial conglomerates trust Vineengineer for critical fabrication and engineering work.
        </p>
        <div style={{ width:52,height:1,background:`linear-gradient(90deg,transparent,${t.gold},transparent)`,margin:"1.3rem auto 2.8rem" }}/>
      </Reveal>
      <Reveal>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(125px,1fr))",gap:"1px",background:t.steel,transition:"background .4s" }}>
          {CLIENTS.map((c,i)=>(
            <div key={i} data-hover
              style={{ background:t.panel,padding:"1.5rem 1rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:".45rem",minHeight:86,filter:t.clientFilter,transition:"filter .4s,background .4s" }}
              onMouseEnter={e=>{e.currentTarget.style.filter="grayscale(0%) brightness(1)";e.currentTarget.style.background=t.mid;}}
              onMouseLeave={e=>{e.currentTarget.style.filter=t.clientFilter;e.currentTarget.style.background=t.panel;}}>
              <img src={c.img} alt={c.name} style={{ maxWidth:80,maxHeight:34,objectFit:"contain" }} onError={e=>e.currentTarget.style.display="none"}/>
              <span style={{ fontSize:".54rem",letterSpacing:".14em",color:t.t2,textTransform:"uppercase",transition:"color .4s" }}>{c.name}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   ENQUIRE
───────────────────────────────────────────────────────────────────────── */
function Enquire() {
  const { t } = useTheme();
  const [form,setForm] = useState({ name:"",company:"",email:"",phone:"",service:"",message:"" });
  const [sent,setSent] = useState(false);
  const set = k => e => setForm(f=>({...f,[k]:e.target.value}));
  const send = () => { setSent(true); setTimeout(()=>setSent(false),3000); };

  const fs = { background:t.inputBg,border:`1px solid ${t.steel}`,color:t.t1,padding:".85rem 1.05rem",fontFamily:"'Jost',sans-serif",fontSize:".8rem",fontWeight:300,width:"100%",outline:"none",transition:"border-color .3s,background .3s,color .4s" };
  const ls = { fontSize:".52rem",letterSpacing:".3em",color:t.gold,textTransform:"uppercase",transition:"color .4s" };
  const fo = e=>{e.currentTarget.style.borderColor=t.gold;e.currentTarget.style.background=t.mid;};
  const fb = e=>{e.currentTarget.style.borderColor=t.steel;e.currentTarget.style.background=t.inputBg;};

  const Field=({label,fkey,type="text",ph=""})=>(
    <div style={{ display:"flex",flexDirection:"column",gap:".38rem" }}>
      <label style={ls}>{label}</label>
      <input type={type} placeholder={ph} value={form[fkey]} onChange={set(fkey)} style={fs} onFocus={fo} onBlur={fb}/>
    </div>
  );

  return (
    <section id="enquire" style={{ padding:"8rem 6vw",background:t.bg,display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(275px,1fr))",gap:"6vw",alignItems:"start",transition:"background .4s" }}>

      {/* Info */}
      <Reveal dir="l">
        <div style={{ fontSize:".52rem",letterSpacing:".42em",color:t.gold,textTransform:"uppercase",marginBottom:".8rem",transition:"color .4s" }}>Get in Touch</div>
        <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:300,color:t.t1,lineHeight:1.2,marginBottom:"1.3rem",transition:"color .4s" }}>
          Let's Build <em style={{ fontStyle:"italic",color:t.gold }}>Together</em>
        </h2>
        <p style={{ fontSize:".83rem",lineHeight:2,color:t.t2,marginBottom:"2rem",transition:"color .4s" }}>
          Whether planning a new process plant or needing specialised fabrication, our team is ready to partner with you from concept to commissioning.
        </p>
        {[{ico:"✉",lbl:"Email",val:"info@vineengineer.com"},{ico:"✆",lbl:"Phone",val:"+91 959-569-4029"},{ico:"⊕",lbl:"Workshop",val:"B-222, 223 MIDC Industrial Area\nButibori, Nagpur – 441122"}].map(({ico,lbl,val},i)=>(
          <div key={i} style={{ display:"flex",gap:"1.1rem",marginBottom:"1.5rem",paddingBottom:"1.5rem",borderBottom:i<2?`1px solid ${t.steel}`:"none",alignItems:"flex-start",transition:"border .4s" }}>
            <div style={{ width:36,height:36,flexShrink:0,border:`1px solid ${t.border}`,display:"flex",alignItems:"center",justifyContent:"center",color:t.gold,fontSize:".82rem",transition:"border .4s,color .4s" }}>{ico}</div>
            <div>
              <div style={{ fontSize:".49rem",letterSpacing:".3em",color:t.gold,textTransform:"uppercase",marginBottom:".22rem",transition:"color .4s" }}>{lbl}</div>
              <div style={{ fontSize:".8rem",color:t.t1,lineHeight:1.7,whiteSpace:"pre-line",transition:"color .4s" }}>{val}</div>
            </div>
          </div>
        ))}
        <div style={{ display:"flex",gap:".9rem",alignItems:"center",marginTop:".8rem" }}>
          <img src={`${BASE}/iso.svg`}           alt="ISO"          style={{ height:34,opacity:t.dark?.52:.4  }} onError={e=>e.currentTarget.style.display="none"}/>
          <img src={`${BASE}/make_in_india.png`} alt="Make in India" style={{ height:30,opacity:t.dark?.45:.35 }} onError={e=>e.currentTarget.style.display="none"}/>
        </div>
      </Reveal>

      {/* Form card */}
      <Reveal dir="r">
        <div style={{ background:t.panel,border:`1px solid ${t.border}`,padding:"2.2rem",display:"flex",flexDirection:"column",gap:"1.2rem",transition:"background .4s,border .4s" }}>
          <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"1.45rem",fontWeight:300,color:t.t1,borderBottom:`1px solid ${t.steel}`,paddingBottom:".9rem",transition:"color .4s,border .4s" }}>
            Send an Enquiry
          </h3>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.2rem" }}>
            <Field label="Full Name" fkey="name" ph="Your name"/>
            <Field label="Company"  fkey="company" ph="Company name"/>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:"1.2rem" }}>
            <Field label="Email" fkey="email" type="email" ph="your@email.com"/>
            <Field label="Phone" fkey="phone" type="tel"   ph="+91 XXXXX XXXXX"/>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:".38rem" }}>
            <label style={ls}>Service Required</label>
            <select value={form.service} onChange={set("service")} style={{ ...fs,appearance:"none",color:form.service?t.t1:t.t3 }} onFocus={fo} onBlur={fb}>
              <option value="">Select a service</option>
              {SERVICES.map((s,i)=><option key={i} value={s.title} style={{ background:t.panel,color:t.t1 }}>{s.title}</option>)}
            </select>
          </div>
          <div style={{ display:"flex",flexDirection:"column",gap:".38rem" }}>
            <label style={ls}>Message</label>
            <textarea value={form.message} onChange={set("message")} placeholder="Describe your requirements…" style={{ ...fs,minHeight:115,resize:"none" }} onFocus={fo} onBlur={fb}/>
          </div>
          <button onClick={send}
            style={{ padding:".9rem 2.4rem",background:sent?t.gold:"transparent",border:`1px solid ${t.gold}`,color:sent?"#080808":t.gold,fontFamily:"'Jost',sans-serif",fontSize:".58rem",letterSpacing:".28em",textTransform:"uppercase",cursor:"pointer",alignSelf:"flex-start",transition:"background .3s,color .3s,border .3s" }}
            onMouseEnter={e=>{ if(!sent){e.currentTarget.style.background=t.gold;e.currentTarget.style.color="#080808";}}}
            onMouseLeave={e=>{ if(!sent){e.currentTarget.style.background="transparent";e.currentTarget.style.color=t.gold;}}}>
            {sent?"✓ Message Sent!":"Send Enquiry"}
          </button>
        </div>
      </Reveal>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────────────────── */
function Footer() {
  const { t } = useTheme();
  const bs = { fontSize:".75rem",color:t.t3,background:"none",border:"none",cursor:"pointer",fontFamily:"'Jost',sans-serif",fontWeight:300,textAlign:"left",padding:"0",display:"block",transition:"color .3s,padding-left .3s" };
  const lnk = (onClick,label) => (
    <button onClick={onClick} style={bs}
      onMouseEnter={e=>{e.currentTarget.style.color=t.gold;e.currentTarget.style.paddingLeft="6px";}}
      onMouseLeave={e=>{e.currentTarget.style.color=t.t3;e.currentTarget.style.paddingLeft="0";}}>
      {label}
    </button>
  );
  const ext = (href,label) => (
    <a href={href} target="_blank" rel="noreferrer" style={{ ...bs,textDecoration:"none" }}
      onMouseEnter={e=>{e.currentTarget.style.color=t.gold;e.currentTarget.style.paddingLeft="6px";}}
      onMouseLeave={e=>{e.currentTarget.style.color=t.t3;e.currentTarget.style.paddingLeft="0";}}>
      {label}
    </a>
  );

  return (
    <footer style={{ background:t.bg2,borderTop:`1px solid ${t.border}`,padding:"5rem 6vw 2.5rem",transition:"background .4s,border .4s" }}>
      <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(165px,1fr))",gap:"3rem",marginBottom:"3.5rem" }}>

        {/* Brand */}
        <div>
          <button onClick={()=>scrollTo("hero")} style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"1.75rem",fontWeight:300,letterSpacing:".15em",color:t.t1,background:"none",border:"none",cursor:"pointer",display:"block",marginBottom:"1rem",transition:"color .4s" }}>
            Vine<span style={{ color:t.gold }}>engineer</span>
          </button>
          <img src={`${BASE}/logo.png`} alt="Logo"
            style={{ maxHeight:38,opacity:t.dark?.48:.6,marginBottom:".9rem",display:"block",filter:t.dark?"none":"brightness(0.3)" }}
            onError={e=>e.currentTarget.style.display="none"}/>
          <p style={{ fontSize:".75rem",lineHeight:2,color:t.t3,maxWidth:248,transition:"color .4s" }}>
            Preferred partner for Engineering &amp; Fabrication Services to help build Process Plants. ISO certified. SMPV licensed.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontSize:".54rem",letterSpacing:".3em",color:t.gold,textTransform:"uppercase",marginBottom:"1.2rem",transition:"color .4s" }}>Quick Links</h4>
          <div style={{ display:"flex",flexDirection:"column",gap:".55rem" }}>
            {lnk(()=>scrollTo("hero"),    "Home")}
            {lnk(()=>scrollTo("about"),   "About Us")}
            {lnk(()=>scrollTo("about"),   "Infrastructure")}
            {lnk(()=>scrollTo("about"),   "Certifications")}
            {lnk(()=>scrollTo("about"),   "Quality & HSE")}
            {lnk(()=>scrollTo("about"),   "Social Responsibility")}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontSize:".54rem",letterSpacing:".3em",color:t.gold,textTransform:"uppercase",marginBottom:"1.2rem",transition:"color .4s" }}>Services</h4>
          <div style={{ display:"flex",flexDirection:"column",gap:".55rem" }}>
            {SERVICES.map(s=>lnk(()=>scrollTo("services"),s.title))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontSize:".54rem",letterSpacing:".3em",color:t.gold,textTransform:"uppercase",marginBottom:"1.2rem",transition:"color .4s" }}>Contact</h4>
          <div style={{ display:"flex",flexDirection:"column",gap:".55rem" }}>
            {ext("mailto:info@vineengineer.com","info@vineengineer.com")}
            {ext("tel:+919595694029","+91-9595-694029")}
            {lnk(()=>scrollTo("enquire"),"Butibori, Nagpur – 441122")}
            {ext("https://www.vineengineer.com/download.php?file=E-Brochure","Download Brochure")}
            {ext("https://www.vineengineer.com/projects.php","Projects & Credentials")}
          </div>
        </div>
      </div>

      {/* Rule */}
      <div style={{ height:1,background:`linear-gradient(90deg,transparent,${t.border},transparent)`,marginBottom:"1.6rem" }}/>

      {/* Bottom */}
      <div style={{ display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem" }}>
        <div style={{ fontSize:".63rem",color:t.t3,transition:"color .4s" }}>© 2024 Vineengineer, Nagpur. All Rights Reserved.</div>
        <div style={{ display:"flex",gap:".65rem",flexWrap:"wrap" }}>
          {["ISO Certified","Make in India","SMPV Licensed"].map(lbl=>(
            <span key={lbl} style={{ padding:".25rem .68rem",border:`1px solid ${t.gold}55`,fontSize:".5rem",letterSpacing:".15em",color:t.gold,transition:"color .4s,border .4s" }}>{lbl}</span>
          ))}
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   APP
───────────────────────────────────────────────────────────────────────── */
function AppInner() {
  const { t } = useTheme();
  const [loaderDone,setLoaderDone] = useState(false);
  useEffect(()=>{ const id=setTimeout(()=>setLoaderDone(true),2500); return()=>clearTimeout(id); },[]);
  return (
    <div style={{ background:t.bg,color:t.t1,minHeight:"100vh",transition:"background .4s,color .4s" }}>
      <style>{GCSS}</style>
      <Cursor/>
      <Loader done={loaderDone}/>
      <Navbar/>
      <main>
        <Hero/>
        <MarqueeBand/>
        <About/>
        <Services/>
        <Clients/>
        <Enquire/>
      </main>
      <Footer/>
    </div>
  );
}

export default function App() {
  return <ThemeProvider><AppInner/></ThemeProvider>;
}