import React from 'react';
import { Check, Coffee, Users, Utensils, ChefHat } from 'lucide-react';

const GrillStudio = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80"
              alt="Grilled Vegetables"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Гриль-студия «ББК Гурме»
            </h2>
            <p className="text-gray-300 mb-8">
              В нашем магазине можно не только купить грили, но также и получить услуги, которые помогут сделать Ваше барбекю незабываемым.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-red-500 mr-3" />
                Проектирование и строительство барбекю под ключ
              </li>
              <li className="flex items-center text-gray-300">
                <Users className="w-5 h-5 text-red-500 mr-3" />
                Профессиональная сервисная служба и доставка
              </li>
              <li className="flex items-center text-gray-300">
                <Utensils className="w-5 h-5 text-red-500 mr-3" />
                Аренда грилей с поваром и без
              </li>
              <li className="flex items-center text-gray-300">
                <Coffee className="w-5 h-5 text-red-500 mr-3" />
                Мастер-классы приготовления блюд на гриле
              </li>
              <li className="flex items-center text-gray-300">
                <ChefHat className="w-5 h-5 text-red-500 mr-3" />
                Кейтеринг с обслуживанием для корпоративов и кафе
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrillStudio;