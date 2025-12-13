import fs from "fs";
import path from "path";
import PortfolioTabs from "../components/PortfolioTabs";
import Footer from "../components/Footer";

export default function HomePage() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const pdfsDir = path.join(process.cwd(), "public/pdfs");

  const images = fs
    .readdirSync(imagesDir)
    .filter((f) => f.match(/\.(jpg|png|jpeg|webp)$/))
    .sort();

  const pdfs = fs
    .readdirSync(pdfsDir)
    .filter((f) => f.endsWith(".pdf"))
    .sort();

  return (
    <>
      {/* About Me etc stays the same */}

      <PortfolioTabs images={images} pdfs={pdfs} />

      <Footer />
    </>
  );
}
