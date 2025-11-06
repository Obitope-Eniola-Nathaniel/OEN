import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? theme === "dark"
              ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-lg"
              : "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg"
            : theme === "dark"
            ? "bg-transparent"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">OE</span>
              </div>
              <span className={`hidden md:block font-bold transition-colors ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}>
                Obitope Eniola
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`px-3 xl:px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500/10 text-sm xl:text-base ${
                    theme === "dark"
                      ? "text-gray-300 hover:text-cyan-400"
                      : "text-gray-700 hover:text-cyan-600"
                  }`}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`lg:hidden w-10 h-10 flex items-center justify-center rounded-lg transition-colors touch-manipulation ${
                theme === "dark"
                  ? "text-gray-300 hover:bg-gray-800 active:bg-gray-700"
                  : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`fixed top-0 right-0 bottom-0 w-72 sm:w-80 z-50 lg:hidden ${
                theme === "dark"
                  ? "bg-gray-900 border-l border-gray-800"
                  : "bg-white border-l border-gray-200"
              } shadow-2xl`}
            >
              <div className="flex flex-col h-full">
                {/* Close button */}
                <div className={`flex items-center justify-end p-4 border-b ${
                  theme === "dark" ? "border-gray-800" : "border-gray-200"
                }`}>
                  <button
                    onClick={() => setIsOpen(false)}
                    className={`w-10 h-10 flex items-center justify-center rounded-lg transition-colors touch-manipulation ${
                      theme === "dark"
                        ? "text-gray-300 hover:bg-gray-800 active:bg-gray-700"
                        : "text-gray-700 hover:bg-gray-100 active:bg-gray-200"
                    }`}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(link.href);
                        }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`block px-4 py-3.5 rounded-lg transition-all duration-300 touch-manipulation text-base ${
                          theme === "dark"
                            ? "text-gray-300 hover:bg-gray-800 hover:text-cyan-400 active:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100 hover:text-cyan-600 active:bg-gray-200"
                        }`}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
