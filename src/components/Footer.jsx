import React from 'react';

export default function Footer() {
  return (
    <footer className='p-6 md:p-12 max-w-[1920px] mx-auto mb-8 md:mb-12 rounded-2xl md:rounded-4xl bg-black/40 backdrop-blur-xl mt-16 md:mt-24 w-[92%] md:w-[95%] border border-white/10 shadow-[0_-8px_32px_0_rgba(0,0,0,0.5)]'>
      <p className='text-center text-[10px] md:text-sm font-light text-white/40 tracking-[0.15em] md:tracking-[0.3em] uppercase leading-loose'>
        © {new Date().getFullYear()} Senios. All Rights Reserved.
      </p>
    </footer>
  )
}
