"use client";

import { motion } from "framer-motion";

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen gap-4"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.2,
          ease: "easeOut",
          scale: {
            delay: 0.7,
            duration: 0.3,
          },
        }}
        className="text-3xl font-bold"
      >
        Come back later!
      </motion.h1>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5, ease: "easeOut" }}
        href="/"
        className="text-md text-red-500 hover:text-red-600 transition-all duration-300 ease-in-out"
      >
        Okey
      </motion.a>
    </motion.div>
  );
}
