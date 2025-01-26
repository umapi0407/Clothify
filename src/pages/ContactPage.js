import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Message sent:", formData)
    // Here you would typically send the message to your backend
    alert("Message sent successfully!")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">Contact Us</h1>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-4">Send Us A Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                How Can We Help?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-purple-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-purple-600 transition duration-300"
            >
              SUBMIT
            </button>
          </form>
        </div>
        <div className="md:w-1/2 md:pl-8">
          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p>Clothify center, GEC Computer, Rajkot, Gujarat, India - 360005.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Let's Talk</h3>
            <p>+91 12345 67890</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Sale Support</h3>
            <p>clothifytfsf@example.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

