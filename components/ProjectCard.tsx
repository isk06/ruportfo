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
      {/* CARD */}
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          overflow: "hidden",
          maxWidth: "600px",
          margin: "0 auto",
          }}
      >
        {/* IMAGE */}
        <img
          src={image}
          alt={title}
          onClick={() => setIsOpen(true)}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            cursor: "zoom-in", // magnifying glass
            transition: "transform 0.2s ease",
          }}
        />

        {/* TEXT BLOCK */}
        <div
          style={{
            padding: "16px 20px",
            marginTop: "auto",
          }}
        >
          <h3
            style={{
              margin: "0 0 0.5em",
              fontSize: "1.25rem",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              margin: 0,
              lineHeight: "1.4",
              color: "#555",
            }}
          >
            {description}
          </p>
        </div>
      </div>

      {/* POPUP OVERLAY */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
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
              boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}
    </>
  );
}
