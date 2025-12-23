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
      {/* Anchor to preserve layout when header becomes fixed */}
      <div ref={anchorRef} />

      {/* STICKY HEADER */}
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

      {/* CONTENT */}
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
                key={pdf}
                file={`/pdfs/${pdf}`}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
