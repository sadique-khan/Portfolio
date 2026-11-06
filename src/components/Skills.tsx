import React from "react";
import { Cpu } from "lucide-react";
import { SKILL_GROUPS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-4 h-4" />
            Technical Toolkit
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Skills & Competencies</h2>
          <p className="text-zinc-400 text-sm max-w-xl">
            A battle-tested stack spanning client interfaces, distributed backend services, relational databases, and cloud platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_GROUPS.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-300 mb-4 pb-2 border-b border-zinc-800/60">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-zinc-950 text-zinc-300 border border-zinc-800 hover:border-zinc-700 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}