import React from "react";
import { ChevronsDown } from "lucide-react";
import { motion } from "motion/react";

import Nav from "./Nav";
const Home = () => {
  return (
    <div>
      <Nav></Nav>
      <section className=" ">
        <div className="flex flex-col justify-center items-center min-h-screen gap-3">
          <motion.h1
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-4xl"
          >
            Nusrat Tabassum
          </motion.h1>
          <motion.p
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.5 }}
            className=""
          >
            I design and build things.
          </motion.p>
          <ChevronsDown />
        </div>
      </section>
    </div>
  );
};

export default Home;
