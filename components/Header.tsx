import React, { useState } from 'react';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinkClass = (page: string) => 
    `font-display text-xl cursor-pointer relative group ${currentPage === page ? 'text-pink-600' : 'text-purple-900 hover:text-pink-500'}`;

  const activeUnderlineClass = (page: string) => 
    `absolute -bottom-1 left-0 h-1 bg-pink-500 transition-all duration-300 rounded-full ${currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'}`;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-100 via-pink-100 to-teal-100 bg-[length:300%_300%] animate-gradient-shift backdrop-blur-sm border-b-4 border-purple-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 group cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleNavClick('home')}
        >
          <span className="text-3xl animate-bounce">🥨</span>
          <h1 className="text-3xl font-display text-purple-900 uppercase tracking-widest drop-shadow-sm">
            Get Twisted
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => handleNavClick('menu')} className={navLinkClass('menu')}>
            The Menu
            <span className={activeUnderlineClass('menu')}></span>
          </button>
          <button onClick={() => handleNavClick('locations')} className={navLinkClass('locations')}>
            Locations
            <span className={activeUnderlineClass('locations')}></span>
          </button>
          <button onClick={() => handleNavClick('story')} className={navLinkClass('story')}>
            Our Story
            <span className={activeUnderlineClass('story')}></span>
          </button>
          <button 
            onClick={() => handleNavClick('club')}
            className="bg-purple-600 text-white font-display text-xl px-6 py-2 rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all border-2 border-black"
          >
            Join the Club
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-purple-900 p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t-4 border-purple-200 p-4 shadow-xl absolute w-full left-0 animate-fade-in-down">
          <nav className="flex flex-col gap-4 text-center">
            <button className="font-display text-2xl text-purple-900 py-2 hover:bg-purple-50 rounded-lg" onClick={() => handleNavClick('menu')}>The Menu</button>
            <button className="font-display text-2xl text-purple-900 py-2 hover:bg-purple-50 rounded-lg" onClick={() => handleNavClick('locations')}>Locations</button>
            <button className="font-display text-2xl text-purple-900 py-2 hover:bg-purple-50 rounded-lg" onClick={() => handleNavClick('story')}>Our Story</button>
            <button onClick={() => handleNavClick('club')} className="bg-pink-500 text-white font-display text-xl px-6 py-3 rounded-xl border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-y-1 mx-auto w-full max-w-xs">
              Join the Club
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;