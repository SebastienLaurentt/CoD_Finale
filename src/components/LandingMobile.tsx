import BlueIcon from "../assets/BlueIcon.svg";
import Cursor from "./Cursor";
import MobileCard from "./MobileCard";

const LandingMobile = () => {
  return (
    <div className="mx-auto max-w-[366px] pb-10 xl:hidden">
      <MobileCard />
      <div className="mx-auto mt-4 flex  flex-row justify-between pl-6 pr-10">
        <Cursor
          name="maislina_"
          fontColor="text-foreground"
          bgColor="#F28164"
          borderColor="#D46F55"
          rotation={-16}
          classname="mt-14 animate-cursor1"
          position="right-top"
        />

        <img src={BlueIcon} alt="Clash of Dev Logo" className="" />
      </div>
    </div>
  );
};

export default LandingMobile;
