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

const portfolioItems = [
  {
    Icon: CodeIcon,
    name: "Web Development",
    description: "Full-stack web applications built with modern technologies.",
    href: "https://github.com/askar-ef",
    cta: "View Projects",
    className: "col-span-3 lg:col-span-2",
    background: (
      <div className="absolute inset-0">
        <IconCloud
          iconSlugs={[
            "typescript",
            "react",
            "nextdotjs",
            "nodejs",
            "express",
            "prisma",
            "tailwindcss",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 opacity-50" />
      </div>
    ),
  },
  {
    Icon: GlobeIcon,
    name: "UI/UX Design",
    description:
      "User-centered design solutions for web and mobile applications.",
    href: "/portfolio/design",
    cta: "See Designs",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0">
        <IconCloud
          iconSlugs={[
            "figma",
            "adobexd",
            "adobephotoshop",
            "adobeillustrator",
            "sketch",
          ]}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 opacity-50" />
      </div>
    ),
  },
  {
    Icon: BoxIcon,
    name: "Academic Projects",
    description:
      "Research and academic projects from Software Engineering studies.",
    href: "/portfolio/academic",
    cta: "Learn More",
    className: "col-span-3 lg:col-span-3",
    background: (
      <div className="absolute inset-0">
        <IconCloud
          iconSlugs={["python", "java", "cplusplus", "git", "github", "latex"]}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-teal-100 opacity-50" />
      </div>
    ),
  },
];
const Home = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-100 to-white p-4 flex flex-col justify-center">
      <GridPattern
        width={32}
        height={32}
        className="absolute -inset-20 h-[120%] w-[120%] animate-grid-skew"
        strokeDasharray="4 2"
      />

      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-52 h-52 md:w-64 md:h-64">
            <Image
              src="/ASKAR-TF-AKBAR-2.png"
              alt="Profile Picture"
              layout="fill"
              className={`rounded-full object-cover transition-all duration-500 ${
                loaded ? "opacity-100 blur-0" : "opacity-0 blur-lg"
              }`}
              onLoadingComplete={() => setLoaded(true)}
              priority
            />
          </div>

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
              <p className="text-base text-gray-500 max-w-xl">
                Software Engineering student at Gadjah Mada University. An
                innovative thinker, constantly seeking new ideas.
              </p>
            </BlurFade>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <SocialButton
                href="https://github.com/askar-ef"
                icon={<FaGithub />}
                label="GitHub"
              />
              <SocialButton
                href="https://linkedin.com/in/daffaaskarfathin"
                icon={<FaLinkedin />}
                label="LinkedIn"
              />
              <SocialButton
                href="/portfolio"
                icon={<MdOutlineDesignServices />}
                label="Portfolio"
                internal
              />
              <SocialButton
                href="https://drive.google.com/file/d/19fvPi3JQ67_eyeslFl03QbjFyubGzbYz/view"
                icon={<IoDocumentTextOutline />}
                label="CV"
              />
            </div>
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
