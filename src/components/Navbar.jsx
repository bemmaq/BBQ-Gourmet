import React, { useState } from 'react';
import { Menu, ShoppingCart, Heart, BarChart2, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black/95 fixed w-full z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-red-600 text-2xl font-bold">BBQ</span>
            <span className="text-white text-2xl">Gourmet</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-white transition">Газовые грили</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Угольные грили</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Комплектующие</a>
            <a href="#" className="text-gray-300 hover:text-white transition">Аксессуары</a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex flex-col items-end">
              <a href="tel:+78007979520" className="text-white hover:text-red-500">+7 (800) 797 95 20</a>
              <span className="text-sm text-gray-400">Бесплатно по России</span>
            </div>
            <div className="flex space-x-4">
              <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
              <BarChart2 className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
              <ShoppingCart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Газовые грили</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Угольные грили</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Комплектующие</a>
            <a href="#" className="block px-3 py-2 text-gray-300 hover:text-white">Аксессуары</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;