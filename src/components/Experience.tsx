import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Experience() {
  const { theme } = useTheme();

  const experiences = [
    {
      id: "workcity",
      company: "Workcity",
      position: "Full Stack Engineer & Technical Project Manager",
      period: "Sep 2025 - Present",
      location: "Remote",
      description: "Leading technical projects and developing full-stack solutions for enterprise clients. Managing cross-functional teams and implementing agile methodologies to deliver high-quality software solutions.",
      highlights: [
        "Led development of core platform features using React and Node.js",
        "Managed technical project timelines and coordinated with stakeholders",
        "Implemented CI/CD pipelines improving deployment efficiency by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      logo: "🏢"
    },
    {
      id: "enforca",
      company: "Enforca",
      position: "Full Stack Engineer",
      period: "May 2025 - Sep 2025",
      location: "Remote",
      description: "Developed and maintained web applications using React, Node.js, and Express.js. Collaborated with design and product teams to deliver high-quality solutions that enhanced user experience.",
      highlights: [
        "Built scalable REST APIs serving 10,000+ daily active users",
        "Optimized application performance reducing load times by 40%",
        "Implemented responsive UI components using Tailwind CSS",
        "Integrated third-party APIs and payment processing systems"
      ],
      logo: "💼"
    },
    {
      id: "builder",
      company: "The Builder and Maker International",
      position: "Frontend Engineer",
      period: "Jan 2024 - Sep 2025",
      location: "Lagos, Nigeria",
      description: "Specialized in frontend development with React.js and modern CSS frameworks. Created engaging user interfaces and improved user experience across multiple projects with a focus on accessibility and performance.",
      highlights: [
        "Developed reusable component libraries used across 5+ projects",
        "Improved page load times by 40% through code optimization",
        "Implemented design system ensuring consistent UI/UX",
        "Collaborated with UX designers to translate wireframes into code"
      ],
      logo: "🛠️"
    },
    {
      id: "sheiz",
      company: "Sheiz Financial Tech",
      position: "Backend Engineer",
      period: "Nov 2024 - Feb 2025",
      location: "Remote",
      description: "Focused on backend development using Django and FastAPI. Designed database schemas and implemented secure authentication systems for financial technology applications.",
      highlights: [
        "Built secure payment processing APIs handling $100K+ transactions",
        "Implemented JWT authentication and role-based access control",
        "Optimized database queries reducing response time by 50%",
        "Developed comprehensive API documentation using Swagger"
      ],
      logo: "💳"
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 relative">
      {/* Background with smooth transition */}
      <div className={`absolute inset-0 ${
        theme === "dark" ? "bg-gray-950" : "bg-white"
      }`} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-10 md:mb-12"
        >
          <h2 className={`mb-4 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            My professional journey in software development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <Tabs defaultValue="workcity" className="w-full">
            <TabsList className={`grid w-full grid-cols-2 lg:grid-cols-4 mb-6 sm:mb-8 h-auto p-1 ${
              theme === "dark" 
                ? "bg-gray-800/50 border border-gray-700" 
                : "bg-gray-100 border-2 border-gray-200"
            }`}>
              {experiences.map((exp) => (
                <TabsTrigger 
                  key={exp.id}
                  value={exp.id}
                  className={`data-[state=active]:bg-gradient-to-r data-[state=active]:from-cyan-500 data-[state=active]:to-blue-500 data-[state=active]:text-white py-2 sm:py-3 px-1 sm:px-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                    <span className="text-base sm:text-lg">{exp.logo}</span>
                    <span className="text-[10px] sm:text-xs lg:text-sm leading-tight">{exp.company}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {experiences.map((exp) => (
              <TabsContent key={exp.id} value={exp.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`rounded-2xl p-4 sm:p-6 md:p-8 ${
                    theme === "dark"
                      ? "bg-gray-800/50 border border-gray-700"
                      : "bg-gray-50 border-2 border-gray-200 shadow-md"
                  }`}
                >
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl sm:text-3xl">{exp.logo}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`mb-1 text-sm sm:text-base ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                          {exp.company}
                        </h3>
                        <p className="text-cyan-500 mb-2 text-xs sm:text-sm">{exp.position}</p>
                        <div className="flex flex-col gap-1.5 sm:gap-2">
                          <div className={`flex items-center gap-1.5 sm:gap-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                            <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{exp.period}</span>
                          </div>
                          <div className={`flex items-center gap-1.5 sm:gap-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
                            <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="text-xs sm:text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className={`mb-4 sm:mb-6 text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div>
                    <h4 className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === "dark" ? "text-cyan-400" : "text-cyan-600"}`}>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className={`flex items-start gap-2 sm:gap-3 text-sm sm:text-base ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                        >
                          <span className="text-cyan-400 flex-shrink-0 mt-0.5 sm:mt-1">▸</span>
                          <span className="flex-1">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
