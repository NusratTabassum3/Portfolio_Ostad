import React from "react";

const Nav = () => {
  return (
    <div>
      <section className="max-w-6xl mx-auto mt-6">
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="">Portfolio</h3>
          </div>
          <div className="">
            <ul className="flex justify-between items-center gap-3">
              <li className="">About</li>
              <li className="">Exprience </li>
              <li className="">Project </li>
              <li className="">Contact </li>
            </ul>
          </div>
          <div className="">
            <button className="border border-gray-500  py-1 px-2 mr-2 rounded-sm">
              Resume
            </button>
            <button className="border border-gray-500  py-1 px-2 rounded-sm">
              Hire Me{" "}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
