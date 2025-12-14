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
    <div className="portfolio-offset">
      {/* Tabs */}
      <div className="tabs">
        style={{
          display: "flex",
          gap: "40px",
          borderBottom: "1px solid #e5e5e5",
          marginBottom: "32px",
        }}
      </div>
        <button
          onClick={() => setActiveTab("gallery")}
          style={{
            background: "none",
            border: "none",
            paddingBottom: "12px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            borderBottom:
              activeTab === "gallery" ? "3px solid #1f6fff" : "3px solid transparent",
          }}
        >
          Portfolio (gallery)
        </button>

        <button
          onClick={() => setActiveTab("pdfs")}
          style={{
            background: "none",
            border: "none",
            paddingBottom: "12px",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            borderBottom:
              activeTab === "pdfs" ? "3px solid #1f6fff" : "3px solid transparent",
          }}
        >
          Portfolio (presentations)
        </button>
      </div>

      {/* Content */}
      {activeTab === "gallery" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
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
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "24px",
          }}
        >
          {pdfs.map((pdf, i) => (
            <PdfCard
              key={i}
              title={`Presentation ${i + 1}`}
              file={`/pdfs/${pdf}`}
            />
          ))}
        </div>
      )}
    </section>
  );
}
