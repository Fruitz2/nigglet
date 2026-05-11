import { siteConfig } from "@/config/site-config";
import { AlertTriangle } from "lucide-react";

export default function Disclaimer() {
  return (
    <section className="py-24 px-6 relative border-t border-brown-primary/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <AlertTriangle className="text-gold w-8 h-8" />
          <h2 className="text-4xl md:text-5xl font-display font-bold bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
            {siteConfig.disclaimer.title}
          </h2>
          <AlertTriangle className="text-gold w-8 h-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.disclaimer.bullets.map((bullet, i) => (
            <div key={i} className="panel border-gold/20">
              <div className="flex items-start gap-4">
                <span className="text-gold text-xl">▸</span>
                <p className="text-gray-300">{bullet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
