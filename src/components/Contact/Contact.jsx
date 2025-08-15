import React from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Visit Our <span className="text-green-600">Garden</span> in Karachi
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Come see where we grow our fresh organic fruits in the heart of
            Karachi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-green-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Karachi Location
            </h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Call Us</h4>
                  <p className="text-gray-600">+92 300 1234567</p>
                  <p className="text-gray-600">+92 21 1234567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaWhatsapp className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">WhatsApp</h4>
                  <p className="text-gray-600">+92 300 1234567</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Our Garden</h4>
                  <p className="text-gray-600">Fruit Garden, DHA Phase 8</p>
                  <p className="text-gray-600">Karachi, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaClock className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Visiting Hours</h4>
                  <p className="text-gray-600">Monday-Saturday: 7AM - 5PM</p>
                  <p className="text-gray-600">Friday: 2PM - 5PM</p>
                </div>
              </div>

              <div className="pt-4">
                <h4 className="font-medium text-gray-800 mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-600 transition-colors"
                  >
                    <FaFacebook className="text-xl" />
                  </a>
                  <a
                    href="#"
                    className="bg-green-100 hover:bg-green-200 p-3 rounded-full text-green-600 transition-colors"
                  >
                    <FaInstagram className="text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg border border-green-100"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="03XX-XXXXXXX"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-colors shadow-md"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-12 rounded-xl overflow-hidden shadow-xl border border-green-100"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.318062125378!2d67.02848531500016!3d24.85480198405833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e3a3e1a3a3d%3A0x3eb33e3a3e1a3a3d!2sDHA%20Phase%208%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Fresh Harvest Garden Location in Karachi"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
