import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/Providers";
import { Toaster } from "react-hot-toast";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Helping Hand",
  description: "A Helping Hand for a Better Tomorrow: Join Us in Making Dreams Reality!",
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const session : Session | null = await getServerSession(authOptions);

  return (
    <Providers session={session}>
      <html lang="en" data-theme="fantasy">
        <body className={inter.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </Providers>
  );
}
