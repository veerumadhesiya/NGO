import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
        <motion.img 
          src="https://media.gettyimages.com/id/1314210994/photo/happy-little-boy-sitting-on-the-bed-in-a-packed-donation-box.jpg?s=612x612&w=0&k=20&c=iNwmknpIAa7p_0m6Pb8_RP2YrpJkTaeM87aczCQhUJ4=" 
          alt="About NGO"
          className="rounded-lg shadow-md mx-auto md:mx-0 w-full max-w-md"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 text-blue-600">About Us</h3>
          <p className="text-gray-700 leading-relaxed px-2 sm:px-0">
            Our NGO focuses on uplifting underserved communities through impactful projects in education, healthcare, and women empowerment. We believe in sustainable change, and every step starts with you.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

 
