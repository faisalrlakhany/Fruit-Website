import React from "react";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our <span className="text-yellow-300">Newsletter</span>
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Get updates on seasonal fruits, special offers, and healthy recipes
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto sm:max-w-xl"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-full text-gray-800 bg-white/95 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-600 shadow-md transition-all"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-full font-medium shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Subscribe
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </motion.div>

          <p className="text-green-100 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
