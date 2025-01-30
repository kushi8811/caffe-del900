"use client";
import React, { useState } from "react";
import PizzaCard from "../_components/PizzaCard";
import ButtonPizzaMenu from "../_components/ButtonPizzaMenu";
import HeroSection from "../_components/HeroSection";
import PizzaStylesSection from "../_components/PizzaStylesSection";
import MenuToggleSection from "../_components/MenuToggleSection";
import Footer from "../_components/Footer";

// Pizzeria Component
const Pizzeria = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Pizza Styles */}
      <PizzaStylesSection />

      {/* Menu Toggle */}
      <MenuToggleSection toggleMenu={toggleMenu} menuVisible={menuVisible} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Pizzeria;
