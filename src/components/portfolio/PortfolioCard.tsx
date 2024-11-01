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
      <div className="bg-white/20 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border border-white/30">
        <div className="grid md:grid-cols-5 gap-4 p-4">
          <div className="md:col-span-2 relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:col-span-3 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src={item.logo}
                alt={`${item.title} logo`}
                width={40}
                height={40}
                className="object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.year}</p>
              </div>
            </div>
            <p className="text-gray-500 text-md">{item.description}</p>
            <div>
              <p className="font-semibold text-gray-600">{item.role}</p>
              <p className="text-gray-400 text-sm italic">{item.detail}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
