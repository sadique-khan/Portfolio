import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/Icons";
import { PROFILE } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Send className="w-4 h-4" />
            Let&apos;s Connect
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100">Get in Touch</h2>
          <p className="text-sm text-zinc-400">
            I am actively looking for developer opportunities. Whether you have an open position or want to discuss a project, my inbox is open.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href={`mailto:${PROFILE.email}`}
            className="flex flex-col items-center p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors text-center group"
          >
            <div className="p-3 rounded-full bg-zinc-950 text-indigo-400 border border-zinc-800 mb-3 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5" />
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Email</span>
            <span className="text-sm text-zinc-200 mt-1 font-mono break-all">{PROFILE.email}</span>
          </a>

          <a
            href={`tel:${PROFILE.phone}`}
            className="flex flex-col items-center p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 hover:border-zinc-700 transition-colors text-center group"
          >
            <div className="p-3 rounded-full bg-zinc-950 text-indigo-400 border border-zinc-800 mb-3 group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Phone</span>
            <span className="text-sm text-zinc-200 mt-1 font-mono">{PROFILE.phone}</span>
          </a>

          <div className="flex flex-col items-center p-6 rounded-xl bg-zinc-900/40 border border-zinc-800 text-center">
            <div className="p-3 rounded-full bg-zinc-950 text-indigo-400 border border-zinc-800 mb-3">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs text-zinc-500 uppercase tracking-wider font-semibold">Location</span>
            <span className="text-sm text-zinc-200 mt-1">{PROFILE.location}</span>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}