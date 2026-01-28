import React, { useState, useMemo } from 'react';
import { INITIAL_NEWS } from './data';
import { Navigation } from './Navigation';
import { HomePage } from './HomePage';
import { ArticlePage } from './ArticlePage';
import { AdminDashboard } from './AdminDashboard';
import { AdminEditForm } from './AdminEditForm';
import { LoginModal } from './LoginModal';

export default function App() {
  const [news, setNews] = useState(INITIAL_NEWS);
  const [isAdmin, setIsAdmin] = useState(false);
  const [view, setView] = useState('home');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('SEMUA');
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [formData, setFormData] = useState({ title: '', category: 'BISNIS', content: '', image: '', author: 'Admin' });

  const filteredNews = useMemo(() => {
    return news.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'SEMUA' || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [news, searchQuery, activeCategory]);

  const handleAddOrEditNews = (e) => {
    e.preventDefault();
    if (selectedArticle && view === 'admin-edit') {
      setNews(news.map(n => n.id === selectedArticle.id ? { ...formData, id: n.id, views: n.views, date: n.date } : n));
    } else {
      const newPost = {
        ...formData,
        id: Date.now(),
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }),
        views: 0
      };
      setNews([newPost, ...news]);
    }
    setView('admin-dashboard');
    setFormData({ title: '', category: 'BISNIS', content: '', image: '', author: 'Admin' });
    setSelectedArticle(null);
  };

  const deleteNews = (id) => {
    setNews(news.filter(n => n.id !== id));
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleGoHome = () => {
    setView('home');
    setActiveCategory('SEMUA');
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    setView('article');
  };

  const handleAdminDashboard = () => {
    if (isAdmin) {
      setView('admin-dashboard');
    } else {
      setShowLoginModal(true);
    }
  };

  const handleEditArticle = (article) => {
    setSelectedArticle(article);
    setFormData(article);
    setView('admin-edit');
  };

  const handleNewArticle = () => {
    setSelectedArticle(null);
    setFormData({ title: '', category: 'BISNIS', content: '', image: '', author: 'Admin' });
    setView('admin-edit');
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
      <Navigation 
        isAdmin={isAdmin}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onCategoryChange={(cat) => {
          setActiveCategory(cat);
          setView('home');
        }}
        onAdminClick={handleAdminDashboard}
        onLogout={() => setIsAdmin(false)}
        onLogoClick={handleGoHome}
      />

      <main className="max-w-7xl mx-auto px-6 py-12">
        {view === 'home' && (
          <HomePage 
            filteredNews={filteredNews}
            activeCategory={activeCategory}
            searchQuery={searchQuery}
            onArticleClick={handleArticleClick}
          />
        )}

        {view === 'article' && selectedArticle && (
          <ArticlePage 
            selectedArticle={selectedArticle}
            onBack={handleGoHome}
          />
        )}

        {view === 'admin-dashboard' && (
          <AdminDashboard 
            news={news}
            onNewArticle={handleNewArticle}
            onEditArticle={handleEditArticle}
            onDeleteArticle={deleteNews}
          />
        )}

        {view === 'admin-edit' && (
          <AdminEditForm 
            formData={formData}
            selectedArticle={selectedArticle}
            onInputChange={handleInputChange}
            onSubmit={handleAddOrEditNews}
            onCancel={() => setView('admin-dashboard')}
          />
        )}
      </main>

      {showLoginModal && (
        <LoginModal 
          onClose={() => setShowLoginModal(false)}
          onLogin={() => setIsAdmin(true)}
        />
      )}
    </div>
  );
}
