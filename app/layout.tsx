import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}


export const metadata = {
  title: "Iskander Daraev - portfolio",
  description: "Consulting and Corporate Finance Presentations",
  robots: {
    index: false,
    follow: false,
  },
};


