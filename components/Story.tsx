import { siteConfig } from "@/config/site-config";

export default function Story() {
  return (
    <section id="story" className="py-24 px-6 relative dirt-texture">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
            {siteConfig.story.title}
          </h2>
          <p className="text-xl text-gray-400">{siteConfig.story.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteConfig.story.parts.map((part, i) => (
            <div key={i} className="panel group">
              <div className="text-xs font-mono text-gold uppercase tracking-[0.15em] mb-4">
                {part.label}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 text-white">
                {part.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {part.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
