import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Blog Card Component",
  description: "Solved blog card component frontend mentor challenge by Andrés R.W.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
