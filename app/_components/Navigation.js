"use client";
import { useState } from "react";
import Link from "next/link";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative w-full">
      {/* Hamburger Button for Mobile */}
      <button
        className="lg:hidden block text-3xl p-4"
        onClick={toggleMenu}
        aria-label="Toggle navigation"
      >
        ☰
      </button>

      {/* Menu Links for Large Screens */}
      <ul className="hidden lg:flex justify-end gap-10 p-4 text-lg text-black font-normal">
        <li>
          <Link href="/" className="hover:text-primary-700 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-primary-700 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/pizzeria"
            className="hover:text-primary-700  transition-colors"
          >
            Pizzeria
          </Link>
        </li>
        <li>
          <Link
            href="/brunch"
            className="hover:text-primary-700  transition-colors"
          >
            Brunch
          </Link>
        </li>
        <li>
          <Link
            href="/menu"
            className="hover:text-primary-700  transition-colors"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="hover:text-primary-700  transition-colors"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)} // Close menu when clicking outside
      >
        <div
          className={`bg-primary-700 p-8 w-2/3 sm:w-1/2 h-full fixed top-0 right-0 transform transition-transform duration-[1000ms] ease-in-out z-60 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4 text-xl font-serif"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✖
          </button>
          <ul className="flex flex-col gap-6 text-2xl text-white font-normal">
            <li>
              <Link
                href="/"
                className="block py-2 hover:text-accent-200 transition-colors"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 hover:text-accent-200 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/pizzeria"
                className="block py-2 hover:text-accent-200 transition-colors"
                onClick={toggleMenu}
              >
                Pizzeria
              </Link>
            </li>
            <li>
              <Link
                href="/brunch"
                className="block py-2 hover:text-accent-200 transition-colors"
                onClick={toggleMenu}
              >
                Brunch
              </Link>
            </li>
            <li>
              <Link
                href="/menu"
                className="block py-2 hover:text-accent-200 transition-colors"
                onClick={toggleMenu}
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 hover:text-accent-200 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
