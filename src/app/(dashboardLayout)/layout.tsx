import DashboardSidebar from "@/components/shared/DashboardSidebar";
import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import React from "react";

export default async function MainLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const session = await getServerSession(authOptions);

  return (
    <>
      <Navbar session={session ? true : false} />
      <div className="container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8 flex flex-col lg:flex-row gap-6">
        <DashboardSidebar session={session} />
        <div className="bg-primary-content/25 rounded-lg shadow-md w-full grow p-6 relative min-h-[calc(100vh-128px)]">
          {children}
        </div>
      </div>
    </>
  );
}
