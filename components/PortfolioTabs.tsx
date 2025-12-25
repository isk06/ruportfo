"use client";

import { useState, useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";
import PdfCard from "./PdfCard";

export type PdfData = {
  file: string;
  cover: string;
  title: string;
};

type PortfolioTabsProps = {
  images: string[];
  pdfs: PdfData[];
};

export default function PortfolioTabs({ images, pdfs }: PortfolioTabsProps) {
  const [activeTab, setActiveTab] = useState<"gallery" | "pdfs">("gallery");
  const [isFixed, setIsFixed] = useState(false);

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
            className={`tab ${activeTab === "gallery" ? "active" : ""}`}
            onClick={() => setActiveTab("gallery")}
          >
            Portfolio (gallery)
          </button>

          <button
            className={`tab ${activeTab === "pdfs" ? "active" : ""}`}
            onClick={() => setActiveTab("pdfs")}
          >
            Portfolio (presentations)
          </button>
        </div>
      </div>

      <div className="works-content">
        {activeTab === "gallery" && (
          <div className="works-grid">
            {images.map((img) => (
              <ProjectCard
                key={img}
                image={`/images/${img}`}
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
    </>
  );
}
