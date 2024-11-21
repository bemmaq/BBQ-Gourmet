import React from 'react';
import { Utensils, Coffee, ChefHat, Wrench } from 'lucide-react';

const ShopInfo = () => {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Shop Description */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Магазин грилей и барбекю
            </h2>
            <p className="text-gray-300 mb-8">
              Интернет-магазин «BBQ Gourmet» предлагает широкий выбор грилей и аксессуаров для барбекю. Наша компания является официальным дилером ведущих мировых производителей оборудования для гриллинга.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Utensils className="w-5 h-5 text-red-500 mr-3" />
                Газовые грили
              </li>
              <li className="flex items-center text-gray-300">
                <Coffee className="w-5 h-5 text-red-500 mr-3" />
                Оборудование на углях
              </li>
              <li className="flex items-center text-gray-300">
                <Wrench className="w-5 h-5 text-red-500 mr-3" />
                Дровяные модели для гриллинга
              </li>
              <li className="flex items-center text-gray-300">
                <ChefHat className="w-5 h-5 text-red-500 mr-3" />
                Электрические барбекюшницы
              </li>
            </ul>
          </div>

       
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
              alt="BBQ Equipment"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopInfo;