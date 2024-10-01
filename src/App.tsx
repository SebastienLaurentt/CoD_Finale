import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingMobile from "./components/LandingMobile";
import Home from "./pages/Home";
import Pick from "./pages/Pick";

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="hidden 2xl:block">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/pick" element={<Pick />} />
          </Routes>
        </div>
        <LandingMobile />
      </main>
    </>
  );
}

export default App;
