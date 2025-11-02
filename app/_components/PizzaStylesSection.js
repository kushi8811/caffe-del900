// PizzaStylesSection.js
import React from "react";
import PizzaCard from "./PizzaCard";
import pizzaNduja from "@/public/caffe-images/pizzaNduja.jpg";
import pizzaMarg from "@/public/caffe-images/pizzaMarg.jpg";
import pizzaGolosa from "@/public/caffe-images/pizzaGolosa2.jpg";
const PizzaStylesSection = () => {
  return (
    <div className="section cards mx-auto border grid sm:grid-cols-1 md:grid-cols-3 md:px-12 bg-gray-200 text-gray-800">
      {[
        {
          title: "La Piccante '900 ",
          imgSrc: pizzaNduja,
          description:
            "A bold and fiery delight! 🔥🍕 This signature pizza combines the rich heat of ’nduja and spicy salami, balanced with the freshness of tomato sauce, olive oil, and fragrant basil. Topped with creamy Mozzarella di Bufala, every bite delivers a perfect blend of spice and indulgence.",
        },
        {
          title: "Margherita",
          imgSrc: pizzaMarg,
          description:
            "A simple yet delightful pizza made with fresh tomatoes, creamy mozzarella, and fragrant basil, all atop a perfectly crisp, golden crust with a drizzle of rich extra virgin olive oil for the perfect finishing touch.",
        },
        {
          title: "La Golosita Bianca",
          imgSrc: pizzaGolosa,
          description:
            "La Golosa Bianca is a rich and indulgent white pizza, featuring a heavenly blend of creamy gorgonzola, delicate fiordilatte mozzarella, bold pecorino, and aged grana cheese. Baked to golden perfection, this cheese-lover’s delight offers a luscious, velvety texture with a perfect balance of sharp and savory flavors",
        },
      ].map((pizza, index) => (
        <PizzaCard key={index} {...pizza} />
      ))}
    </div>
  );
};

export default PizzaStylesSection;
