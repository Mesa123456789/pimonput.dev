import { motion } from "framer-motion";
import { experiences } from "../data/experienceData";
import ContactSplit from "../components/ContactSplit";
import SectionTitle from "../components/SectionTitle";
import {
  FaCode,
  FaLaptopCode,
  FaUsersCog,
  FaPenNib,
  FaChalkboardTeacher,
} from "react-icons/fa";

const icons = [FaCode, FaLaptopCode, FaUsersCog, FaPenNib, FaChalkboardTeacher];
const colors = ["#3B82F6", "#EF4444", "#F59E0B", "#8B5CF6", "#10B981"];

export default function Experience() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <SectionTitle
          title="EXPERIENCE"
          subtitle="Hands-on experience in game development, media production, and teamwork"
        />

        {/* เส้น timeline */}
        <div className="relative before:content-[''] before:absolute before:top-0 before:left-6 before:w-[3px] before:h-full before:bg-gradient-to-b before:from-blue-200 before:to-blue-400">
          {experiences.map((exp, index) => {
            const Icon = icons[index % icons.length];
            const color = colors[index % colors.length];

            return (
              <motion.div
                key={index}
                className="relative pl-16 mb-10"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* จุด + ไอคอน */}
                <div
                  className="absolute left-[2px] top-6 w-10 h-10 rounded-full flex items-center justify-center shadow-md border-4 border-white"
                  style={{ backgroundColor: color }}
                >
                  <Icon className="text-white text-lg" />
                </div>

                {/* การ์ดข้อความ */}
                <div className="relative bg-white/90 backdrop-blur-md shadow-md rounded-r-lg border-l-4 border-blue-400 hover:shadow-lg transition-all duration-300">
                  {/* bubble-edge */}
                  <div className="absolute -left-[9px] top-7 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-white" />

                  <div className="p-6">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 flex flex-wrap items-center gap-2">
                      {exp.title}
                      <span className="text-gray-400 text-sm font-normal">
                        {exp.period}
                      </span>
                    </h2>
                    <p className="italic text-gray-600 text-sm mb-3">
                      {exp.organization}
                    </p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {exp.details.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
        <div className="mt-24"></div>
      <ContactSplit />

    </main>
  );
}
