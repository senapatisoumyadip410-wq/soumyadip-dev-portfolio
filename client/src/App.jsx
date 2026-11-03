import { useMemo, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu,
  X, Code2, Database, Terminal, Sparkles, GraduationCap, Send, CheckCircle2
} from "lucide-react";
import { profile, skills, projects, education } from "./data";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

function SectionHeading({ eyebrow, title, text }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"]];
  return <header className="topbar">
    <a className="brand" href="#home" aria-label="Go to home"><span className="brand-mark">S.</span><span>soumyadip<span className="muted">.dev</span></span></a>
    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
    <nav className={open ? "nav nav-open" : "nav"}>
      {links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15} /></a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-copy">
      <div className="availability"><span className="pulse" /> OPEN TO LEARNING & OPPORTUNITIES</div>
      <p className="hero-kicker">HELLO, I'M</p>
      <h1>{profile.name.split(" ")[0]} <span className="gradient-text">{profile.name.split(" ").slice(1).join(" ")}</span><span className="period">.</span></h1>
      <h2>{profile.role}<span className="cursor">_</span></h2>
      <p className="hero-description">{profile.intro} Currently pursuing {profile.degree} at {profile.college}.</p>
      <div className="hero-actions">
        <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17} /></a>
        <a className="button button-ghost" href="#contact">Get in touch <ArrowDown size={16} /></a>
      </div>
      <div className="social-row">
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
        <span className="social-location">{profile.location}</span>
      </div>
    </div>
    <div className="hero-visual" aria-label="Decorative code card">
      <div className="orbit orbit-one" /><div className="orbit orbit-two" />
      <div className="code-card">
        <div className="code-top"><span /><span /><span /><small>developer.js</small></div>
        <div className="code-lines">
          <p><i>01</i><b>const</b> developer = {"{"}</p>
          <p><i>02</i>&nbsp; name: <em>'Soumyadip'</em>,</p>
          <p><i>03</i>&nbsp; focus: <em>'Full Stack'</em>,</p>
          <p><i>04</i>&nbsp; language: <em>'Java'</em>,</p>
          <p><i>05</i>&nbsp; learning: <em>'Every day'</em></p>
          <p><i>06</i>{"}"};</p>
          <p className="code-comment"><i>07</i>// building what's next ✦</p>
        </div>
        <div className="code-footer"><span className="tiny-dot" /> AVAILABLE FOR COLLABORATION</div>
      </div>
      <div className="floating-chip chip-top"><Code2 size={16} /> Clean code</div>
      <div className="floating-chip chip-bottom"><Sparkles size={16} /> Curious mind</div>
    </div>
    <a className="scroll-cue" href="#about">SCROLL TO EXPLORE <span /></a>
  </section>;
}

function About() {
  return <section className="section-wrap section-block" id="about">
    <SectionHeading eyebrow="01 / ABOUT" title="A little about me." text="Curiosity drives me. Building helps me learn." />
    <div className="about-grid">
      <div className="about-main panel">
        <span className="panel-icon"><Terminal /></span>
        <h3>Learning today.<br /><span className="gradient-text">Building for tomorrow.</span></h3>
        <p>I'm a Computer Science and Engineering undergraduate at KGEC, graduating in 2028. I’m developing a strong foundation in programming, problem-solving and full-stack web development.</p>
        <p>I enjoy understanding how things work, breaking complex problems into smaller steps, and turning what I learn into practical projects. I’m looking forward to collaborating, contributing and growing as an engineer.</p>
      </div>
      <div className="about-stats">
        <div className="stat-card"><span className="stat-number">2028</span><span>Graduation target</span></div>
        <div className="stat-card"><span className="stat-number">CSE</span><span>Academic discipline</span></div>
        <div className="stat-card"><span className="stat-number">∞</span><span>Things to learn</span></div>
      </div>
    </div>
  </section>;
}

