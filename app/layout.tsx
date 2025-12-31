import "./globals.css";

export const metadata = {
  title: "Iskander Daraev - portfolio",
  description: "Consulting and Corporate Finance Presentations",
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
      <body>{children}</body>
    </html>
  );
}
