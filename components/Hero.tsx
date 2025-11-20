import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 tunnel-bg" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brown-light px-4 py-2 rounded-full border border-brown-primary/30 bg-brown-primary/10 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{siteConfig.hero.eyebrow}</span>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.9] animate-fade-in tracking-tight">
              <span className="block bg-gradient-to-r from-gold via-brown-light to-gold bg-clip-text text-transparent text-glow">
                {siteConfig.hero.title}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
              {siteConfig.hero.subtitle}
            </p>

            <div className="space-y-3">
              {siteConfig.hero.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3 text-left">
                  <span className="text-gold mt-1 text-xl">▸</span>
                  <p className="text-gray-400">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href={siteConfig.links.pump}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {siteConfig.hero.primaryCta}
              </a>
              <a
                href={siteConfig.links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {siteConfig.hero.secondaryCtas[0]}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-brown-primary/20 to-gold/20 blur-3xl rounded-full" />
              <div className="absolute inset-0 animate-dig">
                <Image
                  src="/logo.png"
                  alt="NIGGLET"
                  width={2000}
                  height={2000}
                  className="animate-fade-in drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
