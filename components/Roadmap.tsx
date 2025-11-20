import { siteConfig } from "@/config/site-config";
import { ArrowRight } from "lucide-react";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
          {siteConfig.roadmap.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.roadmap.phases.map((phase, i) => (
            <div key={i} className="relative group">
              <div className="panel h-full hover:border-gold/40">
                <div className="text-xs font-mono text-gold uppercase tracking-[0.15em] mb-3">
                  {phase.label}
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-white">
                  {phase.title}
                </h3>
                <ul className="space-y-3">
                  {phase.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-400">
                      <span className="text-gold mt-1">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {i < siteConfig.roadmap.phases.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-gold/30 z-10 hidden md:block" size={24} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
