import BlueLogo from "../assets/Logos/blueLogo.svg";
import GreenLogo from "../assets/Logos/greenLogo.svg";
import PinkLogo from "../assets/Logos/pinkLogo.svg";
import WhiteLogo from "../assets/Logos/whiteLogo.svg";
import LinkButton from "./LinkButton";

const ClickMeCard = () => {
  return (
    <div className="relative h-[600px] rounded-[60px] bg-background md:h-[650px] lg:h-[820px] xl:h-[650px] 2xl:h-[900px]">
      <div className="ml-[46px] pt-10 2xl:ml-[87px] 2xl:pt-[220px]">
        <span className="ml-0.5 text-foreground 2xl:ml-0">/ FINALE02</span>
        <p className="mt-[130px] flex w-[272px] flex-col justify-center text-justify text-[40px] font-semibold leading-[48px] text-[#F3F3F1] md:w-[650px] md:text-[80px] md:leading-[84px] lg:w-[800px] lg:text-[104px] lg:leading-[120px] xl:w-[650px] xl:text-[80px] xl:leading-[84px] 2xl:mt-0 2xl:h-[372px] 2xl:w-[1172px] 2xl:text-[115px] 2xl:leading-[123px]">
          Click Me ? Might enter the finals{" "}
        </p>
      </div>
      <img
        src={WhiteLogo}
        alt=""
        className="absolute left-[241px] top-[90.28px] h-[49.56px] w-[53.55px] md:left-[550px] md:top-[400px] lg:left-[780px] lg:top-[520px] xl:left-[550px] xl:top-[400px] 2xl:left-[1061.97px] 2xl:top-[516.14px]"
      />
      <div className="relative mx-auto mt-[125px] flex h-[91px] w-[185px] items-center justify-center md:w-[185px] xl:w-[185px] 2xl:mt-[132px] 2xl:w-[219px]">
        <LinkButton to="rules" ariaLabel="Aller voir les règles">Enter Next Level</LinkButton>
        <img
          src={GreenLogo}
          alt=""
          className="absolute left-0 top-0 z-40 size-[30px]"
        />
        <img
          src={BlueLogo}
          alt=""
          className="absolute left-[135px] top-[53.38px] z-30 size-[38px] md:left-[135px] xl:left-[135px] 2xl:left-[168.38px]"
        />
        <img
          src={PinkLogo}
          alt=""
          className="absolute left-[140px] top-[-20px] z-10 size-[64px] md:left-[140px] md:top-[-20px] xl:left-[140px] xl:top-[-20px] 2xl:left-[170px] 2xl:top-[-25px]"
        />
      </div>
    </div>
  );
};

export default ClickMeCard;
