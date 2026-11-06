import React from "react";
import { ExternalLink, Layers } from "lucide-react";
import { GithubIcon } from "@/components/Icons";
import { PROJECTS } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            Featured Engineering Work
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Technical Projects</h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            Production-oriented architectures highlighting real-time data handling, ORM schema designs, and modern containerization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((proj) => (
            <div
              key={proj.title}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-xl bg-zinc-900/60 border border-zinc-800 hover:border-zinc-700 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white">
                    {proj.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white transition-colors"
                        aria-label="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-zinc-400 hover:text-white transition-colors"
                        aria-label="View Live Deployment"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-xs text-indigo-400 mt-1 mb-4 font-mono font-medium">
                  {proj.tagline}
                </p>

                <ul className="space-y-2.5 my-5 text-sm text-zinc-300">
                  {proj.description.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2 leading-relaxed">
                      <span className="text-zinc-600 select-none mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-800/80">
                <div className="flex flex-wrap gap-2">
                  {proj.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-zinc-950 text-zinc-400 border border-zinc-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}