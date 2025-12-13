'use client';

export default function PdfCard({
  title,
  file,
}: {
  title: string;
  file: string;
}) {
  return (
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "block",
        padding: "20px",
        borderRadius: "12px",
        border: "1px solid #e5e5e5",
        textDecoration: "none",
        color: "#111",
        background: "#fff",
      }}
    >
      <div style={{ fontSize: "14px", color: "#777", marginBottom: "8px" }}>
        PDF presentation
      </div>

      <div style={{ fontSize: "16px", fontWeight: 600 }}>
        {title}
      </div>

      <div style={{ marginTop: "12px", fontSize: "14px", color: "#1f6fff" }}>
        Open PDF →
      </div>
    </a>
  );
}
