import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        {/* Logo */}
        <NavLink>FoodRest.</NavLink>

        {/* Links */}
        <div>
          <NavLink>Home</NavLink>
          <NavLink>Products</NavLink>
          <NavLink>About</NavLink>
        </div>

        {/* Auth */}
        <NavLink>Account</NavLink>
        <NavLink>Sign In</NavLink>
        <NavLink>Sign Up</NavLink>
        <NavLink>Sign Out</NavLink>
      </nav>
      <div></div>
    </>
  );
};

export default Header;
