import { motion } from "motion/react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      onClick={toggleTheme}
      className={`fixed top-20 sm:top-6 right-4 sm:right-6 md:right-8 z-50 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
        theme === "dark"
          ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
          : "bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600"
      }`}
      aria-label="Toggle theme"
    >
      <motion.div
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        ) : (
          <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
        )}
      </motion.div>
    </motion.button>
  );
}
