import DashboardSidebar from "@/components/shared/DashboardSidebar";
import Navbar from "@/components/shared/Navbar";
import React from "react";


export default async function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <>
      <Navbar />
      <div className="container mx-auto max-w-screen-xl px-2 md:px-4 xl:px-0 py-8 flex flex-col lg:flex-row gap-6">
        <DashboardSidebar />
        <main className="bg-primary-content/25 rounded-lg shadow-md w-full grow p-6 relative min-h-[calc(100vh-128px)]">
          {children}
        </main>
      </div>
    </>
  );
}
