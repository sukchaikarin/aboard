import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ onSidebarToggle }: { onSidebarToggle: () => void }) => {
  return (
    <header className="w-full bg-blue-700 text-white p-4 flex justify-between items-center fixed top-0 z-40 h-16">
      {/* Logo */}
      <div className="flex items-center">
        <span className="text-lg font-bold">My App</span>
      </div>

      {/* Hamburger for mobile */}
      <button onClick={onSidebarToggle} className="md:hidden text-white">
        <RxHamburgerMenu className="text-2xl" />
      </button>
    </header>
  );
};

export default Navbar;
