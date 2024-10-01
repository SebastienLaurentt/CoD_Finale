import BlueIcon from "./assets/BlueIcon.svg";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import LandingDeskCard from "./components/LandingDeskCard";
import LandingMobileCard from "./components/LandingMobileCard";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="hidden flex-col items-center 2xl:flex">
          <LandingDeskCard />
          <button className="mt-[73px] w-[212px] rounded-[60px] bg-primary px-2.5 py-[22px] text-sm font-semibold text-primary-foreground">
            Start the Game
          </button>
        </div>
        <div className="pb-10 2xl:hidden">
          <LandingMobileCard />
          <div className="mx-auto mt-4 flex w-[366px] flex-row justify-between pl-6 pr-10">
            <Cursor
              name="maislina_"
              fontColor="text-foreground"
              bgColor="#F28164"
              borderColor="#D46F55"
              rotation={-16}
              classname="mt-14"
              position="right-top"
            />

            <img src={BlueIcon} alt="Clash of Dev Logo" className="" />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
