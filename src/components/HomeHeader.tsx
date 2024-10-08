
import PiscineLogo from "./PiscineLogo";
import SwitchLogo from "../assets/Logos/switchLogo.svg";
import NumberTicker from "./ui/NumberTicker";

interface HeaderProps {
  scrollProgress: number;
  isVisible: boolean;
}

const HomeHeader = ({ scrollProgress, isVisible }: HeaderProps) => {
  return (
    <header className="gradient-bottom-10 fixed left-0 top-0 z-50 w-full pb-8 pt-[46px] 2xl:pt-[38px]">
      <div className="mx-auto flex w-[366px] flex-row items-center justify-between md:w-[720px] lg:w-[960px] xl:w-[1216px] 2xl:w-[1376px]">
        <PiscineLogo />
        <span
          className={`absolute left-0 w-full text-center font-bold text-primary-foreground transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <NumberTicker scrollProgress={scrollProgress} />
        </span>
        <img src={SwitchLogo} alt="Logo de Clash of Dev dans un toogle" />
      </div>
    </header>
  );
};

export default HomeHeader;
