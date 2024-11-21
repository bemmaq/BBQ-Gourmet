import React from 'react';
import { Menu, ShoppingCart, Heart, BarChart2, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ShopInfo from './components/ShopInfo';
import GrillStudio from './components/GrillStudio';
import Recipes from './components/Recipes';
import Hero from './components/Hero';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Categories />
      <ShopInfo />
      <GrillStudio />
      <Recipes />
      <Footer/>
    </div>
  );
}

export default App;