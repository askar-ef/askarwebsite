import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface PortfolioItem {
  title: string;
  logo: string;
}

export function PortfolioNav({ items }: { items: PortfolioItem[] }) {
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const navPosition = navRef.current.getBoundingClientRect().top;
        setIsSticky(navPosition <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      const offset = isSticky ? 80 : 0;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={navRef} className="relative py-6 w-full">
      <motion.div
        className={`transition-all duration-700 ease-in-out max-w-6xl mx-auto ${
          isSticky ? "fixed top-4 left-0 right-0 z-50 px-4" : "w-full"
        }`}
        initial={false}
        animate={{
          scale: isSticky ? 0.9 : 1,
          y: isSticky ? 0 : 0,
        }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1], // Menggunakan cubic bezier untuk transisi yang lebih halus
        }}
      >
        <div className="flex items-center justify-center gap-3">
          {items.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => scrollToSection(item.title)}
              className={`relative cursor-pointer ${
                isSticky ? "h-8 w-20" : "h-12 w-28 md:h-14 md:w-32"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15, // Menambah delay antar item
                duration: 0.7, // Memperpanjang durasi animasi
                ease: [0.4, 0, 0.2, 1], // Menggunakan cubic bezier yang sama
              }}
              whileHover={{
                scale: 1.08,
                transition: {
                  duration: 0.4,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
              whileTap={{
                scale: 0.95,
                transition: {
                  duration: 0.2,
                  ease: [0.4, 0, 0.2, 1],
                },
              }}
            >
              <Image
                src={item.logo}
                alt={item.title}
                height={50}
                width={160}
                className="object-contain w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-500" // Memperlambat transisi opacity
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
