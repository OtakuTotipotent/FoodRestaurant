import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <div className="flex flex-col w-dvw h-dvh overflow-x-hidden p-2 relative bg-white font-sans">
        <BrowserRouter>
          <Header />

          <main className="flex-1 min-h-dvh mt-20">
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
