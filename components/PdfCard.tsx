"use client";

type PdfCardProps = {
  file: string;
  cover: string;
  title: string;
};

export default function PdfCard({ file, cover, title }: PdfCardProps) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="card pdf-card"
      style={{ cursor: "pointer" }}
    >
      <img
        src={cover}
        alt={title}
        className="card-image"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
        }}
      />
      <div
        className="card-caption"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "8px 12px",
          gap: "4px",
        }}
      >
        <span
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#111",
          }}
        >
          {title}
        </span>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 500,
            color: "#1f6fff",
          }}
        >
          Open pdf →
        </span>
      </div>
    </a>
  );
}
