import { motion } from "motion/react";
import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "./ThemeProvider";

export function FloatingWhatsApp() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  
  // Replace with actual WhatsApp number (remove spaces and add country code)
  const phoneNumber = "2348123456789"; // Example: Nigeria number
  const message = "Hi Obitope! I'd like to discuss a project with you.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className={`fixed bottom-20 sm:bottom-24 right-4 sm:right-6 md:right-8 z-50 w-[calc(100vw-2rem)] max-w-80 rounded-2xl shadow-2xl overflow-hidden ${
            theme === "dark"
              ? "bg-gray-800 border border-gray-700"
              : "bg-white border-2 border-gray-200"
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 sm:p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                <img
                  src="https://drive.google.com/uc?export=view&id=1h79p8iU2oztCXtI5RiF0W0Ks0Kdr3b_c"
                  alt="Obitope"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm sm:text-base truncate">Obitope Eniola</p>
                <p className="text-green-100 text-xs sm:text-sm">Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 rounded-full p-1 transition-colors flex-shrink-0"
            >
              <X className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className={theme === "dark" ? "p-3 sm:p-4 bg-gray-900/50" : "p-3 sm:p-4 bg-gray-50"}>
            <div className={`rounded-lg p-3 sm:p-4 mb-3 sm:mb-4 ${
              theme === "dark" ? "bg-gray-800" : "bg-white border border-gray-200"
            }`}>
              <p className={`mb-1.5 sm:mb-2 text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>👋 Hi there!</p>
              <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                How can I help you today? Feel free to send me a message on WhatsApp!
              </p>
            </div>

            <Button
              asChild
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white text-xs sm:text-sm"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Start Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      )}

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 md:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 rounded-full shadow-lg shadow-green-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp Contact"
      >
        <motion.div
          animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
          ) : (
            <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
          )}
        </motion.div>

        {/* Pulse animation */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-75" />
        )}
      </motion.button>
    </>
  );
}
