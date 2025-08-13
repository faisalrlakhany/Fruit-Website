import React from "react";
import BannerImg from "../../assets/fruits-splash.png";
import { motion } from "framer-motion";
import { FadeUp } from "../../utilities/Animation";
import { FaArrowRight } from "react-icons/fa";

const Banner1 = () => {
  return (
    <section className="bg-gradient-to-r from-green-50 to-green-100 py-12 md:py-20">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <img
            src={BannerImg}
            alt="Fresh fruits"
            className="w-[280px] md:w-[350px] lg:w-[400px] object-contain drop-shadow-2xl"
          />
        </motion.div>

        {/* Content Section */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-6 max-w-[500px] mx-auto md:mx-0">
            <motion.h1
              variants={FadeUp(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold font-[Poppins] text-gray-800"
            >
              Our <span className="text-green-600">Fresh</span> Story
            </motion.h1>

            <motion.p
              variants={FadeUp(0.7)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600"
            >
              At Fresh Harvest, we're passionate about bringing you the freshest
              fruits from farm to table. Our journey began with a simple
              mission: to provide healthy, delicious fruits while supporting
              local farmers.
            </motion.p>

            <motion.p
              variants={FadeUp(0.9)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-gray-600"
            >
              We carefully select each fruit to ensure premium quality and
              freshness. Our sustainable practices help protect the environment
              while delivering nature's sweetness to your doorstep.
            </motion.p>

            <motion.div
              variants={FadeUp(1.1)}
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
    </section>
  );
};

export default Banner1;
