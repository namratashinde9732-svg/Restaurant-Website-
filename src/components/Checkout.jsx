import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

import {
  FaCheckCircle,
  FaMotorcycle,
  FaArrowLeft,
} from "react-icons/fa";

export default function Checkout() {

  const location = useLocation();
  const navigate = useNavigate();

  const food = location.state;

  const [quantity, setQuantity] = useState(1);

  const [paymentMethod, setPaymentMethod] = useState("");

  const [orderPlaced, setOrderPlaced] = useState(false);

  // Redirect if no food selected
  if (!food) {
    navigate("/");
    return null;
  }

  const price = Number(food.price.replace("₹", ""));
  const total = price * quantity;

  const handlePlaceOrder = () => {

    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    setOrderPlaced(true);

    setTimeout(() => {
      navigate("/");
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-yellow-100 py-10 px-4 md:px-8">

      {/* Success Popup */}
      {orderPlaced && (

        <div className="fixed top-5 right-5 bg-green-500 text-white px-6 py-5 rounded-2xl shadow-2xl z-50 flex items-center gap-4 animate-bounce max-w-sm">

          <FaCheckCircle className="text-4xl" />

          <div>

            <h1 className="text-xl font-bold">
              Order Confirmed!
            </h1>

            <p className="text-sm md:text-base">
              Your delicious food is on the way 🚀
            </p>

          </div>

        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl mb-8 hover:bg-gray-800 duration-300"
      >

        <FaArrowLeft />

        Back To Menu

      </button>

      {/* Main Checkout Card */}
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Food Image */}
        <div className="h-[350px] lg:h-auto">

          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
          />

        </div>

        {/* Details */}
        <div className="p-6 md:p-10">

          {/* Food Name */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {food.name}
          </h1>

          {/* Description */}
          <p className="text-gray-600 text-base md:text-lg leading-8 mb-8">

            Enjoy premium quality food prepared with fresh ingredients,
            rich flavors, and quick delivery service from FoodHub Restaurant.

          </p>

          {/* Price */}
          <div className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Price
            </h2>

            <p className="text-orange-500 text-3xl font-bold">
              {food.price}
            </p>

          </div>

          {/* Quantity */}
          <div className="mb-8">

            <h2 className="text-2xl font-bold mb-3">
              Quantity
            </h2>

            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="border-2 border-gray-300 px-4 py-3 rounded-xl w-32 text-xl focus:outline-none focus:border-orange-500"
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

          {/* Payment Options */}
          <div className="mb-10">

            <h2 className="text-2xl font-bold mb-5">
              Select Payment Method
            </h2>

            <div className="grid grid-cols-2 gap-4">

              <button
                onClick={() => setPaymentMethod("PhonePe")}
                className={`py-4 rounded-2xl text-lg font-semibold duration-300 ${
                  paymentMethod === "PhonePe"
                    ? "bg-purple-700 text-white"
                    : "bg-purple-200 hover:bg-purple-300"
                }`}
              >
                PhonePe
              </button>

              <button
                onClick={() => setPaymentMethod("Google Pay")}
                className={`py-4 rounded-2xl text-lg font-semibold duration-300 ${
                  paymentMethod === "Google Pay"
                    ? "bg-blue-700 text-white"
                    : "bg-blue-200 hover:bg-blue-300"
                }`}
              >
                Google Pay
              </button>

              <button
                onClick={() => setPaymentMethod("Paytm")}
                className={`py-4 rounded-2xl text-lg font-semibold duration-300 ${
                  paymentMethod === "Paytm"
                    ? "bg-sky-700 text-white"
                    : "bg-sky-200 hover:bg-sky-300"
                }`}
              >
                Paytm
              </button>

              <button
                onClick={() => setPaymentMethod("Cash On Delivery")}
                className={`py-4 rounded-2xl text-lg font-semibold duration-300 ${
                  paymentMethod === "Cash On Delivery"
                    ? "bg-black text-white"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                COD
              </button>

            </div>

          </div>

          {/* Delivery Info */}
          <div className="flex items-center gap-4 bg-orange-100 p-5 rounded-2xl mb-10">

            <FaMotorcycle className="text-4xl text-orange-500" />

            <div>

              <h2 className="text-xl font-bold">
                Fast Delivery
              </h2>

              <p className="text-gray-600">
                Estimated delivery in 25-30 minutes
              </p>

            </div>

          </div>

          {/* Place Order Button */}
          <button
            onClick={handlePlaceOrder}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl text-xl md:text-2xl font-bold duration-300 shadow-xl hover:scale-105"
          >

            Place Order

          </button>

        </div>

      </div>

    </div>
  );
}