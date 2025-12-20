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
    <>
      {/* Tabs (sticky, left-aligned) */}
      <div className="portfolio-tabs">
        <div className="portfolio-tabs-buttons">
          <button
            onClick={() => setActiveTab("gallery")}
            className={activeTab === "gallery" ? "tab active" : "tab"}
          >
            Portfolio (gallery)
          </button>

          <button
            onClick={() => setActiveTab("pdfs")}
            className={activeTab === "pdfs" ? "tab active" : "tab"}
          >
            Portfolio (presentations)
          </button>
        </div>
      </div>

      {/* Gallery */}
      {activeTab === "gallery" && (
        <div className="portfolio-grid">
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

      {/* PDFs */}
      {activeTab === "pdfs" && (
        <div className="portfolio-pdfs">
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
