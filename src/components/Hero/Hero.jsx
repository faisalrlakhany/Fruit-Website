import React from "react";
import { IoBagHandle } from "react-icons/io5";
import HeroImage from "../../assets/fruit-plate.png";
import LeafImage from "../../assets/leaf.png";
import { motion } from "framer-motion";
import { FadeRight } from "../../utilities/Animation";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100">
      <div className="container px-4 mx-auto grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative overflow-hidden">
        {/* Content Section */}
        <div className="flex flex-col justify-center py-14 md:py-0 relative z-10">
          <div className="text-center md:text-left space-y-6 lg:max-w-[400px]">
            <motion.h1
              variants={FadeRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight font-[Poppins]"
            >
              Healthy
              <br />
              Fresh <span className="text-green-600">Fruits!</span>
            </motion.h1>
            
            <motion.p
              variants={FadeRight(0.9)}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl text-gray-700 tracking-wide"
            >
              Order Now For Fresh Healthy Life
            </motion.p>
            
            <motion.p
              variants={FadeRight(1.2)}
              initial="hidden"
              animate="visible"
              className="text-gray-600"
            >
              Healthy and yummy food for fresh morning breakfast. Eat daily for
              good health and mind. Order now and get 20% off on your first order.
            </motion.p>
            
            <motion.div
              variants={FadeRight(1.5)}
              initial="hidden"
              animate="visible"
              className="flex justify-center md:justify-start"
            >
              <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-md">
                <IoBagHandle className="text-xl" />
                Order Now
              </button>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center items-center relative z-10">
          <motion.img
            initial={{ opacity: 0, x: 200, rotate: 75 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            src={HeroImage}
            alt="Fresh fruits plate"
            className="w-[280px] sm:w-[350px] md:w-[450px] lg:w-[550px] drop-shadow-2xl"
          />
        </div>

        {/* Decorative Leaf */}
        <div className="absolute top-14 md:top-0 right-1/2 blur-sm opacity-60 rotate-[40deg] z-0">
          <motion.img
            initial={{ opacity: 0, y: -200, rotate: 75 }}
            animate={{ opacity: 0.6, y: 0, rotate: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
            src={LeafImage}
            alt="Decorative leaf"
            className="w-[200px] md:max-w-[250px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;