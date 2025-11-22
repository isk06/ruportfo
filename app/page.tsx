import fs from "fs";
import path from "path";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function HomePage() {
  const imagesDirectory = path.join(process.cwd(), "public/images");

  // 🔹 Read all image files and sort them alphabetically (numeric prefixes ensure correct order)
  const imageFiles = fs
    .readdirSync(imagesDirectory)
    .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/))
    .sort(); // alphabetical order based on filename

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
        <p className="contact font-normal">isk.daraev@gmail.com</p>
        <div style={{ marginTop: "10px" }}>
          <a
            href="https://www.linkedin.com/in/iskander-daraev/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>{" | "}
          <a
            href="https://www.behance.net/iskdaraev"
            target="_blank"
            rel="noreferrer"
          >
            Behance
          </a>
        </div>
      </section>

      <section className="section">
        <h2>My works</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {imageFiles.map((file, index) => (
            <ProjectCard
              key={index}
              title={`Project ${index + 1}`}
              image={`/images/${file}`}
              description="Presentation design project example."
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}