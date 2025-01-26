import React from "react"
import { Link } from "react-router-dom"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-64 bg-purple-600 text-white transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleSidebar} className="text-white">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-4">
          <li>
            <Link to="/" className="block hover:text-yellow-300 transition duration-300" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="block hover:text-yellow-300 transition duration-300" onClick={toggleSidebar}>
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="block hover:text-yellow-300 transition duration-300" onClick={toggleSidebar}>
              Cart
            </Link>
          </li>
          <li>
            <Link
              to="/wishlist"
              className="block hover:text-yellow-300 transition duration-300"
              onClick={toggleSidebar}
            >
              Wishlist
            </Link>
          </li>
          <li>
            <Link to="/contact" className="block hover:text-yellow-300 transition duration-300" onClick={toggleSidebar}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/login" className="block hover:text-yellow-300 transition duration-300" onClick={toggleSidebar}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Sidebar

