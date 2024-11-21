import React from 'react';
import { ChevronRight } from 'lucide-react';
import { categories } from './data/data';

const Categories = () => {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Каталог грилей
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-xl bg-black/50 hover:bg-black/70 transition duration-300"
              >
                <div className="absolute inset-0">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-30 transition duration-300"
                  />
                </div>
                <div className="relative p-6 h-full min-h-[320px] flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <Icon className="w-8 h-8 text-red-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-300 mb-2">
                      {category.description}
                    </p>
                    <p className="text-red-500 font-semibold">
                      {category.price}
                    </p>
                  </div>
                  <button className="mt-4 text-red-500 hover:text-red-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Подробнее
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;