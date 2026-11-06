import React from "react";
import { PROFILE } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8 bg-zinc-950 text-center text-xs text-zinc-500">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© 2026 {PROFILE.name}. All rights reserved.</p>
        <p className="text-zinc-600">Built with Next.js, TypeScript & Tailwind CSS</p>
      </div>
    </footer>
  );
}