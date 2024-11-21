import React from 'react';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
          alt="Background with BBQ theme"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              BBQ<span className="text-red-600">Gourmet</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Официальный дилер ведущих мировых производителей оборудования для гриллинга
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#catalog"
                className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition duration-300 flex items-center justify-center"
              >
                Каталог товаров
              </a>
              <a
                href="#video"
                className="border border-white text-white px-8 py-3 rounded-lg hover:bg-white/10 transition duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-5 h-5" />
                Смотреть видео
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
