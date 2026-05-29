export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836')] bg-cover bg-center flex items-center justify-center text-white"
    >

      <div className="bg-black/60 p-10 rounded-3xl text-center max-w-3xl">

        <h1 className="text-6xl font-bold mb-6">
          Delicious Food For Everyone
        </h1>

        <p className="text-xl mb-8 text-gray-300">
          Order your favorite meals with fast delivery and amazing taste.
        </p>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-full text-xl font-bold hover:scale-105 duration-300">
          Order Now
        </button>

      </div>

    </section>
  );
}