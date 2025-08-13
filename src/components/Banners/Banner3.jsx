import React from "react";
import BannerImg from "../../assets/banner-bg.jpg";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utilities/Animation";
import { FaArrowRight } from "react-icons/fa";

const Banner3 = () => {
  return (
    <section className="py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0"
            style={{ backgroundImage: `url(${BannerImg})` }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 z-1" />

          {/* Content Container */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[500px]">
            {/* Empty div for spacing - takes half width on desktop */}
            <div className="hidden md:block"></div>

            {/* Content Section - centered with padding */}
            <div className="flex flex-col justify-center p-8 md:p-12 lg:p-16">
              <div className="text-center md:text-left space-y-6 max-w-[500px] mx-auto md:mx-0">
                <motion.h1
                  variants={FadeLeft(0.5)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Poppins] text-white"
                >
                  Our <span className="text-green-300">Fresh</span> Story
                </motion.h1>

                <motion.p
                  variants={FadeLeft(0.7)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-gray-100"
                >
                  At Fresh Harvest, we're passionate about bringing you the
                  freshest fruits from farm to table. Our journey began with a
                  simple mission: to provide healthy, delicious fruits while
                  supporting local farmers.
                </motion.p>

                <motion.div
                  variants={FadeLeft(0.9)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex justify-center md:justify-start"
                >
                  <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-md">
                    Learn More
                    <FaArrowRight className="text-sm" />
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner3;
