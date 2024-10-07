import SwitchOnLogo from "../assets/SwitchOnLogo.svg";
import FinaleLogo from "./FinalLogo";

const Header = () => {
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

  return (
    <header className="w-full px-2 pb-8 pt-[40px] 2xl:absolute 2xl:left-0 2xl:top-0 2xl:z-20 2xl:pt-5">
      <div className="relative mx-auto flex max-w-[366px] flex-row items-center justify-between 2xl:max-w-[1376px]">
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
