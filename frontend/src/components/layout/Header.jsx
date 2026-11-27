import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHeart,
  FaCartShopping,
  FaUser,
  FaMagnifyingGlass,
  FaUtensils,
  FaBars,
  FaRightToBracket,
  FaGear,
  FaArrowRightFromBracket,
  FaUserPlus,
  FaHouse,
  FaXmark,
  FaBucket,
  FaWebAwesome,
  FaRoad,
  FaSun,
  FaMoon,
} from "react-icons/fa6";
import { useSelector } from "react-redux";

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef();

  const isAuthenticated = useSelector((state) => state.user.auth);

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");

    if (saved) {
      return saved === "dark";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Theme toggle
  useEffect(() => {
    const html = document.documentElement;

    if (darkMode) {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // User menu toggle
  useEffect(() => {
    const closeMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const nav_links = [
    { icon: <FaHouse />, name: "Home", path: "/" },
    { icon: <FaBucket />, name: "Products", path: "/products" },
    { icon: <FaRoad />, name: "Order", path: "/order" },
    { icon: <FaWebAwesome />, name: "About", path: "/about" },
  ];

  // Header Markup
  return (
    <nav className="fixed top-0 left-0 right-0 px-4 py-3 flex items-center justify-between z-50 backdrop-blur-xl shadow-md shadow-gray-100 dark:shadow-gray-950/30">
      {/* Logo */}
      <NavLink
        to="/"
        className="text-blue-950 text-xl font-medium flex gap-1.5 items-center dark:text-gray-200"
      >
        <FaUtensils className="text-green-600" /> FoodRest.
      </NavLink>

      {/* Navbar */}
      <div className="relative">
        {/* Desktop */}
        <ul className="hidden md:flex gap-0.5 md:gap-2 items-center">
          {nav_links.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `rounded-md p-2 text-sm transition ${
                    isActive
                      ? "bg-green-600 text-white"
                      : "text-gray-600 dark:text-gray-200 hover:bg-green-600 hover:text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl text-green-600 cursor-pointer"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>

        {/* Mobile */}
        {isOpen && (
          <ul className="md:hidden grid gap-1 p-2 absolute top-12 bg-green-600 dark:bg-gray-700 border border-gray-700/40 dark:border-green-600/40 rounded-lg w-64 -translate-x-1/2">
            {nav_links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === "/"}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 rounded px-5 py-2 transition text-gray-200 ${
                      isActive
                        ? "bg-blue-950 text-white dark:bg-green-600"
                        : "hover:bg-blue-950 hover:text-white dark:hover:bg-green-600"
                    }`
                  }
                >
                  {link.icon}
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* User & Auth */}
      <div className="flex gap-1 md:gap-2 items-center">
        {/* Global Search */}
        <button
          onClick={() => prompt("Search anything within FoodRest.")}
          className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 dark:bg-gray-700 dark:text-white hidden md:flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform cursor-pointer"
        >
          <FaMagnifyingGlass />
        </button>

        {/* Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 dark:bg-gray-700 dark:text-white hidden md:flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition cursor-pointer"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        {isAuthenticated && (
          <>
            {/* Favorites */}
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `h-10 w-10 rounded-full hidden md:flex items-center justify-center transition-transform ${
                  isActive
                    ? "bg-green-600 text-white rotate-12"
                    : "bg-gray-200 text-blue-950 dark:bg-gray-700 dark:text-white hover:bg-green-600 hover:text-white hover:rotate-12"
                }`
              }
            >
              <FaHeart />
            </NavLink>

            {/* Cart */}
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `h-10 w-10 rounded-full hidden md:flex items-center justify-center transition-transform ${
                  isActive
                    ? "bg-green-600 text-white rotate-12"
                    : "bg-gray-200 text-blue-950 dark:bg-gray-700 dark:text-white hover:bg-green-600 hover:text-white hover:rotate-12"
                }`
              }
            >
              <FaCartShopping />
            </NavLink>
          </>
        )}

        {/* User Menu */}
        <div ref={menuRef} className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className={`h-10 w-10 rounded-full text-blue-950 bg-gray-200 dark:bg-gray-700 dark:text-white flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform cursor-pointer ${isUserMenuOpen && "bg-green-600 dark:bg-green-600 text-white rotate-12"}`}
          >
            <FaUser />
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-2 mt-4 w-56 rounded-lg bg-blue-950 shadow-lg border border-gray-700/40 overflow-hidden grid z-40">
              {/* Global Search */}
              <button
                onClick={() => prompt("Search anything within FoodRest.")}
                className="px-4 py-3 text-white hover:bg-green-600 flex md:hidden items-center gap-4 cursor-pointer"
              >
                <FaMagnifyingGlass />
                Search
              </button>

              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-4 py-3 text-white hover:bg-green-600 flex md:hidden items-center gap-4 cursor-pointer"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
                Theme
              </button>

              {!isAuthenticated ? (
                <>
                  <NavLink
                    to="signin"
                    className="px-4 py-3 text-green-600 hover:text-white hover:bg-green-600 flex items-center gap-4"
                  >
                    <FaRightToBracket />
                    Sign In
                  </NavLink>

                  <NavLink
                    to="signup"
                    className="px-4 py-3 text-green-600 hover:text-white hover:bg-green-600 flex items-center gap-4"
                  >
                    <FaUserPlus />
                    Sign Up
                  </NavLink>
                </>
              ) : (
                <>
                  <NavLink
                    to="cart"
                    className="px-4 py-3 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-950 flex md:hidden items-center gap-4"
                  >
                    <FaCartShopping className="text-blue-950 dark:text-green-600" />
                    Cart
                  </NavLink>

                  <NavLink
                    to="favorites"
                    className="px-4 py-3 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-950 flex md:hidden items-center gap-4"
                  >
                    <FaHeart className="text-blue-950 dark:text-green-600" />
                    Favorites
                  </NavLink>

                  <NavLink
                    to="settings"
                    className="px-4 py-3 text-gray-600 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-950 flex items-center gap-4"
                  >
                    <FaGear className="text-blue-950 dark:text-green-600" />
                    Settings
                  </NavLink>

                  <button className="px-4 py-3 text-red-500 hover:bg-gray-200 dark:hover:bg-gray-950 flex items-center gap-4 cursor-pointer">
                    <FaArrowRightFromBracket />
                    Sign Out
                  </button>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
