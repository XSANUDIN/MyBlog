import React from 'react';
import Typed from 'typed.js';


const TypeAbout = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });
    return () => typed.current.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          Aku biasa dipanggil <b className="font-medium">Ikhsan</b>.
        </li>
        <li>
          Aku tinggal <b className="font-medium">di Semarang</b>.
        </li>
        <li>
          Bahasa pemrograman yang aku pelajari pertama kali <b className="font-medium">C++</b>.
        </li>
        <li>
          Aku juga suka bermain game, salah satunya adalah Mobile Legends.
        </li>
      </ul>
      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypeAbout;
