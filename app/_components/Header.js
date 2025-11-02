"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow-lg h-28">
      <div className="flex-shrink-0">
        <Logo />
      </div>

      <div className="flex-shrink-0">
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
