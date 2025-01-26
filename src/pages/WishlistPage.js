import React from "react"
// import { Link } from "react-router-dom"

const WishlistPage = () => {
  // This would typically come from a state management solution like Redux
  const wishlistItems = [
    { id: 1, name: "Summer Dress", price: 39.99, image: "/images/summer-dress.jpg" },
    { id: 2, name: "Leather Jacket", price: 89.99, image: "/images/leather-jacket.jpg" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Wishlist</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <div key={item.id} className="border rounded-lg overflow-hidden shadow-lg">
              <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex justify-between">
                  <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition duration-300">
                    Add to Cart
                  </button>
                  <button className="text-red-600 hover:text-red-800 transition duration-300">
                    <i className="fas fa-trash"></i> Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishlistPage

