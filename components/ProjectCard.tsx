export default function ProjectCard({
  title,
  image,
  description,
  index,
  onOpen,
}: {
  title: string;
  image: string;
  description: string;
  index: number;
  onOpen: (index: number) => void;
}) {
  return (
    <>
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          height: "50%",
        }}
      >
        <img
          src={image}
          alt={title}
          onClick={() => onOpen(index)}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            cursor: "zoom-in",
            transition: "transform 0.25s ease",
          }}
        />

        <div style={{ padding: "16px 20px", marginTop: "auto" }}>
          <h3 style={{ margin: "0 0 0.5em", fontSize: "1.25rem" }}>
            {title}
          </h3>
          <p style={{ margin: 0, lineHeight: "1.4", color: "#555" }}>
            {description}
          </p>
        </div>
      </div>
    </>
  );
}
