import { Menu } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-around items-center">
          <div>
            <h3 className="cursor-pointer hover:text-sky-600">Portfolio</h3>
          </div>

          <ul className="hidden md:flex justify-between items-center gap-3">
            <li className="relative cursor-pointer text-gray-800 hover:text-sky-600 group">
              About
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative cursor-pointer text-gray-800 hover:text-sky-600 group">
              Exprience
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative cursor-pointer text-gray-800 hover:text-sky-600 group">
              Project
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
            <li className="relative cursor-pointer text-gray-800 hover:text-sky-600 group">
              Contact
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-sky-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          </ul>

          <div className="hidden md:block">
            <a href="/Nusrat-Tabassum-Resume.pdf" download>
              <button className="border border-gray-500 py-1 px-2 rounded-sm hover:bg-sky-600 hover:text-white transition-colors duration-300">
                Resume
              </button>
            </a>

            <button className="border border-gray-500 py-1 px-2 rounded-sm ml-3 hover:bg-sky-600 hover:text-white transition-colors duration-300">
              Hire Me
            </button>
          </div>

          <div className="block md:hidden">
            <Menu />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
