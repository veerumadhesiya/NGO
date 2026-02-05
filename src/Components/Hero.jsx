import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] bg-blue-50 py-16 sm:py-20 md:py-24 text-center bg-[url(https://media.gettyimages.com/id/1420066287/photo/group-of-volunteers-picking-up-trash-and-plastic-in-the-nature.jpg?s=612x612&w=0&k=20&c=LorpNVMV47t02zE26EjUo4fo_eWOVwOnJqd1ICkQuQY=)] bg-center bg-cover flex flex-col items-center justify-center px-4"
    >
      <motion.h2
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Empowering Communities for a Better Future
      </motion.h2>
      <motion.p
        className="mt-4 text-gray-900 max-w-xl mx-auto text-base sm:text-lg px-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Join our mission to provide educations, healthcare, and opportunities for all.
      </motion.p>
    </section>
  );
}
