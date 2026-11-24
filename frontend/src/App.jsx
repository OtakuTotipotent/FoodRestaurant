import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="w-dvw h-dvh overflow-x-hidden p-2 bg-white font-sans pt-16">
        <BrowserRouter>
          <Header />

          <main className="min-h-dvh">
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
