"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { ReactNode } from 'react';
import { FaChartLine, FaDollarSign, FaHome, FaPlus, FaUser } from 'react-icons/fa';

interface IDashboardSidebar {
  role: string
}

interface IDashboardLink {
  title: string;
  href: string;
  icon: ReactNode
}

const dashboardLinks: IDashboardLink[] = [
  { title: "Dashboard", href: "/dashboard", icon: <FaHome className='w-5 h-5' /> },
]

const adminLinks: IDashboardLink[] = [
  { title: "Statistics", href: "/admin/statistics", icon: <FaChartLine className='w-5 h-5' /> },
  { title: "All Donations", href: "/admin/all-donations", icon: <FaDollarSign className='w-5 h-5' /> },
  { title: "Add Donation", href: "/admin/add-donation", icon: <FaPlus className='w-5 h-5' /> },
  { title: "All Users", href: "/admin/all-users", icon: <FaUser className='w-5 h-5' /> },
]

const userLinks: IDashboardLink[] = [
  { title: "Donation History", href: "/dashboard/donation-history", icon: <FaDollarSign className='w-5 h-5' /> },
]

const DashboardSidebar = ({ session }: { session: IDashboardSidebar }) => {
  const pathName = usePathname();
  const links = dashboardLinks.concat(session?.role === "admin" ? adminLinks : userLinks);

  return (
    <aside className='bg-primary-content/25 rounded-lg shadow-md w-full flex-none lg:w-[260px] relative'>
      <div className='flex flex-col sm:flex-row lg:flex-col gap-4 p-6 rounded-lg sticky top-16'>
        <ul className="flex flex-wrap md:flex-col gap-3 text-base font-medium">
          {
            links.map((link, index) => (
              <li key={index} className={`border-2 border-primary rounded-md flex-grow hover:bg-primary hover:text-white hover:shadow hover:scale-105 transition-all ${pathName === link.href ? "bg-primary text-white" : "text-primary"}`}>
                <Link href={link.href} className="flex items-center p-2 space-x-3 rounded-md justify-center md:justify-start">
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </aside >
  );
};

export default DashboardSidebar;