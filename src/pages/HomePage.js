import React from "react"
import { Link } from "react-router-dom"
import HeroSection from "../components/HeroSection"
import Photo1 from "../images/product-01.jpg"
import Photo2 from "../images/product-03.jpg"
import Photo3 from "../images/product-06.jpg"

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-pink-100 min-h-screen">
      <HeroSection />
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-800">Explore Our Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CategoryCard title="Women" image={Photo1} link="/shop?category=women" />
          <CategoryCard title="Men" image={Photo2} link="/shop?category=men" />
          <CategoryCard title="Accessories" image={Photo3} link="/shop?category=accessories" />
        </div>
      </div>
    </div>
  )
}

const CategoryCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-64 object-cover transition duration-300 transform group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-white text-3xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  )
}

export default HomePage

