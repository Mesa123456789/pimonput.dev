import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

export default function MyResume() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50 pt-28 pb-16 px-6 flex flex-col items-center">
      <SectionTitle
        title="MY RESUME"
        subtitle="A summary of my background, experiences, and key skills that define my professional path."
      />

      <motion.div
        className="w-full max-w-5xl bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <iframe
          src="/docs/resume_pimonput.pdf"
          className="w-full h-[80vh]"
          title="Resume PDF Viewer"
        />
      </motion.div>

      <motion.button
        onClick={() => navigate("/contact")}
        className="mt-10 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg rounded-full shadow-md transition-transform hover:scale-105 active:scale-95"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Hire Me
      </motion.button>
      
    </main>
  );
}
