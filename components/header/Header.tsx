import Link from 'next/link'
import React from 'react'
import Menu from './Menu'
import Image from 'next/image'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-base-300">
          <a href="/">
            <Image
              src="/images/logo.png"
              height="70"
              width="70"
              alt="Gamezone"
            />
          </a>
          <Menu />
        </div>
      </nav>
    </header>
  )
}

export default Header
