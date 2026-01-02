import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ContactSection from "./ContactSection";
import { contactData } from "../data/contactData";

export default function ContactSplit() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />

      <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start px-4 md:px-12">
        
        {/* LEFT COLUMN: ข้อมูลติดต่อแบบปุ่มคู่น่ารักๆ */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="space-y-4 max-w-lg">
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600">
              I’d love to connect with you! Feel free to reach out.
            </p>
          </div>

          {/* ปุ่มติดต่อแถวละ 2 อัน */}
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            
            {/* EMAIL - คลิกเพื่อเปิดแอปส่งเมล */}
            <a 
              href={`mailto:${contactData.email}`}
              className="bg-white p-4 rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                <Mail className="w-5 h-5 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Email</h4>
              <p className="text-[11px] text-gray-700 font-medium truncate w-full mt-1">Send Mail</p>
            </a>

            {/* PHONE - คลิกเพื่อโทรออก */}
            <a 
              href={`tel:${contactData.phone}`}
              className="bg-white p-4 rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 bg-green-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-green-500 transition-colors">
                <Phone className="w-5 h-5 text-green-500 group-hover:text-white" />
              </div>
              <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Call</h4>
              <p className="text-[11px] text-gray-700 font-medium mt-1">Call Me</p>
            </a>

            {/* LINKEDIN */}
            <a 
              href={contactData.linkedin.url}
              target="_blank" rel="noreferrer"
              className="bg-white p-4 rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#0A66C2] transition-colors">
                <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:text-white" />
              </div>
              <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">LinkedIn</h4>
              <p className="text-[11px] text-gray-700 font-medium mt-1 truncate w-full">Profile</p>
            </a>

            {/* GITHUB */}
            <a 
              href={contactData.github.url}
              target="_blank" rel="noreferrer"
              className="bg-white p-4 rounded-2xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 bg-gray-50 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#24292e] transition-colors">
                <Github className="w-5 h-5 text-[#24292e] group-hover:text-white" />
              </div>
              <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GitHub</h4>
              <p className="text-[11px] text-gray-700 font-medium mt-1 truncate w-full">Projects</p>
            </a>

            {/* ADDRESS / MAP - คลิกเพื่อเปิด Google Maps */}
            <a 
              href={contactData.address.url}
              target="_blank" rel="noreferrer"
              className="col-span-2 bg-white p-5 rounded-2xl border border-blue-50 shadow-sm flex items-center gap-4 transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors shrink-0">
                <MapPin className="w-6 h-6 text-red-500 group-hover:text-white" />
              </div>
              <div className="text-left overflow-hidden">
                <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Location</h4>
                <p className="text-[12px] text-gray-700 font-medium truncate">{contactData.address.label}</p>
              </div>
            </a>

          </div>
        </motion.div>

        {/* RIGHT COLUMN – FORM (ห้ามแตะส่วน Logic) */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex justify-end w-full"
        >
          <ContactSection />
        </motion.div>
      </div>
    </section>
  );
}