import React from 'react';
import { ChevronLeft } from 'lucide-react';

export const ArticlePage = ({ selectedArticle, onBack }) => {
  return (
    <div className="max-w-4xl mx-auto animate-in fade-in duration-700">
      <button 
        onClick={onBack}
        className="mb-12 flex items-center gap-2 text-[10px] font-black tracking-[0.3em] hover:opacity-50 transition-opacity uppercase"
      >
        <ChevronLeft size={14} /> Kembali
      </button>
      
      <div className="space-y-12">
        <div className="space-y-6 text-center">
          <span className="text-xs font-bold tracking-[0.5em] text-zinc-400 uppercase">{selectedArticle.category}</span>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter uppercase">{selectedArticle.title}</h1>
          <div className="flex items-center justify-center gap-8 text-[10px] font-bold tracking-widest text-zinc-500 border-y border-zinc-100 py-6">
            <span>PENULIS: {selectedArticle.author.toUpperCase()}</span>
            <span>TANGGAL: {selectedArticle.date.toUpperCase()}</span>
            <span>BACAAN: 5 MENIT</span>
          </div>
        </div>

        <img src={selectedArticle.image} className="w-full aspect-[21/9] object-cover grayscale" alt="Cover" />

        <div className="prose prose-zinc max-w-none">
          <p className="text-2xl font-light leading-relaxed text-zinc-800 first-letter:text-7xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:leading-[0.8]">
            {selectedArticle.content}
          </p>
          <div className="h-12"></div>
          <p className="text-xl leading-relaxed text-zinc-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. 
          </p>
          <div className="p-12 bg-zinc-50 border-l-4 border-black my-12 italic text-2xl font-serif">
            "Desain yang bagus adalah desain yang sesedikit mungkin. Fokus pada esensi, bukan gangguan."
          </div>
          <p className="text-xl leading-relaxed text-zinc-600">
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
