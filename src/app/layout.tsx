import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helping Hand",
  description: "A Helping Hand for a Better Tomorrow: Join Us in Making Dreams Reality!",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Providers>
      <html lang="en" data-theme="fantasy">
        <body className={inter.className}>{children}</body>
      </html>
    </Providers>
  );
}
