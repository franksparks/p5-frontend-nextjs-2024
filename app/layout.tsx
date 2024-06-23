import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My personal library",
  description: "Coded by Ferran Bals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icons/favicon.png" />
      </head>
      <body className="min-h-screen flex flex-col">
        <div className="flex-1 flex flex-col">{children}</div>
      </body>
    </html>
  );
}
