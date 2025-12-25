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
          aspectRatio: "4 / 3",
          objectFit: "cover",
        }}
      />
      <div
        className="card-caption"
        style={{
          fontSize: "14px",
          color: "#1f6fff",
          marginTop: "4px",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        {title} → Open pdf
      </div>
    </a>
  );
}
