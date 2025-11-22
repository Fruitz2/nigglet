import { siteConfig } from "@/config/site-config";
import { Coins } from "lucide-react";

export default function Tokenomics() {
  return (
    <section id="token" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 mb-6">
            <Coins className="w-8 h-8 text-gold" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
            {siteConfig.tokenomics.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {siteConfig.tokenomics.bullets.map((bullet, i) => (
            <div key={i} className="panel text-center group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500">
              <span className="text-gold text-2xl font-bold">{i + 1}</span>
              <p className="text-lg text-gray-300 pt-1">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="panel text-center border-brown-primary/40 bg-brown-primary/5">
          <p className="text-gray-400 text-sm leading-relaxed">
            {siteConfig.tokenomics.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
