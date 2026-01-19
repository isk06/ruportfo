export default function Footer() {
  return (
    <footer className="footer footer-gray">
      <div className="footer-content">
        <div className="footer-socials">
          <a
        href="https://www.linkedin.com/in/iskdaraev/"
        target="_blank"
        rel="noreferrer"
        >
            <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
        />

          </a>

          <a
        href="https://www.behance.net/iskdaraev"
        target="_blank"
          rel="noreferrer"
        >
            <img
          src="/icons/behance.svg"
          alt="Behance"
        />
          </a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Iskander Daraev
        </div>
      </div>
    </footer>
  );
}
