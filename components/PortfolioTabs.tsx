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
  charts: string[]; // ✅ NEW
};

export default function PortfolioTabs({ images, pdfs, charts }: Props) {
  const [activeTab, setActiveTab] =
    useState<"gallery" | "pdfs" | "charts">("gallery");

  const [isFixed, setIsFixed] = useState(false);
  const [activeImageIndex, setActiveImageIndex] =
    useState<number | null>(null);

  const anchorRef = useRef<HTMLDivElement>(null);
  const freezePoint = useRef<number>(0);

  // Hash listener
  useEffect(() => {
    if (window.location.hash === "#presentations") {
      setActiveTab("pdfs");
    }
    if (window.location.hash === "#charts") {
      setActiveTab("charts");
    }
  }, []);

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

  const caseStudies: CaseStudyData[] = [
    {
      slug: "Idbi",
      cover: "/pdf-covers/Idbi.jpg",
      title: "IDBI Bank - Презентация для инвесторов",
      description: "Редизайн презентации и форматирование"
    }
  ];

  return (
    <>
      <div ref={anchorRef} />

      {/* ===================== */}
      {/* Sticky Header */}
      {/* ===================== */}

      <div className={`works-sticky ${isFixed ? "fixed" : ""}`}>
        <h2>Мои работы</h2>

        <div className="works-tabs">
          <button
            className={activeTab === "gallery" ? "tab active" : "tab"}
            onClick={() => setActiveTab("gallery")}
          >
            Галерея
          </button>

          <button
            className={activeTab === "pdfs" ? "tab active" : "tab"}
            onClick={() => setActiveTab("pdfs")}
          >
            Презентации
          </button>

          {/* ✅ NEW TAB */}
          <button
            className={activeTab === "charts" ? "tab active" : "tab"}
            onClick={() => setActiveTab("charts")}
          >
            Диаграммы
          </button>
        </div>
      </div>

      {/* ===================== */}
      {/* Content */}
      {/* ===================== */}

      <div className="works-content">

        {/* ===== GALLERY ===== */}
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

        {/* ===== PDFS ===== */}
        {activeTab === "pdfs" && (
          <div className="works-grid">
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
                    gap: "2px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 500,
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
                    Подробнее о проекте →
                  </span>
                </div>
              </a>
            ))}

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

        {/* ===== CHARTS ===== */}
        {activeTab === "charts" && (
          <div className="charts-wrapper">

            {/* Gray description pane */}
            <div className="charts-description">
              <h3>Финансовые и аналитические диаграммы</h3>
              <p>
                Подборка диаграмм, 
                созданных для консалтинговых и банковских презентаций. Акцент на визуализации экономической 
                информации и финансовых метрик (выручка и EBITDA  в прогнозе, факторный анализ, сравнение мультипликаторов, value map, анализ чувствительности 
                расчет DCF и WACC; BS, PL).
              </p>

              <p>
                Области специализации - valuation, due diligence, transactions, M&A
              </p>
            </div>

            {/* 3-column grid */}
            <div className="works-grid">
              {charts.map((chart, index) => (
                <ProjectCard
                  key={chart}
                  image={`/charts/${chart}`}
                  onClick={() => setActiveImageIndex(index)}
                />
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ===== MODAL ===== */}
      {activeImageIndex !== null && (
        <ImageModal
          images={
            activeTab === "charts"
              ? charts.map((img) => `/charts/${img}`)
              : images.map((img) => `/images/${img}`)
          }
          index={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex(
              (i) =>
                (i! - 1 +
                  (activeTab === "charts"
                    ? charts.length
                    : images.length)) %
                (activeTab === "charts"
                  ? charts.length
                  : images.length)
            )
          }
          onNext={() =>
            setActiveImageIndex(
              (i) =>
                (i! + 1) %
                (activeTab === "charts"
                  ? charts.length
                  : images.length)
            )
          }
        />
      )}
    </>
  );
}