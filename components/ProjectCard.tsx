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
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content">
            {/* Scale image 40% smaller */}
            <img
              src={image}
              alt="Full size"
              style={{ transform: "scale(0.6)" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
