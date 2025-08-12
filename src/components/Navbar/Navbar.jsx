import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";
import { motion } from "framer-motion";

const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Products", link: "#" },
  { id: 3, title: "About", link: "#" },
  { id: 4, title: "Shop", link: "#" },
  { id: 5, title: "Contacts", link: "#" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-gradient-to-r from-green-50 to-green-100 shadow-md sticky top-0 z-50 border-b border-green-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:pr-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo Section */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="text-2xl md:text-3xl flex items-center font-bold uppercase font-[Poppins]">
                <span className="text-green-600">Fresh</span>
                <span className="text-orange-500">Harvest</span>
                <FaLeaf className="text-green-500 animate-pulse ml-1" />
              </div>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {NavbarMenu.map((menu) => (
                <motion.a
                  key={menu.id}
                  href={menu.link}
                  whileHover={{ y: -2 }}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm lg:text-base font-medium relative group transition-colors"
                >
                  {menu.title}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-4/5"></span>
                </motion.a>
              ))}
              <motion.button 
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="p-2 rounded-full bg-white shadow-md hover:bg-green-600 hover:text-white transition-colors text-green-600"
              >
                <MdOutlineShoppingCart className="text-xl md:text-2xl" />
                <span className="sr-only">Cart</span>
              </motion.button>
            </div>

           
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-md text-green-600 hover:text-white hover:bg-green-600 transition-colors"
              aria-expanded={open}
              aria-label="Toggle menu"
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

      
      <ResponsiveMenu open={open} setOpen={setOpen} menuItems={NavbarMenu} />
    </>
  );
};

export default Navbar;
