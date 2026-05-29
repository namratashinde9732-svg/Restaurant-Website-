import { useLocation } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Checkout() {

  const location = useLocation();
  const food = location.state;

  const [quantity, setQuantity] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const price = Number(food.price.replace("₹", ""));
  const total = price * quantity;

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-slate-100 py-20 px-6">

      {/* Success Message */}
      {orderPlaced && (

        <div className="fixed top-10 right-10 bg-green-500 text-white px-8 py-5 rounded-2xl shadow-2xl flex items-center gap-4 z-50 animate-bounce">

          <FaCheckCircle className="text-4xl" />

          <div>
            <h1 className="text-2xl font-bold">
              Order Successful!
            </h1>

            <p className="text-lg">
              Your order has been placed and will be delivered soon.
            </p>
          </div>

        </div>
      )}

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid md:grid-cols-2">

        {/* Food Image */}
        <div>
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="p-10">

          <h1 className="text-5xl font-bold mb-5">
            {food.name}
          </h1>

          <p className="text-gray-600 text-lg mb-6">
            Delicious and freshly prepared food with premium ingredients.
          </p>

          {/* Price */}
          <div className="mb-6">

            <h2 className="text-2xl font-bold mb-3">
              Price
            </h2>

            <p className="text-orange-500 text-3xl font-bold">
              {food.price}
            </p>

          </div>

          {/* Quantity */}
          <div className="mb-6">

            <h2 className="text-2xl font-bold mb-3">
              Quantity
            </h2>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="border-2 border-gray-300 px-4 py-2 rounded-xl w-28 text-xl"
            />

          </div>

          {/* Total */}
          <div className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Total Amount
            </h2>

            <p className="text-green-600 text-4xl font-bold">
              ₹{total}
            </p>

          </div>

          {/* Payment Methods */}
          <div className="mb-8">

            <h2 className="text-2xl font-bold mb-4">
              Payment Options
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <button className="bg-purple-600 text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 duration-300">
                PhonePe
              </button>

              <button className="bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 duration-300">
                Google Pay
              </button>

              <button className="bg-sky-500 text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 duration-300">
                Paytm
              </button>

              <button className="bg-black text-white py-3 rounded-xl text-lg font-semibold hover:scale-105 duration-300">
                Cash On Delivery
              </button>

            </div>

          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-orange-500 text-white py-4 rounded-2xl text-2xl font-bold hover:bg-orange-600 duration-300"
          >
            Place Order
          </button>

        </div>

      </div>

    </div>
  );
}