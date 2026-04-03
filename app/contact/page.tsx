"use client";

import { useState } from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaTiktok, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const socials = [
    { name: "Facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/itsmecracklings" },
    { name: "X", icon: <FaTwitter />, link: "https://x.com/CatubayJessie" },
    { name: "Instagram", icon: <FaInstagram />, link: "https://www.instagram.com/itsmecracklings/" },
    { name: "Gmail", icon: <FaEnvelope />, link: "mailto:catubayfrancis7@gmail.com" },
    { name: "TikTok", icon: <FaTiktok />, link: "https://www.tiktok.com/@its_me_cracklings" },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-20 px-6 space-y-10">
      
      {/* TITLE */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          Contact{" "}
          <span className="text-black dark:text-white">
            Me
          </span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          I'd love to hear from you! Send me a message or connect via socials.
        </p>
      </div>

      {/* FORM CARD */}
      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-lg border border-gray-200 dark:border-gray-700 rounded-3xl p-8 hover:shadow-2xl transition-all">
        {submitted ? (
          <p className="text-green-600 dark:text-green-400 text-center font-semibold text-lg">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {["Name", "Email", "Message"].map((field, i) => (
              <div key={i}>
                <label className="block text-gray-700 dark:text-gray-300 font-medium mb-1">{field}:</label>
                {field === "Message" ? (
                  <textarea
                    required
                    rows={5}
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white rounded-xl p-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                  />
                ) : (
                  <input
                    type={field === "Email" ? "email" : "text"}
                    required
                    className="w-full border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-700/80 text-gray-900 dark:text-white rounded-xl p-3 focus:ring-2 focus:ring-cyan-400 focus:outline-none transition"
                  />
                )}
              </div>
            ))}

            <button
              type="submit"
              className="w-full bg-gray-80 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-semibold py-3 rounded-xl shadow hover:scale-105 transition cursor-pointer"
            >
              Send Message
            </button>
          </form>
        )}
      </div>

      {/* SOCIALS */}
      <div className="flex justify-center space-x-6 mt-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-cyan-400 text-3xl transition"
            aria-label={social.name}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}