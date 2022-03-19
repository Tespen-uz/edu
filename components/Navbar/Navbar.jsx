import { Fragment } from "react";
import { useTranslations } from "next-intl";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import LocaleSwitcher from "../LocaleSwitcher/LocaleSwitcher";

const links = ["about", "teachers", "courses", "news", "contact"];

export default function Navbar() {
  const t = useTranslations("global.nav");

  return (
    <Popover className="sticky top-0 z-[1000] bg-gray-100 ">
      <div className="px-5 lg:px-4 container mx-auto w-full ">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="text-3xl text-gray-600 font-bold">Stanford<span className="text-red-400" >School</span></a>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-gray-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bgwhite focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <Popover.Group
              as="nav"
              className="hidden md:flex space-x-10 md:items-center"
            >
              {links.map((item, index) => (
                <Link href={`/${item}`} key={index}>
                  <a className="text-base font-medium text-gray-600 hover:text-gray-900">
                    {t(item)}
                  </a>
                </Link>
              ))}
              <LocaleSwitcher />
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
        <Popover.Panel className="absolute  z-10  top-0 right-0 inset-x-0 md:hidden">
          <div className="bg-gray-100 z-10 mx-auto rounded-lg shadow-lg">
            <div className="pt-3 pb-1 px-5">
              <div className="flex items-center justify-between">
                <p className="text-gray-600 text-2xl font-bold ">
                  Stanford<span className="text-red-400" >School</span>
                </p>
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
                {links.map((link, index) => (
                  <Link href={`/${link}`} key={link} >
                  <a className="my-3 text-base font-medium text-gray-600 hover:text-gray-900 whitespace-nowrap">
                    {t(link)}
                  </a>
                </Link>
                ))}
                <span className="mx-auto">
                  <LocaleSwitcher />
                </span>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
