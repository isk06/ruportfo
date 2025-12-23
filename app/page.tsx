import fs from "fs";
import path from "path";
import PortfolioTabs, { PdfData } from "../components/PortfolioTabs";
import Footer from "../components/Footer";

export default function HomePage() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const imageFiles = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  const pdfFiles: PdfData[] = [
    { file: "/pdfs/J.P.Morgan_SCR_storytelling.pdf", cover: "/pdf-covers/J.P.Morgan_SCR_storytelling.png" },
    { file: "/pdfs/Portfolio_I.Daraev_2025.pdf", cover: "/pdf-covers/Portfolio_I.Daraev_2025.png" },
    { file: "/pdfs/Airbus.pdf", cover: "/pdf-covers/Airbus.png" },
    { file: "/pdfs/Sorwe.pdf", cover: "/pdf-covers/Sorwe.png" },
    // Add more PDFs here
  ];

  return (
    <>
      <section className="hero hero-gray">
  <div className="hero-content">
    {/* Logo */}
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
        href="https://www.linkedin.com/your-profile"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          style={{ width: 24, height: 24 }}
        />
      </a>

      <a
        href="https://www.behance.net/your-profile"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/behance.svg"
          alt="Behance"
          style={{ width: 24, height: 24 }}
        />
      </a>
    </div>
  </div>
</section>


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

      <section className="section">
        <h2>Get in touch</h2>
        <p className="contact">isk.daraev@gmail.com</p>
      </section>

      <section className="section">
        <div className="portfolio-wrapper">
          <PortfolioTabs images={imageFiles} pdfs={pdfFiles} />
        </div>
      </section>

      <Footer />
    </>
  );
}
