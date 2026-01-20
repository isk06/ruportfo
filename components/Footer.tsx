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
          src="/icons/linkedin.png"
          alt="LinkedIn"
          style={{ width: 10, height: 10 }}
        />

          </a>

          <a
        href="https://www.behance.net/iskdaraev"
        target="_blank"
          rel="noreferrer"
        >
            <img
          src="/icons/behance.png"
          alt="Behance"
          style={{ width: 10, height: 10 }}
        />
          </a>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} 
          This site does not collect information about visitors or use analytics tools  |  Built with Next.js & Vercel by Iskander Daraev
        </div>
      </div>
    </footer>
  );
}
