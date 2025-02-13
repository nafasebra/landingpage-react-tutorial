import React from "react";

interface SidebarProps {
  show: boolean;
  handleClose: () => void;
}

function Sidebar({ show, handleClose }: SidebarProps) {
  return (
    <aside
      className={`block lg:hidden fixed top-0 bottom-0 left-0 bg-white w-full h-dvh ${
        show ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        type="button"
        className="absolute top-3 right-3 flex items-center justify-center p-3"
        onClick={handleClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <ul className="flex flex-col items-center text-center justify-center h-full gap-7">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">Feature</a>
        </li>
        <li>
          <a href="#">Product</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
        <li>
          <a href="#">FAQ</a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
