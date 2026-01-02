import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function SocialLinks() {
  const socials = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/pimonput-talubnga-00965b393",
      icon: <Linkedin className="w-6 h-6" />,
      color: "bg-[#0A66C2]",
      label: "pimonput talubnga",
    },
    {
      name: "GitHub",
      href: "https://github.com/Mesa123456789",
      icon: <Github className="w-6 h-6" />,
      color: "bg-gray-900",
      label: "Mesa123456789",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg">
      {socials.map((s, i) => (
        <motion.a
          key={s.name}
          href={s.href}
          target="_blank"
          whileHover={{ y: -6 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="glass rounded-2xl p-6 flex items-center gap-4 hover:shadow-xl transition"
        >
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${s.color}`}
          >
            {s.icon}
          </div>

          <div>
            <p className="text-sm text-gray-500">{s.name}</p>
            <p className="font-semibold text-gray-900">{s.label}</p>
          </div>
        </motion.a>
      ))}
    </div>
  );
}
