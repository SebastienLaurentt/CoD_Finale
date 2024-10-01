import SwitchOnLogo from "../assets/SwitchOnLogo.svg";
import FinaleLogo from "./FinalLogo";

const Header = () => {
  return (
    <header className="w-full pb-8 pt-[40px] 2xl:pt-[38px]">
      <div className="mx-auto flex w-[366px] flex-row items-center justify-between md:w-[720px] lg:w-[960px] xl:w-[1216px] 2xl:w-[1376px]">
        <FinaleLogo />
        <span className="text-xs font-bold text-foreground">CLASH TIME!</span>
        <img src={SwitchOnLogo} alt="Logo de Clash of Dev dans un toogle" />
      </div>
    </header>
  );
};

export default Header;
