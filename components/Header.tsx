"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-bg/80 border-b border-brown-primary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="NIGGLET"
            width={50}
            height={50}
            className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-xl sm:text-2xl font-display font-bold hidden sm:inline bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent">
            NIGGLET
          </span>
          <span className="text-xl font-display font-bold bg-gradient-to-r from-gold to-brown-light bg-clip-text text-transparent sm:hidden">
            NIGG
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a href="#story" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
            Legend
          </a>
          <a href="#token" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
            Token
          </a>
          <a href="#how" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
            How to Buy
          </a>
          <a href="#roadmap" className="text-gray-400 hover:text-gold transition-colors text-sm font-medium">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.tg}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="Telegram"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.053 5.56-5.023c.242-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
            </svg>
          </a>
          <a
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gold transition-colors"
            aria-label="X (Twitter)"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href={siteConfig.links.pump}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2 px-4 sm:px-6"
          >
            Buy $NIGG
          </a>
        </div>
      </div>
    </header>
  );
}
