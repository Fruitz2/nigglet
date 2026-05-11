import { siteConfig } from "@/config/site-config";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-brown-primary/20 bg-surface/50">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-display font-bold bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent mb-2">
              NIGGLET
            </h3>
            <p className="text-gray-500 text-sm">The realest mole in the game</p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={siteConfig.links.tg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
              </svg>
            </a>
            <a
              href={siteConfig.links.x}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gold transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © 2024 NIGGLET. Stay underground.
            </p>
            <p className="text-gray-600 text-xs mt-1">
              Built on Solana
            </p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-brown-primary/10 text-center">
          <p className="text-gray-600 text-xs">
            $NIGG is a meme coin with no intrinsic value or expectation of financial return.
            <br />
            The token is for entertainment purposes only. Always DYOR.
          </p>
        </div>
      </div>
    </footer>
  );
}
