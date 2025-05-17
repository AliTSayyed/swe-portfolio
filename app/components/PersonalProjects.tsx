"use client";

import { motion } from "framer-motion";

export default function TechnicalMetrics() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Full-Stack
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Trust Pilot Clone
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    • Developed a full stack Trust Pilot clone for freelancer
                    reviews
                  </li>
                  <li>
                    • Developed a strong understanding of REST APIs and client
                    server communication
                  </li>
                  <li>• Used Django, Angular, and PostgreSQL</li>
                </ul>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <a
                    href="https://alitsayyed.github.io/LancerRank-Frontend/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/AliTSayyed/Trust-Pilot-Clone-FullStack"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Backend
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  RSS Aggregator
                </h4>
                <ul className="mt-2 mb-4 space-y-2 text-gray-400">
                  <li>
                    • Developed backed which collects RSS Feeds per user request
                    and stores it in a Postgres database.
                  </li>
                  <li>
                    • Server implements CRUD and has middleware for
                    authentication.
                  </li>
                  <li>
                    • Written in Go and takes advantage of concurrency for
                    continuous RSS feed scraping.
                  </li>
                </ul>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <a
                    href="https://github.com/AliTSayyed/Go-RSS-Aggregator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Frontend
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Amazon Clone Site
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>• Created an Amazon clone site</li>
                  <li>
                    • Strong fundamental understanding of the DOM and how
                    Javascript allows for user interactions
                  </li>
                  <li>• Reduced technical debt by 40%</li>
                </ul>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <a
                    href="https://alitsayyed.github.io/Amazon-Clone-Site/amazon.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  <a
                    href="https://github.com/AliTSayyed/Amazon-Clone-Site"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  React Projects
                </h4>
                <ul className="mt-2 space-y-2 text-gray-400">
                  <li>
                    • Strong understanding of React fundamentals including
                    props, state, hooks, and components.
                  </li>
                  <li>
                    • Multiple projects including a recipe generator via api
                    request to claude ai
                  </li>
                </ul>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <a
                    href="https://github.com/AliTSayyed/react-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 text-green-400">
              Data Structures and Algorithms
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative bg-gray-800/50 rounded-lg p-6 border border-gray-700"
              >
                <h4 className="text-lg font-semibold text-gray-300">
                  Princeton University&#39;s DSA course
                </h4>
                <ul className="mt-2 mb-10 space-y-2 text-gray-400">
                  <li>• Eight puzzle solver using A* search algorithm </li>
                  <li>• Percolation determination using union find</li>
                  <li>
                    • Use of Kd trees to determine the nearest neighbor in a set
                    of points
                  </li>
                </ul>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <a
                    href="https://github.com/AliTSayyed/DSA-Princeton-University"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 text-green-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
