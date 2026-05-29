import foodData from "../data/foodData";
import FoodCard from "./FoodCard";

export default function Menu() {
  return (
    <section
      id="menu"
      className="px-4 md:px-8 py-20 bg-slate-100"
    >

      <h1 className="text-3xl md:text-5xl font-bold text-center mb-16">
        Our Popular Foods
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {foodData.map((item) => (
          <FoodCard key={item.id} item={item} />
        ))}

      </div>

    </section>
  );
}