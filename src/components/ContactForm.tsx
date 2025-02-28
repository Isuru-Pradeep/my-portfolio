"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactFormProps {}

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Please try again later.");
          console.error(error.text);
        }
      );
  };

  return (
    <motion.form
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-lg p-6 rounded-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold text-primary">Get in Touch</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Message
        </label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded-lg"
        >
          Submit
        </button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
