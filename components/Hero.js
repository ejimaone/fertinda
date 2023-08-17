import React from "react";
import HeroPng from "/public/hero.jpg";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

function Hero() {
  return (
    <div className="bg-cover bg-center h-[91.7vh] bg-hero-background">
      <div className="h-full  text-white static z-50 flex justify-center items-center text-center px-[4%] ">
        <div className="flex flex-col justify-center items-center gap-10">
          <motion.h1
            transition={{ duration: 2 }}
            initial={{ marginTop: -200, opacity: 0 }}
            animate={{ marginTop: 10, opacity: 1 }}
            className="text-3xl  lg:text-6xl 2xl:text-8xl lg:leading-none tracking-tighter"
          >
            Revolutionize your farming with precision <br /> fertilizer
            application
          </motion.h1>
          <motion.p
            initial={{ x: "100vh" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="lg:text-2xl 2xl:text-3xl lg:tracking-tight tracking-tighter"
          >
            Get personalized recommendations based on up-to-date weather and
            soil data,
            <br className="hidden lg:block" /> and optimize your crop yields
            with expert guidance and resources
          </motion.p>

          <button className="hover:cursor-pointer bg-yellow-400 text-sm lg:text-2xl flex items-center gap-2 px-4 lg:px-10 py-3 lg:py-4 rounded-2xl active:shadow-2xl active:scale-x-[99%] ">
            <div>Join the precision farming movement</div>

            <div>
              <AiOutlineArrowRight />
            </div>
          </button>
        </div>
      </div>
      {/* <Image src={HeroPng} alt="hero png" height={500} width={500} /> */}
    </div>
  );
}

export default Hero;
