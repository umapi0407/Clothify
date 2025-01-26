import React from "react"
import { Link } from "react-router-dom"

const CartPage = () => {
  // This would typically come from a state management solution like Redux
  const cartItems = [
    { id: 1, name: "Classic T-Shirt", price: 19.99, quantity: 2, image: "/images/classic-tshirt.jpg" },
    { id: 2, name: "Denim Jeans", price: 49.99, quantity: 1, image: "/images/denim-jeans.jpg" },
  ]

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-4">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="w-24 h-24 object-cover mr-4" />
                <div className="flex-grow">
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
                <div className="text-xl font-bold">${(item.price * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <Link
              to="/checkout"
              className="bg-purple-600 text-white px-6 py-3 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Proceed to Checkout
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default CartPage

