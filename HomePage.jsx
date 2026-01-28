import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HomePage = ({ filteredNews, activeCategory, searchQuery, onArticleClick }) => {
  return (
    <div className="space-y-24 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="border-b border-black pb-8">
        <h2 className="text-7xl md:text-[120px] font-black leading-none tracking-tighter uppercase">
          {activeCategory === 'SEMUA' ? 'Headline' : activeCategory}
        </h2>
      </div>

      {filteredNews.length > 0 && searchQuery === '' && (
        <div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center group cursor-pointer"
          onClick={() => onArticleClick(filteredNews[0])}
        >
          <div className="overflow-hidden bg-zinc-100 aspect-[4/3] lg:aspect-square">
            <img 
              src={filteredNews[0].image} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
              alt="Main" 
            />
          </div>
          <div className="space-y-6">
            <span className="text-[10px] font-bold tracking-[0.4em] text-zinc-400 uppercase">{filteredNews[0].category}</span>
            <h3 className="text-4xl md:text-5xl font-bold leading-[1.1] hover:underline transition-all">
              {filteredNews[0].title}
            </h3>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-lg">
              {filteredNews[0].content.substring(0, 160)}...
            </p>
            <div className="flex items-center gap-4 text-[10px] font-bold tracking-widest">
              <span>{filteredNews[0].author}</span>
              <span className="w-1 h-1 bg-zinc-300 rounded-full"></span>
              <span>{filteredNews[0].date}</span>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
        {filteredNews.slice(activeCategory === 'SEMUA' && searchQuery === '' ? 1 : 0).map((item) => (
          <article 
            key={item.id} 
            className="group cursor-pointer space-y-5"
            onClick={() => onArticleClick(item)}
          >
            <div className="overflow-hidden bg-zinc-100 aspect-video">
              <img 
                src={item.image} 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                alt={item.title} 
              />
            </div>
            <div className="space-y-3">
              <span className="text-[10px] font-bold tracking-[0.3em] text-zinc-400 uppercase">{item.category}</span>
              <h4 className="text-xl font-bold leading-tight group-hover:text-zinc-600 transition-colors">
                {item.title}
              </h4>
              <p className="text-zinc-500 text-sm line-clamp-2 font-light italic">
                {item.content}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-zinc-100">
                <span className="text-[9px] font-bold tracking-widest uppercase">{item.date}</span>
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
                
