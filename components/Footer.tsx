export default function Footer() {
  return (
    <footer className="footer footer-gray">
      <div className="footer-content">
        <div className="footer-text">
          © {new Date().getFullYear()} Iskander Daraev
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>

          <a
            href="https://www.behance.net/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"
          >
            <img src="/icons/behance.svg" alt="Behance" />
          </a>
        </div>
      </div>
    </footer>
  );
}
