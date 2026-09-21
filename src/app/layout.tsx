import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MYTHOS Creative Intelligence Web",
  description: "Obsidian Cinema Design System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/geist@1.0.3/dist/fonts/geist-sans/style.css" rel="stylesheet" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
