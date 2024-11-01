"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DotPattern } from "@/components/ui/dot-pattern";
import { PortfolioCard } from "@/components/portfolio/PortfolioCard";
import { PortfolioNav } from "@/components/portfolio/PortfolioNav";
import { portfolioItems } from "@/data/portfolio-items";
import RetroGrid from "@/components/ui/retro-grid";

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
          className="absolute inset-0 opacity-50 dark:opacity-30"
        />
      </div>

      <div className="relative z-50 pt-6 pb-2">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-6xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Portfolio
          </motion.h1>

          <div className="max-w-2xl mx-auto mb-12">
            <motion.p
              className="text-xl text-center text-gray-600 mb-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Here are some projects I&apos;ve undertaken:
            </motion.p>
            <motion.p
              className="text-base text-center text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Crafting an application as part of a coursework assignment,
              competing in idea competitions, and participating in projects
              funded through contests.
            </motion.p>
          </div>

          <motion.div
            className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl"
            style={{ height: "60vh" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src="/portfolio/Askar-View-Desktop.jpg"
              alt="Portfolio Banner"
              fill
              className="object-cover"
              priority
            />
          </motion.div>
          <div className="relative z-50 mt-4">
            <PortfolioNav items={portfolioItems} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-20">
        <div className="grid gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
