import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavItems from './navItems'

const navbar = () => {
  return (
    <nav className = "navbar">
        <Link href = "/">
          <div className = "flex items-center gap-2">
            <Image src = "/images/logo.svg" alt = "logo" width = {44} height = {46} />
          </div>
        </Link>
        <div className = "flex items-center gap-8">
            <NavItems />
            <p>Sign In</p>
        </div>
    </nav>
   
  )
}

export default navbar
