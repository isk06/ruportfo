"use client";

import { useState } from "react";

type Props = {
  images: string[];
  pdfs: string[];
};

export default function PortfolioTabs({ images, pdfs }: Props) {
  const [activeTab, setActiveTab] = useState<"gallery" | "pdfs">("gallery");

  return (
    <>
      {/* TABS */}
      <div className="tabs">
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

      {/* CONTENT */}
      {activeTab === "gallery" && (
        <div className="grid">
          {images.map((img, i) => (
            <img
              key={i}
              src={`/images/${img}`}
              alt={`Project ${i + 1}`}
              className="grid-image"
            />
          ))}
        </div>
      )}

      {activeTab === "pdfs" && (
        <ul className="pdf-list">
          {pdfs.map((pdf, i) => (
            <li key={i}>
              <a href={`/pdfs/${pdf}`} target="_blank" rel="noreferrer">
                {pdf}
              </a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
