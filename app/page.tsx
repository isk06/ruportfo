"use client";

import { useState, useEffect } from "react";
import fs from "fs";
import path from "path";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

export default function HomePage() {
  const imagesDirectory = path.join(process.cwd(), "public/images");
  const imageFiles = fs
    .readdirSync(imagesDirectory)
    .filter((file) => file.match(/\.(jpg|jpeg|png|webp)$/));

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Disable scroll behind popup
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) =>
          i! < imageFiles.length - 1 ? i! + 1 : 0
        );
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) =>
          i! > 0 ? i! - 1 : imageFiles.length - 1
        );
      }
      if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  return (
    <>
      <section className="section">
        <h2>About Me</h2>
        <p className="about">
          Data visualization and presentation designer...
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
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {imageFiles.map((file, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={`Project ${index + 1}`}
              image={`/images/${file}`}
              description="Presentation design project example."
              onOpen={setLightboxIndex}
            />
          ))}
        </div>
      </section>

      {/* LIGHTBOX OVERLAY */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            animation: "fadeIn 0.25s ease",
          }}
        >
          {/* IMAGE */}
          <img
            src={`/images/${imageFiles[lightboxIndex]}`}
            alt=""
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
              boxShadow: "0 6px 16px rgba(0,0,0,0.5)",
              animation: "zoomIn 0.25s ease",
              cursor: "zoom-out",
            }}
          />

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setLightboxIndex(null)}
            style={{
              position: "fixed",
              top: "20px",
              right: "25px",
              fontSize: "32px",
              color: "#fff",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✕
          </button>

          {/* LEFT ARROW */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex > 0
                  ? lightboxIndex - 1
                  : imageFiles.length - 1
              );
            }}
            style={{
              position: "fixed",
              left: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "40px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ‹
          </button>

          {/* RIGHT ARROW */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex(
                lightboxIndex < imageFiles.length - 1
                  ? lightboxIndex + 1
                  : 0
              );
            }}
            style={{
              position: "fixed",
              right: "30px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "40px",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            ›
          </button>
        </div>
      )}

      <Footer />
    </>
  );
}
