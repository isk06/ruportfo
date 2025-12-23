'use client';

type PdfCardProps = {
  file: string;
  cover: string;
};

export default function PdfCard({ file, cover }: PdfCardProps) {
  return (
    <div className="card">
      <img
        src={cover}
        alt="Presentation cover"
        loading="lazy"
      />
    </div>
  );
}
