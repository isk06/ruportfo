export default function ProjectCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "12px",
        boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
        overflow: "hidden",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />
      <div style={{ padding: "16px 20px" }}>
        <h3 style={{ margin: "0 0 0.5em", fontSize: "1.25rem" }}>{title}</h3>
        <p style={{ margin: 0, lineHeight: "1.4", color: "#555" }}>{description}</p>
      </div>
    </div>
  );
}
