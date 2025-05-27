import React from "react";
import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto mt-10 min-h-screen">
        <div className="flex justify-center items-center gap-5">
          <div className="flex grow border-b border-gray-500"></div>
          <div className="text-3xl">Contact</div>
          <div className="flex grow border-b border-gray-500"></div>
        </div>

        <div className="flex flex-col gap-10 justify-center items-center mt-20 ">
          <p className="text-center">
            I am currently seeking employment, and I would appreciate it if you{" "}
            <br />
            could contact me with any available job opportunities.
          </p>

          <button className="border border-[#C4C4C4] px-5 py-2 rounded-lg">
            Write Massage
          </button>
        </div>

        <div className="flex flex-col gap-5 justify-center items-center mt-32">
          <div className="flex gap-4 text-[#1F1F1F]">
            <Github className="w-8 h-8 stroke-[1] " />
            <Linkedin className="w-8 h-8 stroke-[1]" />
          </div>

          <div className="">
            <p className="text-[#1F1F1F]">Nusrat Tabassum - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
