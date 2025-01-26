import React from "react"
import { Link } from "react-router-dom"
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Banner1 from "../images/banner-04.jpg"
// import Banner2 from "../images/banner-02.jpg"
// import Banner3 from "../images/banner-07.jpg"
import '../styles/HeroSection.css'

const HeroSection = () => {
  // const images = [
  //   { src: Banner1, text: "Elegant Dresses - Perfect for Every Occasion" },
  //   { src: Banner2, text: "Casual Wear - Comfort Meets Style" },
  //   { src: Banner3, text: "Accessories - Complete Your Look" },
  // ]; // Array of banner images
  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 5000); // Change slide every 5 seconds

  //   return () => clearInterval(interval); // Cleanup interval on component unmount
  // }, [images.length]);

  return (
    <div className="relative bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Welcome to</span>{" "}
                <span className="block text-purple-600 xl:inline">Clothify</span>
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Discover the latest fashion trends at Clothify. From elegant dresses to casual wear, express your unique
                style with our curated collection.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="rounded-md shadow btn-1">
                  <Link
                    to="/shop"
                    className="flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition duration-300"
                  >
                    Shop Now
                  </Link>
                </div>
                <Link
                  to="/contact"
                  className="flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition duration-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={Banner1}
          alt="Fashion banner"
        />
      </div> */}
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 sm:h-72 md:h-96 lg:h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex flex-col items-center justify-center text-center p-4 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image.src}
                alt={`Banner ${index + 1}`}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="relative z-10 text-white bg-transparent p-4 rounded-xl">
                <p className="text-xl font-semibold bg-black bg-opacity-50 px-3 py-1 rounded-md">
                  {image.text}
                </p>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full"
          >
            &#x276E;
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full"
          >
            &#x276F;
          </button>
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default HeroSection

