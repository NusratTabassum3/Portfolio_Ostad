import React from "react";

const Experience = () => {
  return (
    <div>
      <section className="m-10 ">
        <div className="max-w-5xl mx-auto ">
          <div className="flex justify-center items-center gap-4">
            <div className="flex-grow border-b border-gray-500 "></div>
            <div className="text-2xl">Experience</div>
            <div className="flex-grow border-b border-gray-500 "></div>
          </div>

          {/* company 1  */}

          <div className="flex justify-around items-center gap-10 m-20">
            <div className="flex flex-col justify-center items-end gap-2 w-2/5">
              <h3 className="">Frontend Development</h3>
              <h4 className="">Solutya Pvt. Ltd.</h4>
              <div className=" w-full border-b border-gray-500 "></div>
              <p className="text-sm">September 2024 - January 2025</p>
            </div>

            <div className=" border-l h-44 border-gray-500 px-10 ">
              <li className="">
                Developed web frontends with HTML,CSS,Tailwind CSS and React.js
                Built and optimized user-facing features and backend services
              </li>
              <li className="">
                Implemented responsive UI components using Tailwind CSS,
                ensuring cross-device compatibility and smooth UX.
              </li>
              <li className="">
                Collaborated in Agile teams using Git and GitHub for version
                control and code collaboration.
              </li>
            </div>
          </div>

          {/* company 2 */}

          <div className="flex justify-around items-center gap-10 m-20">
            <div className="flex justify-around items-center gap-10 ">
              <div className=" border-r h-44 border-gray-500 px-10 ">
                <li className="">
                  Developed web frontends with HTML,CSS,Tailwind CSS and
                  React.js Built and optimized user-facing features and backend
                  services
                </li>
                <li className="">
                  Implemented responsive UI components using Tailwind CSS,
                  ensuring cross-device compatibility and smooth UX.
                </li>
                <li className="">
                  Collaborated in Agile teams using Git and GitHub for version
                  control and code collaboration.
                </li>
              </div>

              <div className="flex flex-col justify-center items-start gap-2 w-2/5">
                <h3 className="">Frontend Development</h3>
                <h4 className="">Solutya Pvt. Ltd.</h4>
                <div className=" w-full border-b border-gray-500 "></div>
                <p className="text-sm">September 2024 - January 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
