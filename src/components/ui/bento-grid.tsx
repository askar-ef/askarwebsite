import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delayChildren: 2,
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col overflow-hidden rounded-xl",
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      {/* Background */}
      <div className="absolute inset-0">{background}</div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-end h-full">
        {/* Main content yang akan bergeser ke atas */}
        <div className="p-6 transition-transform duration-300 ease-out group-hover:-translate-y-12">
          <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
              {name}
            </h3>
            <p className="max-w-lg text-neutral-400">{description}</p>
          </div>
        </div>

        {/* Button container */}
        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0">
          <Button
            variant="ghost"
            asChild
            size="sm"
            className="pointer-events-auto bg-neutral-400 hover:bg-neutral-600 hover:text-white text-white w-full"
          >
            <a href={href}>
              {cta}
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
