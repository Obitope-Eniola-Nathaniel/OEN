import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Education() {
  const { theme } = useTheme();
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Caleb University",
      location: "Lagos, Nigeria",
      period: "2020 - 2023",
      grade: "First Class Honours",
      icon: "🎓",
      description: "Graduated with First Class Honours, specializing in software engineering, data structures, and algorithms."
    },
    {
      degree: "National Diploma in Mathematics & Statistics",
      institution: "Federal Polytechnic Ilaro",
      location: "Ogun State, Nigeria",
      period: "2017 - 2019",
      grade: "Upper Credit",
      icon: "📊",
      description: "Focused on mathematical foundations, statistical analysis, and computational methods."
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 md:py-20 relative">
      <div className={`absolute inset-0 ${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className={`mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Education & <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            Academic background and achievements
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                  : "bg-gray-50 border-2 border-gray-200 hover:border-cyan-500 hover:shadow-xl"
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">{edu.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3 gap-2">
                    <div className="flex-1 min-w-0">
                      <h3 className={`mb-2 text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{edu.degree}</h3>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-cyan-400 mb-1 text-xs sm:text-sm">
                        <GraduationCap className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                        <span className="truncate">{edu.institution}</span>
                      </div>
                      <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex-shrink-0">
                      <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-xs sm:text-sm">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 sm:gap-2 mb-3">
                    <Award className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 flex-shrink-0" />
                    <span className={`text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{edu.grade}</span>
                  </div>

                  <p className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>{edu.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
