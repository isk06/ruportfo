export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "80px",
        textAlign: "center",
        padding: "40px 20px",
        color: "#777",
        fontSize: "0.9rem",
      }}
    >
      <p>
        © {new Date().getFullYear()} | Built with Next.js & Vercel
      </p>
    </footer>
  );
}