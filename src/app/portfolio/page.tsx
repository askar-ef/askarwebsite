"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { portfolioItems } from "@/data/portfolio-items";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 bg-gradient-to-b from-gray-50 to-gray-100">
        <DotPattern
          width={32}
          height={32}
          cx={16}
          cy={16}
          cr={1.5}
          className="absolute inset-0 opacity-70 dark:opacity-50"
        />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.h1>

        <div className="relative w-full max-w-3xl mx-auto mb-12">
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/portfolio/Askar-View-Desktop.jpg"
              alt="Portfolio Banner"
              width={1200}
              height={600}
              className="w-full object-cover"
            />
          </motion.div>
        </div>

        <motion.p
          className="text-lg md:text-xl text-center text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Here are some projects I&apos;ve undertaken:
        </motion.p>

        <motion.p
          className="text-base text-center text-gray-500 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Crafting an application as part of a coursework assignment, competing
          in idea competitions, and participating in projects funded through
          contests.
        </motion.p>

        <PortfolioNav items={portfolioItems} />

        <div className="space-y-6">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
