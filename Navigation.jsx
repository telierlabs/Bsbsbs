import React from 'react';
import { LayoutDashboard, Search } from 'lucide-react';
import { CATEGORIES } from './data';

export const Navigation = ({ isAdmin, activeCategory, searchQuery, onSearchChange, onCategoryChange, onAdminClick, onLogout, onLogoClick }) => {
  return (
    <nav className="border-b border-zinc-100 sticky top-0 bg-white/90 backdrop-blur-md z-[60]">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <h1 
            className="text-2xl font-black tracking-tighter cursor-pointer" 
            onClick={onLogoClick}
          >
            TELIER<span className="font-light">NEWS</span>
          </h1>
          <div className="hidden lg:flex items-center gap-8">
            {CATEGORIES.slice(0, 5).map(cat => (
              <button 
                key={cat}
                onClick={() => onCategoryChange(cat)}
                className={`text-[10px] font-bold tracking-[0.2em] transition-all hover:opacity-100 ${activeCategory === cat ? 'opacity-100 border-b-2 border-black' : 'opacity-40'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="relative hidden md:block group">
            <input 
              type="text" 
              placeholder="CARI..." 
              className="bg-transparent border-b border-zinc-200 py-1 pl-6 text-[10px] tracking-widest focus:outline-none focus:border-black transition-all w-32 group-hover:w-48"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-400" />
          </div>
          {isAdmin ? (
            <div className="flex items-center gap-4">
              <button onClick={onAdminClick} className="p-2 hover:bg-zinc-100 rounded-full transition-all">
                <LayoutDashboard size={18} />
              </button>
              <button onClick={onLogout} className="text-[10px] font-bold tracking-widest opacity-60 hover:opacity-100">LOGOUT</button>
            </div>
          ) : (
            <button 
              onClick={onAdminClick}
              className="text-[10px] font-bold tracking-[0.2em] hover:underline"
            >
              LOGIN ADMIN
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
            
