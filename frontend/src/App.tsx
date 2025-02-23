"use client"
import Header from "./components/ui/Header";
import HeroSection from "./components/ui/HeroSection";
import Footer from "./components/ui/Footer";


// import { Instagram, Twitter, Download } from "lucide-react";
// import { Button } from "./components/ui/button";
// import { BackgroundLines } from "./components/ui/background-lines";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <HeroSection/>
      <Footer/>

    </div>
    























    // <div className="min-h-screen flex flex-col bg-black text-white">
    //   <Navbar />

    //   <main className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-16">
    //     <div className="max-w-lg text-center md:text-left">
    //       <div className="text-xl font-semibold">Happen</div>
    //       <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
    //         Delightful<br />events<br />
    //         <span className="bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">start here</span>
    //         <span className="text-pink-500">.</span>
    //       </h1>
    //       <p className="text-gray-400 text-lg mb-6">
    //         Set up an event page, invite friends and<br />sell tickets. Host a memorable event today.
    //       </p>
    //       <div>
    //         <Button variant="outline" size="lg" className="mr-4">Get Started</Button>
    //         <Button variant="secondary" size="lg">Learn More</Button>
    //       </div>
          
    //     </div>
    //     {/* <div className="relative w-72 h-72 md:w-96 md:h-96 mt-8 md:mt-0 rounded-full overflow-hidden">
    //       <img
    //         src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-lu-ma-2025-02-18-21_26_19-vOypaM37yG9LXdqtvQ4b60MzT6UEve.png"
    //         alt="Luma app interface showing a DJ event"
    //         className="w-full h-full object-cover"
    //       />
    //     </div> */}
    //   </main>

    //   <footer className="px-8 py-16 border-t border-gray-800">
    //     <div className="flex flex-col md:flex-row justify-between items-center">
    //       <div className="flex flex-col md:flex-row items-center gap-6">
    //         <div className="text-lg font-semibold">Happen</div>
    //         <nav className="flex gap-4">
    //           <a href="#" className="text-white text-sm hover:opacity-80">What's New</a>
    //           <a href="#" className="text-white text-sm hover:opacity-80">Discover</a>
    //           <a href="#" className="text-white text-sm hover:opacity-80">Pricing</a>
    //           <a href="#" className="text-white text-sm hover:opacity-80">Help</a>
    //         </nav>
    //       </div>
    //       <div className="flex gap-4 mt-4 md:mt-0">
    //         <a href="#" aria-label="Instagram" className="text-gray-400 hover:opacity-100">
    //           <Instagram size={20} />
    //         </a>
    //         <a href="#" aria-label="Download App" className="text-gray-400 hover:opacity-100">
    //           <Download size={20} />
    //         </a>
    //         <a href="#" aria-label="Twitter" className="text-gray-400 hover:opacity-100">
    //           <Twitter size={20} />
    //         </a>
    //       </div>
    //     </div>
    //     <div className="mt-6 flex justify-center">
    //       <nav className="flex gap-4">
    //         <a href="#" className="text-gray-500 hover:opacity-80">Terms</a>
    //         <a href="#" className="text-gray-500 hover:opacity-80">Privacy</a>
    //         <a href="#" className="text-gray-500 hover:opacity-80">Security</a>
    //       </nav>
    //     </div>
    //   </footer>
    // </div>
  );
}
