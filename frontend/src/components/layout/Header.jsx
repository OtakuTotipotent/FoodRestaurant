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
} from "react-icons/fa6";

// Header Component
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const menuRef = useRef();

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

  const isLoggedIn = true;

  const nav_links = [
    { icon: <FaHouse />, name: "Home", path: "/" },
    { icon: <FaBucket />, name: "Products", path: "/products" },
    { icon: <FaRoad />, name: "Order", path: "/order" },
    { icon: <FaWebAwesome />, name: "About", path: "/about" },
  ];

  // TailwindCSS Classes
  const navLinkClass = ({ isActive }) =>
    `rounded-md p-2 text-sm transition ${
      isActive
        ? "bg-green-600 text-white"
        : "text-gray-600 hover:bg-green-600 hover:text-white"
    }`;

  // Header Markup
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 py-3 flex items-center justify-between z-50 shadow-lg shadow-gray-200 backdrop-blur-lg">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-blue-950 text-xl font-medium flex gap-1.5 items-center"
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
                  className={navLinkClass}
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
            <ul className="md:hidden grid gap-1 p-2 absolute top-12 bg-blue-950 rounded-lg w-64 -translate-x-1/2">
              {nav_links.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-4 rounded px-5 py-2 transition text-gray-300 ${
                        isActive
                          ? "bg-green-600 text-white"
                          : "hover:bg-green-600 hover:text-white"
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
          <button className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform cursor-pointer">
            <FaMagnifyingGlass />
          </button>

          {isLoggedIn && (
            <>
              {/* Favorites */}
              <NavLink
                to="/favorites"
                className={({ isActive }) =>
                  `h-10 w-10 rounded-full hidden md:flex items-center justify-center transition-transform ${
                    isActive
                      ? "bg-green-600 text-white rotate-12"
                      : "bg-gray-200 text-blue-950 hover:bg-green-600 hover:text-white hover:rotate-12"
                  }`
                }
              >
                <FaHeart />
              </NavLink>

              {/* Cart */}
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  `h-10 w-10 rounded-full flex items-center justify-center transition-transform ${
                    isActive
                      ? "bg-green-600 text-white rotate-12"
                      : "bg-gray-200 text-blue-950 hover:bg-green-600 hover:text-white hover:rotate-12"
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
              className={`h-10 w-10 rounded-full text-blue-950 bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform cursor-pointer ${isUserMenuOpen && "bg-green-600 text-white rotate-12"}`}
            >
              <FaUser />
            </button>

            {isUserMenuOpen && (
              <div className="absolute right-0 mt-4 w-56 rounded-lg backdrop-blur-lg shadow-lg border border-gray-200 overflow-hidden grid">
                {!isLoggedIn ? (
                  <>
                    <NavLink
                      to="/signin"
                      className="px-4 py-3 text-green-600 hover:bg-gray-200 flex items-center gap-4"
                    >
                      <FaRightToBracket />
                      Sign In
                    </NavLink>

                    <NavLink
                      to="/signup"
                      className="px-4 py-3 text-green-600 hover:bg-gray-200 flex items-center gap-4"
                    >
                      <FaUserPlus />
                      Sign Up
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink
                      to="/settings"
                      className="px-4 py-3 text-gray-600 hover:bg-gray-200 flex items-center gap-4"
                    >
                      <FaGear className="text-blue-950" />
                      Settings
                    </NavLink>

                    <NavLink
                      to="/favorites"
                      className="px-4 py-3 text-gray-600 hover:bg-gray-200 flex items-center gap-4"
                    >
                      <FaHeart className="text-blue-950" />
                      Favorites
                    </NavLink>

                    <button className="px-4 py-3 text-red-500 hover:bg-gray-200 flex items-center gap-4 cursor-pointer">
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
      <div></div>
    </>
  );
};

export default Header;
