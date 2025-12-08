import fs from "fs";
import path from "path";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function HomePage() {
  const imagesDirectory = path.join(process.cwd(), "public/images");

  // Read all image filenames from /public/images and filter for image files
  const imageFiles = fs
    .readdirSync(imagesDirectory)
    .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/));

  // Sort by number in filename (00_project.jpg, 01_project.jpg, ...)
  const orderedImages = imageFiles.sort((a, b) => {
    const getNumber = (filename: string) =>
      parseInt(filename.split("_")[0], 10); // "00_project" => 0
    return getNumber(a) - getNumber(b);
  });

  return (
    <>
      <section className="section">
        <h2>About Me</h2>
        <p className="about">
          Data visualization and presentation designer with 15+ years of
          experience in consulting and public sector. Expert in creating
          business-critical presentations, structuring large decks, and
          visualizing complex financial data. Proven ability to deliver 150+
          slides/day under pressure. Strong background in economics, corporate
          finances, industrial decks design. Leadership experience, automation
          mindset (VBA), and consulting fluency.
        </p>
      </section>

      <section className="section">
        <h2>Get in touch</h2>
        <p className="contact font-normal">isk.daraev@gmail.com</p>
      </section>

      <section className="section">
        <h2>My works</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)", // 2 columns
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {orderedImages.map((file, index) => (
            <ProjectCard
              key={index}
              title={`Image ${index}`}
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
