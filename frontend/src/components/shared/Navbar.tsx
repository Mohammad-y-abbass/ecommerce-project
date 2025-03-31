'use client';

import Link from 'next/link';

import { useState } from 'react';

import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import Badge from '@mui/material/Badge';

import navlinks from '@/utils/navlinks';
import MobileNav from './mobileNav';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200 py-5'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        <div className='flex items-center gap-10'>
          <Link href='/' className='flex items-center gap-2'>
            <ShoppingBagIcon />
            <span className='text-xl font-bold tracking-wider'>LOGO</span>
          </Link>

          <nav className='hidden lg:flex items-center gap-8'>
            {navlinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors relative group'
              >
                {item.name}
                <span className='absolute -bottom-1 left-0 w-0 h-px bg-gray-900 transition-all duration-300 group-hover:w-full'></span>
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          <div className='hidden md:flex items-center gap-2 border-b border-gray-300 px-2 py-1 hover:border-gray-500 transition-colors'>
            <SearchIcon />
            <input
              type='text'
              placeholder='Search...'
              className='bg-transparent outline-none text-sm w-32 lg:w-48 text-gray-700 placeholder:text-gray-400'
            />
          </div>

          <div className='hidden sm:flex items-center gap-3'>
            <div className='text-gray-700 hover:text-gray-900'>
              <Badge badgeContent={3} color='primary'>
                <ShoppingBagIcon />
              </Badge>
            </div>
          </div>

          <div
            className='lg:hidden text-gray-700 hover:text-gray-900'
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon />
          </div>
        </div>
      </div>
      <MobileNav
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Navbar;
