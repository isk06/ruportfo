'use client';

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import PdfCard from "./PdfCard";

type Props = {
  images: string[];
  pdfs: string[];
};

export default function PortfolioTabs({ images, pdfs }: Props) {
  const [activeTab, setActiveTab] = useState<"gallery" | "pdfs">("gallery");
  const stickyRef = useRef<HTMLDivElement>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!stickyRef.current) return;
      const top = stickyRef.current.getBoundingClientRect().top;
      setIsSticky(top <= 0);
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={stickyRef}
        className={`portfolio-sticky ${isSticky ? "fixed" : ""}`}
      >
        <h2>My works</h2>

        <div className="portfolio-tabs">
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

      {activeTab === "gallery" && (
        <div className="works-grid">
          {images.map((img, i) => (
            <ProjectCard
              key={img}
              title={`Image ${i + 1}`}
              image={`/images/${img}`}
              description="Presentation design project example."
            />
          ))}
        </div>
      )}

      {activeTab === "pdfs" && (
        <div className="works-grid">
          {pdfs.map((pdf, i) => (
            <PdfCard
              key={pdf}
              title={`Presentation ${i + 1}`}
              file={`/pdfs/${pdf}`}
            />
          ))}
        </div>
      )}
    </>
  );
}
