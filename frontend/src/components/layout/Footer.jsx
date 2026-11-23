const Footer = () => {
  return (
    <>
      <footer>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 lg:text-center">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 font-medium">
              Menu Categories
            </h3>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#menu"
            >
              Pizza
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#menu"
            >
              Burgers
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#menu"
            >
              Sandwiches &amp; Rolls
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#menu"
            >
              Shawarma &amp; Wraps
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#menu"
            >
              Fries, Pasta &amp; Sides
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 font-medium">Quick Links</h3>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#dishes"
            >
              Dishes
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#menu"
            >
              Menu
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#review"
            >
              Review
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#order"
            >
              Order
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 font-medium">Contact Info.</h3>
            <a
              className=" text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              +92 000 0000000
            </a>
            <a
              className=" text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              +92 000 0000000
            </a>
            <a
              className=" text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              info@gmail.com
            </a>
            <a
              className=" text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              Samipur, near Bhagal Canal Bridge, Layyah
            </a>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-lg text-blue-950 font-medium">Follow us</h3>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              TikTok
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              Facebook
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              Instagram
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              Twitter | X
            </a>
            <a
              className="text-sm text-gray-500 hover:text-green-600 hover:underline"
              href="#"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div className="text-center border-t border-t-gray-300 font-medium text-blue-950 pt-2 mt-4">
          Copyright @ 2026 <span className="text-green-600">FoodRest.</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
