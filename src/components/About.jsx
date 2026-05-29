export default function About() {
  return (
    <section
      id="about"
      className="bg-black text-white py-20 px-4 md:px-8"
    >

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
          alt="restaurant"
          className="rounded-3xl shadow-2xl w-full"
        />

        <div>

          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-yellow-400">
            About Us
          </h1>

          <p className="text-base md:text-lg text-gray-300 leading-8">
            We provide fresh and delicious food with premium quality ingredients.
            Our restaurant delivers fast service, amazing taste, and unforgettable
            dining experiences for every customer.
          </p>

        </div>

      </div>

    </section>
  );
}