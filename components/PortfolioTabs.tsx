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
  charts: string[];
  dashboards: string[];
};

type TabType = "gallery" | "pdfs" | "charts" | "dashboards";

export default function PortfolioTabs({
  images,
  pdfs,
  charts,
  dashboards
}: Props) {

  const [activeTab, setActiveTab] = useState<TabType>("gallery");
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);
  const [isFixed, setIsFixed] = useState(false);

  const anchorRef = useRef<HTMLDivElement>(null);
  const freezePoint = useRef<number>(0);

  const caseStudies: CaseStudyData[] = [
    {
      slug: "Idbi",
      cover: "/pdf-covers/Idbi.jpg",
      title: "IDBI Bank - Презентация для инвесторов",
      description: "Редизайн презентации и форматирование"
    }
  ];

  /* ================= HASH NAVIGATION ================= */

  useEffect(() => {
    const hash = window.location.hash;

    if (hash === "#presentations") setActiveTab("pdfs");
    if (hash === "#charts") setActiveTab("charts");
    if (hash === "#dashboards") setActiveTab("dashboards");
  }, []);

  /* ================= STICKY HEADER ================= */

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

  /* ================= IMAGE SOURCE ================= */

  const getImagesForTab = () => {
    if (activeTab === "charts") return charts.map(img => `/charts/${img}`);
    if (activeTab === "dashboards") return dashboards.map(img => `/dashboards/${img}`);
    return images.map(img => `/images/${img}`);
  };

  const currentImages = getImagesForTab();

  return (
    <>
      <div ref={anchorRef} />

      {/* ================= HEADER ================= */}

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

          <button
            className={activeTab === "charts" ? "tab active" : "tab"}
            onClick={() => setActiveTab("charts")}
          >
            Диаграммы
          </button>

          <button
            className={activeTab === "dashboards" ? "tab active" : "tab"}
            onClick={() => setActiveTab("dashboards")}
          >
            Дашборды
          </button>

        </div>
      </div>

      {/* ================= CONTENT ================= */}

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

        {/* ===== PRESENTATIONS ===== */}

        {activeTab === "pdfs" && (
          <div className="works-grid">

            {caseStudies.map(study => (
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

            {pdfs.map(pdf => (
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

            <div className="charts-description">
              <h3>Финансовые и аналитические диаграммы</h3>

              <p>
                Подборка диаграмм, 
                созданных для консалтинговых и банковских презентаций. Акцент на визуализации экономической 
                информации и финансовых метрик (выручка и EBITDA  в прогнозе, факторный анализ, сравнение мультипликаторов, value map, анализ чувствительности, 
                расчет DCF и WACC; BS, PL).
              </p>

              <p>
                Области специализации - valuation, due diligence, transactions, M&A
              </p>
            </div>

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

        {/* ===== DASHBOARDS ===== */}

        {activeTab === "dashboards" && (
          <div className="dashboards-wrapper">

            <div className="dashboards-description">
              <h3>Аналитические дашборды</h3>

              <p>
                Мои бизнес-панели разработаны для подготовки отчетов для 
                руководителей и консалтинговых проектов. Основное внимание 
                уделяется отслеживанию ключевых показателей эффективности (KPI), 
                мониторингу финансовых результатов и стратегической аналитике.
              </p>

              <p>
                Панели мониторинга сочетают в себе структурированную структуру, 
                четкую иерархию и визуализацию сложных показателей для лиц, принимающих решения.
              </p>
            </div>

            <div className="dashboards-grid">
              {dashboards.map((img, index) => (
                <ProjectCard
                  key={img}
                  image={`/dashboards/${img}`}
                  onClick={() => setActiveImageIndex(index)}
                  noCaption
                />
              ))}
            </div>

          </div>
        )}

      </div>

      {/* ================= MODAL ================= */}

      {activeImageIndex !== null && (
        <ImageModal
          images={currentImages}
          index={activeImageIndex}
          onClose={() => setActiveImageIndex(null)}
          onPrev={() =>
            setActiveImageIndex(
              (i) => (i! - 1 + currentImages.length) % currentImages.length
            )
          }
          onNext={() =>
            setActiveImageIndex(
              (i) => (i! + 1) % currentImages.length
            )
          }
        />
      )}
    </>
  );
}