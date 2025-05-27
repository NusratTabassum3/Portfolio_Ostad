import React from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";
const OtherProject = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-4 mt-20 mb-20">
        <div className="flex-grow border-b border-gray-500 "></div>
        <div className="text-3xl">Other Project</div>
        <div className="flex-grow border-b border-gray-500 "></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 p-4">
        {/* project 1 */}
        <div className="flex items-start gap-4 ">
          <div>
            <img
              src="/salman.png"
              alt="Project"
              className="h-32 w-36 rounded-md "
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Project Name</h2>
            <p className="text-sm text-[#1F1F1F]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              nostrum eum nobis! Rem non sunt officia illum.
            </p>
            <div className="border-b border-[#1F1F1F] w-full" />
            <ul className="list-none flex flex-wrap gap-3 text-sm text-[#1F1F1F]">
              <li className="">HTML</li>
              <li className="">CSS</li>
              <li className="">JS</li>
              <li className="">Figma</li>
              <li className="">React</li>
            </ul>
            <div className="flex gap-4 text-[#1F1F1F]">
              <Github className="w-4 h-4" />
              <SquareArrowOutUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* project 2 */}
        <div className="flex items-start gap-4 ">
          <div>
            <img
              src="/salman.png"
              alt="Project"
              className="h-32 w-36 rounded-md "
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Project Name</h2>
            <p className="text-sm text-[#1F1F1F]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              nostrum eum nobis! Rem non sunt officia illum.
            </p>
            <div className="border-b border-[#1F1F1F] w-full" />
            <ul className="list-none flex flex-wrap gap-3 text-sm text-[#1F1F1F]">
              <li className="">HTML</li>
              <li className="">CSS</li>
              <li className="">JS</li>
              <li className="">Figma</li>
              <li className="">React</li>
            </ul>
            <div className="flex gap-4 text-[#1F1F1F]">
              <Github className="w-4 h-4" />
              <SquareArrowOutUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* project 3 */}
        <div className="flex items-start gap-4 ">
          <div>
            <img
              src="/salman.png"
              alt="Project"
              className="h-32 w-36 rounded-md "
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Project Name</h2>
            <p className="text-sm text-[#1F1F1F]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              nostrum eum nobis! Rem non sunt officia illum.
            </p>
            <div className="border-b border-[#1F1F1F] w-full" />
            <ul className="list-none flex flex-wrap gap-3 text-sm text-[#1F1F1F]">
              <li className="">HTML</li>
              <li className="">CSS</li>
              <li className="">JS</li>
              <li className="">Figma</li>
              <li className="">React</li>
            </ul>
            <div className="flex gap-4 text-[#1F1F1F]">
              <Github className="w-4 h-4" />
              <SquareArrowOutUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* project 4 */}
        <div className="flex items-start gap-4 ">
          <div>
            <img
              src="/salman.png"
              alt="Project"
              className="h-32 w-36 rounded-md "
            />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Project Name</h2>
            <p className="text-sm text-[#1F1F1F]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
              nostrum eum nobis! Rem non sunt officia illum.
            </p>
            <div className="border-b border-[#1F1F1F] w-full" />
            <ul className="list-none flex flex-wrap gap-3 text-sm text-[#1F1F1F]">
              <li className="">HTML</li>
              <li className="">CSS</li>
              <li className="">JS</li>
              <li className="">Figma</li>
              <li className="">React</li>
            </ul>
            <div className="flex gap-4 text-[#1F1F1F]">
              <Github className="w-4 h-4" />
              <SquareArrowOutUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherProject;
