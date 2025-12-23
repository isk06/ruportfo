'use client';

import React from "react";

type ProjectCardProps = {
  image: string;
};

export default function ProjectCard({ image }: ProjectCardProps) {
  return (
    <div className="card">
      <img
        src={image}
        alt="Portfolio project"
        loading="lazy"
      />
    </div>
  );
}
