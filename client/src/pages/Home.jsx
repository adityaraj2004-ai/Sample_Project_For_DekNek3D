import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../utils/auth.js";


const GREEN = "#a6ff5d";

const Logo = () => (
  <span className="text-xl font-black tracking-tight select-none" style={{ fontFamily: "'Syne', sans-serif" }}>
    <span className="text-white">DekNek</span>
    <span style={{ color: GREEN }}>3D</span>
  </span>
);

const LogoutButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 px-5 py-2 text-xs font-semibold uppercase tracking-widest border transition-all duration-200"
    style={{
      borderColor: GREEN,
      color: GREEN,
      fontFamily: "'DM Mono', monospace",
      background: "transparent",
    }}
    onMouseEnter={e => {
      e.currentTarget.style.background = GREEN;
      e.currentTarget.style.color = "#0a0a0a";
    }}
    onMouseLeave={e => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.color = GREEN;
    }}
  >
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
    Log Out
  </button>
);

const StatCard = ({ value, suffix, label }) => (
  <div className="flex-1 flex flex-col gap-1 p-7 border-r border-neutral-800 last:border-r-0">
    <div className="text-3xl font-black text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
      {value}<span style={{ color: GREEN, fontSize: "1rem" }}>{suffix}</span>
    </div>
    <div className="text-xs uppercase tracking-widest text-neutral-500" style={{ fontFamily: "'DM Mono', monospace" }}>
      {label}
    </div>
  </div>
);

const FeatureCard = ({ icon, title, desc, num }) => (
  <div
    className="relative flex flex-col gap-3 p-8 border-r border-neutral-800 last:border-r-0 cursor-pointer group"
    style={{ background: "#111113" }}
  >
    <div className="absolute bottom-2 right-3 text-6xl font-black text-neutral-800 select-none leading-none" style={{ fontFamily: "'Syne', sans-serif" }}>
      {num}
    </div>
    <div className="w-9 h-9 flex items-center justify-center border border-neutral-700" style={{ color: GREEN }}>
      {icon}
    </div>
    <div className="text-base font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{title}</div>
    <div className="text-xs text-neutral-500 leading-relaxed" style={{ fontFamily: "'DM Mono', monospace" }}>{desc}</div>
    <div className="text-xs uppercase tracking-widest mt-auto" style={{ color: "#c47fa0", fontFamily: "'DM Mono', monospace" }}>
      Explore →
    </div>
  </div>
);

const Home = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
 try {
    await logoutUser();
    navigate("/")
 } catch (error) {
     console.error("Logout failed:", error);
     
 }
  };

  return (
    <>
    
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&family=DM+Mono:wght@300;400;500&display=swap');
        body { margin: 0; background: #0a0a0a; }
      `}</style>

      <div className="min-h-screen text-white" style={{ background: "#0a0a0a", fontFamily: "'DM Mono', monospace" }}>

   
        <div className="fixed inset-0 pointer-events-none z-0" style={{
          backgroundImage: "linear-gradient(#1a1a1a 1px, transparent 1px), linear-gradient(90deg, #1a1a1a 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          opacity: 0.4,
        }} />

      
        <div className="fixed pointer-events-none z-0" style={{
          width: 420, height: 420,
          borderRadius: "50%",
          background: "rgba(166,255,93,0.06)",
          filter: "blur(100px)",
          top: -100, left: -80,
        }} />

       
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 h-16 border-b border-neutral-800"
          style={{ background: "rgba(10,10,10,0.85)", backdropFilter: "blur(18px)" }}>
          <Logo />
          <ul className="hidden md:flex gap-8 text-xs uppercase tracking-widest text-neutral-500 list-none">
            {["Overview", "Projects", "About", "Contact"].map(l => (
              <li key={l} className="cursor-pointer hover:text-white transition-colors">{l}</li>
            ))}
          </ul>
          <LogoutButton onClick={handleLogout} />
        </nav>

   
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 px-5 py-2 text-xs tracking-widest uppercase border border-neutral-700 text-neutral-500"
          style={{ background: "#111113", fontFamily: "'DM Mono', monospace" }}>
          ⚠ This is a homepage for visual purpose only
        </div>

    
        <main className="relative z-10 flex flex-col pt-16">

       
          <section className="flex flex-col gap-5 px-16 pt-24 pb-20 max-w-4xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-widest" style={{ color: GREEN }}>
              <span className="block w-7 h-px" style={{ background: GREEN }} />
              Welcome Back, User
            </div>
            <h1 className="text-6xl md:text-7xl font-black leading-none tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
              Bring Your<br />
              <span style={{ color: GREEN }}>3D Vision</span><br />
              to Life
            </h1>
            <p className="text-sm text-neutral-500 max-w-md leading-loose">
              DekNek3D is your all-in-one creative studio for 3D design, rendering, and collaboration. Build, iterate, and ship — faster.
            </p>
            <div className="flex gap-4 mt-3">
              <button className="px-8 py-3 text-xs font-semibold uppercase tracking-widest text-black transition-opacity hover:opacity-80"
                style={{ background: GREEN, fontFamily: "'DM Mono', monospace" }}>
                Get Started
              </button>
              <button className="px-8 py-3 text-xs uppercase tracking-widest text-neutral-400 border border-neutral-700 hover:border-neutral-400 hover:text-white transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}>
                View Projects
              </button>
            </div>
          </section>

       
          <div className="flex items-center gap-4 px-16 mb-14">
            <div className="flex-1 h-px bg-neutral-800" />
            <span className="text-xs uppercase tracking-widest text-neutral-600">Overview</span>
            <div className="flex-1 h-px bg-neutral-800" />
          </div>

     
          <div className="flex mx-16 mb-16 border border-neutral-800">
            <StatCard value="24" suffix="+" label="Active Projects" />
            <StatCard value="98" suffix="%" label="Task Completion" />
            <StatCard value="3.2" suffix="k" label="Total Hours" />
            <StatCard value="12" suffix="" label="Team Members" />
          </div>

       
          <div className="grid grid-cols-1 md:grid-cols-3 mx-16 mb-24 border border-neutral-800 divide-x divide-neutral-800">
            <FeatureCard num="01"
              icon={<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>}
              title="My Projects"
              desc="Manage all active and archived 3D projects. Track milestones and collaborate with your team."
            />
            <FeatureCard num="02"
              icon={<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>}
              title="Analytics"
              desc="Visualize render times, project trends, and performance metrics in one clean view."
            />
            <FeatureCard num="03"
              icon={<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>}
              title="Team"
              desc="Invite collaborators, assign roles, and manage permissions across all your 3D workflows."
            />
          </div>

        
          <footer className="border-t border-neutral-800 px-16 py-5 flex justify-between text-xs text-neutral-600 mb-12"
            style={{ fontFamily: "'DM Mono', monospace" }}>
            <span>© 2026 <span className="text-white">DekNek</span><span style={{ color: GREEN }}>3D</span> — All rights reserved</span>
            <span>v1.0.0 · Visual Prototype</span>
          </footer>
        </main>
      </div>
    </>
  );
}
export default Home;    