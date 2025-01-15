"use client"
import React, { useEffect,useRef } from 'react'
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { AiOutlineClose } from "react-icons/ai";

type props = {
  showMenu:boolean
  setShowMenu: (value:boolean) => void
};
function NavigationForMobile({ showMenu, setShowMenu}:props ) {
  const scrollableContentRef = useRef<HTMLDivElement | null>(null);
  const path = usePathname();
  useEffect(() => {
    if (scrollableContentRef.current) {
      if (!showMenu) {
        enableBodyScroll(scrollableContentRef.current);
      } else {
        disableBodyScroll(scrollableContentRef.current);
      }
    }

    return () => {
      if (scrollableContentRef.current) {
        enableBodyScroll(scrollableContentRef.current); // Cleanup on unmount
      }
    };
  }, [showMenu]);
  return (
    <section
      className={`height transition-all duration-500 overflow-x-hidden border-t border-gray-500 bg-white fixed px-3 right-0  bottom-0 z-30  w-[80vw] md:hidden ${
        showMenu ? "" : "translate-x-full"
      }  `}
      ref={scrollableContentRef}
    >
        <div className='flex justify-end mt-4 '>
          <AiOutlineClose onClick={()=>setShowMenu(false)} className='size-5' />
        </div>
      <div className="flex gap-3 items-center text-sm text-gray-500 border-b py-5 border-gray-300  ">
        <div className="flex  flex-col text-sm text gap-3 py-5  ">
          <Link href="/">
            <p
              onClick={() => setShowMenu(false)}
              className={`hover:bg-[#f5f5f5] p-2.5`}
            >
              Home
            </p>
          </Link>
          <Link href="/server-side-code">
            <p
              onClick={() => setShowMenu(false)}
              className={`hover:bg-[#f5f5f5] p-2.5 ${
                path.includes("/server-side-code")
                  ? "underline"
                  : "no-underline"
              }`}
            >
              Server-Side-Data-Fecthing
            </p>
          </Link>
          <Link href="/client-side-code">
            <p
              onClick={() => setShowMenu(false)}
              className={`hover:bg-[#f5f5f5] p-2.5 ${
                path.includes("/client-side-code")
                  ? "underline"
                  : "no-underline"
              }`}
            >
              Client-Side-Data-Fecthing
            </p>
          </Link>
        </div>
      </div>
      <button
        onClick={() => setShowMenu(false)}
        className="w-full py-2.5 mt-8 bg-[#1879B9] hover:bg-[#115f93] text-white rounded-md"
      >
        Close
      </button>
    </section>
  );
}

export default NavigationForMobile