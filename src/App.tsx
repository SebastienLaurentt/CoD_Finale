import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingMobile from "./components/LandingMobile";
import Fight from "./pages/Fight";
import Home from "./pages/Home";
import Loser from "./pages/Loser";
import Pick from "./pages/Pick";
import Prefight from "./pages/Prefight";
import Winner from "./pages/Winner";

function App() {
  return (
    <>
      <Header />
      <main className="px-2 2xl:px-0">
        <div className="hidden xl:block">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <Routes>
            <Route path="/pick" element={<Pick />} />
          </Routes>
          <Routes>
            <Route path="/prefight" element={<Prefight />} />
          </Routes>
          <Routes>
            <Route path="/fight" element={<Fight />} />
          </Routes>
          <Routes>
            <Route path="/loser" element={<Loser />} />
          </Routes>
          <Routes>
            <Route path="/winner" element={<Winner />} />
          </Routes>
        </div>
        <LandingMobile />
      </main>
    </>
  );
}

export default App;
