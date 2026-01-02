import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import ContactSection from "../components/ContactSection";
import { contactData } from "../data/contactData";

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-blue-50 min-h-screen pt-32 pb-24">
      
      {/* 1. HEADER SECTION */}
      <section className="text-center px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Get in <span className="text-blue-600">Touch</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            I’d love to connect with you! Feel free to reach out for collaborations or just to say hello.
          </p>
        </motion.div>
      </section>

      {/* 2. CENTER FORM SECTION: แก้ไขให้ Flex Center */}
      <section className="w-full max-w-5xl mx-auto px-2 mb-20 flex justify-center">

        
             <ContactSection />

        
      </section>

      {/* 3. BOTTOM CONTACT INFO: จัดให้สมดุลอยู่ด้านล่าง */}
      <section className="max-w-5xl mx-auto px-6">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Email */}
          <a href={`mailto:${contactData.email}`} className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
              <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
            </div>
            <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">Email</h4>
            <p className="text-[11px] text-gray-700 font-semibold mt-1">Send Mail</p>
          </a>

          {/* Phone */}
          <a href={`tel:${contactData.phone}`} className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-green-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-green-500 transition-colors">
              <Phone className="w-6 h-6 text-green-500 group-hover:text-white" />
            </div>
            <h4 className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Call</h4>
            <p className="text-[11px] text-gray-700 font-semibold mt-1">Call Me</p>
          </a>

          {/* LinkedIn */}
          <a href={contactData.linkedin.url} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#0A66C2] transition-colors">
              <Linkedin className="w-6 h-6 text-[#0A66C2] group-hover:text-white" />
            </div>
            <h4 className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">LinkedIn</h4>
            <p className="text-[11px] text-gray-700 font-semibold mt-1">Profile</p>
          </a>

          {/* GitHub */}
          <a href={contactData.github.url} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-3xl border border-blue-50 shadow-sm flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center mb-3 group-hover:bg-[#24292e] transition-colors">
              <Github className="w-6 h-6 text-[#24292e] group-hover:text-white" />
            </div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">GitHub</h4>
            <p className="text-[11px] text-gray-700 font-semibold mt-1">Projects</p>
          </a>

          {/* Location */}
          <a href={contactData.address.url} target="_blank" rel="noreferrer" className="col-span-2 md:col-span-4 bg-white p-5 rounded-3xl border border-blue-50 shadow-sm flex items-center justify-center gap-4 transition-all hover:shadow-md hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-red-50 rounded-2xl flex items-center justify-center group-hover:bg-red-500 transition-colors shrink-0">
              <MapPin className="w-6 h-6 text-red-500 group-hover:text-white" />
            </div>
            <div className="text-left">
              <h4 className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Location</h4>
              <p className="text-[13px] text-gray-700 font-medium leading-tight">{contactData.address.label}</p>
            </div>
          </a>
        </motion.div>
      </section>
    </main>
  );
}