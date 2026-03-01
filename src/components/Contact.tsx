import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  MapPin,
  Mail,
  Phone,
  Github,
  Linkedin,
  Twitter,
  Send,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useTheme } from "./ThemeProvider";

export function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      link: null,
    },
    {
      icon: Mail,
      title: "Email",
      value: "obitopeeniola@gmail.com",
      link: "mailto:obitopeeniola@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+234 905 969 2851",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      url: "https://github.com/Obitope-Eniola-Nathaniel",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/obitope-eniola/",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://x.com/ObitopeE",
      color: "hover:text-cyan-400",
    },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 relative">
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2
            className={`mb-4 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p
            className={`mt-4 max-w-2xl mx-auto ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Let's Build Something Great Together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className={`rounded-2xl p-4 sm:p-6 md:p-8 ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white border-2 border-gray-200 shadow-md"
              }`}
            >
              <h3
                className={`mb-4 sm:mb-6 text-base sm:text-lg ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Information
              </h3>

              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start gap-3 sm:gap-4"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`mb-1 text-xs sm:text-sm ${
                          theme === "dark" ? "text-gray-400" : "text-gray-600"
                        }`}
                      >
                        {info.title}
                      </p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className={`hover:text-cyan-400 transition-colors text-sm sm:text-base break-all ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p
                          className={`text-sm sm:text-base ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {info.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div
                className={`border-t pt-4 sm:pt-6 ${
                  theme === "dark" ? "border-gray-700" : "border-gray-200"
                }`}
              >
                <p
                  className={`mb-3 sm:mb-4 text-xs sm:text-sm ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Connect with me on social media
                </p>
                <div className="flex gap-3 sm:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        social.color
                      } hover:border-current ${
                        theme === "dark"
                          ? "bg-gray-700/50 border border-gray-600"
                          : "bg-gray-100 border-2 border-gray-300"
                      }`}
                    >
                      <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl p-4 sm:p-6 md:p-8 ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700"
                  : "bg-white border-2 border-gray-200 shadow-md"
              }`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className={`block mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className={
                      theme === "dark"
                        ? "bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500"
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className={`block mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className={
                      theme === "dark"
                        ? "bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500"
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block mb-2 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can I help? Share your project or question..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={6}
                    className={`resize-none ${
                      theme === "dark"
                        ? "bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-500 focus:border-cyan-500"
                        : "bg-white border-gray-300 text-gray-900 placeholder:text-gray-400 focus:border-cyan-500"
                    }`}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm sm:text-base"
                >
                  <Send className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Send Message
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
