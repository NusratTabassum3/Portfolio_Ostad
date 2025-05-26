import React from "react";
import { ChevronsDown } from "lucide-react";

import Nav from "./Nav";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section className=" ">
        <div className="flex flex-col justify-center items-center min-h-screen gap-3">
          <h1 className="text-4xl">Nusrat Tabassum</h1>
          <p className="">I design and build things.</p>
          <ChevronsDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
