import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import NavBlock from "./NavBlock";

export default function NavHeader() {
  const menuItems = [
    {
      name: "About us",
      link: "/about",
    },
    {
      name: "Events",
      link: "/events",
    },
    {
      name: "Contact",
      link: "/contact",
    },
    {
      name: "Meet the team",
      link: "/team",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(1920);

  useEffect(() => {
    setWindowSize(window.innerWidth);
    window.addEventListener("resize", (e: Event) => {
      setWindowSize((e.target as Window).innerWidth);
    });
  }, []);

  return (
    <nav className="flex items-center justify-between flex-wrap p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/">
          <Image src="/logo.png" alt="OVRA Logo" width={75} height={50} />
        </Link>
      </div>
      {/* Button to show on mobile */}
      <div className="block sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 hover:text-white hover:border-white"
        >
          <div className="p-4 space-y-2 rounded shadow">
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
            <span className="block w-8 h-0.5 bg-gray-100"></span>
          </div>
        </button>
      </div>
      {}
      <div
        className={`w-full block flex-grow ${
          isOpen && windowSize < 726 ? "block bg-[#2b2b2b]" : "hidden"
        } sm:flex sm:items-center sm:w-auto`}
      >
        <div className="text-sm sm:flex-grow"></div>
        <div>
          {menuItems.map((menu) => (
            <Link
              href={menu.link}
              className="block text-black sm:inline-block  py-4 sm:mt-0 mr-16 text-5xl text-white text-center sm:text-3xl"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
