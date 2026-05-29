import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center flex items-center justify-center text-white px-4"
    >

      <div className="bg-black/60 p-6 md:p-10 rounded-3xl text-center max-w-4xl backdrop-blur-sm">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">

          <span className="text-yellow-400">
            <Typewriter
              words={[
                "Delicious Food For Everyone",
                "Fresh & Healthy Meals",
                "Taste The Best Dishes",
                "Fast Delivery At Your Door",
                "Welcome To FoodHub Restaurant",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>

        </h1>

        {/* Paragraph */}
        <p className="text-lg md:text-xl mb-8 text-gray-300 leading-8">

          Enjoy premium quality food with unforgettable taste and lightning-fast delivery.
          Order your favorite meals anytime from FoodHub Restaurant.

        </p>

        {/* Button */}
        <a href="#menu">

          <button className="bg-yellow-400 text-black px-6 md:px-8 py-3 md:py-4 rounded-full text-lg md:text-xl font-bold hover:scale-105 hover:bg-yellow-300 duration-300 shadow-xl">

            Explore Menu

          </button>

        </a>

      </div>

    </section>
  );
}