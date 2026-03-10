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

        {/* GLOBAL HEADER */}
        <header className="global-header">
          <div className="header-inner">
            <img
              src="/avatar.png"
              alt="Iskander Daraev"
              className="header-avatar"
            />
            <div>
              <h1 className="header-name">Искандер Дараев</h1>
              <p className="header-subtitle">
                Консалтинг, банкинг,  и корпоративные финансы – анализ, сторителлинг и дизайн
              </p>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* GLOBAL FOOTER */}
        <Footer />
        <BackToTop />

      </body>
    </html>
  );
}



