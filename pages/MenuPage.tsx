import React from 'react';
import MenuCard from '../components/MenuCard';
import { MENU_ITEMS } from '../constants';

const MenuPage: React.FC = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-12 animate-fade-in-down">
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <h2 className="text-6xl md:text-7xl font-display text-purple-900 uppercase tracking-widest drop-shadow-md mb-4 transform -rotate-2">
          The Twisted Menu
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 font-sans max-w-2xl font-bold">
          Find your new obsession. Whether you need energy or a sweet treat, we've got the mix.
        </p>
        <div className="h-2 w-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-6"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 px-2">
        {MENU_ITEMS.map((item) => (
          <MenuCard key={item.id} item={item} />
        ))}
      </div>

      <div className="mt-20 text-center">
         <p className="text-gray-500 italic text-lg">More flavors dropping soon! 🤫</p>
      </div>
    </div>
  );
};

export default MenuPage;