"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-4 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <img
              src="/Dark_logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="#"
              className="text-gray-700 text-sm font-medium hover:text-orange-500"
            >
              Explore
            </Link>

            <Link
              href="#"
              className="text-gray-700 text-sm font-medium hover:text-orange-500"
            >
              Pricing
            </Link>
          </div>
        </div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 max-w-xl mx-6 relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-full pl-12 pr-5 py-3 outline-none focus:border-orange-500"
          />
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <button className="text-black border border-gray-300 px-5 py-2 rounded-xl font-medium hover:bg-gray-100">
            Log In
          </button>

          <button className="bg-orange-500 text-white px-6 py-2 rounded-xl font-medium hover:bg-orange-600 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 px-4 py-5 bg-white">

          {/* Search */}
          <div className="relative mb-5">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search..."
              className="w-full border border-gray-300 rounded-full pl-12 pr-5 py-3"
            />
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="text-gray-700 font-medium">
              Explore
            </Link>

            <Link href="#" className="text-gray-700 font-medium">
              Pricing
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3 mt-5">
            <button className="border border-gray-300 py-3 rounded-xl">
              Log In
            </button>

            <button className="bg-orange-500 text-white py-3 rounded-xl">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}