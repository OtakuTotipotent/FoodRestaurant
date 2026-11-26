import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="border-t border-gray-200 dark:border-gray-700/50 px-1 pt-4">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:text-center">
          {/* Quick Links */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 dark:text-green-600 font-medium">
              Quick Links
            </h3>
            <Link
              to="/"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Home
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Dishes
            </Link>
            <Link
              to="about"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              About
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Menu
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Review
            </Link>
            <Link
              to="order"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Order
            </Link>
          </div>

          {/* Product Menu */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 dark:text-green-600 font-medium">
              Menu Categories
            </h3>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Pizza
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Burgers
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Sandwiches & Rolls
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Shawarma & Wraps
            </Link>
            <Link
              to="products"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Fries, Pasta &; Sides
            </Link>
          </div>

          {/* Contacts */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 dark:text-green-600 font-medium">
              Contact Info.
            </h3>
            <Link
              to="#"
              className=" text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              +92 000 0000000
            </Link>
            <Link
              to="#"
              className=" text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              +92 000 0000000
            </Link>
            <Link
              to="#"
              className=" text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              info@gmail.com
            </Link>
            <Link
              to="#"
              className=" text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Samipur, near Bhagal Canal Bridge, Layyah
            </Link>
          </div>

          {/* Social Accounts */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 dark:text-green-600 font-medium">
              Follow us
            </h3>
            <Link
              to="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              TikTok
            </Link>
            <Link
              to="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Facebook
            </Link>
            <Link
              to="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Instagram
            </Link>
            <Link
              to="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Twitter | X
            </Link>
            <Link
              to="#"
              className="text-sm text-gray-600 dark:text-gray-200 hover:text-green-600 hover:underline"
            >
              Linkedin
            </Link>
          </div>
        </div>

        <div className="text-center border-t border-gray-200 dark:border-gray-700/50 font-medium text-blue-950 dark:text-gray-200 pt-2 mt-4">
          Copyright @ 2026 <span className="text-green-600">FoodRest.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
