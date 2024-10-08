
import PiscineLogo from "./PiscineLogo";
import NumberTicker from "./ui/NumberTicker";

interface FooterProps {
  scrollProgress: number;
}

const Footer = ({ scrollProgress }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mx-auto flex min-h-[40px] w-[366px] flex-row items-center justify-between pb-[46px] pt-[65px] md:w-[720px] lg:w-[960px] xl:w-[1216px] xl:pt-[12px] 2xl:w-[1376px] 2xl:pb-[38px] 2xl:pt-[46px]">
      <PiscineLogo />
      <NumberTicker
        scrollProgress={scrollProgress}
        className="font-bold 2xl:absolute 2xl:w-full 2xl:text-center"
      />
      <span className="font-bold">@{currentYear}</span>
    </footer>
  );
};

export default Footer;
