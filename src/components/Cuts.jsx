import React from 'react';
import Cut1 from '../assets/cuts/1.jpg';
import Cut2 from '../assets/cuts/2.jpg';
import Cut3 from '../assets/cuts/3.jpg';
import Cut4 from '../assets/cuts/4.jpg';
import Cut5 from '../assets/cuts/5.jpg';

const cuts = [Cut1, Cut2, Cut3, Cut4, Cut5];

export default function Cuts() {
  return (
    <div className='p-5 pt-20 md:pt-32 max-w-[1920px] mx-auto' id='cuts'>
        <h1 className='text-white text-4xl md:text-6xl font-bold my-12 md:my-16 text-center uppercase tracking-[0.2em] md:tracking-[0.3em] relative font-bodoni'>
          GALLERY
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20"></span>
        </h1>
        <div className='flex flex-wrap justify-center gap-4 md:gap-8 px-2 md:p-5'>
            {cuts.map((cut, index) => (
              <div key={index} className='w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] h-[350px] md:h-[500px] overflow-hidden rounded-2xl md:rounded-3xl group relative shadow-2xl'>
                <div className='absolute inset-0 bg-black/60 md:bg-black/60 group-hover:bg-black/20 transition-all duration-700 z-10'></div>
                <img 
                  src={cut} 
                  className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110' 
                  alt={`Haircut ${index + 1}`} 
                />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <div className="h-px w-full bg-white/20 mb-4"></div>
                  <span className="text-white italic text-base md:text-xl font-medium font-bodoni">Senios Style #{index + 1}</span>
                </div>
              </div>
            ))}
        </div>
    </div>
  )
}
