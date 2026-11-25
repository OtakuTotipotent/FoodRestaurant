import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="w-dvw h-dvh overflow-x-hidden p-2 pt-16 font-sans bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
        <BrowserRouter>
          <Header />

          <main className="min-h-dvh">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="products" exact element={<div>All Products</div>} />
              <Route path="order" exact element={<div>Your Order</div>} />
              <Route path="about" exact element={<div>About Us</div>} />
              <Route path="favorites" exact element={<div>Favorites</div>} />
              <Route path="settings" exact element={<div>Settings</div>} />
              <Route path="signin" exact element={<div>Sign In</div>} />
              <Route path="signup" exact element={<div>Sign Up</div>} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
