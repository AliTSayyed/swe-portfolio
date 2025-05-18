"use client";

import { motion } from "framer-motion";

export default function SystemArchitecture() {
  return (
    <section id="work" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Work Experience
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {[
            {
              title: "Full-Stack Developer @GetBrain.ai",
              description:
                "Lead end-to-end voice AI solution development through designing automated data pipelines, implementing backend microservice integrations, and creating intuitive frontend interfaces that drive client success, consistently delivering complex technical solutions with minimal supervision despite junior status.",
              details: [
                "Designed and implemented robust automated data pipelines that streamlined voice ai processing workflows.",
                "Independently developed client-facing frontend portals enhancing user engagement metrics and creating intuitive interfaces that simplified complex voice AI interactions.",
                "Understood the company's Golang microservice architecture within weeks as a junior developer.",
              ],
              tech: [
                "Go",
                "N8N",
                "Dockers",
                "APIs/Webhooks",
                "JavaScript",
                "TypeScript",
                "Next.js",
              ],
            },
            {
              title: "Full-Stack Developer @LegalPro",
              description:
                "Independently developed a real-time WebSocket chat application with Django backend and Angular frontend integration for the company's core SaaS product",
              details: [
                "Architected a complete WebSocket-based chat system",
                "Designed and optimized the database schema and caching system",
                "Implemented secure JWT authentication protocols",
              ],
              tech: ["Angular", "Django", "PostgreSQL", "JWT"],
            },
          ].map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-gray-400 mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {project.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-blue-500/10 rounded-full border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
