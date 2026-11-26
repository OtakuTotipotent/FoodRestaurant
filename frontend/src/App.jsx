import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Protected from "./components/auth/Protected";
import NotFound from "./components/pages/NotFound";

function App() {
  const isAuthenticated = false;
  return (
    <>
      <div className="w-dvw h-dvh overflow-x-hidden p-2 pt-16 font-sans bg-white text-gray-900 dark:bg-slate-900 dark:text-gray-100 transition-colors duration-300">
        <BrowserRouter>
          <Header />

          <main className="min-h-dvh">
            <Routes>
              <Route path="/" exact element={<Home />} />

              <Route path="products" exact element={<div>All Products</div>} />

              <Route
                path="order"
                exact
                element={
                  <Protected isAuthenticated={isAuthenticated}>
                    <div>Your Order</div>
                  </Protected>
                }
              />
              <Route path="about" exact element={<div>About Us</div>} />

              <Route
                path="favorites"
                exact
                element={
                  <Protected isAuthenticated={isAuthenticated}>
                    <div>Favorites</div>
                  </Protected>
                }
              />

              <Route
                path="settings"
                exact
                element={
                  <Protected isAuthenticated={isAuthenticated}>
                    <div>Settings</div>
                  </Protected>
                }
              />

              <Route path="signin" exact element={<div>Sign In</div>} />

              <Route path="signup" exact element={<div>Sign Up</div>} />

              <Route
                path="*"
                element={
                  <div>
                    <NotFound />
                  </div>
                }
              />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
