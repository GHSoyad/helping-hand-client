import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';
import siteLogo from '@/assets/site-logo.png';

interface FooterLink {
  name: string;
  href: string;
  icon?: React.ReactNode;
}

interface FooterLinks {
  [key: string]: FooterLink[];
}

const footerLinks: FooterLinks = {
  "Learn More": [
    { name: "About Us", href: "/about" },
    { name: "Our Mission", href: "/mission" },
    { name: "Impact Stories", href: "/impact" }
  ],
  "Get Involved": [
    { name: "Donate Now", href: "/donate" },
    { name: "Volunteer Opportunities", href: "/volunteer" },
    { name: "Join Our Community", href: "/join" }
  ],
  "Resources": [
    { name: "FAQ", href: "/faq" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ]
};

const socialLinks: FooterLink[] = [
  { name: "FaceBook", href: "/faq", icon: <FaFacebook /> },
  { name: "Github", href: "/blog", icon: <FaGithub /> },
  { name: "LinkedIn", href: "/contact", icon: <FaLinkedin /> }
]

const Footer: React.FC = () => {

  return (
    <footer className='bg-primary-content/25'>
      <div className="max-w-screen-xl mx-auto flex flex-col justify-between py-10 px-2 space-y-8 lg:flex-row lg:space-y-0">
        <div>
          <Link rel="noopener noreferrer" href="#" className="flex justify-center space-x-3">
            <div className="flex items-center justify-center w-12 h-12 rounded-full">
              <Image alt='site-logo' src={siteLogo} width={100} />
            </div>
            <span className='self-center text-3xl text-primary font-semibold'>Helping Hand</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-y-8 sm:grid-cols-4">
          {Object.keys(footerLinks).map((title, index) => (
            <div key={index} className="space-y-3 ml-10">
              <h3 className="uppercase footer-title">{title}</h3>
              <ul className="space-y-1">
                {footerLinks[title].map((link, subIndex) => (
                  <li key={subIndex}>
                    <Link href={link.href} className='link link-hover' rel="noopener noreferrer">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="space-y-3 ml-5">
            <div className="uppercase footer-title">Social media</div>
            <div className="flex justify-start space-x-3 text-2xl text-primary">
              {
                socialLinks.map((link, index) => (
                  <Link key={index} rel="noopener noreferrer" href={link.href} target='_blank' title={link.name} className="flex items-center p-1 hover:scale-110 transition-all">
                    {link.icon}
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      <div className="divider my-0"></div>
      <p className="py-6 text-sm text-center">© 2024 Helping Hand - All rights reserved.</p>
    </footer>
  );
};

export default Footer;