function Skills() {
  const icons = [<Code2 />, <Terminal />, <Database />, <Sparkles />];
  return <section className="section-wrap section-block" id="skills">
    <SectionHeading eyebrow="02 / TOOLKIT" title="Technologies I work with." text="A growing toolkit, built one concept and project at a time." />
    <div className="skills-grid">
      {skills.map((group, index) => <article className="skill-card" key={group.group}>
        <div className="skill-icon">{icons[index]}</div><h3>{group.group}</h3>
        <div className="tag-list">{group.items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
      </article>)}
    </div>
  </section>;
}

function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const visible = useMemo(() => filter === "All" ? projects : projects.filter(p => p.category === filter), [filter]);
  return <section className="section-wrap section-block" id="projects">
    <SectionHeading eyebrow="03 / SELECTED WORK" title="Things I've been building." text="A selection of learning projects. More experiments and builds will be added here." />
    <div className="filter-row">{categories.map(category => <button key={category} onClick={() => setFilter(category)} className={filter === category ? "filter active" : "filter"}>{category}</button>)}</div>
    <div className="projects-grid">
      {visible.map((project, index) => <article className="project-card" key={project.title}>
        <div className="project-art"><span>0{index + 1}</span><div className="project-glyph">{index === 0 ? <Code2 /> : index === 1 ? <Terminal /> : <Sparkles />}</div><span className="project-category">{project.category}</span></div>
        <div className="project-content"><div className="project-status">{project.status}</div><h3>{project.title}</h3><p>{project.description}</p>
          <div className="tag-list">{project.stack.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
          <div className="project-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source <ArrowUpRight size={14} /></a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>}</div>
        </div>
      </article>)}
    </div>
  </section>;
}

function Education() {
  return <section className="section-wrap section-block" id="education">
    <SectionHeading eyebrow="04 / EDUCATION" title="Where I'm learning." />
    <div className="education-card panel"><div className="education-icon"><GraduationCap /></div><div><span className="eyebrow">{education[0].period}</span><h3>{education[0].place}</h3><p>{education[0].qualification}</p><small>{education[0].detail}</small></div><span className="education-badge">UNDERGRADUATE</span></div>
  </section>;
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", text: "" });
  const [sending, setSending] = useState(false);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });
  async function submit(event) {
    event.preventDefault();
    setSending(true); setStatus({ type: "", text: "" });
    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send message.");
      setStatus({ type: "success", text: "Thanks! Your message has been received." });
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus({ type: "error", text: error.message === "Failed to fetch" ? "The API is not connected yet. Start the backend and configure MongoDB to receive messages." : error.message });
    } finally { setSending(false); }
  }
  return <section className="section-wrap section-block contact-section" id="contact">
    <SectionHeading eyebrow="05 / CONTACT" title="Have something in mind?" text="Have an opportunity, idea or just want to connect? My inbox is open." />
    <div className="contact-grid">
      <div className="contact-copy panel"><span className="panel-icon"><Mail /></span><h3>Let's create<br /><span className="gradient-text">something meaningful.</span></h3><p>I'm always interested in learning from others, collaborating on projects and exploring opportunities to grow.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={17} /> {profile.email}</a><div className="contact-social"><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin /></a><a href={profile.github} target="_blank" rel="noreferrer"><Github /></a></div></div>
      <form className="contact-form panel" onSubmit={submit}>
        <label>Your name<input name="name" value={form.name} onChange={update} placeholder="Jane Smith" minLength="2" maxLength="80" required /></label>
        <label>Email address<input name="email" type="email" value={form.email} onChange={update} placeholder="jane@example.com" maxLength="120" required /></label>
        <label>Your message<textarea name="message" value={form.message} onChange={update} placeholder="Tell me a little about what you have in mind..." rows="5" minLength="10" maxLength="2000" required /></label>
        <button className="button button-primary submit-button" disabled={sending}>{sending ? "Sending..." : "Send message"} <Send size={16} /></button>
        {status.text && <p className={`form-status ${status.type}`} role="status">{status.type === "success" && <CheckCircle2 size={16} />}{status.text}</p>}
      </form>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">S.</span><span>soumyadip<span className="muted">.dev</span></span></a><span>Designed & built with curiosity · © {new Date().getFullYear()} {profile.name}</span><a href="#home">Back to top ↑</a></footer>;
}

export default function App() {
  return <><div className="ambient ambient-one" /><div className="ambient ambient-two" /><Header /><main><Hero /><About /><Skills /><Projects /><Education /><Contact /></main><Footer /></>;
}
