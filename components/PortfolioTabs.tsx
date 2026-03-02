'use client';

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import PdfCard from "./PdfCard";
import ImageModal from "./ImageModal";

export type PdfData = {
  file: string;
  cover: string;
  title: string;
};

export type CaseStudyData = {
  slug: string;
  cover: string;
  title: string;
  description: string;
};

type Props = {
  images: string[];
  pdfs: PdfData[];
};

export default function PortfolioTabs({ images, pdfs }: Props) {
  const [activeTab, setActiveTab] = useState<"gallery" | "pdfs">("gallery");

    // Listen to URL hash
    useEffect(() => {
      if (window.location.hash === "#presentations") {
        setActiveTab("pdfs");
      }
    }, []);
  const [isFixed, setIsFixed] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const anchorRef = useRef<HTMLDivElement>(null);
  const freezePoint = useRef<number>(0);

  useEffect(() => {
    if (!anchorRef.current) return;

    freezePoint.current =
      anchorRef.current.getBoundingClientRect().top + window.scrollY;

    const onScroll = () => {
      setIsFixed(window.scrollY >= freezePoint.current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ✅ Example case study (duplicate this later for new ones)
  const caseStudies: CaseStudyData[] = [
    {
      slug: "Idbi",
      cover: "/pdf-covers/Idbi.jpg",
      title: "IDBI Bank - Investors Presentation",
      description: "Presentation redesign and formatting"
    }
  ];

  return (
    <>
      <div ref={anchorRef} />

      <div className={`works-sticky ${isFixed ? "fixed" : ""}`}>
        <h2>My works</h2>
        <div className="works-tabs">
          <button
            className={activeTab === "gallery" ? "tab active" : "tab"}
            onClick={() => setActiveTab("gallery")}
          >
            Портфолио (галерея)
          </button>
          <button
            className={activeTab === "pdfs" ? "tab active" : "tab"}
            onClick={() => setActiveTab("pdfs")}
          >
            Портфолио (презентации)
          </button>
        </div>
      </div>

      <div className="works-content">
        {activeTab === "gallery" && (
          <div className="works-grid">
            {images.map((img, index) => (
              <ProjectCard
                key={img}
                image={`/images/${img}`}
                onClick={() => setActiveImageIndex(index)}
              />
            ))}
          </div>
        )}

        {activeTab === "pdfs" && (
          <div className="works-grid">

            {/* ✅ NEW CASE STUDY CARDS */}
            {caseStudies.map((study) => (
              <a
                key={study.slug}
                href={`/case-studies/${study.slug}`}
                className="card pdf-card"
                style={{ textDecoration: "none" }}
              >
                <img
                  src={study.cover}
                  alt={study.title}
                  className="card-image"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />

                <div
                  className="card-caption"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: "12px",
                    gap: "6px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "15px",
                      fontWeight: 600,
                      color: "#111",
                    }}
                  >
                    {study.title}
                  </span>

                  <span
                    style={{
                      fontSize: "14px",
                      color: "#666",
                    }}
                  >
                    {study.description}
                  </span>

                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#1f6fff",
                    }}
                  >
                    View case study →
                  </span>
                </div>
              </a>
            ))}

            {/* ✅ EXISTING PDF CARDS (unchanged) */}
            {pdfs.map((pdf) => (
              <PdfCard
                key={pdf.file}
                file={pdf.file}
                cover={pdf.cover}
                title={pdf.title}
              />
            ))}
          </div>
        )}
      </div>

      {activeImageIndex !== null && (
        <ImageModal
          images={images.map((img) => `/images/${img}`)}
          index={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex(
              (i) => (i! - 1 + images.length) % images.length
            )
          }
          onNext={() =>
            setActiveImageIndex((i) => (i! + 1) % images.length)
          }
        />
      )}
    </>
  );
}