import React, { useState } from "react";
import { Link } from "react-router-dom";
import Photo1 from "../images/product-01.jpg"
import Photo2 from "../images/product-02.jpg"
import Photo3 from "../images/product-03.jpg"
import Photo4 from "../images/product-04.jpg"

const products = [
  { id: 1, name: "Esprit Ruffle Shirt", price: 16.64, image: Photo1 },
  { id: 2, name: "Herschel supply", price: 35.31, image: Photo2 },
  { id: 3, name: "Only Check Trouser", price: 25.5, image: Photo3 },
  { id: 4, name: "Classic Trench Coat", price: 75.0, image: Photo4 },
]

const ShopPage = () => {
  const [likedProducts, setLikedProducts] = useState([])
  const [showMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")

  const handleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId))
      showNotification("Product removed from favorites")
    } else {
      setLikedProducts([...likedProducts, productId])
      showNotification("Product added to favorites")
    }
  }

  const showNotification = (msg) => {
    setMessage(msg)
    setShowMessage(true)
    setTimeout(() => setShowMessage(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
              <div className="flex justify-between items-center">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
                >
                  View Details
                </Link>
                <button onClick={() => handleLike(product.id)} className="text-2xl">
                  {likedProducts.includes(product.id) ? "❤️" : "🤍"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">{message}</div>
      )}
    </div>
  )
}

export default ShopPage;

