import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col w-dvw h-dvh overflow-x-hidden p-2">
          <Header />

          <main className="flex-1">
            <Routes>
              <Route path="/" exact element={<Home />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
