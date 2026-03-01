import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Award } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Certifications() {
  const { theme } = useTheme();
  const certifications = [
    {
      title: "The Ultimate 2025 Fullstack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2025",
      verifyUrl: "https://www.udemy.com/certificate/",
      logo: "🎓"
    },
    {
      title: "Full Stack Web Development (Front End)",
      issuer: "New Horizon",
      date: "2024",
      verifyUrl: "/certificates/new-horizon-fullstack-frontend-2024.pdf",
      logo: "🌐"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      verifyUrl: "https://www.freecodecamp.org/certification/nieltech/responsive-web-design",
      logo: "💻"
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2024",
      verifyUrl: "https://www.freecodecamp.org/certification/",
      logo: "📊"
    },
    {
      title: "Backend Development and APIs",
      issuer: "freeCodeCamp",
      date: "2024",
      verifyUrl: "https://www.freecodecamp.org/certification/",
      logo: "⚙️"
    },
    {
      title: "Introduction to Cybersecurity Tools & Cyberattacks",
      issuer: "IBM",
      date: "—",
      verifyUrl: "https://www.coursera.org/learn/introduction-cybersecurity-cyber-attacks",
      logo: "🔒"
    },
    {
      title: "Crash Course on Python",
      issuer: "Google",
      date: "—",
      verifyUrl: "https://www.coursera.org/learn/python-crash-course",
      logo: "🐍"
    },
    {
      title: "Using Python to Interact with the Operating System",
      issuer: "Google",
      date: "—",
      verifyUrl: "https://www.coursera.org/learn/python-operating-system",
      logo: "🖥️"
    },
    {
      title: "Introduction to Git and GitHub",
      issuer: "Google",
      date: "—",
      verifyUrl: "https://www.coursera.org/learn/introduction-git-github",
      logo: "📦"
    },
    {
      title: "Introduction to Web Development with HTML, CSS, JavaScript",
      issuer: "IBM",
      date: "—",
      verifyUrl: "https://www.coursera.org/learn/introduction-to-web-development-with-html-css-javacript",
      logo: "🌐"
    },
    {
      title: "Introduction to Cloud Computing",
      issuer: "IBM",
      date: "—",
      verifyUrl: "https://www.coursera.org/learn/introduction-to-cloud",
      logo: "☁️"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative">
      <div className={`absolute inset-0 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
          : "bg-gradient-to-b from-white via-gray-50 to-white"
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={theme === "dark" ? "text-white mb-4" : "text-gray-900 mb-4"}>
            Certifications & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Verified professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-2xl p-6 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                  : "bg-white border-2 border-gray-200 hover:border-cyan-500 hover:shadow-xl"
              }`}
            >
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{cert.logo}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className={`mb-2 group-hover:text-cyan-400 transition-colors duration-300 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    {cert.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Award className="h-4 w-4 text-cyan-400" />
                    <span className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>{cert.issuer}</span>
                    <span className={theme === "dark" ? "text-gray-600" : "text-gray-400"}>•</span>
                    <span className={theme === "dark" ? "text-gray-500" : "text-gray-500"}>{cert.date}</span>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500"
                  >
                    <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
