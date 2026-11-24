import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 px-4 py-3 flex items-center justify-between z-50 shadow-sm shadow-gray-300 backdrop-blur-lg">
        {/* Logo */}
        <NavLink className="text-blue-950 text-xl font-medium">
          <i className="fas fa-utensils text-green-600"></i> FoodRest.
        </NavLink>

        {/* Links */}
        <div className="hidden md:flex gap-0.5 md:gap-2 items-center">
          <NavLink className="text-gray-600 rounded-md p-2 text-sm hover:text-white hover:bg-green-600 transition-colors">
            Home
          </NavLink>
          <NavLink className="text-gray-600 rounded-md p-2 text-sm hover:text-white hover:bg-green-600 transition-colors">
            Products
          </NavLink>
          <NavLink className="text-gray-600 rounded-md p-2 text-sm hover:text-white hover:bg-green-600 transition-colors">
            Order
          </NavLink>
          <NavLink className="text-gray-600 rounded-md p-2 text-sm hover:text-white hover:bg-green-600 transition-colors">
            About
          </NavLink>
        </div>

        {/* Auth */}
        <div className="flex gap-1 md:gap-2 items-center">
          <button className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform cursor-pointer">
            <i className="fas fa-search"></i>
          </button>

          <NavLink className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform">
            <i className="fas fa-heart"></i>
          </NavLink>

          <NavLink className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform">
            <i className="fas fa-shopping-cart"></i>
          </NavLink>

          <NavLink className="h-10 w-10 rounded-full text-blue-950 bg-gray-200 flex items-center justify-center hover:bg-green-600 hover:text-white hover:rotate-12 transition-transform">
            <i className="fa-solid fa-user"></i>
            {/* TODO: This is a small menu; Contains Sign-in, Sign-up options vs Sign-out, Settings options depending on user status */}
          </NavLink>
        </div>
      </nav>
      <div></div>
    </>
  );
};

export default Header;
