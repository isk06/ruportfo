import fs from "fs";
import path from "path";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";


export default function HomePage() {
  // 1️⃣ Read all image filenames from the /public/images folder
  const imagesDirectory = path.join(process.cwd(), "public/images");
  const imageFiles = fs.readdirSync(imagesDirectory).filter((file) =>
    file.match(/\.(jpg|jpeg|png|webp)$/)
  );

  return (
    <>

      <section className="section">
        <h2>About Me</h2>
        <p className="about">
          Data visualization and presentation designer with 15+ years of experience in consulting and public sector. Expert in creating business-critical presentations, structuring large decks, and visualizing complex financial data. Proven ability to deliver 150+ slides/day under pressure. Strong background in economics, corporate finances, industrial decks design. Leadership experience, automation mindset (VBA), and consulting fluency.
        </p>
      </section>

      <section className="section">
        <h2>Get in touch</h2>
        <p className="contact">isk.daraev@gmail.com</p>
      </section>

      <section className="section">
        <h2>My works</h2>
        <div style={{ display: "grid", gap: "20px" }}>
        {imageFiles.map((file, index) => (
          <ProjectCard
            key={index}
            title={`Slide ${index + 1}`}
            image={`/images/${file}`}
            description="Presentation design example."
          />
        ))}
      </div>
      </section>

      <Footer />
    </>
  )
}
