import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex flex-wrap sticky top-0  rounded-full items-center justify-center max-w-screen-xl bg-gray-400 dark:bg-white  z-50">
      {[
        ["Home", "#", 1],
        ["About", "#About", 2],
        ["Skills", "#Skills", 3],
        ["Projects", "#Projects", 4],
        ["Contact", "#Contact", 5],
      ].map(([title, url, key]) => (
        <a
          href={url}
          key={key}
          className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
        >
          {title}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
