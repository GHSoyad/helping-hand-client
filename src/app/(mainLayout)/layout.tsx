import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar session={session ? true : false} />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </>
  );
}
