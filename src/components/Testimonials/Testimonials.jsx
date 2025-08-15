import React from "react";
import { IoStar } from "react-icons/io5";
import { motion } from "framer-motion";
import Test1 from "../../assets/images/test1.jpg";
import Test2 from "../../assets/images/test2.jpg";
import Test3 from "../../assets/images/test3.jpg";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Food Blogger",
    comment:
      "The fruits from Fresh Harvest are consistently fresh and delicious. Their organic apples are my absolute favorite!",
    rating: 5,
    image: Test1,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Chef",
    comment:
      "As a professional chef, I demand the highest quality ingredients. Fresh Harvest never disappoints with their premium selection.",
    rating: 4,
    image: Test2,
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Nutritionist",
    comment:
      "I recommend Fresh Harvest to all my clients. Their commitment to organic farming aligns perfectly with a healthy lifestyle.",
    rating: 5,
    image: Test3,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            What Our <span className="text-green-600">Customers</span> Say
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Hear from people who love our fresh, quality fruits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <IoStar
                    key={i}
                    className={`text-${
                      i < testimonial.rating ? "yellow-400" : "gray-300"
                    } w-5 h-5`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "{testimonial.comment}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
