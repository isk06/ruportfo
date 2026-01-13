type Props = {
  image: string;
  onClick: () => void;
};

export default function ProjectCard({ image, onClick }: Props) {
  return (
    <div className="card" onClick={onClick}>
      <img src={image} alt="" />
      <div className="card-caption" />
    </div>
  );
}
