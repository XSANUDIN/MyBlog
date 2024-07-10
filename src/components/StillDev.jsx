// src/components/AnimatedText.js
import React from 'react';
import '../css/AnimatedDevtext.css';

const StillDev = () => {
  const text = "Blog ini Sedang Dalam Pengembangan....";
    return (
      <div className="flex justify-center items-center h-32 bg-black ">
        <div className="text-2xl md:text-4xl font-mono text-black font-bold outline-black">
          {text.split('').map((char, index) => (
            <span
              key={index}
              className="inline-block snake-animation"
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>
    );
  };


export default StillDev;
