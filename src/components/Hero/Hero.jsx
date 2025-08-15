import React from "react";
import { IoBagHandle } from "react-icons/io5";
import { motion } from "framer-motion";
import HeroImg from "../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center min-h-[80vh] py-12 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 order-2 md:order-1 text-center md:text-left space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            <span className="text-gray-800 block">Nature's</span>
            <span className="text-green-600 block">Sweetest</span>
            <span className="text-orange-500 block">Gifts</span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0"
          >
            Farm-fresh fruits delivered to your doorstep. Experience the taste
            of nature with our premium selection.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-green-200/50 transition-all duration-300">
              <IoBagHandle className="text-xl" />
              Shop Now
            </button>
            <button className="flex items-center justify-center gap-2 bg-white border border-green-200 hover:border-green-300 text-gray-700 hover:text-green-600 px-6 py-3 rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="md:w-1/2 order-1 md:order-2 flex justify-center"
        >
          <div className="relative w-full max-w-md">
            <div className="absolute -z-10 w-full h-full bg-green-100 rounded-full blur-2xl opacity-60"></div>
            <img
              src={HeroImg}
              alt="Fresh fruits"
              className="w-full h-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
