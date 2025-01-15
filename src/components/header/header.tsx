"use client"
import Link from 'next/link'
import React from 'react'
import NavigationForMobile from '../NavigationForMobile/NavigationForMobile';
import { TbMenu } from "react-icons/tb";
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
const [showMenu,setShowMenu] = useState<boolean>(false)
const path = usePathname()
    
  return (
    <div className={`bg-white ${path == "/" ? "hidden" : ""}`}>
      <header className="px-5 lg:px-12 py-5 gap-5 max-w-[1100px] mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-semibold">
         {path.includes('server')? "Server-Side-Data-Fatching" : "Client-Side-Data-Fatching"} 
        </h1>
        <div className="md:flex hidden gap-3 items-center">
          <Link href="/">
            <div className="hover:bg-[#1879B9] px-3.5 py-2 rounded-md hover:text-white font-medium">
              Home
            </div>
          </Link>
          <Link href="/server-side-code">
            <div className="hover:bg-[#1879B9] px-3.5 py-2 rounded-md hover:text-white font-medium">
              Server Side
            </div>
          </Link>
          <Link href="/client-side-code">
            <div className="hover:bg-[#1879B9] px-3.5 py-2 rounded-md hover:text-white font-medium">
              Client Side
            </div>
          </Link>
        </div>
        <div className="md:hidden">
          <TbMenu onClick={() => setShowMenu(true)} className="size-6" />
        </div>
        <NavigationForMobile showMenu={showMenu} setShowMenu={setShowMenu} />
      </header>
    </div>
  );
}
