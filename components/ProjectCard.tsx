'use client';
import { useState } from "react";

type ProjectCardProps = {
  image: string;
};

export default function ProjectCard({ image }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card" onClick={() => setIsModalOpen(true)}>
        <img src={image} alt="Portfolio project" />
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto", // allow scrolling if content is too large
            zIndex: 1000,
            padding: "20px",
          }}
        >
          <div className="modal-content" style={{ textAlign: "center" }}>
            <img
              src={image}
              alt="Full size"
              style={{
                width: "90%",           // scale down to 60%
                maxWidth: "100%",       // never exceed viewport width
                maxHeight: "90vh",      // never exceed viewport height
                height: "auto",
                margin: "0 auto",
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
