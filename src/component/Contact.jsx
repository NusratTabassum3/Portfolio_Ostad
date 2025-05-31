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

          <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md">
            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message here"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
            >
              Send
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center mt-32">
          <div className="flex gap-4 text-[#1F1F1F]">
            <a
              href="https://github.com/NusratTabassum3/Dream-Study-International"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition duration-300 transform hover:scale-110 hover:bg-gray-200 hover:text-sky-600"
            >
              <Github className="w-8 h-8 stroke-[1]" />
            </a>

            <a
              href="https://www.linkedin.com/in/nusrat-tabassum-43a677214/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full transition duration-300 transform hover:scale-110 hover:bg-gray-200 hover:text-sky-600"
            >
              <Linkedin className="w-8 h-8 stroke-[1]" />
            </a>
          </div>

          <div className="mb-16">
            <p className="text-[#1F1F1F]">Nusrat Tabassum - 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
