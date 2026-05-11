import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Tokenomics from "@/components/Tokenomics";
import HowToBuy from "@/components/HowToBuy";
import Roadmap from "@/components/Roadmap";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";
import BackgroundEffects from "@/components/BackgroundEffects";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <Header />
      <main>
        <Hero />
        <Story />
        <Tokenomics />
        <HowToBuy />
        <Roadmap />
        <Disclaimer />
      </main>
      <Footer />
    </>
  );
}
