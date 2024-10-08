import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import LandingMobile from "../components/LandingMobile";

function MainLayout() {
  return (
    <>
      <Header />
      <main className="px-2 2xl:px-0">
        <div className="hidden xl:block">
          <Outlet />
        </div>
        <LandingMobile />
      </main>
    </>
  );
}

export default MainLayout;