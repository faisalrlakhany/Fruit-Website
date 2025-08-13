import React from 'react'
import Fruit1 from '../../assets/apple.png'
import Fruit2 from '../../assets/orange.png'
import Fruit3 from '../../assets/avocado.png'
import Fruit4 from '../../assets/cherry.png'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utilities/Animation'
import { IoBagHandle } from "react-icons/io5";

const MenuItem = [
    {
        id: 1,
        title: 'Fresh Red Apple',
        price: "$3.00",
        img: Fruit1,
        delay: 0.3,
    },
    {
        id: 2,
        title: 'Fresh Oranges',
        price: "$5.00",
        img: Fruit2,
        delay: 0.6,
    },
    {
        id: 3,
        title: 'Fresh Avocado',
        price: "$8.00",
        img: Fruit3,
        delay: 0.9,
    },
    {
        id: 4,
        title: 'Fresh Cherries',
        price: "$14.00",
        img: Fruit4,
        delay: 1.2,
    },
]

const Menu = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-green-100 py-12">
        <div className="container px-4 mx-auto">
            <motion.h1 
                initial={{opacity:0, x:-200}} 
                whileInView={{opacity:1, x:0}} 
                transition={{duration:1, delay:0.3}} 
                className='text-3xl font-bold text-left pb-12 font-[Poppins] text-gray-800'
            >
                Our <span className="text-green-600">Menu</span>
            </motion.h1>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
                {MenuItem.map((item) => (
                    <motion.div 
                        key={item.id}
                        variants={FadeLeft(item.delay)}
                        initial="hidden"
                        whileInView="visible"
                        whileHover={{scale:1.1}}
                        className='bg-white rounded-xl px-6 py-8 shadow-lg border border-green-100 flex flex-col items-center text-center h-full'
                    >
                        <div className="w-full flex justify-center -mt-14 mb-4">
                            <img 
                                src={item.img} 
                                alt={item.title}
                                className='w-[80px] h-[80px] object-contain drop-shadow-lg'
                            />
                        </div>
                        
                        <div className="flex-grow">
                            <h1 className='text-lg font-semibold text-gray-800 mb-2'>{item.title}</h1>
                            <p className='text-xl font-bold text-green-600 mb-4'>{item.price}</p>
                        </div>
                        
                        <button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                            <IoBagHandle />
                            Add to Cart
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>    
  )
}

export default Menu