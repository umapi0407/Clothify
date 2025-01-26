import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">CATEGORIES</h3>
            <ul className="space-y-2">
              <li><Link to="/shop?category=women" className="hover:text-purple-300 transition duration-300">Women</Link></li>
              <li><Link to="/shop?category=men" className="hover:text-purple-300 transition duration-300">Men</Link></li>
              <li><Link to="/shop?category=shoes" className="hover:text-purple-300 transition duration-300">Shoes</Link></li>
              <li><Link to="/shop?category=accessories" className="hover:text-purple-300 transition duration-300">Accessories</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li><Link to="/track-order" className="hover:text-purple-300 transition duration-300">Track Order</Link></li>
              <li><Link to="/returns" className="hover:text-purple-300 transition duration-300">Returns</Link></li>
              <li><Link to="/shipping" className="hover:text-purple-300 transition duration-300">Shipping</Link></li>
              <li><Link to="/faqs" className="hover:text-purple-300 transition duration-300">FAQs</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
            <p className="mb-2">Any questions? Let us know in store at:</p>
            <p className="mb-2">GEC Computer, Rajkot, Gujarat, India - 360005.</p>
            <p className="mb-2">or call us on (+91) 12 3456 7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-xl font-bold mb-4">NEWSLETTER</h3>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-3 py-2 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="w-full bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition duration-300"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 Clothify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
