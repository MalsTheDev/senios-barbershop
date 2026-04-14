import React from 'react';
import { Phone, Mail } from 'lucide-react';
import FacebookIcon from '../assets/facebook.png';
import BarberMap from './BarberMap';
import Schedule from './Schedule';

export default function Contact() {
  return (
    <div className='flex flex-col items-center justify-center p-5 pt-20 md:pt-32 max-w-[1920px] mx-auto mb-10 md:mb-20' id='contact'>
        <h1 className='text-white text-4xl md:text-6xl font-bold my-12 md:my-16 text-center uppercase tracking-[0.2em] md:tracking-[0.3em] relative font-bodoni'>
          Επικοινωνία
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/20"></span>
        </h1>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 w-full max-w-7xl px-2 md:px-5'>
          <div className='flex flex-col gap-10 md:gap-12'>
            <div className='space-y-6'>
              <h2 className='text-2xl md:text-4xl font-bold text-white uppercase tracking-widest border-l-4 md:border-l-8 border-white pl-4 md:pl-6 mb-8 md:mb-12 font-bodoni'>Πού θα μας βρείτε</h2>
              <div className='flex flex-col gap-4 md:gap-6'>
                <a href="tel:+302610278003" className='text-white hover:text-gray-400 text-lg md:text-xl flex items-center gap-4 transition-all hover:translate-x-2'>
                  <div className='p-2 md:p-3 bg-white/5 rounded-full'><Phone size={20} className="md:w-6 md:h-6" /></div>
                  261 027 8003
                </a>
                <a href='https://www.facebook.com/Senios.Haircut/' target='_blank' rel='noopener noreferrer' className='text-white hover:text-gray-400 text-lg md:text-xl flex items-center gap-4 transition-all hover:translate-x-2'>
                  <div className='p-2 md:p-3 bg-white/5 rounded-full'><img src={FacebookIcon} alt="Facebook" className='h-5 w-5 md:h-6 md:w-6' /></div>
                  Senios.Haircut
                </a>
                <a href="mailto:info@senios.gr" className='text-white hover:text-gray-400 text-lg md:text-xl flex items-center gap-4 transition-all hover:translate-x-2'>
                  <div className='p-2 md:p-3 bg-white/5 rounded-full'><Mail size={20} className="md:w-6 md:h-6" /></div>
                  info@senios.gr
                </a>
              </div>
            </div>
            
            <Schedule />
          </div>
          
          <div className='w-full min-h-[350px] md:min-h-[500px]'>
            <BarberMap />
          </div>
        </div>
    </div>
  )
}
