"use client"
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Footer() {
    const currentYear =  new Date().getFullYear()
    const path = usePathname()

  return (

    <footer className={`max-w-[1200px] mx-auto ${path == '/' ? "hidden" : ""}`}>
      <div className=" border-t lg:container lg:mx-auto px-5  text-xs flex lg:flex-row flex-col items-center  underline gap-7 py-8 w-full  border-gray-300 mt-14">
        <Link href="#">
          <div className='text-center'>Assigment-09</div>
        </Link>
        <Link href="/">
          <div className='text-center'>Server-Side and Client-Side Data Fatching</div>
        </Link>
        <Link href="#">
          <div className='text-center'>ALL Right reserved ©{currentYear}</div>
        </Link>
      </div>
    </footer>
  );
}
