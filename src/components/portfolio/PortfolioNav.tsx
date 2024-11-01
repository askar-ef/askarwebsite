import { motion } from "framer-motion";
import Image from "next/image";

interface PortfolioItem {
  title: string;
  logo: string;
}

export function PortfolioNav({ items }: { items: PortfolioItem[] }) {
  const scrollToSection = (title: string) => {
    const element = document.getElementById(title);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
      <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-8">
        {items.slice(0, 6).map((item, index) => (
          <motion.button
            key={index}
            onClick={() => scrollToSection(item.title)}
            className="relative h-8 md:h-10 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={item.logo}
              alt={item.title}
              height={40}
              width={160}
              className="object-contain w-auto h-full"
            />
          </motion.button>
        ))}
      </div>
      {items.slice(6).map((item, index) => (
        <motion.button
          key={`bottom-${index}`}
          onClick={() => scrollToSection(item.title)}
          className="relative h-8 md:h-10 w-full flex justify-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={item.logo}
            alt={item.title}
            height={40}
            width={160}
            className="object-contain w-auto h-full"
          />
        </motion.button>
      ))}
    </div>
  );
}
