import { motion } from "motion/react";
import { Briefcase, GraduationCap, Award, Code, Server, Database, Wrench } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

export function About() {
  const { theme } = useTheme();
  const highlights = [
    {
      icon: Briefcase,
      title: "4+ Years",
      description: "Professional Experience"
    },
    {
      icon: GraduationCap,
      title: "First Class",
      description: "BSc Computer Science"
    },
    {
      icon: Award,
      title: "Certified",
      description: "Multiple Certifications"
    }
  ];

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

  const certifications = [
    {
      title: "The Ultimate 2025 Fullstack Web Development Bootcamp",
      issuer: "Udemy",
      date: "2025",
      verifyUrl: "https://www.udemy.com/certificate/",
      logo: "🎓"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      verifyUrl: "https://www.freecodecamp.org/certification/",
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
    }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 md:py-20 relative">
      <div className={`absolute inset-0 ${
        theme === "dark" 
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950" 
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className={theme === "dark" ? "text-white mb-4" : "text-gray-900 mb-4"}>
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-start max-w-6xl mx-auto mb-8 sm:mb-12 md:mb-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className={`relative rounded-2xl overflow-hidden shadow-2xl ${
              theme === "dark" ? "border border-cyan-500/20" : "border-2 border-cyan-500/30"
            }`}>
              <div className={`absolute inset-0 ${
                theme === "dark" ? "bg-gradient-to-br from-cyan-500/10 to-blue-500/10" : "bg-gradient-to-br from-cyan-500/5 to-blue-500/5"
              }`} />
              <img
                src="https://drive.google.com/uc?export=view&id=1h79p8iU2oztCXtI5RiF0W0Ks0Kdr3b_c"
                alt="Obitope Eniola"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className={`mb-6 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>Full-Stack Software Engineer</h3>
            
            <p className={theme === "dark" ? "text-gray-400 mb-6" : "text-gray-700 mb-6"}>
              With over <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}>4+ years of professional experience</span>, I specialize in building scalable web applications and robust APIs. My expertise spans across modern frontend frameworks and powerful backend technologies.
            </p>

            <p className={theme === "dark" ? "text-gray-400 mb-6" : "text-gray-700 mb-6"}>
              I graduated with a <span className={theme === "dark" ? "text-cyan-400" : "text-cyan-600"}>First Class Honours</span> in Computer Science from Caleb University, Lagos, where I developed a strong foundation in software engineering principles and best practices.
            </p>

            <p className={theme === "dark" ? "text-gray-400 mb-8" : "text-gray-700 mb-8"}>
              I'm passionate about writing clean, maintainable code and creating seamless user experiences. Whether it's developing intuitive frontends with React or building efficient backends with Node.js, Express.js, and Django, I bring dedication and expertise to every project.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`rounded-xl p-3 sm:p-4 text-center transition-all duration-300 hover:scale-105 ${
                    theme === "dark"
                      ? "bg-gray-800/50 border border-cyan-500/20 hover:border-cyan-500/40"
                      : "bg-white border-2 border-cyan-500/30 hover:border-cyan-500/50 shadow-md"
                  }`}
                >
                  <item.icon className={`h-6 w-6 sm:h-8 sm:w-8 mx-auto mb-2 sm:mb-3 ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`} />
                  <div className={`text-sm sm:text-base mb-1 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{item.title}</div>
                  <div className={`text-xs sm:text-sm ${theme === "dark" ? "text-gray-500" : "text-gray-600"}`}>{item.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tabs for Skills and Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className={`grid w-full max-w-md mx-auto grid-cols-2 mb-6 sm:mb-8 h-auto ${
              theme === "dark" 
                ? "bg-gray-800/50 border border-gray-700" 
                : "bg-gray-100 border-2 border-gray-200"
            }`}>
              <TabsTrigger 
                value="skills"
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Technical Skills
              </TabsTrigger>
              <TabsTrigger 
                value="certifications"
                className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white py-2.5 sm:py-3 px-3 sm:px-4 text-sm sm:text-base ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Certifications
              </TabsTrigger>
            </TabsList>

            {/* Skills Tab */}
            <TabsContent value="skills" className="mt-0">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className={`rounded-2xl p-4 sm:p-6 transition-all duration-300 h-full ${
                      theme === "dark"
                        ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40"
                        : "bg-white border-2 border-gray-200 hover:border-cyan-500 shadow-md"
                    }`}>
                      {/* Icon Header */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${category.color} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                          <div className={`w-full h-full rounded-lg flex items-center justify-center ${
                            theme === "dark" ? "bg-gray-900" : "bg-white"
                          }`}>
                            <category.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`} />
                          </div>
                        </div>
                        <h3 className={`text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>{category.title}</h3>
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
            </TabsContent>

            {/* Certifications Tab */}
            <TabsContent value="certifications" className="mt-0">
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`group rounded-2xl p-4 sm:p-6 transition-all duration-300 ${
                      theme === "dark"
                        ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                        : "bg-white border-2 border-gray-200 hover:border-cyan-500 hover:shadow-xl"
                    }`}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      {/* Logo */}
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <span className="text-xl sm:text-2xl">{cert.logo}</span>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`mb-2 text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300 ${
                          theme === "dark" ? "text-white" : "text-gray-900"
                        }`}>
                          {cert.title}
                        </h3>
                        <div className="flex items-center gap-2 mb-3 flex-wrap text-xs sm:text-sm">
                          <Award className="h-3 w-3 sm:h-4 sm:w-4 text-cyan-400" />
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
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
