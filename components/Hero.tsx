import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 mesh-gradient" />
      <div className="floating-orb" style={{ top: '10%', left: '10%', width: '300px', height: '300px', animationDelay: '0s' }} />
      <div className="floating-orb" style={{ bottom: '20%', right: '15%', width: '200px', height: '200px', animationDelay: '3s' }} />
      <div className="floating-orb" style={{ top: '50%', left: '70%', width: '150px', height: '150px', animationDelay: '6s' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brown-primary/5 to-bg" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-brown-light px-4 py-2 rounded-full border border-brown-primary/30 bg-brown-primary/10 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span>{siteConfig.hero.eyebrow}</span>
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[0.95] sm:leading-[0.9] animate-fade-in tracking-tight">
              <span className="block bg-gradient-to-r from-gold via-brown-light to-gold bg-clip-text text-transparent">
                {siteConfig.hero.title}
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
              {siteConfig.hero.subtitle}
            </p>

            <div className="space-y-2 sm:space-y-3 animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
              {siteConfig.hero.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-2 sm:gap-3 text-left group hover:translate-x-2 transition-transform duration-300">
                  <span className="text-gold mt-1 text-lg sm:text-xl group-hover:scale-125 transition-transform">▸</span>
                  <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-4 animate-fade-in" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
              <a
                href={siteConfig.links.pump}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center"
              >
                {siteConfig.hero.primaryCta}
              </a>
              <a
                href={siteConfig.links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-center"
              >
                {siteConfig.hero.secondaryCtas[0]}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-brown-primary/30 to-gold/30 blur-[100px] rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-brown-primary/20 blur-[80px] rounded-full animate-float" />
              <div className="absolute inset-0 animate-dig">
                <Image
                  src="/logo.png"
                  alt="NIGGLET - The Underground Hustler"
                  width={2000}
                  height={2000}
                  className="animate-fade-in drop-shadow-2xl relative z-10 hover:scale-105 active:scale-95 transition-transform duration-500 w-full h-full object-contain"
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
