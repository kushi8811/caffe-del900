"use client";

import { useState, useEffect } from "react";
import caffe from "@/public/caffe-images/caffetteria.jpg";
import brunch from "@/public/caffe-images/brunch.jpg";
import cocktail from "@/public/caffe-images/cocktail.jpg";
import bakery from "@/public/caffe-images/bakery.jpg";
import BoxItem from "./BoxItem";

function Box() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector("#box-container");

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [isVisible]);

  const boxItems = [
    {
      title: "Caffeteria",
      image: caffe,
      description: "Enjoy our finest coffee and snacks.",
      link: "/menu",
    },
    {
      title: "Brunch",
      image: brunch,
      description: "Delicious brunch to start your day.",
      link: "/menu",
    },
    {
      title: "Bakery",
      image: bakery,
      description: "Freshly baked goods made daily.",
      link: "/menu",
    },
    {
      title: "Cocktails",
      image: cocktail,
      description: "Signature cocktails to elevate your evening.",
      link: "/menu",
    },
  ];

  return (
    <div className="bg-primary-700 p-8">
      {/* Centered Header */}
      <div
        className={`text-center mb-6 transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="font-bold text-3xl lg:text-3xl text-white">
          Explore Our Specialities
        </h1>
      </div>

      {/* Box Container with Modern Box Layout */}
      <div
        id="box-container"
        className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 p-4 sm:p-8 transition-all duration-700 ease-in-out ${
          isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        {boxItems.map((item, index) => (
          <div
            key={index}
            className="group relative w-full h-72 sm:h-80 rounded-xl overflow-hidden bg-cover bg-center transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
            style={{
              backgroundImage: `url(${item.image.src})`,
            }}
          >
            {/* Box Overlay with Title and Description */}
            <div className="absolute inset-0 bg-black bg-opacity-50 p-6 flex flex-col justify-end text-white transition-all opacity-100 group-hover:opacity-100">
              <h2 className="text-3xl font-bold">{item.title}</h2>
              <p className="mt-2 text-lg">{item.description}</p>
              <a
                href={item.link}
                className="mt-4 text-lg font-semibold text-primary-400 hover:text-primary-600 transition-all"
              >
                Learn More &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Box;
