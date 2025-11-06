import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useTheme } from "./ThemeProvider";

export function Projects() {
  const { theme } = useTheme();
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with payment integration, inventory management, and real-time order tracking. Built with React, Node.js, and PostgreSQL.",
      image: "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyMDg3OTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/obitopeeniola"
    },
    {
      title: "Task Management API",
      description: "RESTful API for project and task management with team collaboration features. Implements JWT authentication and role-based access control.",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYyMDc3MjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Django", "FastAPI", "MongoDB", "Redis"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/obitopeeniola"
    },
    {
      title: "Analytics Dashboard",
      description: "Interactive data visualization dashboard with real-time updates and customizable widgets. Features advanced filtering and export capabilities.",
      image: "https://images.unsplash.com/photo-1758411898471-fa144c487c85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBhcHB8ZW58MXx8fHwxNzYyMTYwNjI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["React", "TypeScript", "Recharts", "Tailwind"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/obitopeeniola"
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
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
            Featured <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
            A showcase of my recent work and technical expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group rounded-2xl overflow-hidden transition-all duration-300 ${
                theme === "dark"
                  ? "bg-gray-800/50 border border-gray-700 hover:border-cyan-500/40 hover:shadow-lg hover:shadow-cyan-500/10"
                  : "bg-white border-2 border-gray-200 hover:border-cyan-500 hover:shadow-xl"
              }`}
            >
              {/* Project Image */}
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6">
                <h3 className={`mb-2 sm:mb-3 text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}>
                  {project.title}
                </h3>
                <p className={`text-xs sm:text-sm mb-3 sm:mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <Badge
                      key={i}
                      variant="secondary"
                      className={`text-xs ${
                        theme === "dark"
                          ? "bg-gray-700/50 text-gray-300 border border-gray-600"
                          : "bg-gray-100 text-gray-700 border border-gray-300"
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex-1 text-xs sm:text-sm"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      View Live
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 flex-1 text-xs sm:text-sm"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      GitHub
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
