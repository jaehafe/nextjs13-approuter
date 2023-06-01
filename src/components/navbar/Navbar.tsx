'use client';

import React from 'react';
import Link from 'next/link';
// import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: 'Home',
    url: '/',
  },
  {
    id: 2,
    title: 'Portfolio',
    url: '/portfolio',
  },
  {
    id: 3,
    title: 'Blog',
    url: '/blog',
  },
  {
    id: 4,
    title: 'About',
    url: '/about',
  },
  {
    id: 5,
    title: 'Contact',
    url: '/contact',
  },
  {
    id: 6,
    title: 'Dashboard',
    url: '/dashboard',
  },
];

export default function Navbar() {
  return (
    <div>
      <Link href="/">Jaeha</Link>
      {links.map((link) => {
        return (
          <Link key={link.id} href={link.url}>
            {link.title}
          </Link>
        );
      })}
      <button onClick={() => console.log('logout')}>Logout</button>
    </div>
  );
}
