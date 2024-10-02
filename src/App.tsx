import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingMobile from "./components/LandingMobile";
import Home from "./pages/Home";
import Loser from "./pages/Loser";
import Pick from "./pages/Pick";
import Winner from "./pages/Winner";

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
