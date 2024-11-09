import {
  Bars3Icon,
  BellIcon,
  Cog8ToothIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';

const Header = () => {
  const [sidebarState, setSidebarState] = useState(false);
    const location = useLocation()
  return (
    <>
      <div className="flex flex-row w-full border-b p-5 pl-10 pr-10 ">
        <div className="flex flex-row justify-center items-center">
          <img
            className="w-12 h-12"
            src="/logo.png"
          ></img>
          <p className="text-center text-xl pl-1 font-bold text-gray-600">
            BloodLink
          </p>
        </div>
        <nav className="md:flex flex-row space-x-5 justify-center items-center text-md font-medium hidden w-1/2">
          <a href="/">Home</a>
          <a href="/404">Donate</a>
          <a href="/404">About Us</a>
          <a href="/404">FAQ</a>
          <a href="/404">Contact Us</a>
          <a href="/feedback">Feedback</a>
        </nav>
        <div className="md:flex flex-row justify-end items-center w-full space-x-2 hidden">
          <a className="rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-md hover:border-gray-200 p-2 border border-white">
            <BellIcon width={24} height={24} />
          </a>
          <a className="rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-md hover:border-gray-200 p-2 border border-white">
            <Cog8ToothIcon width={24} height={24} />
          </a>
          <a
            href={location.pathname.includes("profile") ? "/profile" : "/login"}
            className="rounded-full bg-gray-300 flex items-center justify-center p-2 hover:cursor-pointer hover:shadow-md hover:border-gray-200 border border-white"
          >
            {location.pathname.includes("profile") ? <UserIcon width={24} height={24}/> : "Login"}
          </a>
        </div>
        <div className="md:hidden flex-row justify-end items-center w-full space-x-2 flex">
          <a
            className="rounded-full flex items-center justify-center hover:cursor-pointer hover:shadow-md hover:border-gray-200 p-2 border border-white"
            onClick={() => {
              setSidebarState(!sidebarState);
            }}
          >
            <Bars3Icon width={24} height={24} />
          </a>
        </div>
      </div>
      <div
        className={cn(
          sidebarState ? 'flex absolute' : 'hidden',
          'flex-col h-full w-full bg-white',
        )}
      >
        <nav className="flex flex-col space-y-5 justify-center items-center text-md font-medium mt-5 text-center">
          <a className="p-2 border-b w-1/2" href="/">
            Home
          </a>
          <a className="p-2 border-b w-1/2" href={location.pathname.includes("profile") ? "/profile/mobile" : "/login"}>
          {location.pathname.includes("profile") ? "Profile" : "Login"}
          </a>
          <a className="p-2 border-b w-1/2" href="/404">
            Donate
          </a>
          <a className="p-2 border-b w-1/2" href="/404">
            About Us
          </a>
          <a className="p-2 border-b w-1/2" href="/404">
            FAQ
          </a>
          <a className="p-2 border-b w-1/2" href="/404">
            Contact Us
          </a>
          <a className="p-2 border-b w-1/2" href="/feedback">
            Feedback
          </a>
        </nav>
      </div>
    </>
  );
};
export default Header;
