import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactSection from "./ContactSection";

export default function ContactSplit() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-white" />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />

      {/* CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-start px-4 md:px-12">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* TEXT */}
          <div className="space-y-4 max-w-lg">
            <h2 className="text-4xl font-bold text-gray-900">
              Get in <span className="text-blue-600">Touch</span>
            </h2>
            <p className="text-gray-600">
              Feel free to reach out for collaborations, project inquiries, or
              just to say hello. I’d love to connect with you!
            </p>
          </div>

          {/* INFO CARDS */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 max-w-lg"
          >
            {/* TOP ROW */}
            <div className="grid grid-cols-2 gap-6">
              {/* EMAIL */}
              <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition p-6 text-center">
                <Mail className="mx-auto w-6 h-6 text-blue-600 mb-2" />
                <h4 className="text-xs font-semibold tracking-widest text-blue-600 mb-1">
                  EMAIL ME AT
                </h4>
                {/* เพิ่มคลาส break-all และปรับขนาด text ให้เล็กลงในมือถือ */}
                <p className="text-[12px] sm:text-sm text-gray-600 break-all">
                  pimonput_t@cmu.ac.th
                </p>
              </div>

              <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition p-6 text-center">
                <Phone className="mx-auto w-6 h-6 text-blue-600 mb-2" />
                <h4 className="text-xs font-semibold tracking-widest text-blue-600 mb-1">
                  CALL ME AT
                </h4>
                <p className="text-sm text-gray-600">(+66) 96 987 9688</p>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="bg-white rounded-xl border border-blue-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition p-6 text-center">
              <MapPin className="mx-auto w-7 h-7 text-blue-600 mb-2" />
              <h4 className="text-xs font-semibold tracking-widest text-blue-600 mb-1">
                WHERE TO FIND ME
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                College of Arts, Media and Technology
                <br />
                Chiang Mai University
                <br />
                Thailand
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN – FORM */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="flex justify-end"
        >
          <ContactSection />
        </motion.div>
      </div>
    </section>
  );
}
