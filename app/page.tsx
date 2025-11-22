import fs from "fs";
import path from "path";
import Image from "next/image";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";


export default function HomePage() {
  // 1️⃣ Read all image filenames from the /public/images folder
  const imagesDirectory = path.join(process.cwd(), "public/images");
const imageFiles = fs.readdirSync(imagesDirectory)
  .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/))
  .sort((a, b) => {
    const order = [
      "project 01.jpg",
      "project 02.jpg",
      "project 03.jpg",
      "project 04.jpg",
      "project 05.jpg",
      "project 06.jpg",
      "project 07.jpg",
      "project 08.jpg",
      "project 09.jpg",
      "project 10.jpg",
      "project 11.jpg",
      "project 12.jpg",
      "project 13.jpg",
      "project 14.jpg",
      "project 15.jpg",
      "project 16.jpg",
      "project 17.jpg",
      "project 18.jpg",
      "project 19.jpg",
      "project 20.jpg",
      "project 21.jpg",
      "project 22.jpg",
      "project 23.jpg",
      "project 24.jpg",
      "project 25.jpg",
      "project 26.jpg",
      "project 27.jpg",
      "project 28.jpg",
      "project 29.jpg",
      "project 30.jpg",
      "project 31.jpg",
      "project 32.jpg",
      "project 33.jpg",
      "project 34.jpg",
      "project 35.jpg",
      "project 36.jpg",
      "project 37.jpg",
      "project 38.jpg",
      "project 39.jpg",
      "project 40.jpg",
      "project 41.jpg",
      "project 42.jpg",
      "project 43.jpg",
      "project 44.jpg",
      "project 45.jpg",
      "project 46.jpg",
      "project 47.jpg",
      "project 48.jpg",
      "project 49.jpg",
      "project 50.jpg",
      "project 51.jpg",
      "project 52.jpg",
      "project 53.jpg",
      "project 54.jpg",
      "project 55.jpg",
      "project 56.jpg",
      "project 57.jpg",
      "project 58.jpg",
      "project 59.jpg"
    ];
    return order.indexOf(a) - order.indexOf(b);
  });

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
  )
}
