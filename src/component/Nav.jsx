import { Menu } from "lucide-react";
import React from "react";

const Nav = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-around items-center">
          <div className="">
            <h3 className="">Portfolio</h3>
          </div>

          <div className="">
            <ul className="hidden md:flex justify-between items-center gap-3">
              <li className="">About</li>
              <li className="">Exprience </li>
              <li className="">Project </li>
              <li className="">Contact </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <a href="/Nusrat-Tabassum-Resume.pdf" download>
              <button className="border border-gray-500  py-1 px-2 rounded-sm">
                Resume
              </button>
            </a>

            <button className="border border-gray-500  py-1 px-2 rounded-sm">
              Hire Me{" "}
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
