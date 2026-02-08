'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Header = () => {
    const pathName = usePathname()
  return (
    <header>
    <div className='main-container inner'>
        <Link href={'/'} className='text-lg font-bold tracking-tight text-white hover:text-white/90'>
        PulseX
        </Link>
        <nav>
            <Link href={'/'} className={cn('nav-link', {
                'is-active' : pathName === '/',
                'is-home': true
            })}>   
            Home
            </Link>
            <p>Search Modal</p>
            <Link href={'/coins'} 
            className={cn('nav-link', {
                'is-active' : pathName === '/coins',
               
            })}
            >All Coins</Link>
        </nav>
    </div>
    </header>
  )
}

export default Header