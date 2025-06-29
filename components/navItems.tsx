'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

const navItems = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-row gap-4 sm:gap-8 items-center">
      <Link href="/">
        <p className={pathname === '/' ? 'font-bold text-black ' : ''}>Home</p>
      </Link>
      <Link href="/companion">
        <p className={pathname === '/companion' ? 'font-bold text-black ' : ''}>Companion</p>
      </Link>
      <Link href="/my-journey">
        <p className={pathname === '/my-journey' ? 'font-bold text-black ' : ''}>My Journey</p>
      </Link>
    </div>
  )
}

export default navItems
