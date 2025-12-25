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
      className="pdf-card"
    >
      <div className="pdf-image-wrapper">
        <img
          src={cover}
          alt={title}
          className="pdf-image"
          loading="lazy"
        />
      </div>

      <div className="pdf-caption">
        <div className="pdf-title">{title}</div>
        <div className="pdf-open">
          Open pdf →
        </div>
      </div>
    </a>
  );
}
