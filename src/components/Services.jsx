import React from 'react';

const services = [
  { name: 'Ανδρικό Κούρεμα', price: '12€' },
  { name: 'Ανδρικό Κούρεμα - Περιποίηση Γένια', price: '15€' },
  { name: 'Παιδικό Κούρεμα (έως 10 Ετών)', price: '10€' },
  { name: 'Τριμάρισμα | Ξύρισμα | Περιποίηση Γενειάδας', price: '4€' },
  { name: 'Λούσιμο | Styling', price: '4€' },
  { name: 'Γυναικείο Κούρεμα', price: '14€' },
];

export default function Services() {
  return (
    <div className='flex flex-col items-center p-5 pt-20 md:pt-32 max-w-[1920px] mx-auto min-h-screen' id='services'>
        <h1 className='text-white text-4xl md:text-6xl font-bold my-12 md:my-16 uppercase tracking-[0.2em] md:tracking-widest relative font-bodoni'>
          Υπηρεσίες
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20"></span>
        </h1>
        <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-8 md:gap-y-12 px-2 md:p-5'>
            {services.map((service, index) => (
              <div key={index} className='flex justify-between items-end border-b border-white/5 pb-6 md:pb-8 group hover:border-white/30 transition-all duration-500'>
                <div className='flex flex-col gap-2'>
                  <span className='text-white/90 text-lg md:text-2xl font-semibold uppercase tracking-widest group-hover:text-white transition-colors'>{service.name}</span>
                  <div className="w-0 group-hover:w-full h-px bg-white/40 transition-all duration-700"></div>
                </div>
                <span className='text-white text-2xl md:text-4xl font-black ml-4 md:ml-8 tabular-nums'>{service.price}</span>
              </div>
            ))}
        </div>
    </div>
  )
}
