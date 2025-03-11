import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const smallRectangles = Array.from({ length: 5 }).map((_, index) => (
    <motion.img
      key={`small-${index}`}
      src="/Small-Rectangle.png"
      className="absolute w-6 sm:w-8 opacity-75 left-0 top-6"
      initial={{ x: 0, y: -50, opacity: 0 }}
      animate={{
        x: [0, Math.random() * 300],
        y: [-50, 600],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        // ease: "ease-in-out",
      }}
    />
  ));

  const largeRectangles = Array.from({ length: 3 }).map((_, index) => (
    <motion.img
      key={`large-${index}`}
      src="/Rectangle.png"
      className="absolute w-[102px]  opacity-75 bottom-0"
      initial={{ x: "50%", y: "100%", opacity: 0 }}
      animate={{
        x: ["50%", "300%"],
        y: ["100%", "-250%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: Math.random() * 6 + 4,
        repeat: Infinity,
        // ease: "ease-in-out",
      }}
    />
  ));

  return (
    <section className="bg-[#F2EDE4] min-h-[660px] mt-[60px] flex justify-center items-center relative overflow-hidden">
      {smallRectangles}
      {largeRectangles}

      <div className="w-full max-w-2xl text-center flex flex-col items-center gap-6">
        <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold font-[Merriweather Sans] leading-tight relative flex flex-wrap justify-center items-center gap-2 text-center">
          One app for all your{" "}
          <span className="relative inline-block bg-[#F2E205] px-2  rounded-full shadow-md overflow-hidden w-[180px] sm:w-[220px] md:w-[280px]">
            <motion.div
              className="flex space-x-4"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            >
              <span className="uppercase">stablecoins</span>
            </motion.div>
          </span>{" "}
          needs.
        </h1>

        <p className="text-[18px] sm:text-[20px] font-[Montserrat] px-4">
          Send crypto to anyone, anywhere with just their phone number.
        </p>

        <button className="flex gap-[6px] items-center text-[16px] bg-[#0F0140] px-5 py-3 rounded-lg text-[#E7E6E7] font-[Montserrat] my-10 cursor-pointer shadow-md hover:bg-[#0A002F] transition-all">
          Get on Playstore
          <img src="/icons8-playstore-48.png" className="w-[20px]" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
