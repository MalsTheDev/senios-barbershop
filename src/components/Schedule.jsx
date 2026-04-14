import React from 'react';

const schedule = [
  { day: 'Δευτέρα', hours: '10:00AM - 4:00PM' },
  { day: 'Τρίτη', hours: '10:00AM - 2:00PM, 5:00PM-9:00PM' },
  { day: 'Τετάρτη', hours: '10:00AM - 4:00PM' },
  { day: 'Πέμπτη', hours: '10:00AM - 2:00PM, 5:00PM-9:00PM' },
  { day: 'Παρασκευή', hours: '10:00AM - 2:00PM, 5:00PM-9:00PM' },
  { day: 'Σάββατο', hours: '10:00AM - 4:00PM' },
];

export default function Schedule() {
  return (
    <div className='flex flex-col space-y-4'>
        <h2 className='text-white text-xl md:text-3xl font-bold uppercase tracking-[0.15em] md:tracking-widest font-bodoni'>Ωράριο Λειτουργίας</h2>
        <div className='space-y-2'>
          {schedule.map((item, index) => (
            <div key={index} className='flex justify-between items-center text-gray-400 hover:text-white transition-colors text-sm md:text-base'>
              <span className='font-semibold'>{item.day}:</span>
              <span className='text-right'>{item.hours}</span>
            </div>
          ))}
        </div>
    </div>
  )
}
