"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import siteLogo from '@/assets/site-logo.png';
import { signOut } from 'next-auth/react';

interface NavLink {
  title: string;
  href: string;
}

const navLinks: NavLink[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Donations", href: "/donations" },
  { title: "Contact", href: "/contact" }
]

const Navbar = ({ session }: { session: boolean }) => {

  return (
    <div className="bg-primary-content/90 backdrop-blur-sm z-50 sticky top-0">
      <div className="navbar justify-between max-w-screen-xl mx-auto font-bold relative">
        <Link href='/' className="mr-5">
          <div className='max-w-[40px] mr-3'>
            <Image alt='site-logo' src={siteLogo} width={100} />
          </div>
          <p className='text-2xl lg:text-3xl text-primary font-semibold'>Helping Hand</p>
        </Link>
        <div className='flex gap-1'>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-7 h-7 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {
                navLinks.map((link, index) => (
                  <li key={index} className='text-primary rounded-lg'>
                    <Link href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))
              }

              {
                session ?
                  <>
                    <li className='text-primary rounded-lg'>
                      <Link href='/dashboard'>
                        Dashboard
                      </Link>
                    </li>
                    <li className='text-red-600 rounded-lg'>
                      <button onClick={() => signOut()}>
                        Logout
                      </button>
                    </li>
                  </>
                  :
                  <li className='text-primary rounded-lg'>
                    <Link href='/login'>
                      Login
                    </Link>
                  </li>
              }
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0 gap-1">
            {
              navLinks.map((link, index) => (
                <li key={index} className='text-primary rounded-lg'>
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </li>
              ))
            }
            {
              session ?
                <>
                  <li className='text-primary rounded-lg'>
                    <Link href='/dashboard'>
                      Dashboard
                    </Link>
                  </li>
                  <li className='text-red-600 rounded-lg border-2 border-red-600'>
                    <button onClick={() => signOut()}>
                      Logout
                    </button>
                  </li>
                </>
                :
                <li className='text-primary rounded-lg'>
                  <Link href='/login'>
                    Login
                  </Link>
                </li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;