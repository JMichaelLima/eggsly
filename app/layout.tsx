import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eggsly",
  description:
    "no idea what eggsly is at this point, but you've got to have a meta description.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-blue-950 text-sky-50`}>
        {children}
      </body>
    </html>
  );
}
