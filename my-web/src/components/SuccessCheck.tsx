import { motion } from "framer-motion";

export default function SuccessCheck() {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: [0.34, 1.56, 0.64, 1], // เด้งนุ่ม
      }}
      className="flex flex-col items-center justify-center py-20"
    >
      {/* CIRCLE */}
      <motion.svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className="mb-6"
      >
        <motion.circle
          cx="60"
          cy="60"
          r="54"
          fill="none"
          stroke="#2563EB"
          strokeWidth="8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* CHECK */}
        <motion.path
          d="M38 62 L54 78 L84 46"
          fill="none"
          stroke="#2563EB"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        />
      </motion.svg>

      {/* TEXT */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-2xl font-semibold text-gray-900"
      >
        Message Sent!
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-gray-500 mt-2"
      >
        I’ll get back to you as soon as possible 🙂
      </motion.p>
    </motion.div>
  );
}
