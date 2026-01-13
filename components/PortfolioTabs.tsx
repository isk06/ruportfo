'use client';

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import PdfCard from "./PdfCard";
import ImageModal from "./ImageModal";

type PdfData = {
  file: string;
  cover: string;
  title: string;
};

type Props = {
  images: string[];
  pdfs: PdfData[];
};

export default function PortfolioTabs({ images, pdfs }: Props) {
  const [activeTab, setActiveTab] = useState<"gallery" | "pdfs">("gallery");
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
            Portfolio (gallery)
          </button>
          <button
            className={activeTab === "pdfs" ? "tab active" : "tab"}
            onClick={() => setActiveTab("pdfs")}
          >
            Portfolio (presentations)
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
