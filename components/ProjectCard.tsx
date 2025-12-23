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
          <div className="modal-content" style={{ textAlign: "center" }}>
            <img
              src={image}
              alt="Full size"
              style={{
                width: "60%",      // 40% smaller
                height: "auto",
                margin: "0 auto",  // center horizontally
                display: "block",
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
