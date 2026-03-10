import "./globals.css";
import { Manrope } from "next/font/google";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Искандер Дараев - портфолио",
  description: "Банки, консалтинг и корпоративные финансы – анализ, сторителлинг и дизайн",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>

        {/* ================= HEADER ================= */}
      <section className="hero hero-gray">
        <div className="hero-content">
          <div className="hero-logo">
            <img src="/avatar.png" alt="Искандер Дараев" className="hero-avatar" />
          </div>
          <div>
            <h1 className="hero-title">Искандер Дараев</h1>
            <p className="hero-subtitle">
              Банки, консалтинг и корпоративные финансы – сторителлинг и дизайн
            </p>
          </div>
        </div>
      </section>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />
        <BackToTop />

      </body>
    </html>
  );
}



