import logo from "../assets/logo.png";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {BsTwitter} from 'react-icons/bs'
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import {FaTelegramPlane,FaDiscord} from 'react-icons/fa'
let navItems = [
  { label: "Home", route: "/" },
  { label: "BUY", route: "buy" },
  { label: "CHART", route: "chart" },
  
  { label: "TOKEN INFO", route: "#tokeninfo" },
];

export default function Navbar() {
  return (
    // bg-[#14141f]
    <Popover className="relative bg-transparent z-10 py-2 px-10">
      <div className="">
        <div className="flex items-center justify-between  py-3  md:space-x-10">
          <img src={logo} className="h-10" alt="pt-img" />
          <Popover.Group
            as="nav"
            className="hidden space-x-10 mx-auto md:flex-grow md:flex md:justify-center"
          >
            {navItems.map((nav, i) => {
              return (
                <a
                  key={i}
                  href={nav.route}
                  className={`text-sm font-bold hover:text-[#e250e5]
                     
                     ${"text-white"}
                  `}
                >
                  {nav.label}
                </a>
              );
            })}
          </Popover.Group>
          <div className=" flex items-center gap-3 justify-end md:flex md:flex-1 lg:w-0">
          <a href="/"  className=' cursor-pointer  text-white text-xl hover:text-purple-700'>
              <FaTelegramPlane/>
              </a>
              <a href="/"  className=' cursor-pointer  text-white text-xl hover:text-purple-700'>
              <BsTwitter/>
              </a>
             
              <a href="/"  className=' cursor-pointer  text-white text-xl hover:text-purple-700'>
              < FaDiscord/>
              </a>
             
            {/* <img className="mx-2" src={icon} alt="pt-img" /> */}
            {/* <img className="mx-2" src={icon1} alt="pt-img" /> */}
            <a
              href="https://bitsea-dashboard.vercel.app/"
              className="mr-8 ml-3 hidden items-center space-x-2 whitespace-nowrap rounded-full  py-2 px-6 text-sm font-medium text-black bg-white hover:bg-gradient-to-r from-[#3C2B9E] to-[#8D08EB] cursor-pointer sm:flex md:mr-0"
            >
              <span>LAUNCH APP</span>
            </a>

            <div className=" md:hidden">
              <Popover.Button className=" inline-flex items-center justify-center  rounded-md  p-2">
                <span className="sr-only">Open menu</span>
                <Bars3Icon
                  className="h-6 w-6"
                  color="white"
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
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
        <Popover.Panel
          focus
          className="absolute right-6 left-2 top-0 origin-top-right transform py-2 transition md:hidden"
        >
          <div className=" rounded-lg bg-[#343444] shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="bg-black px-5 py-3">
              <div className="flex items-center justify-between">
                <div className="focus:border:0 flex items-center justify-center space-x-1 focus:outline-0 focus:ring-0">
                  <a
                    href="/"
                    className="flex items-center space-x-1  bg-gradient-to-l from-[#e250e5] to-[#4b50e6] bg-clip-text"
                  >
                    <img className="h-10 w-28" src={logo} alt='' />
                  </a>
                </div>
                <div className="-mr-2">
                  <Popover.Button className=" inline-flex items-center justify-center rounded-md  p-2">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon
                      className="h-6 w-6"
                      aria-hidden="true"
                      color="white"
                    />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className=" py-4 px-2">
              <div className="mb-2 grid grid-cols-1 gap-y-1 gap-x-1">
                {navItems.map((nav, i) => {
                  return (
                    <button
                      key={i}
                      href={nav.route}
                      className={`rounded-md py-2 px-2 text-base font-medium  text-white hover:bg-gray-primary hover:bg-gray-900
                        ${
                          i === 0
                            ? " bg-gray-900 text-[#e250e5] "
                            : "text-white"
                        }
                        `}
                    >
                      {/* false ? " text-pink-400 bg-gray-900 " : "" */}
                      {nav.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
