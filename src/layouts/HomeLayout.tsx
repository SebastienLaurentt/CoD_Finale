import { Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <main className="min-h-screen">
      <Outlet />
    </main>
  );
}

export default HomeLayout;