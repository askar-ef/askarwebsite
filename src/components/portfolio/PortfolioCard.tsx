import Image from "next/image";
import { motion } from "framer-motion";

interface PortfolioItem {
  title: string;
  year: string;
  description: string;
  imageUrl: string;
  role: string;
  detail: string;
  logo: string;
}

export function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <motion.div
      id={item.title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-white/20">
        <div className="grid md:grid-cols-4 gap-2 p-3">
          <div className="md:col-span-1 relative aspect-[16/9] rounded-lg overflow-hidden scale-95">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover opacity-90"
            />
          </div>
          <div className="md:col-span-3 flex flex-col h-full">
            <div className="flex items-center gap-3">
              <Image
                src={item.logo}
                alt={`${item.title} logo`}
                width={28}
                height={28}
                className="object-contain opacity-90"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.year}</p>
              </div>
            </div>
            <p className="text-gray-500 text-md mt-4">{item.description}</p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-600">{item.role}</p>
              <p className="text-gray-400 text-sm italic">{item.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
