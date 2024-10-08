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

  const headerClasses = `w-full px-2 pb-8 pt-[40px] ${
    location.pathname === '/fight' ? 'xl:absolute' : '2xl:absolute'
  } xl:left-0 xl:top-0 xl:z-20 2xl:pt-5`;

  return (
    <header className={headerClasses}>
      <div className="relative mx-auto flex max-w-[366px] flex-row items-center justify-between xl:max-w-[900px] 2xl:max-w-[1376px]">
        <FinaleLogo />
        <h1 className="absolute w-full text-center text-xs font-bold text-foreground">
          {getHeaderText()}
        </h1>
        <img src={SwitchOnLogo} alt="Logo de Clash of Dev dans un toogle" />
      </div>
    </header>
  );
};

export default Header;
