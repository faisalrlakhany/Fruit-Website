import React from "react";
import { IoBagHandle, IoStar } from "react-icons/io5";
import { motion } from "framer-motion";
import Apple from "../../assets/images/product1.png";
import Peach from "../../assets/images/product2.png";
import Mango from "../../assets/images/product3.png";
import Straw from "../../assets/images/product4.png";

const products = [
  {
    id: 1,
    name: "Organic Apples",
    price: "$3.99",
    image: Apple,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Fresh Oranges",
    price: "$4.49",
    image: Peach,
    rating: 4.6,
  },
  {
    id: 3,
    name: "Ripe Avocados",
    price: "$2.99",
    image: Mango,
    rating: 4.9,
  },
  {
    id: 4,
    name: "Sweet Strawberries",
    price: "$5.99",
    image: Straw,
    rating: 4.7,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="product" className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Our <span className="text-green-600">Featured</span> Fruits
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Handpicked selection of premium quality fruits from local farms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative pt-[100%] bg-gray-50">
                <img
                  src={product.image}
                  alt={product.name}
                  className="absolute top-0 left-0 w-full h-full object-cover p-4"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center text-xs font-medium">
                  <IoStar className="text-yellow-400 mr-1" />
                  {product.rating}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg text-gray-800 mb-1">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    {product.price}
                  </span>
                  <button className="p-2 bg-green-100 hover:bg-green-200 text-green-600 rounded-full transition-colors">
                    <IoBagHandle />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
