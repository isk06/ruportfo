import "./globals.css";

export const metadata = {
  title: "Iskander Daraev",
  description: "Consulting and Corporate Finance Presentations",
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
