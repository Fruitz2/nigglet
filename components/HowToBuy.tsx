import { siteConfig } from "@/config/site-config";

export default function HowToBuy() {
  return (
    <section id="how" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
          {siteConfig.how.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {siteConfig.how.steps.map((step, i) => (
            <div key={i} className="panel text-center group hover:scale-[1.02] hover:-translate-y-1 transition-all duration-500">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold to-brown-light flex items-center justify-center text-bg font-bold text-xl">
                {step.label}
              </div>
              <h3 className="text-xl font-display font-bold mb-2 text-white">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {step.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={siteConfig.links.pump}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Start Digging Now
          </a>
        </div>
      </div>
    </section>
  );
}
