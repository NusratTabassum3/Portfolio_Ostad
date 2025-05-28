import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <section className="m-10 ">
        <div className="max-w-5xl mx-auto min-h-screen ">
          <div className="flex justify-center items-center gap-4">
            <div className="flex-grow border-b border-gray-500 "></div>
            <div className="text-2xl">Experience</div>
            <div className="flex-grow border-b border-gray-500 "></div>
          </div>

          {/* company 1 */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col  md:flex-row justify-around md:items-center gap-10 mt-16 "
          >
            {/* Company Info */}
            <div className=" md:flex flex-col justify-center items-center w-1/3">
              <h3 className="text-lg font-semibold">Frontend Development</h3>
              <h4 className="text-md">Solutya Pvt. Ltd.</h4>
              <div className=" hidden md:block w-full border-b border-gray-500"></div>
              <p className="text-sm">September 2024 - January 2025</p>
            </div>

            {/* Responsibilities */}
            <div className="md:border-l border-gray-500 px-6 ">
              <ul className="list-disc space-y-2 text-sm pl-4">
                <li>
                  Developed web frontends with HTML, CSS, Tailwind CSS and
                  React.js. Built and optimized user-facing features and backend
                  services.
                </li>
                <li>
                  Implemented responsive UI components using Tailwind CSS,
                  ensuring cross-device compatibility and smooth UX.
                </li>
                <li>
                  Collaborated in Agile teams using Git and GitHub for version
                  control and code collaboration.
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="block w-full border-b border-gray-500 m-8 md:hidden"></div>
          {/* company 2 */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col items-start md:flex-row justify-around md:items-center gap-10 md:mt-40"
          >
            {/* Responsibilities */}
            <div className="order-2 md:order-1 md:border-r border-gray-500 px-6 ">
              <ul className="list-disc space-y-2 text-sm pl-4">
                <li>
                  Developed web frontends with HTML, CSS, Tailwind CSS and
                  React.js. Built and optimized user-facing features and backend
                  services.
                </li>
                <li>
                  Implemented responsive UI components using Tailwind CSS,
                  ensuring cross-device compatibility and smooth UX.
                </li>
                <li>
                  Collaborated in Agile teams using Git and GitHub for version
                  control and code collaboration.
                </li>
              </ul>
            </div>

            {/* Company Info */}
            <div className="order-1 lg:order-2 md:flex flex-col justify-center items-center w-1/3">
              <h3 className="text-lg font-semibold">Frontend Development</h3>
              <h4 className="text-md">Solutya Pvt. Ltd.</h4>
              <div className=" hidden md:block w-full border-b border-gray-500"></div>
              <p className="text-sm">September 2024 - January 2025</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
