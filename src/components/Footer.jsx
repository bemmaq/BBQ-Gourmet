import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm">
            BBQ Gourmet - Официальный магазин грилей в России с 2009 года
          </p>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Contact Information */}
          <div>
            <p className="text-sm">Бесплатно для регионов</p>
            <p className="text-lg font-medium">+7 (800) 707 99 20</p>
          </div>
          <div>
            <p className="text-sm">Контактный номер</p>
            <p className="text-lg font-medium">+7 (800) 707 99 20</p>
            <p className="text-lg font-medium">+7 (800) 707 99 20</p>
          </div>

          {/* Working Hours */}
          <div>
            <p className="text-sm">График работы</p>
            <p className="text-lg font-medium">11:00 - 19:00</p>
            <p className="text-sm">Онлайн заказы 24/7</p>
          </div>

          {/* Address */}
          <div>
            <p className="text-sm">Адрес магазина</p>
            <p className="text-lg font-medium">
              Заставская ул., 11 корпус 2,
              <br />
              Санкт-Петербург, Россия, 196084
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="text-sm">Написать нам</p>
            <p className="text-lg font-medium">info@bbqgourmet.ru</p>
          </div>

          {/* Social Media Links */}
          <div>
            <p className="text-sm">Мы в сети:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                {/* Replace with your social media icon */}
                <span className="sr-only">Facebook</span> 🌐
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Instagram</span> 📷
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <span className="sr-only">Twitter</span> 🐦
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
