import { motion } from "motion/react";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Footer() {
  const { theme } = useTheme();
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/obitopeeniola", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/obitopeeniola", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/obitopeeniola", label: "Twitter" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`relative py-8 sm:py-10 md:py-12 border-t ${
      theme === "dark"
        ? "bg-gray-950 border-gray-800"
        : "bg-white border-gray-200"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Top Section */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="sm:col-span-2 md:col-span-1"
            >
              <h3 className="mb-3 sm:mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent text-base sm:text-lg">
                Obitope Eniola
              </h3>
              <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                Full-Stack Software Engineer passionate about building innovative web solutions.
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Quick Links</h4>
              <ul className="space-y-1.5 sm:space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className={`hover:text-cyan-400 transition-colors text-xs sm:text-sm ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Connect</h4>
              <div className="flex gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      theme === "dark"
                        ? "bg-gray-800/50 border border-gray-700"
                        : "bg-gray-100 border-2 border-gray-300"
                    }`}
                  >
                    <social.icon className={`h-4 w-4 sm:h-5 sm:w-5 hover:text-cyan-400 transition-colors ${
                      theme === "dark" ? "text-gray-400" : "text-gray-600"
                    }`} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className={`border-t my-6 sm:my-8 ${
            theme === "dark" ? "border-gray-800" : "border-gray-200"
          }`} />

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4"
          >
            <p className={`text-center sm:text-left flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}>
              <span>© 2025 Obitope Eniola.</span>
              <span className="flex items-center gap-1.5">
                Made with
                <Heart className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-red-500 fill-red-500" />
              </span>
              <span>All rights reserved.</span>
            </p>
            
            <button
              onClick={scrollToTop}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-cyan-400 hover:text-cyan-300 transition-colors text-xs sm:text-sm"
            >
              Back to top ↑
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
