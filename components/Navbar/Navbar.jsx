import React, {useState} from "react";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import CtaButton from "../../layouts/Buttons/CtaButton";
import Link from "next/link";






export default function Head() {
  
  const [open, setOpen]=useState(false);
  const OpenMenu = ()=>setOpen(!open)
  return (
    <>
      <div className="bg-[#000] z-50 py-3">
        <div className="container mx-auto flex items-center px-2 flex-col md:flex-row">
          <div className="w-full flex items-center justify-between md:w-6/12">
            <Link href='/'>
              <a  className="text-white uppercase text-2xl font-bold first-letter:text-3xl first-letter:text-[#24A776]">StanFord</a> 
            </Link>
            <div className="text-white md:hidden" onClick={OpenMenu}>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              
            </div>

          </div>
          <div className="w-full relative   md:w-6/12">
            <ul className={open ? "flex text-center transition-all mt-10 mb-6 bg-[#000]  flex-col items-center justify-center md:flex-row md:mt-0 md:mb-0 md:justify-end" : "flex flex-col justify-end transition-all overflow-hidden h-0 md:flex-row md:h-[100%]"}>
              <li>
                <Link href='/' >
                  <a onClick={OpenMenu}  className="text-white ml-4 capitalize text-xl transition-all hover:text-[#24A776]">Home</a>
                </Link>
              </li>
              <li>
                <Link href='/courses' >
                  <a onClick={OpenMenu} className="text-white ml-4 capitalize text-xl transition-all hover:text-[#24A776]">Courses</a>
                </Link>
              </li>
              <li>
                <Link href='/teachers' >
                  <a onClick={OpenMenu} className="text-white ml-4 capitalize text-xl transition-all hover:text-[#24A776]">Teachers</a>
                </Link>
              </li>
              <li>
                <Link href='/about' >
                  <a onClick={OpenMenu} className="text-white ml-4 capitalize text-xl transition-all hover:text-[#24A776]">About</a>
                </Link>
              </li>
              <li>
                <Link href='/contact' >
                  <a onClick={OpenMenu} className="text-white ml-4 capitalize text-xl transition-all hover:text-[#24A776]">Contact</a>
                </Link>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </>
    
  );
}
