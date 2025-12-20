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
  const [fixed, setFixed] = useState(false);
  const refSticky = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!refSticky.current) return;
      const topOffset = refSticky.current.getBoundingClientRect().top;
      setFixed(topOffset <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        ref={refSticky}
        className={fixed ? "works-sticky fixed" : "works-sticky"}
      >
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
