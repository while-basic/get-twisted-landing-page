import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';
import LocationsPage from './pages/LocationsPage';
import StoryPage from './pages/StoryPage';
import ClubPage from './pages/ClubPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage />;
      case 'locations':
        return <LocationsPage />;
      case 'story':
        return <StoryPage />;
      case 'club':
        return <ClubPage />;
      default:
        return (
          <>
            <Hero onNavigate={setCurrentPage} />
            {/* Home Page Teaser Content */}
            <div className="w-full max-w-7xl px-4 py-12 mx-auto">
               <div className="bg-white/50 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-8 md:p-12 text-center shadow-[8px_8px_0px_0px_rgba(107,33,168,0.2)]">
                  <h3 className="text-4xl font-display text-purple-900 mb-4">Why Get Twisted?</h3>
                  <div className="grid md:grid-cols-3 gap-8 mt-8">
                     <div className="p-4">
                        <div className="text-6xl mb-4">🥨</div>
                        <h4 className="text-2xl font-display text-teal-600 mb-2">Warm Pretzels</h4>
                        <p className="font-sans text-gray-600 font-bold">Baked fresh daily. Salty, sweet, or savory.</p>
                     </div>
                     <div className="p-4">
                        <div className="text-6xl mb-4">🥤</div>
                        <h4 className="text-2xl font-display text-pink-500 mb-2">Dirty Sodas</h4>
                        <p className="font-sans text-gray-600 font-bold">Your favorite sodas remix with creams and syrups.</p>
                     </div>
                     <div className="p-4">
                        <div className="text-6xl mb-4">⚡</div>
                        <h4 className="text-2xl font-display text-purple-600 mb-2">High Energy</h4>
                        <p className="font-sans text-gray-600 font-bold">Good vibes only. We bring the party to the cup.</p>
                     </div>
                  </div>
               </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center overflow-x-hidden selection:bg-pink-300 selection:text-purple-900 bg-purple-50">
      <Header onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main className="flex-grow w-full pt-20">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;