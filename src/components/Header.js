import React, {useState} from "react"
import { Link } from "react-router-dom"
import '../styles/Header.css'
// import FontAwesomeIcon from 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'

const Header = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold">
          Clothify
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-yellow-300 transition duration-300">
            Home
          </Link>
          <Link to="/shop" className="hover:text-yellow-300 transition duration-300">
            Shop
          </Link>
          <Link to="/contact" className="hover:text-yellow-300 transition duration-300">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="md:hidden text-white" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link to="/cart" className="hover:text-yellow-300 transition duration-300">
            <i className="fas fa-shopping-cart"></i>
          </Link>
          <Link to="/wishlist" className="hover:text-yellow-300 transition duration-300">
            <i className="fas fa-heart"></i>
          </Link>
          <Link to="/login" className="hover:text-yellow-300 transition duration-300">
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header

