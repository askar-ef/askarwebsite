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
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-md shadow-md overflow-hidden border border-white/10">
        <div className="flex flex-col md:grid md:grid-cols-5 gap-4 p-4">
          <div className="w-full md:col-span-2 relative min-h-[200px] md:min-h-[250px] rounded-sm overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, 40vw"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="w-full md:col-span-3 flex flex-col space-y-3 py-2">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.year}</p>
              </div>
            </div>
            <p className="text-gray-500 text-md">{item.description}</p>
            <div className="mt-auto pt-2">
              <p className="font-semibold text-gray-600">{item.role}</p>
              <p className="text-gray-400 text-sm italic">{item.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
