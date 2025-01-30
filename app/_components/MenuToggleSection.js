import React, { useState } from "react";
import Image from "next/image";
import ButtonPizzaMenu from "./ButtonPizzaMenu";
import menu1 from "@/public/caffe-images/menuImage1.png";
import menu2 from "@/public/caffe-images/menuImage2.png";
import menu3 from "@/public/caffe-images/menuImage3.png";
import pizzaCrust from "@/public/caffe-images/pizzaCrust.jpg";

const MenuToggleSection = ({ toggleMenu, menuVisible }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [menu1, menu2, menu3];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="section py-19.5 w-full border grid md:grid-cols-2 bg-gray-200 text-gray-800">
      {/* Pizza Image */}
      <div className="subsec flex-none overflow-hidden max-h-96">
        <Image
          className="pt-2 w-full transition-transform duration-500 hover:scale-105"
          src={pizzaCrust}
          alt="Keto Pizza"
          width={600}
          height={400}
        />
      </div>

      {/* Description Section */}
      <div className="subsec my-auto mt-1 p-4">
        <div className="title font-semibold text-3xl mb-5">
          What is paleo pizza crust made out of?
        </div>
        <div className="desc text-lg">
          We have seen it all kinds of ways, with different types of flours, but
          we settled on almond flour for its nutty flavor. We also mix in
          spices—Italian seasoning and garlic powder—to give it more flavor. We
          skip yeast because it can be a pain and instead incorporate eggs and
          olive oil. The eggs help make the crust fluffy.
        </div>
      </div>

      {/* Toggle Button */}
      <div className="text-center py-8 md:col-span-2">
        <ButtonPizzaMenu onClick={toggleMenu}>
          {menuVisible ? "Hide Menu" : "Show Menu"}
        </ButtonPizzaMenu>
      </div>

      {/* Hidden Menu Section with Images */}
      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          menuVisible
            ? "max-h-[1000px] opacity-100 scale-100"
            : "max-h-0 opacity-0 scale-95"
        } bg-gray-200 text-gray-800 md:col-span-2`}
      >
        <div className="menu-content p-8 text-lg">
          <h3 className="font-bold text-2xl mb-6 text-center">Pizza Menu</h3>

          {/* Mobile Grid Layout for Images */}
          <div className="flex justify-center pb-4 md:hidden">
            {/* Display the current image centered */}
            <div className="relative w-[80%] sm:w-[60%] aspect-[354/755] rounded-lg overflow-hidden shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl">
              <Image
                src={images[currentImageIndex]}
                alt={`Pizza Menu ${currentImageIndex + 1}`}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Buttons to cycle images */}
          <div className="flex justify-center mt-4 space-x-4">
            <button
              onClick={prevImage}
              className="px-4 py-2 bg-primary-700 text-white rounded hover:primary-700"
            >
              Prev
            </button>
            <button
              onClick={nextImage}
              className="px-4 py-2 bg-primary-700 text-white rounded hover:bg-gray-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuToggleSection;
