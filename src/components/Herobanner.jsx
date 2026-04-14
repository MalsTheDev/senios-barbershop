import React from 'react';

export default function Herobanner() {
  return (
    <section id="herobanner" className="relative h-[95vh] w-full flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect and overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-[url('./src/assets/hero.jpg')] bg-cover bg-center bg-no-repeat animate-subtle-zoom"
          style={{ backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(7,7,7,1)), url("./src/assets/hero.jpg")' }}
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto font-outfit">
        <div className="animate-fade-in-up">
          <h2 className="text-white/60 uppercase tracking-[0.3em] md:tracking-[0.6em] text-[10px] md:text-sm mb-6 font-medium">
            Master Cuts & Classic Grooming
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-[10rem] font-bold text-white tracking-tighter mb-8 flex flex-col items-center font-bodoni leading-none">
            <span className="block hover:scale-105 transition-transform duration-500 cursor-default">SENIOS</span>
            <span className="block font-outline-2 text-transparent -mt-1 md:-mt-4 hover:scale-105 transition-transform duration-500 cursor-default">BARBER</span>
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8 md:mt-12 animate-fade-in-delay">
            <a
              href="#contact"
              className="group relative px-8 md:px-10 py-3 md:py-4 bg-white text-black font-bold uppercase tracking-[0.2em] rounded-sm hover:scale-105 transition-all duration-300 w-full md:w-auto text-sm md:text-base"
            >
              <span className="relative z-10">BOOK APPOINTMENT</span>
              <div className="absolute inset-0 bg-white blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
            </a>

            <a
              href="#services"
              className="text-white uppercase tracking-[0.2em] font-semibold border-b-2 border-white/20 hover:border-white transition-all duration-300 pb-1 text-sm md:text-base"
            >
              EXPLORE SERVICES
            </a>
          </div>
        </div>
      </div>

      {/* Aesthetic Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-linear-to-b from-white/20 to-white/60" />
      </div>
    </section>
  );
}
