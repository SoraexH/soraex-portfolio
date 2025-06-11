
import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, ...props }) => (
  <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90" {...props}>
    {children}
  </button>
);

export default function GalaxyPortfolio() {
  const portfolioItems = [
    "1.png",
    "af.png",
    "ddada.png",
    "untitled.png"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#050011] to-[#0a0f23] text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-stars opacity-70" />
      </div>

      <header className="z-10 relative flex justify-between items-center px-10 py-6">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-300">Soraex</h1>
        <nav className="space-x-6 text-sm">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#graphics" className="hover:underline">Graphics</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>

      <section className="z-10 relative text-center py-32 px-6">
        <motion.h2 className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-pink-500">Sora</span><span className="text-yellow-400">ex</span>
        </motion.h2>
        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Icons: 1500R$, Thumbnails: 2300R$, Ads: 1000R$ — includes tax. Delivery in 1–2 days.
        </p>
        <div className="flex justify-center gap-4">
          <Button>VIEW MY WORK</Button>
          <Button>therealsoraexx</Button>
        </div>
      </section>

      <section id="graphics" className="z-10 relative py-20 px-10">
        <h2 className="text-4xl text-center font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">My Graphics Portfolio</h2>
        <p className="text-center text-gray-400 mb-10">Click any image to view in full</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {portfolioItems.map((file, i) => (
            <a
              key={i}
              href={`/portfolio/${file}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black bg-opacity-10 rounded-xl overflow-hidden border border-gray-700 block"
            >
              <img
                src={`/portfolio/${file}`}
                alt={`GFX ${i + 1}`}
                className="w-full h-48 object-cover"
                onError={(e) => e.currentTarget.src = 'https://via.placeholder.com/300x200?text=Image+failed+to+load'}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
