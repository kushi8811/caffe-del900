"use client";
import { useState } from "react";
import menu from "@/app/data/menuData"; // default import
import ButtonMenu from "../_components/ButtonMenu";

const MenuToggleSection = () => {
  const safeMenu = menu || {};
  const [activeTab, setActiveTab] = useState(Object.keys(safeMenu)[0] || "");

  return (
    <section className="py-12 w-full bg-gray-50 relative">
      {/* Coperto Badge */}
      <div className="absolute top-4 right-4 bg-yellow-200 text-black px-3 py-1 rounded shadow-lg font-semibold text-sm">
        Coperto / Table Charge €2
      </div>

      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 text-center mb-10">
        <h2 className="text-4xl font-bold mb-2">Our Menu</h2>
        <p className="text-lg text-gray-700">
          Explore our authentic Italian selection — from wood-fired pizzas to
          fresh salads and focacce.
        </p>
      </div>

      {/* Tabs */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
        {Object.keys(safeMenu).map((section) => (
          <ButtonMenu
            key={section}
            onClick={() => setActiveTab(section)}
            className={`px-4 py-2 rounded ${
              activeTab === section
                ? "bg-primary-700 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {section.replace("_", " ")}
          </ButtonMenu>
        ))}
      </div>

      {/* Menu Items */}
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {safeMenu[activeTab] && safeMenu[activeTab].length > 0 ? (
          <div className="grid gap-4">
            {safeMenu[activeTab].map((item, index) => (
              <div
                key={index}
                className="flex justify-between border-b py-2 text-black font-semibold"
              >
                <div className="flex-1">
                  <span>{item.name}</span>
                  {item.description && (
                    <span className="block mt-1 text-sm text-gray-500">
                      {item.description}
                    </span>
                  )}
                </div>
                <span className="text-primary-700 font-bold">
                  €
                  {typeof item.price === "number"
                    ? item.price.toFixed(2)
                    : item.price}
                </span>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-600">
            No items in this section.
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuToggleSection;
