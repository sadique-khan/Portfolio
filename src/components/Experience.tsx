import React from "react";
import { Briefcase, Award, GraduationCap } from "lucide-react";
import { EXPERIENCE, CERTIFICATIONS, EDUCATION } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
                <Briefcase className="w-4 h-4" />
                Work History
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-zinc-100">
                Professional Experience
              </h2>
            </div>

            <div className="space-y-6">
              {EXPERIENCE.map((exp, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-base font-semibold text-zinc-100">{exp.role}</h3>
                      <p className="text-xs text-indigo-400 font-mono">
                        {exp.company} • {exp.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 pt-2 text-sm text-zinc-300">
                    {exp.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-zinc-600 select-none mt-1">•</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications & Education Sidebar */}
          <div className="space-y-8">
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Award className="w-4 h-4" />
                Credentials
              </div>
              <div className="space-y-4">
                {CERTIFICATIONS.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800"
                  >
                    <h4 className="text-sm font-semibold text-zinc-100">{cert.title}</h4>
                    <p className="text-xs text-zinc-400 mt-0.5">{cert.issuer}</p>
                    <div className="mt-2 text-xs font-mono text-zinc-500 flex justify-between">
                      <span>ID: {cert.id}</span>
                      <span>{cert.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <GraduationCap className="w-4 h-4" />
                Education
              </div>
              <div className="p-4 rounded-xl bg-zinc-900/40 border border-zinc-800">
                <h4 className="text-sm font-semibold text-zinc-100">{EDUCATION.degree}</h4>
                <p className="text-xs text-zinc-400 mt-0.5">{EDUCATION.institution}</p>
                <div className="mt-2 text-xs font-mono text-zinc-500 flex justify-between">
                  <span>CGPA: {EDUCATION.cgpa}</span>
                  <span>{EDUCATION.period}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}