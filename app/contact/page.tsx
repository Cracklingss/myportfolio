"use client";

import { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socials = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/itsmecracklings",
    },
    {
      name: "X",
      icon: <FaTwitter />,
      link: "https://x.com/CatubayJessie",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com/itsmecracklings/",
    },
    {
      name: "Gmail",
      icon: <FaEnvelope />,
      link: "mailto:catubayfrancis7@gmail.com",
    },
    {
      name: "TikTok",
      icon: <FaTiktok />,
      link: "https://www.tiktok.com/@its_me_cracklings",
    },
  ];

  return (
    <section className="page-section w-full max-w-3xl mx-auto space-y-10 animate-fade-up">
      {/* TITLE */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Contact{" "}
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Me
          </span>
        </h1>
        <p className="text-gray-600">
          I&apos;d love to hear from you! Send me a message or connect via
          socials.
        </p>
      </div>

      {/* FORM */}
      <div className="bg-white shadow-md border border-gray-200 rounded-2xl p-8 animate-zoom-in">
        {submitted ? (
          <p className="text-green-600 text-center font-medium text-lg">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message:
              </label>
              <textarea
                required
                className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                rows={5}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-indigo-700 transition"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* SOCIALS */}
      <div className="flex justify-center space-x-6 mt-6 animate-fade-up">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-indigo-600 text-2xl transition"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
