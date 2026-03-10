type Props = {
  image: string;
  onClick: () => void;
  noCaption?: boolean; // optional flag
};

export default function ProjectCard({ image, onClick, noCaption = false }: Props) {
  return (
    <div className={`card ${noCaption ? "card-image-only" : ""}`} onClick={onClick}>
      <img src={image} alt="" />

      {!noCaption && (
        <div className="card-caption"></div>
      )}
    </div>
  );
}