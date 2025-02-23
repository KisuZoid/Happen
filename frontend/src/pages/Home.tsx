"use client";
import Header from "../components/ui/Header";
import HeroSection from "../components/ui/HeroSection";
import Footer from "../components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
              <Header />
              <HeroSection />
              <Footer />
            </div>
    );
}
