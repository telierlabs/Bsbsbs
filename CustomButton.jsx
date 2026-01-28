import React from 'react';

export const CustomButton = ({ children, onClick, variant = 'dark', className = '' }) => {
  const styles = variant === 'dark' 
    ? "bg-black text-white hover:bg-zinc-800" 
    : "bg-white text-black border border-black hover:bg-zinc-50";
  return (
    <button 
      onClick={onClick} 
      className={`px-6 py-2.5 text-xs font-bold tracking-[0.2em] transition-all duration-300 uppercase ${styles} ${className}`}
    >
      {children}
    </button>
  );
};
