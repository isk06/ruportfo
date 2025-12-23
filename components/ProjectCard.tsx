'use client';

import { useState } from "react";

type ProjectCardProps = {
  image: string;
};

export default function ProjectCard({ image }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* CARD */}
      <div className="card" onClick={() => setOpen(true)}>
        <img src={image} alt="Project image" />
      </div>

      {/* MODAL */}
      {open && (
        <div
          className="modal-overlay"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.75)",
            zIndex: 1000,
            overflow: "auto",
            padding: "40px",
          }}
        >
          <img
            src={image}
            alt="Full view"
            onClick={(e) => e.stopPropagation()}
            style={{
              display: "block",
              margin: "0 auto",
              maxWidth: "60%",      // 40% smaller than before
              maxHeight: "90vh",
              width: "auto",
              height: "auto",
              borderRadius: "8px",
              cursor: "zoom-out",
            }}
          />
        </div>
      )}
    </>
  );
}
