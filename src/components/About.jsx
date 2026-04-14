import React from 'react';
import AboutImg from '../assets/about.jpg';

export default function About() {
  return (
    <div className='p-5 pt-20 md:pt-32 max-w-[1920px] mx-auto' id='about'>
        <h1 className='text-white text-4xl md:text-6xl font-bold my-12 md:my-16 text-center uppercase tracking-[0.2em] md:tracking-[0.3em] relative font-bodoni'>
          STORY
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20"></span>
        </h1>
        <div className='flex flex-col lg:flex-row items-center justify-center gap-12 md:gap-16 p-2 md:p-5'>
            <div className='w-full lg:w-1/2 space-y-6 md:space-y-8'>
              <p className='text-xl md:text-3xl text-white/90 leading-tight font-medium italic font-bodoni'>
                Ο Senios είναι ένας νέος χώρος στην Πάτρα με φρέσκιες ιδέες που συνδέουν το παρελθόν με το παρόν και γιατί όχι το μέλλον. 
              </p>
              <p className='text-base md:text-xl text-white/70 leading-relaxed font-light'>
                Υπηρεσίες που απευθύνονται σε άνδρες και παιδιά με παραδοσιακά, μοντέρνα χτενίσματα και κουρέματα και premium προϊόντα. 
                Το κουρείο Senios όπως λέει και το όνομά του, είναι εδώ για να σας καλλωπίσει και να σας κακομάθει.
              </p>
              <div className='h-0.5 w-24 md:w-32 bg-white/30'></div>
            </div>
            <div className='w-full lg:w-1/3 relative group'>
              <div className='absolute -inset-4 border border-white/10 rounded-2xl transition-all duration-700 group-hover:-inset-2 group-hover:border-white/30 hidden md:block'></div>
              <img src={AboutImg} className='w-full h-[400px] md:h-[600px] object-cover rounded-xl shadow-2xl relative z-10 transition-all duration-700' alt="About Senios" />
            </div>
        </div>
    </div>
  )
}
