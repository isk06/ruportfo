'use client';
import { useState, useEffect } from "react";

type ProjectCardProps = {
  image: string;
};

export default function ProjectCard({ image }: ProjectCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      requestAnimationFrame(() => setVisible(true));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  const closeModal = () => {
    setVisible(false);
    setTimeout(() => setIsModalOpen(false), 200);
  };

  return (
    <>
      <div className="card" onClick={() => setIsModalOpen(true)}>
        <img src={image} alt="Portfolio project" />
      </div>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "auto",
            zIndex: 1000,
            padding: "24px",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.25s ease",
          }}
        >
          <img
            src={image}
            alt="Full size"
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: "100%",
              maxHeight: "90vh",
              height: "auto",
              display: "block",
              margin: "0 auto",
              borderRadius: "8px",
              transform: visible ? "scale(1)" : "scale(0.96)",
              transition: "transform 0.25s ease",
            }}
          />
        </div>
      )}
    </>
  );
}
