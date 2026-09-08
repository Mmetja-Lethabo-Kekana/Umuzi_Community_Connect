import { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger button (always visible) */}
      <button
        className="p-2 text-blue-700 fixed top-4 left-4 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Sidebar menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-blue-700 text-white p-4 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <h2 className="text-xl font-bold mb-6">Community Connect</h2>
        <nav className="space-y-4">
          <a href="#" className="block hover:text-blue-200">Dashboard</a>
          <a href="#" className="block hover:text-blue-200">My Reports</a>
          <a href="#" className="block hover:text-blue-200">Events</a>
          <a href="#" className="block hover:text-blue-200">Volunteer Sign-Ups</a>
        </nav>
        <button className="mt-6 w-full bg-white text-blue-700 py-2 rounded">
          Report an Issue
        </button>
      </aside>
    </>
  );
}

export default Sidebar;
