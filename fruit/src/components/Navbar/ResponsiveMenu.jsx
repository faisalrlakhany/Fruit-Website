import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdOutlineShoppingCart } from "react-icons/md";

const ResponsiveMenu = ({ open, setOpen, menuItems }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40 md:hidden"
            onClick={() => setOpen(false)}
          />

          {/* Menu */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-16 left-0 right-0 z-50 md:hidden px-4"
          >
            <div className="bg-white rounded-lg shadow-lg border border-green-200 overflow-hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {menuItems.map((item) => (
                  <a
                    key={item.id}
                    href={item.link}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </a>
                ))}
                <button className="w-full flex items-center justify-center px-3 py-2 text-base font-medium text-white bg-green-600 hover:bg-green-700 rounded-md mt-2">
                  <MdOutlineShoppingCart className="mr-2" />
                  Cart
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
