import React from "react";
import { ArrowUpRight, Mail, ShieldCheck, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PROFILE } from "@/lib/data";

export default function Hero() {
  return (
    <section id="about" className="pt-32 pb-20 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Software Engineering Opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-zinc-100">
            Hi, I&apos;m {PROFILE.name}. <br />
            <span className="text-zinc-400">I build reliable, full-stack systems.</span>
          </h1>

          <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed mt-2">
            {PROFILE.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 mt-1">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-zinc-500" />
              {PROFILE.location}
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              AWS Certified Cloud Practitioner
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-zinc-100 text-zinc-950 hover:bg-zinc-200 transition-colors"
            >
              Explore Projects
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>

            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}