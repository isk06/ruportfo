'use client';

type PdfCardProps = {
  file: string;
  cover: string;
};

export default function PdfCard({ file, cover }: PdfCardProps) {
  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => window.open(file, "_blank")}
    >
      <img src={cover} alt="Presentation cover" />
    </div>
  );
}
