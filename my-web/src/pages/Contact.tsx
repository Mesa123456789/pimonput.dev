import ContactSection from "../components/ContactSection";
import ContactInfo from "../components/ContactInfo";

export default function Contact() {
  return (
    <main className="bg-gradient-to-b from-white via-white to-blue-50 min-h-screen">
      
      {/* HEADER */}
      <section className="pt-32 pb-16 text-center px-6">
        <h1 className="text-5xl font-bold">
          Get in <span className="text-blue-600">Touch</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Feel free to reach out for collaborations, project inquiries, or just
          to say hello. I’d love to connect with you!
        </p>
      </section>

      {/* FORM */}
      <section className="flex justify-center px-6">
        <ContactSection />
      </section>

      {/* INFO */}
      <section className="mt-24 pb-24 px-6">
        <ContactInfo />
      </section>
    </main>
  );
}
