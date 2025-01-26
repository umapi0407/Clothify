import React, { useState } from "react"
import { useParams } from "react-router-dom"
import Photo1 from "../images/product-01.jpg"


const products = [
  {
    id: 1,
    name: "Esprit Ruffle Shirt",
    price: 16.64,
    image: Photo1,
    description: "A beautiful ruffle shirt perfect for any occasion.",
  },
  {
    id: 2,
    name: "Herschel supply",
    price: 35.31,
    image: "/images/product2.jpg",
    description: "High-quality supply from Herschel, built to last.",
  },
  {
    id: 3,
    name: "Only Check Trouser",
    price: 25.5,
    image: "/images/product3.jpg",
    description: "Stylish check trousers that go well with any outfit.",
  },
  {
    id: 4,
    name: "Classic Trench Coat",
    price: 75.0,
    image: "/images/product4.jpg",
    description: "A timeless trench coat that never goes out of style.",
  },
]

const ProductPage = () => {
  const { id } = useParams()
  const product = products.find((p) => p.id === Number.parseInt(id))
  const [showMessage, setShowMessage] = useState(false)

  if (!product) {
    return <div>Product not found</div>
  }

  const handleAddToCart = () => {
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">{product.name}</h1>
          <p className="text-2xl text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Product added to cart!
        </div>
      )}
    </div>
  )
}

export default ProductPage

