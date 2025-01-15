"use client";
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const router = useRouter();
    const links = [
        {
            title: 'Home',
            path:'/'
        },
        {
            title: 'about',
            path: '/about'
        },
        {
            title: 'blog',
            path: '/blog'
        }
    ]

    const handle = () => {
       router.push('/about');
    }

    if (pathName.includes('dashboard')) {
        return <div className='bg-emerald-400'>
            <h1 className='text-3xl font-bold'>Next.JS</h1>
        </div>
    }
    return (
        <nav className="flex items-center justify-between px-10 gap-6 shadow-lg mt-3 mb-3 pb-2">
  <h1 className='text-3xl font-bold'>Next.JS</h1>

  
         <ul className='flex items-center gap-6'>
            {links.map(link => <Link key={link.title} href={link.path}  className={`${pathName === link.path && 'text-red-500 font-semibold'}`}>{link.title}</Link>)}
         </ul>

         {/* <div className='flex items-center gap-2'>
            <Link href={'/dashboard'} className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center'>U</Link>
             <div>
             <p className='text-xs'>Umayer Hossain</p>
             <p className='text-xs'>umayerpro174@gmail.com</p>
             </div>
         </div> */}

         <button onClick={handle} className='bg-orange-500 p-2'>Login</button>
      </nav>
    );
};

export default Navbar;