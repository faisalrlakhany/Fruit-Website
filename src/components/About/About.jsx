import React from "react";
import { motion } from "framer-motion";
import AboutImg from "../../assets/images/about.png";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-br from-green-50 to-white"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            About <span className="text-green-600">Fresh Harvest</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our journey and commitment to bringing you the freshest
            fruits
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl h-[400px]">
              <img
                src={AboutImg}
                alt="Fresh fruits at farmer's market"
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-4 right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-100 transform translate-x-0 translate-y-0">
                <div className="text-3xl font-bold text-green-600">10+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-green-600">Journey</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Founded in 2012, Fresh Harvest began as a small family farm with a
              passion for organic, sustainable agriculture. What started as a
              roadside stand has grown into a trusted source for premium quality
              fruits.
            </p>
            <p className="text-gray-600 mb-6">
              We partner directly with local growers who share our commitment to
              ethical farming practices. Every fruit in our selection is
              handpicked at peak ripeness for maximum flavor and nutrition.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">100% Organic</h4>
                  <p className="text-gray-500 text-sm">
                    No synthetic pesticides or fertilizers
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Locally Sourced</h4>
                  <p className="text-gray-500 text-sm">
                    Supporting local farmers and communities
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Farm to Table</h4>
                  <p className="text-gray-500 text-sm">
                    Direct from farm to your home
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
