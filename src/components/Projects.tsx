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
      title: "Meride Haven",
      description:
        "Transport and hospitality platform offering trusted drivers and car hire (HavenRide), handpicked accommodations (HavenStay), event support (HavenEvents), and professional security escort services (HavenSecure). Move with ease, arrive with confidence.",
      image:
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80",
      tech: ["Express.js", "MongoDB", "Node.js", "REST API"],
      liveUrl: "https://meride-haven.com/",
      githubUrl: "https://github.com/Obitope-Eniola-Nathaniel",
    },
    {
      title: "Worknoon",
      description:
        "Full-stack platform for finding coworking spaces, private offices, and meeting rooms. Connects professionals with the perfect workspace — built for seamless booking and workspace discovery.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
      tech: ["React", "TypeScript", "Express.js", "MongoDB"],
      liveUrl: "https://worknoon.com/",
      githubUrl: "https://github.com/Obitope-Eniola-Nathaniel",
    },
    {
      title: "We Listen",
      description:
        "Backend services and API powering the We Listen platform. Built for reliability and scale with Express.js and MongoDB, delivering robust APIs and data handling.",
      image:
        "https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=800&q=80",
      tech: ["Express.js", "MongoDB", "Node.js", "REST API"],
      liveUrl: "https://we-listen.co/",
      githubUrl: "https://github.com/Obitope-Eniola-Nathaniel",
    },
    {
      title: "SOS Diesel Biller",
      description:
        "Generator and diesel billing platform with multi-tenant support. Manages shops, tenants, and billing for diesel/generator services — admin and site user roles with MySQL-backed data.",
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      tech: ["Django", "MySQL", "Python", "Multi-tenant"],
      liveUrl: "https://sosdieselbilller.com.ng/",
      githubUrl: "https://github.com/Obitope-Eniola-Nathaniel",
    },
    {
      title: "VerifyDeliver",
      description:
        "B2B/B2C verification management platform, independent third-party product inspection and verification for online trade. Product & address verification, structured reports, multi-portal (client, verifier, admin), real-time task tracking, and geo-tagged media evidence. Built for trust and transparency in online trade.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80",
      tech: ["NestJS", "PostgreSQL", "Prisma", "Redis", "TypeScript"],
      liveUrl: "#",
      githubUrl: "https://github.com/Obitope-Eniola-Nathaniel",
      ongoing: true,
    },
    {
      title: "Wallet / Banking API",
      description:
        "Wallet and banking system API with wallet CRUD, deposits, withdrawals, and atomic transfers between wallets. Built with Clean Architecture and CQRS (MediatR): transaction logging, concurrency control, and phased roadmap to multi-database support, Redis caching, and event-driven design. Learning platform for enterprise-grade backend patterns.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      tech: [
        "ASP.NET Core",
        "CQRS",
        "MediatR",
        "PostgreSQL",
        "Clean Architecture",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/Obitope-Eniola-Nathaniel",
      ongoing: true,
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 relative">
      <div
        className={`absolute inset-0 ${
          theme === "dark"
            ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
            : "bg-gradient-to-b from-gray-50 via-white to-gray-50"
        }`}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2
            className={
              theme === "dark" ? "text-white mb-4" : "text-gray-900 mb-4"
            }
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          <p
            className={`mt-4 max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
          >
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
                <div className="flex flex-wrap items-center gap-2 mb-2 sm:mb-3">
                  <h3
                    className={`text-sm sm:text-base group-hover:text-cyan-400 transition-colors duration-300 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  {(project as { ongoing?: boolean }).ongoing && (
                    <Badge className="bg-amber-500/20 text-amber-400 border-amber-500/40 text-xs">
                      In progress
                    </Badge>
                  )}
                </div>
                <p
                  className={`text-xs sm:text-sm mb-3 sm:mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
                >
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
                  {(project as { ongoing?: boolean }).ongoing ? (
                    <Button
                      variant="secondary"
                      size="sm"
                      className="flex-1 text-xs sm:text-sm cursor-default opacity-80"
                      disabled
                    >
                      <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      Coming soon
                    </Button>
                  ) : (
                    <Button
                      asChild
                      variant="default"
                      size="sm"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex-1 text-xs sm:text-sm"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-1.5 sm:mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                        View Live
                      </a>
                    </Button>
                  )}
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500 flex-1 text-xs sm:text-sm"
                  >
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
