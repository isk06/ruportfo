'use client';

import { useEffect, useRef } from "react";

type Props = {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ImageModal({
  images,
  index,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onPrev, onNext, onClose]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const delta =
      e.changedTouches[0].clientX - touchStartX.current;

    if (Math.abs(delta) > 50) {
      delta > 0 ? onPrev() : onNext();
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <img
          src={images[index]}
          className="modal-image"
          alt=""
        />

        <button className="modal-arrow left" onClick={onPrev}>
          ←
        </button>
        <button className="modal-arrow right" onClick={onNext}>
          →
        </button>
      </div>
    </div>
  );
}
