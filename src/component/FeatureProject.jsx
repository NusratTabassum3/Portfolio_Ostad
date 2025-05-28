import React from "react";
import { Github, SquareArrowOutUpRight } from "lucide-react";
import OtherProject from "./OtherProject";
import { motion } from "framer-motion";

function FeatureProject() {
  return (
    <div>
      <section className="bg-[#F2F2F2] py-8 px-8">
        <div className="max-w-5xl mx-auto min-h-screen ">
          <div className=" flex justify-center items-center gap-2">
            <div className="flex grow border-b border-gray-500"></div>
            <div className="text-3xl">Feature Project </div>
            <div className="flex grow border-b border-gray-500"></div>
          </div>

          {/* project 1 start */}

          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col  sm:flex-row justify-evenly items-center  w-full mt-20 mb-20"
          >
            {/* Left Side - Image */}
            <div className="mb-5 w-1/2">
              <img src="/salman.png" alt="" className="h-56 w-5/6 rounded-md" />
            </div>

            {/* Right Side - Text Content */}
            <div className="w-1/2 flex flex-col gap-3">
              <h2 className="text-2xl">Project Name</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                nostrum eum nobis! Rem non sunt officia illum, vel, quibusdam
                dicta optio facere rerum doloribus perferendis. Quas,
                praesentium. Incidunt, doloremque rerum?
              </p>
              <div className="border-b border-gray-500 w-full"></div>

              {/* Tech List */}
              <ul className="list-none flex gap-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Figma</li>
                <li>React</li>
              </ul>

              {/* Icons */}
              <div className="flex gap-4">
                <Github />
                <SquareArrowOutUpRight />
              </div>
            </div>
          </motion.div>

          {/* project 1 end  */}

          {/* project 2 start */}

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="flex flex-col  sm:flex-row justify-evenly items-center  w-full gap-10"
          >
            {/* Left Side - Image */}
            <div className="order:5 sm:order-10 w-1/2 ">
              <img src="/salman.png" alt="" className="h-56 w-5/6 rounded-md" />
            </div>

            {/* Right Side - Text Content */}
            <div className="order:10   sm:order-5  w-1/2 flex flex-col gap-3  sm:items-end">
              <h2 className="text-2xl">Project Name</h2>
              <p className="sm:text-end">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                nostrum eum nobis! Rem non sunt officia illum, vel, quibusdam
                dicta optio facere rerum doloribus perferendis. Quas,
                praesentium. Incidunt, doloremque rerum?
              </p>
              <div className="border-b border-gray-500 w-full"></div>

              {/* Tech List */}
              <ul className="list-none flex gap-5">
                <li>HTML</li>
                <li>CSS</li>
                <li>JS</li>
                <li>Figma</li>
                <li>React</li>
              </ul>

              {/* Icons */}
              <div className="flex gap-4">
                <Github />
                <SquareArrowOutUpRight />
              </div>
            </div>
          </motion.div>

          {/* project 2 end  */}

          <OtherProject></OtherProject>
        </div>
      </section>
    </div>
  );
}

export default FeatureProject;
