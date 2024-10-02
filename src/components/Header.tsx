import { useLocation } from "react-router-dom";
import SwitchOnLogo from "../assets/SwitchOnLogo.svg";
import FinaleLogo from "./FinalLogo";

const Header = () => {
  const location = useLocation();

  const getHeaderText = () => {
    switch (location.pathname) {
      case "/":
        return "CLASH TIME!";
      case "/pick":
        return "PICK A CHAMPION !";
      case "/fight":
      case "/loser":
      case "/winner":
        return "3, 2, 1 FIGHT !";
      default:
        return "CLASH OF DEV";
    }
  };

  const headerClasses = `w-full pb-8 pt-[40px] 2xl:pt-5 ${
    location.pathname === "/fight" ? "2xl:absolute 2xl:top-0 2xl:left-0 2xl:z-20" : ""
  }`;

  return (
    <header className={headerClasses}>
      <div className="relative mx-auto flex w-[366px] flex-row items-center justify-between 2xl:w-[1376px]">
        <FinaleLogo />
        <span className="absolute w-full text-center text-xs font-bold text-foreground">
          {getHeaderText()}
        </span>
        <img src={SwitchOnLogo} alt="Logo de Clash of Dev dans un toogle" />
      </div>
    </header>
  );
};

export default Header;
