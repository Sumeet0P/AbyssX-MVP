import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    // Navbar Style
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 py-5 px-10 text-white flex justify-between items-center"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Logo */}
      <span className="text-7xl pl-5">
        <Link to="/" className="font-italiana text-white">
          AbyssX
        </Link>
      </span>
      {/* List Items and Button */}
      <ul className="flex gap-8 items-center text-xs">
        <li>SEARCH</li>
        <Link
          to="/explore"
          className="text-white"
        >
          EXPLORE
        </Link>
        <Link
          to="/login"
          className="text-white"
        >
          LOGIN
        </Link>
        <Link
          to="/shoppingbag"
          className="text-white"
        >
          SHOPPING BAG
        </Link>
      </ul>
    </motion.nav>
  );
};

export default Navbar;
