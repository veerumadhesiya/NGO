import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Volunteer() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="volunteer" className="bg-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center justify-around">
        {/* Image - hidden on mobile, shown on md+ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="hidden md:block volunteerformimg md:col-span-1"
        >
          <img
            src="https://media.istockphoto.com/id/538148749/vector/hands-with-hearts.jpg?s=612x612&w=0&k=20&c=czfjDKqJntxS_LqzWdzOrEGr-0J7JpotR5ut9_vcv8Q="
            alt="Volunteer"
            className="w-full rounded-lg shadow-lg mx-auto max-w-md md:max-w-full"
          />
        </motion.div>

        {/* Text + Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 text-center md:text-left"
        >
          <h3 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
            Become a Volunteer
          </h3>
          <p className="text-gray-700 leading-relaxed mb-6 px-2 sm:px-0">
            Be the change you want to see. Whether it's teaching, organizing, or <br />
            simply lending a hand — your time can transform lives.
          </p>

          {submitted ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4 max-w-md mx-auto md:mx-0">
              Thank you for signing up! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto md:mx-0">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <textarea
                name="message"
                placeholder="How would you like to help?"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium shadow hover:bg-blue-700 transition w-full"
              >
                Join Now
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
