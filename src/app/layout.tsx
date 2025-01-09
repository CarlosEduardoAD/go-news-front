import type { Metadata } from "next";
import { Fira_Mono, Fira_Code } from "next/font/google";
import "./globals.css";

const firaSans = Fira_Code({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const firaMono = Fira_Mono({
  weight: "500",
  subsets: ["latin"],
});

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
