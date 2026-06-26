"use client";

import { motion, Variants } from "framer-motion";
import { Download, ArrowUpRight, ArrowRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function PortfolioHome() {
  // --- STATE UNTUK NAVBAR & MENU MOBILE ---
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mematikan scroll halaman saat menu mobile terbuka
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // --- KONFIGURASI ANIMASI ---
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 60, damping: 15, duration: 0.8 },
    },
  } as any;

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  } as any;

  return (
    <main className="bg-[#050505] font-sans selection:bg-[#FF5B14] selection:text-white overflow-hidden relative">
      {/* CSS KHUSUS UNTUK SMOOTH SCROLL & RUNNING TEXT (MARQUEE) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        /* Mengaktifkan scroll meluncur mulus */
        html {
          scroll-behavior: smooth;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `,
        }}
      />

      {/* =========================================
          NAVBAR (DINAMIS: STATIC -> FLOATING PILL)
          ========================================= */}
      {/* HEADER UTAMA */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex justify-center ${isScrolled ? "pt-6" : "pt-0"}`}
      >
        <nav
          className={`flex items-center justify-between transition-all duration-500 ${isScrolled ? "w-[90%] md:w-[70%] bg-[#1a1a1a]/90 backdrop-blur-xl rounded-full px-6 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10" : "w-full px-6 md:px-12 py-8 bg-transparent"}`}
        >
          {/* BAGIAN KIRI: Logo */}
          <div className="text-xl md:text-2xl font-extrabold tracking-tighter text-white relative z-50">
            MFW.
          </div>

          {/* BAGIAN KANAN: Menu & Tombol */}
          <div className="flex items-center gap-8 md:gap-10">
            <div className="hidden md:flex items-center gap-8 text-xs font-bold tracking-widest text-gray-300 uppercase">
              <a href="#about" className="hover:text-white transition-colors">
                Tentang
              </a>
              <a
                href="#projects"
                className="hover:text-white transition-colors"
              >
                Karya
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Kontak
              </a>
            </div>
            <a
              href="https://wa.me/628559860606"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:flex font-bold text-sm md:text-base rounded-full transition-colors items-center justify-center ${isScrolled ? "bg-[#FF5B14] text-white px-5 py-2 hover:bg-[#e04f10]" : "bg-white text-black px-6 py-3 hover:scale-105"}`}
            >
              Hubungi Saya
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white relative z-50 p-2 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* =========================================
          MOBILE MENU OVERLAY (Layar Penuh)
          ========================================= */}
      <div
        className={`fixed inset-0 bg-[#050505]/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-10 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <a
          href="#about"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-3xl font-extrabold text-white tracking-widest hover:text-[#FF5B14] transition-colors"
        >
          TENTANG
        </a>
        <a
          href="#projects"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-3xl font-extrabold text-white tracking-widest hover:text-[#FF5B14] transition-colors"
        >
          KARYA
        </a>
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-3xl font-extrabold text-white tracking-widest hover:text-[#FF5B14] transition-colors"
        >
          KONTAK
        </a>

        <a
          href="https://wa.me/628559860606"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsMobileMenuOpen(false)}
          className="mt-6 px-10 py-4 bg-[#FF5B14] text-white font-bold rounded-full text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Hubungi Saya
        </a>
      </div>

      {/* =========================================
          SECTION 1: HERO
          ========================================= */}
      <section className="relative min-h-[100svh] md:min-h-[90vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-32 pb-48 md:pb-20">
        <div className="absolute top-[60%] md:top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-[#FF5B14]/30 blur-[100px] rounded-full pointer-events-none z-0"></div>

        {/* Foto Profil (Diturunkan di Mobile) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-[60%] md:top-1/2 left-1/2 md:left-[60%] -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] md:w-[750px] md:h-[750px] z-0 pointer-events-none opacity-50 md:opacity-70"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
            maskImage:
              "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
          }}
        >
          <img
            src="/profile.jpeg"
            alt="Muhammad Faiz"
            className="w-full h-full object-cover blur-[3px]"
            style={{ objectPosition: "center top" }}
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between"
        >
          <div className="w-full md:w-1/2 text-left mb-6 md:mb-0">
            <motion.p
              variants={fadeUpVariant}
              className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-[#FF5B14] mb-2 md:mb-4 uppercase drop-shadow-md"
            >
              Halo, Saya
            </motion.p>
            <motion.h2
              variants={fadeUpVariant}
              className="text-lg md:text-4xl font-medium mb-2 md:mb-4 text-white drop-shadow-md"
            >
              Muhammad Faiz Widyatmoko.
            </motion.h2>
            <motion.h1
              variants={fadeUpVariant}
              className="text-[3rem] leading-[0.95] sm:text-[4rem] md:text-[6rem] lg:text-[7.5rem] font-extrabold tracking-tighter mb-4 md:mb-8 text-white drop-shadow-xl"
            >
              Full-Stack
              <br />
              Developer
            </motion.h1>
          </div>

          <div className="w-full md:w-1/3 flex flex-col items-start md:items-end text-left md:text-right">
            <motion.p
              variants={fadeUpVariant}
              className="text-sm md:text-xl text-gray-200 mb-6 md:mb-8 font-medium drop-shadow-md"
            >
              Let's collaborate to build something great.
            </motion.p>

            <motion.div
              variants={fadeUpVariant}
              className="flex flex-row flex-wrap gap-3 w-full md:w-auto justify-start md:justify-end"
            >
              <a
                href="#projects"
                className="px-5 py-2.5 md:px-6 md:py-3.5 bg-white text-black text-sm md:text-base font-bold rounded-full flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors shadow-lg"
              >
                Lihat Proyek <ArrowRight className="w-4 h-4" />
              </a>

              {/* TOMBOL DOWNLOAD CV AKTIF (Arahkan href ke file PDF) */}
              <a
                href="/CV_Faiz.pdf"
                download="CV_Faiz.pdf"
                className="px-5 py-2.5 md:px-6 md:py-3.5 border border-white/40 bg-black/30 backdrop-blur-sm text-white text-sm md:text-base font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/20 transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download CV
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-6 right-6 md:left-12 lg:left-24 md:right-auto w-auto max-w-7xl grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-12 z-10"
        >
          <div>
            <span className="text-[#FF5B14] font-bold text-[10px] md:text-xs drop-shadow-md">
              #01
            </span>
            <p className="text-gray-300 font-bold text-[11px] md:text-sm drop-shadow-md leading-snug mt-1">
              Web Development
            </p>
          </div>
          <div>
            <span className="text-[#FF5B14] font-bold text-[10px] md:text-xs drop-shadow-md">
              #02
            </span>
            <p className="text-gray-300 font-bold text-[11px] md:text-sm drop-shadow-md leading-snug mt-1">
              UI/UX & Graphic Design
            </p>
          </div>
          <div>
            <span className="text-[#FF5B14] font-bold text-[10px] md:text-xs drop-shadow-md">
              #03
            </span>
            <p className="text-gray-300 font-bold text-[11px] md:text-sm drop-shadow-md leading-snug mt-1">
              Integrasi API
            </p>
          </div>
          <div>
            <span className="text-[#FF5B14] font-bold text-[10px] md:text-xs drop-shadow-md">
              #04
            </span>
            <p className="text-gray-300 font-bold text-[11px] md:text-sm drop-shadow-md leading-snug mt-1">
              Arsitektur Skalabel
            </p>
          </div>
        </motion.div>
      </section>

      {/* =========================================
          MARQUEE (RUNNING TEXT TECH STACK)
          ========================================= */}
      <div className="w-full bg-[#111] border-y border-white/5 py-4 overflow-hidden flex whitespace-nowrap relative z-10">
        <div className="animate-marquee flex gap-12 items-center px-6">
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="flex gap-12 items-center text-gray-500 font-bold tracking-widest text-sm uppercase"
            >
              <span className="text-[#FF5B14]">TEKNOLOGI PILIHAN</span>
              <span>Laravel</span>
              <span>Node.js</span>
              <span>Next.js</span>
              <span>React</span>
              <span>Python</span>
              <span>C++</span>
              <span>Figma</span>
              <span>Adobe</span>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================
          SECTION 2: ABOUT & SPOTIFY (PUTIH)
          ========================================= */}
      <section
        id="about"
        className="bg-white py-24 px-6 md:px-12 lg:px-24 rounded-t-3xl md:rounded-t-[3rem] relative z-20"
      >
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.p
              variants={fadeUpVariant}
              className="text-gray-400 font-bold tracking-[0.2em] mb-4 text-xs uppercase"
            >
              LET'S CONNECT
            </motion.p>
            <motion.div
              variants={fadeUpVariant}
              className="flex gap-4 justify-center text-gray-800"
            >
              <a
                href="https://www.instagram.com/vaizy_w/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="#"
                className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://github.com/vaizy00"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-200 rounded-full hover:bg-gray-100 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          <motion.h3
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-2xl md:text-4xl lg:text-5xl font-medium text-gray-900 leading-tight mb-20 px-4 md:px-0"
          >
            👋 Hello! I'm Faiz, — a Computer Science student passionate about
            bridging complex algorithms with high-end aesthetic designs. I have
            experience in UI/UX DESIGN, WEB DEVELOPMENT, and GRAPHIC DESIGN.
          </motion.h3>

          <div className="w-full">
            <p className="text-xs font-bold text-gray-400 tracking-widest mb-6 uppercase text-center">
              My Favorite Tracks
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <motion.div
                variants={fadeUpVariant}
                className="bg-[#181818] p-4 rounded-[20px] flex flex-col md:flex-row items-center justify-between shadow-xl relative text-left"
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src="/artworks-n4fCQpaSGuKQ-0-t500x500.jpg"
                    alt="Everything You Are Cover"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white text-[15px]">
                      Everything You Are
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium mb-2">
                      <span className="bg-gray-700 text-white px-1 rounded-sm text-[9px] mr-1">
                        E
                      </span>
                      Hindia
                    </p>
                    <button className="flex items-center gap-1 text-[10px] font-bold text-white border border-gray-600 rounded-full px-3 py-1 hover:border-white">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>{" "}
                      Save on Spotify
                    </button>
                  </div>
                </div>
                <img
                  src="/Spotify_logo_without_text.svg.png"
                  alt="Spotify"
                  className="w-6 h-6 absolute top-4 right-4"
                />
              </motion.div>

              <motion.div
                variants={fadeUpVariant}
                className="bg-[#181818] p-4 rounded-[20px] flex flex-col md:flex-row items-center justify-between shadow-xl relative text-left"
              >
                <div className="flex items-center gap-4 w-full">
                  <img
                    src="/17f3242d1df3ef780809cd4a259adc5f.jpg"
                    alt="Cincin Cover"
                    className="w-16 h-16 rounded-md object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-white text-[15px]">Cincin</h4>
                    <p className="text-[11px] text-gray-400 font-medium mb-2">
                      <span className="bg-gray-700 text-white px-1 rounded-sm text-[9px] mr-1">
                        E
                      </span>
                      Hindia
                    </p>
                    <button className="flex items-center gap-1 text-[10px] font-bold text-white border border-gray-600 rounded-full px-3 py-1 hover:border-white">
                      <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 4v16m8-8H4"
                        ></path>
                      </svg>{" "}
                      Save on Spotify
                    </button>
                  </div>
                </div>
                <img
                  src="/Spotify_logo_without_text.svg.png"
                  alt="Spotify"
                  className="w-6 h-6 absolute top-4 right-4"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: STATS COUNTER (ORANYE)
          ========================================= */}
      <section className="bg-[#FF5B14] py-16 px-6 md:px-12 relative z-10 border-y border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white"
        >
          <motion.div
            variants={fadeUpVariant}
            className="border-r border-white/20 last:border-0"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-1">15+</h2>
            <p className="text-xs tracking-widest font-bold uppercase">
              Projects
              <br />
              Completed
            </p>
          </motion.div>
          <motion.div
            variants={fadeUpVariant}
            className="border-r border-white/20 last:border-0 md:border-r"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-1">99%</h2>
            <p className="text-xs tracking-widest font-bold uppercase">
              Happy
              <br />
              Clients
            </p>
          </motion.div>
          <motion.div
            variants={fadeUpVariant}
            className="border-r border-white/20 last:border-0"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold mb-1">3+</h2>
            <p className="text-xs tracking-widest font-bold uppercase">
              Years
              <br />
              Experience
            </p>
          </motion.div>
          <motion.div variants={fadeUpVariant}>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-1">98+</h2>
            <p className="text-xs tracking-widest font-bold uppercase">
              Lighthouse
              <br />
              Score
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =========================================
          SECTION 4: SKILLS (KOTAK PUTIH - GRID 2x2)
          ========================================= */}
      <section className="bg-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-16 uppercase tracking-tighter text-center"
          >
            I SPECIALIZE IN A RANGE OF
            <br />
            SKILLS.
          </motion.h2>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUpVariant}
              className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                UI/UX Design
              </h3>
              <p className="text-sm text-gray-500">
                Figma, Framer, Adobe XD, Miro, Whimsical
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Front-end Development
              </h3>
              <p className="text-sm text-gray-500">
                React, Next.js, Tailwind CSS, Framer Motion
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Back-end Development
              </h3>
              <p className="text-sm text-gray-500">
                Laravel, Node.js, Express, C++
              </p>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Graphic Design
              </h3>
              <p className="text-sm text-gray-500">
                Photoshop, Illustrator, CorelDraw, Canva
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: PROJECTS (DARK)
          ========================================= */}
      <section
        id="projects"
        className="bg-[#0a0a0a] py-24 px-6 md:px-12 lg:px-24"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter mb-4 md:mb-0">
              Sistem & Pengalaman
              <br />
              Digital Terpilih
            </h2>
            <button className="text-sm font-bold text-white border border-white/30 rounded-full px-6 py-3 hover:bg-white/10 transition-colors flex items-center gap-2">
              More Projects <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div
              variants={fadeUpVariant}
              className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#FF5B14]/50 transition-colors shadow-lg"
            >
              <div className="h-48 bg-[#1a1a1a] relative overflow-hidden">
                <img
                  src="/UASSSSS.jpg"
                  alt="UI Travel Jepang"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  UI Web Traveltour Jepang
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  Desain antarmuka eksklusif untuk layanan travel Jepang,
                  memadukan keindahan tradisional dengan navigasi modern.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    Figma
                  </span>
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    UI/UX Design
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#FF5B14]/50 transition-colors shadow-lg"
            >
              <div className="h-48 bg-[#1a1a1a] relative overflow-hidden">
                <img
                  src="/monitoring2.png"
                  alt="Sistem Monitoring Kesehatan"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Sistem Monitoring Kesehatan
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  Platform kalkulasi makronutrien klinis berbasis Full-Stack Web
                  untuk pemantauan data kesehatan secara instan dan interaktif.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    Node.js
                  </span>
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    Tailwind CSS
                  </span>
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    JavaScript
                  </span>                  
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUpVariant}
              className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden group cursor-pointer hover:border-[#FF5B14]/50 transition-colors shadow-lg"
            >
              <div className="h-48 bg-gradient-to-br from-[#FF5B14] to-[#7A2800] relative overflow-hidden flex flex-col items-center justify-center p-4">
                <span className="text-white font-extrabold text-4xl group-hover:scale-110 transition-transform duration-700 drop-shadow-xl">
                  MFW.
                </span>
                <span className="text-white/70 font-bold tracking-widest text-sm mt-2">
                  PORTFOLIO
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2">
                  Premium Web Portofolio
                </h3>
                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  Website portofolio interaktif dengan animasi smooth scroll,
                  dark mode elegan, dan desain asimetris premium.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    Next.js
                  </span>
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    Tailwind
                  </span>
                  <span className="text-[10px] font-bold bg-white/10 text-white/80 px-2 py-1 rounded-sm uppercase tracking-wider">
                    Framer
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          SECTION 6: FOOTER (GIANT TEXT)
          ========================================= */}
      <section
        id="contact"
        className="bg-[#050505] py-32 px-6 md:px-12 text-center relative overflow-hidden"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col items-center"
        >
          <h2 className="text-[4rem] md:text-[8rem] lg:text-[12rem] font-extrabold text-white tracking-tighter leading-[0.8] mb-12">
            LET'S WORK
            <br />
            TOGETHER
          </h2>
          <a
            href="mailto:vaizv14@gmail.com"
            className="w-20 h-20 md:w-24 md:h-24 bg-[#FF5B14] rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg hover:shadow-[#FF5B14]/50"
          >
            <ArrowUpRight className="w-8 h-8 text-white" />
          </a>
        </motion.div>

        <div className="absolute bottom-6 left-6 text-left text-gray-500 text-xs font-medium">
          MH. &copy; 2026 Muhammad Faiz Widyatmoko
        </div>
      </section>
    </main>
  );
}
