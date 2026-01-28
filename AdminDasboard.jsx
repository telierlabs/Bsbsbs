import React from 'react';
import { Plus, Edit3, Trash2 } from 'lucide-react';
import { CustomButton } from './CustomButton';

export const AdminDashboard = ({ news, onNewArticle, onEditArticle, onDeleteArticle }) => {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-700">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 border-b border-black pb-8">
        <div>
          <h2 className="text-5xl font-black tracking-tighter uppercase mb-2">Editor Panel</h2>
          <p className="text-zinc-400 text-sm tracking-widest font-bold">MANAJEMEN KONTEN TELIERNEWS</p>
        </div>
        <CustomButton onClick={onNewArticle}>
          <div className="flex items-center gap-2">
            <Plus size={16} /> TULIS POSTINGAN
          </div>
        </CustomButton>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {news.map(item => (
          <div key={item.id} className="group flex items-center justify-between p-6 hover:bg-zinc-50 border-b border-zinc-100 transition-all">
            <div className="flex items-center gap-8">
              <img src={item.image} className="w-16 h-16 object-cover grayscale rounded-sm" alt="" />
              <div>
                <p className="text-[10px] font-bold text-zinc-400 tracking-widest mb-1 uppercase">{item.category}</p>
                <h4 className="font-bold text-lg">{item.title}</h4>
                <p className="text-xs text-zinc-400 uppercase tracking-tighter mt-1">{item.date} — {item.views} VIEWS</p>
              </div>
            </div>
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-all">
              <button 
                onClick={() => onEditArticle(item)}
                className="p-3 border border-zinc-200 hover:border-black transition-all"
              >
                <Edit3 size={16} />
              </button>
              <button 
                onClick={() => onDeleteArticle(item.id)}
                className="p-3 border border-zinc-200 hover:border-red-600 hover:text-red-600 transition-all"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
