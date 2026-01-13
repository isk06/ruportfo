import fs from "fs";
import path from "path";
import PortfolioTabs, { PdfData } from "../components/PortfolioTabs";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";


export default function HomePage() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const imageFiles = fs.existsSync(imagesDir)
    ? fs
        .readdirSync(imagesDir)
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort()
    : [];

  const pdfFiles = [
    { file: "/pdfs/J.P.Morgan_SCR_storytelling.pdf", 
      cover: "/pdf-covers/J.P.Morgan_SCR_storytelling.png",
      title: "J.P.Morgan - SCR storytelling"},

    { file: "/pdfs/Portfolio_I.Daraev_2025.pdf", 
      cover: "/pdf-covers/Portfolio_I.Daraev_2025.png",
      title: "My Portfolio"},

    { file: "/pdfs/Airbus.pdf", 
      cover: "/pdf-covers/Airbus.png",
      title: "Airbus"},

    { file: "/pdfs/Sorwe.pdf", 
      cover: "/pdf-covers/Sorwe.png",
      title: "Sorwe"},

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
        href="https://www.linkedin.com/in/iskdaraev/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
          style={{ width: 200, height: 200 }}
        />
      </a>

      <a
        href="https://www.behance.net/iskdaraev"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/behance.svg"
          alt="Behance"
          style={{ width: 200, height: 200 }}
        />
      </a>

      <a
        href="mailto:isk.daraev@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src="/icons/mail5.svg"
          alt="E-mail"
          style={{ width: 230, height: 230 }}
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
          
          <li>Cross-specialist with experience in the public sector and consulting. Extensive executive and management experience in executive bodies and consulting – both design and team lead work.</li>
          <li>Specialization: visualization of complex economic and financial data, charts and metrics (Excel/PowerPoint),financial and custom diagrams, storytelling (Big3), information structuring, formatting and layout (Big4, Big3).</li>
          <li>Competencies: presentation design and formatting (C-level, marketing, financial, consulting), reports, analysis and visualization, team organization and process optimization.</li>
          <li>Subject areas: strategic consulting, investment banks, fintech, corporate finance, government economic projects, IT, industry.</li>
          <li>Products: business presentations, client reports, marketing materials (proposals, memos, one-pagers, annual reports), diagrams, maps, charts.</li>
          <li>Broad industry expertise, quick immersion in new industries and business chains.</li>
        </p>
      </section>

      {/* <section className="section">
        <h2>Get in touch</h2>
        <p className="contact">isk.daraev@gmail.com</p>
      </section> */}

      <section className="section">
        <div className="portfolio-wrapper">
          <PortfolioTabs images={imageFiles} pdfs={pdfFiles} />
        </div>
      </section>

    {/* ================= GET IN TOUCH ================= */}
      <section className="section contact-section">
        <h2>Get in touch</h2>

      <form
        className="contact-form"
        action="https://formspree.io/f/xpqqzaww"
        method="POST"
      >
        <div className="form-group">
          <label>
            Name<span>*</span>
          </label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group">
          <label>
            E-mail<span>*</span>
          </label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label>
            Message<span>*</span>
          </label>
          <textarea name="message" rows={5} required />
        </div>

        <button type="submit" className="form-submit">
          Send message →
        </button>
      </form>

      </section>

      
      <BackToTop />


      <Footer />
    </>
  );
}
