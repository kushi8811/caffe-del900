"use client";
import { useState } from "react";
import menu from "@/app/data/menuData"; // default import
import ButtonMenu from "../_components/ButtonMenu";
import Image from "next/image";
import image1 from "@/public/menu2-page1.jpg";
import image2 from "@/public/menu2-page2.jpg";
import image3 from "@/public/menu1-page1.jpg";
import image4 from "@/public/menu1-page2.jpg";

const MenuToggleSection = () => {
  const safeMenu = menu || {};
  const [activeTab, setActiveTab] = useState(Object.keys(safeMenu)[0] || "");

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-black py-8 text-center">
        <h1 className="text-4xl font-bold tracking-widest text-yellow-400 font-serif">
          OUR MENU
        </h1>
      </div>

      {/* Menu Pages */}
      <div className="mx-auto max-w-2xl px-4 py-8 flex flex-col gap-6">
        <Image
          src={image3}
          alt="Menu page 1"
          className="w-full rounded-lg shadow-lg"
        />
        <Image
          src={image4}
          alt="Menu page 2"
          className="w-full rounded-lg shadow-lg"
        />
      </div>

      <div className="bg-black py-8 text-center">
        <h1 className="text-4xl font-bold tracking-widest text-yellow-400 font-serif">
          OUR MENU OUTSIDE
        </h1>
      </div>
      <div className="mx-auto max-w-2xl px-4 py-8 flex flex-col gap-6">
        <Image
          src={image1}
          alt="Menu page 1"
          className="w-full rounded-lg shadow-lg"
        />
        <Image
          src={image2}
          alt="Menu page 2"
          className="w-full rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default MenuToggleSection;
