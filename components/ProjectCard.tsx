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
        <div className="modal-overlay" onClick={() => setOpen(false)}>
          <img
            src={image}
            alt="Full view"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
