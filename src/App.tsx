import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Capture from "./pages/Capture";
import Fight from "./pages/Fight";
import Home from "./pages/Home";
import Loser from "./pages/Loser";
import Pick from "./pages/Pick";
import Prefight from "./pages/Prefight";
import Rules from "./pages/Rules";
import Winner from "./pages/Winner";

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<MainLayout />}>
          <Route path="/rules" element={<Rules />} />
          <Route path="/pick" element={<Pick />} />
          <Route path="/prefight" element={<Prefight />} />
          <Route path="/fight" element={<Fight />} />
          <Route path="/loser" element={<Loser />} />
          <Route path="/winner" element={<Winner />} />
          <Route path="/capture" element={<Capture />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
