import fs from "fs";
import path from "path";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function HomePage() {
  // 🔹 1️⃣ Define the order of your images here:
  // First images in this array appear first; remaining images appear automatically after.
  const imageOrder = [
    "project01.jpg",
    "project02.jpg",
    "project03.jpg",
    "project04.jpg",
    "project05.jpg",
    "project06.jpg",
    "project07.jpg",
    "project08.jpg",
    "project09.jpg",
    "project10.jpg",
    "project11.jpg",
    "project12.jpg",
    "project13.jpg",
    "project14.jpg",
    "project15.jpg",
    "project16.jpg",
    "project17.jpg",
    "project18.jpg",
    "project19.jpg",
    "project20.jpg",
    "project21.jpg",
    "project22.jpg",
    "project23.jpg",
    "project24.jpg",
    "project25.jpg",
    "project26.jpg",
    "project27.jpg",
    "project28.jpg",
    "project29.jpg",
    "project30.jpg",
    "project31.jpg",
    "project32.jpg",
    "project33.jpg",
    "project34.jpg",
    "project35.jpg",
    "project36.jpg",
    "project37.jpg",
    "project38.jpg",
    "project39.jpg",
    "project40.jpg",
    "project41.jpg",
    "project42.jpg",
    "project43.jpg",
    "project44.jpg",
    "project45.jpg",
    "project46.jpg",
    "project47.jpg",
    "project48.jpg",
    "project49.jpg",
    "project50.jpg",
    "project51.jpg",
    "project52.jpg",
    "project53.jpg",
    "project54.jpg",
    "project55.jpg",
    "project56.jpg",
    "project57.jpg",
    "project58.jpg",
    "project59.jpg"
    
  ];

  const imagesDirectory = path.join(process.cwd(), "public/images");

  
  const allFiles = fs.readdirSync(imagesDirectory).filter((file) =>
    file.match(/\.(jpg|jpeg|png|webp)$/)
  );

  
  const orderedFiles = [
    ...imageOrder.filter((file) => allFiles.includes(file)),
    ...allFiles.filter((file) => !imageOrder.includes(file)),
  ];

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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", // responsive 2-column grid
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {orderedFiles.map((file, index) => (
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

