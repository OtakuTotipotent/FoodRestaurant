import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div>
            <Header />

            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>

            <h1>Welcome to FoodRest.</h1>

            <Footer />
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
