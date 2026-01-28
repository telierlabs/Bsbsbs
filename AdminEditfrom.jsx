import React from 'react';
import { CATEGORIES } from './data';
import { CustomButton } from './CustomButton';

export const AdminEditForm = ({ formData, selectedArticle, onInputChange, onSubmit, onCancel }) => {
  return (
    <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-black tracking-tighter uppercase">{selectedArticle ? 'Edit Konten' : 'Konten Baru'}</h2>
        <button onClick={onCancel} className="text-xs font-bold tracking-widest opacity-50 hover:opacity-100">BATAL</button>
      </div>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="space-y-2">
          <label className="text-[10px] font-black tracking-[0.3em] uppercase">Judul Artikel</label>
          <input 
            required
            type="text" 
            className="w-full text-2xl font-bold bg-transparent border-b-2 border-zinc-100 focus:border-black transition-all outline-none py-2"
            placeholder="Ketik judul di sini..."
            value={formData.title}
            onChange={(e) => onInputChange('title', e.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-[0.3em] uppercase">Kategori</label>
            <select 
              className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none text-xs font-bold tracking-widest"
              value={formData.category}
              onChange={(e) => onInputChange('category', e.target.value)}
            >
              {CATEGORIES.filter(c => c !== 'SEMUA').map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black tracking-[0.3em] uppercase">Penulis</label>
            <input 
              type="text" 
              className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none text-xs font-bold tracking-widest"
              value={formData.author}
              onChange={(e) => onInputChange('author', e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black tracking-[0.3em] uppercase">Link Gambar (Unsplash)</label>
          <input 
            required
            type="url" 
            className="w-full bg-transparent border-b border-zinc-200 py-2 outline-none text-xs"
            placeholder="https://..."
            value={formData.image}
            onChange={(e) => onInputChange('image', e.target.value)}
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-black tracking-[0.3em] uppercase">Isi Konten</label>
          <textarea 
            required
            rows="8"
            className="w-full bg-zinc-50 p-6 outline-none text-lg leading-relaxed font-light border-l-2 border-transparent focus:border-black transition-all"
            placeholder="Tulis cerita Anda..."
            value={formData.content}
            onChange={(e) => onInputChange('content', e.target.value)}
          ></textarea>
        </div>

        <CustomButton className="w-full py-5 text-sm">
          {selectedArticle ? 'UPDATE PUBLIKASI' : 'PUBLIKASIKAN SEKARANG'}
        </CustomButton>
      </form>
    </div>
  );
};
