import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Code, Server, Database, Wrench } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Skills() {
  const { theme } = useTheme();
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      color: "from-cyan-500 to-blue-500",
      skills: ["React.js", "JavaScript", "HTML", "CSS", "Tailwind"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "from-blue-500 to-purple-500",
      skills: ["Node.js", "Express.js", "Django", "FastAPI"]
    },
    {
      title: "Database",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-pink-500 to-red-500",
      skills: ["Git", "CI/CD", "Agile", "Figma"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className={`absolute inset-0 ${theme === "dark" ? "bg-gray-950" : "bg-gray-50"}`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={theme === "dark" ? "text-white mb-4" : "text-gray-900 mb-4"}>
            Technical <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className={`rounded-2xl p-6 transition-all duration-300 h-full ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40"
                  : "bg-white border-2 border-gray-200 hover:border-cyan-500 shadow-md"
              }`}>
                {/* Icon Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={`w-full h-full rounded-lg flex items-center justify-center ${
                      theme === "dark" ? "bg-gray-900" : "bg-white"
                    }`}>
                      <category.icon className={theme === "dark" ? "h-6 w-6 text-white" : "h-6 w-6 text-gray-900"} />
                    </div>
                  </div>
                  <h3 className={theme === "dark" ? "text-white" : "text-gray-900"}>{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                    >
                      <Badge 
                        variant="secondary"
                        className={`hover:bg-cyan-500/20 hover:text-cyan-300 transition-all duration-300 ${
                          theme === "dark"
                            ? "bg-gray-700/50 text-gray-300 border border-gray-600 hover:border-cyan-500/50"
                            : "bg-gray-100 text-gray-700 border border-gray-300 hover:border-cyan-500"
                        }`}
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
