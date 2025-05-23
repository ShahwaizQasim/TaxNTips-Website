'use client'
import React from 'react';

function CustomCursor() {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);
  const [isClicked, setIsClicked] = React.useState(false);

  React.useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX - 12, y: e.clientY - 12 });
    };
    document.addEventListener('mousemove', updateCursor);
    return () => document.removeEventListener('mousemove', updateCursor);
  }, []);

  React.useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest('.interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    document.addEventListener('mouseover', handleMouseOver);
    return () => document.removeEventListener('mouseover', handleMouseOver);
  }, []);

  React.useEffect(() => {
    const handleClick = () => {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 150);
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <div
      className={`fixed w-8 h-8 rounded-full pointer-events-none z-50 transition-all duration-100 flex justify-center items-center
        ${isHovering ? 'bg-orange-500 opacity-35 scale-300' : 'z-50 border-2 border-[#F65E47]'}
        ${isClicked ? 'scale-75 opacity-80' : ''}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className='w-1 h-1 rounded-full bg-[#F65E47]'></div>
    </div>
  );
}

export default CustomCursor;
