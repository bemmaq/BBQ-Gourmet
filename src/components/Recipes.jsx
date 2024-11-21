import React, { useState } from 'react';
import { ChevronRight, Clock, ChefHat } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: 'Сочные стейки из говядины на гриле',
    duration: '15 минут',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80',
    category: 'Мясо'
  },
  {
    id: 2,
    title: 'Готовим стейк из семги с помощью гриля',
    duration: '17 минут',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80',
    category: 'Рыба'
  },
  {
    id: 3,
    title: 'Сочные стейки из говядины на гриле',
    duration: '15 минут',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&q=80',
    category: 'Мясо'
  }
];

const Recipes = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Полезная информация и уникальные рецепты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group relative overflow-hidden rounded-xl bg-black/50 hover:bg-black/70 transition duration-300">
              <div className="absolute inset-0">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition duration-300"
                />
              </div>
              <div className="relative p-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500/10 text-red-500 mb-3">
                  {recipe.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {recipe.title}
                </h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{recipe.duration}</span>
                </div>
                <button className="text-red-500 hover:text-red-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Читать рецепт
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80"
              alt="BBQ Background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative bg-gradient-to-r from-black/80 to-black/60 px-8 py-12 rounded-2xl">
            <div className="max-w-2xl mx-auto text-center">
              <ChefHat className="w-12 h-12 text-red-500 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Получить авторские рецепты
              </h3>
              <p className="text-gray-300 mb-8">
                Оставьте свои контакты и мы пришлем вам подборку секретных рецептов блюд на гриле
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ваш email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-red-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                >
                  Получить рецепты
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipes;