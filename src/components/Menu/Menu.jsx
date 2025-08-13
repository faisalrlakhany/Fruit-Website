import React from "react";
import Fruit1 from "../../assets/apple.png";
import Fruit2 from "../../assets/orange.png";
import Fruit3 from "../../assets/avocado.png";
import Fruit4 from "../../assets/cherry.png";
import { motion } from "framer-motion";
import { FadeLeft } from "../../utilities/Animation";

const MenuItem = [
  {
    id: 1,
    title: "Fresh Red Apple",
    link: "/",
    price: "$3.00",
    img: Fruit1,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Fresh Oranges",
    link: "#",
    price: "$5.00",
    img: Fruit2,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fresh Avacado",
    link: "#",
    price: "$8.00",
    img: Fruit3,
    delay: 0.9,
  },
  {
    id: 4,
    title: "Fresh Cherries",
    link: "#",
    price: "$14.00",
    img: Fruit4,
    delay: 1.2,
  },
];

const Menu = () => {
  return (
    <section>
      <div className="container  px-4 mx-auto pt-12 pb-20">
        <motion.h1
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-2xl font-bold text-left pb-10 uppercase"
        >
          Our Menu{" "}
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {MenuItem.map((item) => {
            return (
              <motion.div
                variants={FadeLeft(MenuItem.delay)}
                initial="hidden"
                whileInView={"visible"}
                whileHover={{ scale: 1.1 }}
                className="bg-white rounded-3xl px-4 py-2 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] flex flex-row justify-around items-center gap-3 "
                key={item.id}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-[60px] mb-4 scale-110 transform -translate-y-6"
                />
                <div>
                  <h1 className="text-lg font-semibold">{item.title}</h1>
                  <p className="text-lg font-semibold text-yellow-400">
                    {item.price}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Menu;
