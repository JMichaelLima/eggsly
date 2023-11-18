import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../src/amplifyconfiguration.json';
//Amplify.configure(amplifyconfig);
Amplify.configure(amplifyconfig, {
  ssr: true // required when using Amplify with Next.js
});

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
      <body className={`${inter.className}`}>
        <div className="min-h-screen bg-gradient-to-br from-blue-800 to-green-800 via-slate-600">
          <Nav />
          {children}
        </div>
      </body>
    </html>
  );
}
