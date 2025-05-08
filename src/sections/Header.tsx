import LogoIcon from '../../public/assets/logo.svg';
import MenuIcon from '../../public/assets/icon-menu.svg';

import { Button } from '@/components/Button';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className='sticky top-0 border-b border-white/15 md:border-none py-4 z-20'>
      <div className='container'>
        <div className='flex justify-between items-center md:p-2.5 md:border border-white/15 max-w-2xl mx-auto rounded-xl backdrop-blur'>
          <div>
            <div className='inline-flex justify-center items-center w-10 h-10 border border-white/15 rounded-lg'>
              <LogoIcon className='w-8 h-8' />
            </div>
          </div>

          <div className='hidden md:block'>
            <nav className='flex gap-8 text-sm'>
              <Link
                href='#'
                className='text-white/70 hover:text-white transition duration-300'
              >
                Features
              </Link>
              <Link
                href='#'
                className='text-white/70 hover:text-white transition duration-300'
              >
                Developers
              </Link>
              <Link
                href='#'
                className='text-white/70 hover:text-white transition duration-300'
              >
                Pricing
              </Link>
              <Link
                href='#'
                className='text-white/70 hover:text-white transition duration-300'
              >
                Changelog
              </Link>
            </nav>
          </div>

          <div className='flex items-center gap-4'>
            <Button>Join waitlist</Button>
            <MenuIcon className='md:hidden' />
          </div>
        </div>
      </div>
    </header>
  );
};
