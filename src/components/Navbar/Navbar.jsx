import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "About", link: "#about" },
  { id: 3, title: "Products", link: "#product" },
  { id: 4, title: "Contact", link: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-green-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="text-2xl md:text-3xl flex items-center font-bold font-[Poppins]">
                <span className="text-green-600">Fresh</span>
                <span className="text-orange-500">Harvest</span>
                <FaLeaf className="text-green-500 ml-1" />
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {NavbarMenu.map((menu) => (
                <motion.a
                  key={menu.id}
                  href={menu.link}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm lg:text-base font-medium relative group transition-colors duration-300"
                >
                  {menu.title}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-green-400 to-green-600 transition-all duration-300 group-hover:w-4/5"></span>
                </motion.a>
              ))}
              <motion.div
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <button className="p-2 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-lg hover:shadow-green-200/50 text-white transition-all duration-300 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <MdOutlineShoppingCart className="text-xl" />
                </button>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center transform translate-x-1/4 translate-y-1/4">
                  3
                </span>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md text-green-600 hover:text-white hover:bg-green-600 transition-colors"
              aria-expanded={open}
            >
              {open ? (
                <MdClose className="h-6 w-6" />
              ) : (
                <MdMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white shadow-lg rounded-b-lg px-4 pt-2 pb-4"
        >
          {NavbarMenu.map((menu) => (
            <a
              key={menu.id}
              href={menu.link}
              className="block px-3 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md text-base font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {menu.title}
            </a>
          ))}
          <button className="w-full mt-2 flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-md font-medium">
            <MdOutlineShoppingCart />
            Cart{" "}
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
              3
            </span>
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
