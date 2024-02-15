import React from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <>
      <Navbar />
      <div className="min-h-[calc(100vh-64px)]">
        {children}
      </div>
      <Footer />
    </>
  );
}
