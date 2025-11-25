import React from 'react';
import { MenuItem } from '../types';

interface MenuCardProps {
  item: MenuItem;
}

const MenuCard: React.FC<MenuCardProps> = ({ item }) => {
  return (
    <div className="group relative bg-white border-4 border-purple-900 rounded-3xl p-6 h-full flex flex-col transition-all duration-300 hover:-translate-y-2 hover:rotate-1 shadow-[8px_8px_0px_0px_rgba(89,0,89,0.3)] hover:shadow-[12px_12px_0px_0px_rgba(106,13,173,1)]">
      
      {/* Badge/ID */}
      <div className="absolute -top-4 -right-4 bg-teal-400 text-white w-12 h-12 flex items-center justify-center rounded-full border-4 border-white shadow-md font-display text-xl z-10 rotate-12 group-hover:rotate-0 transition-transform">
        #{item.id}
      </div>

      <div className="flex items-center justify-center mb-6 mt-2">
        <div className="text-7xl filter drop-shadow-lg transform group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">
            {item.emoji}
        </div>
      </div>

      <div className="text-center flex-grow">
        <h3 className={`text-3xl font-bold font-display mb-2 uppercase tracking-wide ${item.colorClass}`}>
          {item.name}
        </h3>
        <div className="inline-block bg-purple-100 px-3 py-1 rounded-full border-2 border-purple-200 mb-4 transform -rotate-2 group-hover:rotate-0 transition-transform">
            <h4 className="text-sm font-bold text-purple-900 uppercase tracking-wider">
            {item.tagline}
            </h4>
        </div>
        <p className="text-gray-700 leading-relaxed font-sans text-lg font-medium px-2">
          {item.description}
        </p>
      </div>

      <div className="mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button className="bg-purple-600 text-white text-sm font-bold py-2 px-6 rounded-full hover:bg-purple-700 transition-colors">
            Twist It Up! 🌪️
        </button>
      </div>
    </div>
  );
};

export default MenuCard;