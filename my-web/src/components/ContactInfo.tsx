import { motion } from "framer-motion";
import { MapPin, Mail, Phone } from "lucide-react";

type Variant = "full" | "compact";

interface ContactInfoProps {
  variant?: Variant;
}

export default function ContactInfo({ variant = "full" }: ContactInfoProps) {
  const items = [
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: "WHERE TO FIND ME",
      lines: [
        "College of Arts, Media and",
        "Technology",
        "Chiang Mai University",
        "Thailand",
      ],
    },
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: "EMAIL ME AT",
      lines: ["pimonput_t@cmu.ac.th"],
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: "CALL ME AT",
      lines: ["(+66) 996 987 9688"],
    },
  ];

  const gridClass =
    variant === "compact"
      ? "grid grid-cols-1 sm:grid-cols-3 gap-4"
      : "grid md:grid-cols-3 gap-8 max-w-6xl mx-auto";

  return (
    <div className={gridClass}>
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white rounded-2xl shadow-lg p-8 text-center"
        >
          {/* ICON */}
          <div className="flex justify-center mb-4">
            {item.icon}
          </div>

          {/* TITLE */}
          <h4 className="text-sm font-semibold tracking-widest text-blue-600 mb-4">
            {item.title}
          </h4>

          {/* CONTENT */}
          <div className="text-gray-600 text-sm leading-relaxed space-y-1">
            {item.lines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
