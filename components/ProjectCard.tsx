import { useState } from "react";

export default function ProjectCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          overflow: "hidden",
          cursor: "zoom-in",
        }}
        onClick={() => setIsOpen(true)}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
        <div
          style={{
            padding: "16px 20px",
            display: "flex",
            alignItems: "flex-end", // bottom-align description
            height: "60px",
          }}
        >
          <p style={{ margin: 0, lineHeight: "1.4", color: "#555" }}>
            {description}
          </p>
        </div>
      </div>

      {/* Pop-up overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "zoom-out",
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "12px",
            }}
          />
        </div>
      )}
    </>
  );
}
