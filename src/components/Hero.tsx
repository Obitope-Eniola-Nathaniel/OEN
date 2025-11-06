import { Button } from "./ui/button";
import { Github, Linkedin, Twitter, Mail, Download, ArrowDown } from "lucide-react";
import { motion } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  const { theme } = useTheme();
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className={`absolute inset-0 ${
        theme === "dark"
          ? "bg-gradient-to-br from-cyan-500/10 via-gray-950 to-blue-500/10"
          : "bg-gradient-to-br from-cyan-500/20 via-gray-50 to-blue-500/20"
      }`} />
      <div className={`absolute inset-0 ${
        theme === "dark"
          ? "bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,212,0.1),transparent_50%)]"
          : "bg-[radial-gradient(circle_at_50%_50%,rgba(0,188,212,0.15),transparent_50%)]"
      }`} />
      
      {/* Grid pattern overlay */}
      <div className={`absolute inset-0 ${
        theme === "dark"
          ? "bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)]"
          : "bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)]"
      } bg-[size:24px_24px]`} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 md:py-0">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-4 sm:mb-6"
            >
              <span className="text-cyan-400 text-sm sm:text-base">👋 Welcome to my portfolio</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4"
            >
              <span className={theme === "dark" ? "text-gray-300" : "text-gray-700"}>I'm</span>{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Obitope (Nathaniel) Eniola
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className={theme === "dark" ? "text-gray-400 mb-4 sm:mb-6" : "text-gray-600 mb-4 sm:mb-6"}
            >
              Full-Stack Software Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className={`mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              Building scalable web applications and APIs with clean code and creative design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white rounded-full px-6 sm:px-8 w-full sm:w-auto"
              >
                <a href="https://drive.google.com/uc?export=download&id=1chnUDQrBGllmaEizYw3DYqkjmv12g_EF" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Download CV
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-6 sm:px-8 w-full sm:w-auto"
              >
                Let's Work Together
              </Button>
            </motion.div>

            {/* About quick blurb */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className={`text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-600"} mb-6 sm:mb-8`}
            >
              I craft user-focused interfaces and resilient APIs. Curious about my background?
              <a href="#about" className={`ml-2 underline decoration-cyan-500/60 underline-offset-4 hover:text-cyan-400`}>About me</a>.
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/obitopeeniola"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full border hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-300"
                }`}
              >
                <Github className={`h-5 w-5 hover:text-cyan-400 transition-colors ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
              </a>
              <a
                href="https://linkedin.com/in/obitopeeniola"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full border hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-300"
                }`}
              >
                <Linkedin className={`h-5 w-5 hover:text-cyan-400 transition-colors ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
              </a>
              <a
                href="https://twitter.com/obitopeeniola"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full border hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-300"
                }`}
              >
                <Twitter className={`h-5 w-5 hover:text-cyan-400 transition-colors ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
              </a>
              <a
                href="mailto:obitopeeniola@gmail.com"
                className={`w-12 h-12 rounded-full border hover:border-cyan-500 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                  theme === "dark" ? "bg-gray-800/50 border-gray-700" : "bg-white border-gray-300"
                }`}
              >
                <Mail className={`h-5 w-5 hover:text-cyan-400 transition-colors ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="relative flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl opacity-20 animate-pulse" />
              
              {/* Profile Image */}
              <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
                <ImageWithFallback
                  src="/image/PTP09911.jpg"
                  alt="Obitope Eniola"
                  className="w-full h-full object-cover object-[50%_20%]"
                  sizes="(max-width: 640px) 14rem, (max-width: 1024px) 18rem, 24rem"
                  loading="eager"
                />
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg text-xl sm:text-2xl"
              >
                <span>💻</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-14 h-14 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center shadow-lg text-xl sm:text-2xl"
              >
                <span>🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="h-6 w-6 text-cyan-400" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
