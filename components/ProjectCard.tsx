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
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="modal-content"
            style={{
              transform: "scale(0.6)",
              transformOrigin: "center",
            }}
          >
            <img src={image} alt="Full size" />
          </div>
        </div>
      )}
    </>
  );
}
