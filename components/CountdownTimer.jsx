"use client"

import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(5 * 60 * 60); // 5 hours in seconds

  useEffect(() => {
    if (timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 rounded-lg bg-green-50">
      <h1 className="text-4xl font-bold mb-8 text-white bg-green-600 px-4 py-2 rounded-xl">অফার শেষ হতে বাকি আছে</h1>
      <div className="text-6xl font-mono bg-white p-8 rounded-lg shadow-lg">
        {formatTime(timeLeft)}

        <div className='flex text-base justify-between'>
          <div className='bg-green-100 text-green-800 px-4 rounded-full'>Hours</div>
          <div className='bg-green-100 text-green-800 px-4 rounded-full'>Minute</div>
          <div className='bg-green-100 text-green-800 px-4 rounded-full'>Second</div></div>
      </div>
      <div>

        <Link href="/order-now"><Button className="bg-green-600 text-lg font-semibold mt-4 h-14" size="lg">অডার করতে চাই</Button></Link>
      </div>
    </div>
  );
};

export default CountdownTimer;