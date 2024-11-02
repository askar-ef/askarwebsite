"use client";

import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { CodeIcon, GlobeIcon, BoxIcon } from "@radix-ui/react-icons";
import IconCloud from "@/components/ui/icon-cloud";
import BlurFade from "@/components/ui/blur-fade";
import { GridPattern } from "@/components/ui/animated-grid-pattern";
import { CoolMode } from "@/components/ui/cool-mode";
import Meteors from "@/components/ui/meteors";
import Particles from "@/components/ui/particles";
import { AnimatedList } from "@/components/ui/animated-list";
import RetroGrid from "@/components/ui/retro-grid";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    Icon: CodeIcon,
    name: "Projects",
    description: "Collection of technology projects I have worked on.",
    href: "/portfolio",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-50 opacity-50" />
        <Particles
          className="absolute inset-0"
          quantity={50}
          staticity={30}
          ease={50}
          size={0.5}
          color="#000000"
        />
      </div>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "Blog",
    description:
      "Personal thoughts and stories about life, technology, and my insights.",
    href: "/blog",
    cta: "Read Blog",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-pink-100/50 to-pink-50/50" />
        <Meteors number={30} />
      </div>
    ),
  },
  {
    Icon: BoxIcon,
    name: "Experiences",
    description:
      "Research and academic projects from Software Engineering studies.",
    href: "/experiences",
    cta: "Know More",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="absolute inset-0">
        <RetroGrid className="opacity-40" angle={45} />
        <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-teal-400/80 mix-blend-overlay" />
      </div>
    ),
  },
];

const socialItems = [
  {
    name: "GitHub",
    description: "@askar-ef",
    icon: <FaGithub className="text-xl" />,
    color: "#333",
    href: "https://github.com/askar-ef",
  },
  {
    name: "LinkedIn",
    description: "Daffa Askar Fathin",
    icon: <FaLinkedin className="text-xl" />,
    color: "#0077B5",
    href: "https://linkedin.com/in/daffaaskarfathin",
  },
  {
    name: "Portfolio",
    description: "My Works",
    icon: <MdOutlineDesignServices className="text-xl" />,
    color: "#4CAF50",
    href: "/portfolio",
  },
];

const SocialNotification = ({ name, description, icon, color, href }: any) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full cursor-pointer"
    >
      <div className="flex flex-row items-center gap-2 sm:gap-3">
        <div
          className="flex size-8 sm:size-10 items-center justify-center rounded-xl sm:rounded-2xl text-white"
          style={{ backgroundColor: color }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="flex flex-row items-center whitespace-pre">
            <span className="text-xs sm:text-sm font-medium text-gray-800 dark:text-white">
              {name}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </a>
  );
};

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  // Buat SVG particle options
  const coolModeOptions = {
    particle: "/next.svg", // akan bergantian dengan vercel.svg
    size: 25,
    particleCount: 20,
    speedHorz: 5,
    speedUp: 15,
  };

  const socialButtonVariants = {
    hidden: {
      x: 100, // Mulai dari kanan
      opacity: 0,
    },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: 3 + i * 0.2, // Delay 2.5s + stagger untuk tiap item
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-white p-4 flex flex-col justify-center">
      <GridPattern
        width={32}
        height={32}
        className="absolute -inset-20 h-[120%] w-[120%] animate-grid-skew"
        strokeDasharray="4 2"
      />
      <motion.div
        initial="hidden"
        animate="visible"
        className="fixed bottom-0 right-0 sm:bottom-2 sm:right-2 z-50"
      >
        <AnimatedList className="flex flex-row justify-center gap-1">
          {socialItems.map((item, idx) => (
            <motion.a
              key={idx}
              custom={idx}
              variants={socialButtonVariants}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center size-6 sm:size-7 rounded-lg text-white"
              style={{ backgroundColor: item.color }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="scale-75">{item.icon}</div>
            </motion.a>
          ))}
        </AnimatedList>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <CoolMode options={coolModeOptions}>
            <div className="relative w-52 h-52 md:w-64 md:h-64 cursor-pointer [perspective:1000px]">
              <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
                {/* Front face */}
                <div className="absolute inset-0 [backface-visibility:hidden]">
                  <Image
                    src="/ASKAR-TF-AKBAR-2.png"
                    alt="Profile Picture Front"
                    layout="fill"
                    className={`rounded-full object-cover transition-all duration-500 ${
                      loaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
                    }`}
                    onLoadingComplete={() => setLoaded(true)}
                    priority
                  />
                </div>
                {/* Back face */}
                <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <Image
                    src="/ASKAR-DSSDI.jpg"
                    alt="Profile Picture Back"
                    layout="fill"
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </CoolMode>

          <div className="text-center md:text-left">
            <BlurFade delay={0.9}>
              <p className="text-pretty text-gray-700">Salam kenal 👋🏻</p>
            </BlurFade>

            <BlurFade delay={0}>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                Daffa Askar Fathin
              </h1>
            </BlurFade>

            <BlurFade delay={0}>
              <p className="text-lg md:text-md text-gray-500 max-w-xl">
                Askar is a third-year student at Universitas Gadjah Mada
                majoring in Software Engineering. He is an innovative thinker,
                constantly seeking new ideas, and loves ice cream.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12">
        <BentoGrid className="auto-rows-[16rem]">
          {" "}
          {/* Mengubah tinggi dari 22rem menjadi 16rem */}
          {portfolioItems.map((item, idx) => (
            <BentoCard key={idx} {...item} />
          ))}
        </BentoGrid>
      </div>
    </main>
  );
};

const SocialButton = ({
  href,
  icon,
  label,
  internal = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  internal?: boolean;
}) => {
  const ButtonContent = () => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-gray-300 hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 text-sm">
      {icon}
      <span>{label}</span>
    </div>
  );

  return internal ? (
    <Link href={href}>
      <ButtonContent />
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <ButtonContent />
    </a>
  );
};

export default Home;
