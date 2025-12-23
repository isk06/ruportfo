'use client';

type PdfCardProps = {
  file: string;
  cover: string;
};

export default function PdfCard({ file, cover }: PdfCardProps) {
  return (
    <div className="card">
      <img src={cover} alt="PDF cover" loading="lazy" />
    </div>
  );
}
