import fs from "fs";
import path from "path";
import PortfolioTabs from "../components/PortfolioTabs";
import Footer from "../components/Footer";

export default function HomePage() {
  /* ---------- IMAGES ---------- */
  const imagesDir = path.join(process.cwd(), "public/images");
  const imageFiles = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  /* ---------- PDFS ---------- */
  const pdfsDir = path.join(process.cwd(), "public/pdfs");
  const pdfFiles = fs.existsSync(pdfsDir)
    ? fs
        .readdirSync(pdfsDir)
        .filter((file) => /\.pdf$/i.test(file))
        .sort()
    : [];

  return (
    <>
      {/* ================= HERO / HEADER ================= */}
      <section className="hero hero-gray">
        <div className="hero-content">
          {/* Logo (optional) */}
          <div className="hero-logo">
            <img
              src="/avatar.png"
              alt="Iskander Daraev"
              className="hero-avatar"
            />
          </div>


          {/* Name & subtitle */}
          <div>
            <h1 className="hero-title">Iskander Daraev</h1>
            <p className="hero-subtitle">
              Consulting and Corporate Finance Presentations – Storytelling & Design
            </p>
          </div>

          {/* Social links */}
          <div className="hero-socials">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noreferrer"
            >
              Be
            </a>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ME ================= */}
      <section className="section">
        <h2>About me</h2>
        <p className="about">
          Data visualization and presentation designer with 15+ years of experience
          in consulting and public sector. Expert in creating business-critical
          presentations, structuring large decks, and visualizing complex financial
          data. Proven ability to deliver 150+ slides/day under pressure. Strong
          background in economics, corporate finance, and industrial deck design.
          Leadership experience, automation mindset (VBA), and consulting fluency.
        </p>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="section">
        <h2>Get in touch</h2>
        <p className="contact">isk.daraev@gmail.com</p>
      </section>

      {/* ================= WORKS ================= */}
      <section className="section">
      

        <PortfolioTabs
          images={imageFiles}
          pdfs={pdfFiles}
        />
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}
