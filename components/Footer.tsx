export default function Footer() {
  return (
    <footer className="footer footer-gray">
      <div className="footer-content">
        <div className="footer-text">
         © {new Date().getFullYear()} This site does not collect information about visitors or use analytics tools  |  Built with Next.js & Vercel by Iskander Daraev
        </div>

        <div className="footer-socials">
          <a
            href="https://www.linkedin.com/in/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
          src="/icons/linkedin.svg"
          alt="LinkedIn"
        />
          </a>

          <a
            href="https://www.behance.net/your-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Behance"

            
          >
            <img
          src="/icons/behance.svg"
          alt="Behance"
        />
          </a>
        </div>
      </div>
    </footer>
  );
}
