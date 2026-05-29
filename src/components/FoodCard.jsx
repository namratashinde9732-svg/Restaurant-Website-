import { useNavigate } from "react-router-dom";

export default function FoodCard({ item }) {

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/checkout", {
      state: item,
    });
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-105 duration-300">

      <img
        src={item.image}
        alt={item.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">

        <h2 className="text-xl md:text-2xl font-bold mb-2">
          {item.name}
        </h2>

        <div className="flex justify-between items-center">

          <p className="text-orange-500 font-bold text-lg md:text-xl">
            {item.price}
          </p>

          <button
            onClick={handleOrder}
            className="bg-black text-white px-4 py-2 rounded-xl hover:bg-orange-500 duration-300 text-sm md:text-base"
          >
            Order Now
          </button>

        </div>

      </div>

    </div>
  );
}