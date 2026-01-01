import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import SuccessCheck from "./SuccessCheck";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success"
  >("idle");

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      }
    );

    setStatus("success");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-10 w-full max-w-2xl">

      {status === "success" ? (
        <SuccessCheck />
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h3 className="text-xl font-semibold text-blue-600">
            Send a Message
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="input"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="input"
            />
          </div>

          <input
            name="subject"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            className="input"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="input resize-none"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </div>
  );
}
