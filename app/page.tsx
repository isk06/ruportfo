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
        .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
        .sort()
    : [];

  /* ---------- PDFS ---------- */
  const pdfsDir = path.join(process.cwd(), "public/pdfs");
  const pdfFiles = fs.existsSync(pdfsDir)
    ? fs.readdirSync(pdfsDir).filter((f) => /\.pdf$/i.test(f)).sort()
    : [];

  return (
    <>
    
      {/* ABOUT ME */}
      <section className="section">
        <h2>About me</h2>
        <p className="about">
          Data visualization and presentation designer with 15+ years of
          experience in consulting and public sector. Expert in creating
          business-critical presentations, structuring large decks, and
          visualizing complex financial data. Proven ability to deliver 150+
          slides/day under pressure. Strong background in economics, corporate
          finance, and industrial deck design. Leadership experience, automation
          mindset (VBA), and consulting fluency.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Get in touch</h2>
        <p className="contact">isk.daraev@gmail.com</p>
      </section>

      {/* WORKS */}
      <section className="section">
        <h2>My works</h2>

        <PortfolioTabs
          images={imageFiles}
          pdfs={pdfFiles}
        />
      </section>

      <Footer />
    </>
  );
}
