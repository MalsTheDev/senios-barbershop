import React from 'react';

export default function BarberMap() {
  return (
    <div className='w-full h-full min-h-[400px] overflow-hidden rounded-2xl border border-white/10 shadow-2xl'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12534.111708218144!2d21.7381547!3d38.2440603!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135e4928d11dbd0b%3A0x4d9795a8a470587f!2sSenios%20Barbershop!5e0!3m2!1sel!2sgr!4v1712221769676!5m2!1sel!2sgr"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0, minHeight: '400px' }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className='filter grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700'
        />
    </div>
  )
}
