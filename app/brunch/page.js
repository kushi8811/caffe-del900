"use client";
import { useState } from "react";
import Image from "next/image";

import avbc from "@/public/caffe-images/avocado-bacon.jpg";
import bgsl from "@/public/caffe-images/bagel-salmon.jpg";
import frto from "@/public/caffe-images/french-toast.jpg";
import pnsa from "@/public/caffe-images/pancake-salmon.jpg";
import pnsy from "@/public/caffe-images/pancake-syrup.jpg";
import tosa from "@/public/caffe-images/toast-salmon.jpg";
import ygmi from "@/public/caffe-images/yogurt-mirtilli.jpg";

const brunchItems = [
  {
    name: "Avocado Toast",
    description: "Fresh and creamy avocado on toast.",
    image: avbc,
  },
  {
    name: "Bagel & Salmon",
    description: "Smoked salmon bagel with cream cheese.",
    image: bgsl,
  },
  {
    name: "French Toast",
    description: "Golden French toast with syrup.",
    image: frto,
  },
  {
    name: "Pancakes with Salmon",
    description: "Savory pancakes and smoked salmon.",
    image: pnsa,
  },
  {
    name: "Pancakes with Syrup",
    description: "Classic pancakes with syrup.",
    image: pnsy,
  },
  {
    name: "Toast & Salmon",
    description: "Crispy toast with smoked salmon.",
    image: tosa,
  },
  {
    name: "Yogurt & Granola",
    description: "Creamy yogurt with granola.",
    image: ygmi,
  },
];

function BrunchPage() {
  return (
    <div className="bg-primary-700 p-8">
      <div className="max-w-6xl mx-auto bg-white bg-opacity-90 rounded-lg p-8 shadow-lg">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Our Delicious Brunch Menu
        </h1>

        {/* Card Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brunchItems.map((item, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105"
            >
              {/* Image with Hover Transition */}
              <div
                className="relative h-48 w-full overflow-hidden"
                style={{
                  backgroundImage: `url(${item.image.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Overlay with Reduced Opacity */}
              <div className="absolute inset-0 bg-primary-700 bg-opacity-50 text-white flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300 opacity-80 visible">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrunchPage;
