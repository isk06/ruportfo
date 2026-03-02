"use client";

import Link from "next/link";

type Props = {
  slug: string;
  cover: string;
  title: string;
};

export default function CaseStudyCard({ slug, cover, title }: Props) {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="card"
      style={{ textDecoration: "none", cursor: "pointer" }}
    >
      <img
        src={cover}
        alt={title}
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
          View case study
        </span>
      </div>
    </Link>
  );
}