import React, { useState } from 'react';
import { X } from 'lucide-react';
import { CustomButton } from './CustomButton';

export const LoginModal = ({ onClose, onLogin }) => {
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'admin123') {
      onLogin();
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-md p-6 animate-in fade-in duration-300">
      <div className="w-full max-w-sm space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-black tracking-tighter uppercase">AKSES ADMIN</h2>
          <p className="text-zinc-400 text-xs tracking-widest font-bold">MASUKKAN PASSWORD</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            type="password" 
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full text-center text-2xl tracking-[0.5em] bg-transparent border-b-2 border-black outline-none py-4"
            autoFocus
          />
          <CustomButton className="w-full py-4">MASUK</CustomButton>
        </form>

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 hover:bg-zinc-100 rounded-full"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};
