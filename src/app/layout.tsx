import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Go News",
  description: "News about the Go programming language",
  icons: {
    icon: "/icons/logo.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-fira antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
