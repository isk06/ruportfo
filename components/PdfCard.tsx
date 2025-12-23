'use client';

type PdfCardProps = {
  file: string;
  cover: string;
};

export default function PdfCard({ file, cover }: PdfCardProps) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="card pdf-card"
      style={{ cursor: "pointer" }}
    >
      <img src={cover} alt="PDF cover" />

      <div className="pdf-caption">
        <span className="pdf-open">
          Open pdf <span className="pdf-arrow">→</span>
        </span>
      </div>
    </a>
  );
}
