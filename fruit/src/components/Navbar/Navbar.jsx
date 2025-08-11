import React, { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { MdOutlineShoppingCart, MdMenu, MdClose } from "react-icons/md";
import ResponsiveMenu from "./ResponsiveMenu";

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
      <nav className="bg-gradient-to-r from-green-50 to-green-100 shadow-md sticky top-0 z-50">
        <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 font-bold text-2xl md:text-3xl font-[Poppins]">
              <span className="text-green-600">Fresh</span>
              <span className="text-orange-500">Harvest</span>
              <FaLeaf className="text-green-500 animate-pulse" />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-6">
              {NavbarMenu.map((menu) => (
                <a
                  key={menu.id}
                  href={menu.link}
                  className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium relative group"
                >
                  {menu.title}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="p-2 rounded-full bg-white shadow-md hover:bg-green-600 hover:text-white transition-colors text-green-600">
                <MdOutlineShoppingCart className="text-xl md:text-2xl" />
              </button>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setOpen(!open)}
                className="p-2 rounded-md text-green-600 hover:text-white hover:bg-green-600 transition"
              >
                {open ? <MdClose className="h-6 w-6" /> : <MdMenu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ResponsiveMenu open={open} setOpen={setOpen} menuItems={NavbarMenu} />
    </>
  );
};

export default Navbar;
