"use client";

import { useEffect, useRef } from "react";

type Props = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ImageModal({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const startX = useRef<number | null>(null);

  /* ================= Keyboard ================= */
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose, onPrev, onNext]);

  /* ================= Touch (mobile swipe) ================= */
  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const diff = startX.current - e.changedTouches[0].clientX;
    if (diff > 50) onNext();
    if (diff < -50) onPrev();
    startX.current = null;
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* LEFT ARROW */}
        <button
          className="modal-arrow modal-arrow-left"
          onClick={onPrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        {/* IMAGE */}
        <img
          src={`/images/${images[currentIndex]}`}
          alt=""
          className="modal-image"
        />

        {/* RIGHT ARROW */}
        <button
          className="modal-arrow modal-arrow-right"
          onClick={onNext}
          aria-label="Next image"
        >
          ›
        </button>
      </div>
    </div>
  );
}
