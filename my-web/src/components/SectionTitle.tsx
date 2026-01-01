import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className={`text-center mb-20 ${className}`}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 drop-shadow-sm">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-600 text-base md:text-lg font-medium">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-20 h-1.5 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full"></div>
    </motion.div>
  );
}
