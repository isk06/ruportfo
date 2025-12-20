'use client';

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import PdfCard from "./PdfCard";

type Props = {
  images: string[];
  pdfs: string[];
};

export default function PortfolioTabs({ images, pdfs }: Props) {
  const [activeTab, setActiveTab] = useState<"gallery" | "pdfs">("gallery");

  return (
    <div className="portfolio-wrapper">
      {/* STICKY HEADER */}
      <div className="portfolio-sticky">
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

      {/* SCROLLING CONTENT */}
      <div className="portfolio-scroll">
        {activeTab === "gallery" && (
          <div className="portfolio-grid">
            {images.map((img, i) => (
              <ProjectCard
                key={i}
                title={`Image ${i + 1}`}
                image={`/images/${img}`}
                description="Presentation design project example."
              />
            ))}
          </div>
        )}

        {activeTab === "pdfs" && (
          <div className="portfolio-pdfs">
            {pdfs.map((pdf, i) => (
              <PdfCard
                key={i}
                title={`Presentation ${i + 1}`}
                file={`/pdfs/${pdf}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
