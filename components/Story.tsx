import { siteConfig } from "@/config/site-config";

export default function Story() {
  return (
    <section id="story" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 sm:mb-4 bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
            {siteConfig.story.title}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">{siteConfig.story.subtitle}</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.story.parts.map((part, i) => (
            <div 
              key={i} 
              className="panel group hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500"
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <div className="text-xs font-mono text-gold uppercase tracking-[0.15em] mb-3 sm:mb-4 group-hover:text-yellow-300 transition-colors">
                {part.label}
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold mb-3 sm:mb-4 text-white group-hover:text-gold transition-colors">
                {part.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {part.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
