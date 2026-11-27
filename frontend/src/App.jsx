import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Protected from "./components/auth/Protected";
import SignIn from "./pages/SignIn";
import { useSelector } from "react-redux";

function App() {
  const isAuthenticated = useSelector((state) => state.user.auth);
  return (
    <BrowserRouter>
      <Header />

      <main className="mt-16 p-2 min-h-96">
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

          <Route path="signin" exact element={<SignIn />} />

          <Route path="signup" exact element={<div>Sign Up</div>} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
