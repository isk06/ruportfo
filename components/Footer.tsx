export default function Footer() {
  return (
    <footer className="footer footer-gray">
      <div className="footer-content">
        <div className="footer-socials">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" />
          </a>

          <a
            href="https://www.behance.net"
            target="_blank"
            rel="noreferrer"
            aria-label="Behance"
          >
            <img src="/icons/behance.svg" alt="Behance" />
          </a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Iskander Daraev
        </div>
      </div>
    </footer>
  );
}
