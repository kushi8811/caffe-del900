"use client";

import Image from "next/image";
import coffee from "@/public/caffe-images/caffetteria.jpg";
import brunch from "@/public/caffe-images/brunch.jpg";
import terrace from "@/public/caffe-images/terrace.jpg";
import cocktail from "@/public/caffe-images/cocktail.jpg";

function About() {
  const sections = [
    {
      title: "Breakfast Delights",
      description:
        "Begin your day with our aromatic espressos and freshly baked croissants. Each bite and sip is crafted to awaken your senses.",
      image: coffee,
    },
    {
      title: "Light Lunches - Brunch",
      description:
        "Savor a curated selection of Italian classics, perfect for a mid-day indulgence.",
      image: brunch,
    },
    {
      title: "Aperitifs",
      description:
        "As the sun sets over Florence, unwind with signature cocktails and locally sourced wines, paired with delightful antipasti.",
      image: cocktail,
    },
  ];

  return (
    <div className="bg-primary-700 text-white mt-5">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-[400px] flex items-center justify-center mb-1">
        <Image
          src={terrace}
          quality={100}
          alt="Terrace overlooking Florence"
          layout="fill"
          objectFit="cover"
          className="opacity-90 transform scale-110 mb-0"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-700 opacity-90 " />
        <div className="absolute z-10 text-center px-4">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            Caffè del 900’
          </h1>
          <p className="mt-4 text-lg max-w-3xl mx-auto">
            Where history meets the heart of Florence. Experience the authentic
            Florentine essence in a timeless retreat.
          </p>
        </div>
      </div>

      <div className="py-12 px-6 mt-2">
        <h2 className="text-3xl font-bold text-center mb-6">Our Story</h2>
        <p className="max-w-4xl mx-auto text-center text-lg leading-relaxed">
          Nestled near the iconic San Frediano, our café blends the elegance of
          Florence’s past with today’s vibrant spirit. Within these historic
          walls, every sip tells a story—a journey through time, blending
          tradition and innovation.
        </p>
      </div>

      <div className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">What We Offer</h2>
        <div className="grid gap-10 md:grid-cols-3 px-4 sm:px-8 lg:px-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white text-black hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-500" />
              </div>
              <div className="p-6 group-hover:scale-105 transform transition-transform duration-500">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-500 transition-colors">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-700 group-hover:text-black">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
