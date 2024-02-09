import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl px-2 min-h-[calc(100vh-328px)]">
        {children}
      </div>
      <Footer />
    </>
  );
}