import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";

export default function Navbar() {
  return (
    <Popover className="sticky top-0 z-50 bg-gray-100 ">
      <div className="px-5 lg:px-4 container mx-auto   w-full ">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a>
                <p className=" text-3xl text-gray-600 font-bold">StandFord</p>
              </a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Popover.Group
              as="nav"
              className="hidden md:flex space-x-10 md:items-center"
            >
              <Link href="/about">
                <a className="text-base font-medium text-gray-600 hover:text-gray-900">
                  About
                </a>
              </Link>
              <Link href="/teachers">
                <a className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Teacher
                </a>
              </Link>
              <Link href="/courses">
                <a className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Courses
                </a>
              </Link>
              <Link href="/contact">
                <a className="text-base font-medium text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </Link>
              <Link href="/register">
                <a className="text-base bg-primary font-medium text-white hover:text-gray-200 px-4 py-2 rounded-sm">
                  Register
                </a>
              </Link>
            </Popover.Group>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel className="absolute absolute z-10  top-0 right-0 inset-x-0 md:hidden">
          <div className="bg-gray-100 z-10 mx-auto rounded-lg shadow-lg ">
            <div className="pt-3 pb-1 px-5">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-3xl font-bold ">StandFord</p>
                <div className="">
                  <Popover.Button className="bg-gray-100 rounded-md relative left-3  p-2 inline-flex items-center justify-center text-gray-600 hover:text-gray-600 hover:bg-gray-100  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="py-5 px-5 ">
              <div className="mx-auto grid grid-cols-1 text-center">
                <Link href="/about">
                  <a className="my-3 text-base font-medium text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </Link>
                <Link href="/teachers">
                  <a className="my-3 text-base font-medium text-gray-600 hover:text-gray-900">
                    Teacher
                  </a>
                </Link>
                <Link href="/courses">
                  <a className="my-3 text-base font-medium text-gray-600 hover:text-gray-900">
                    Courses
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="my-3 text-base font-medium text-gray-600 hover:text-gray-900">
                    Contact
                  </a>
                </Link>
                <Link href="/register">
                  <a className="text-base bg-primary font-medium text-white hover:text-gray-200 px-4 py-2">
                    Register
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
