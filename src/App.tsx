import BlueIcon from "./assets/BlueIcon.svg";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import LandingMobileCard from "./components/LandingMobileCard";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="hidden 2xl:block">yo</div>
        <div className="2xl:hidden">
          <LandingMobileCard />
          <div className="mx-auto mt-4 flex w-[366px] flex-row justify-between pl-6 pr-10">
            <Cursor
              name="maislina_"
              fontColor="text-foreground"
              bgColor="#F28164"
              borderColor="#D46F55"
              rotation={-16}
              classname="mt-14"
            />
       
              <img
                src={BlueIcon}
                alt="Clash of Dev Logo"
                className=""
              />
           
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
