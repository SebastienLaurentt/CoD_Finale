import CoDLogo from "../assets/Logos/CoDLogo.svg";
import LinkButton from "./LinkButton";

const MobileCard = () => {
  return (
    <div className="relative mx-auto mt-[42px] flex h-[600px] w-full flex-col rounded-[60px] bg-primary px-12 pt-10">
      <span className="text-xs font-medium leading-[20px] ">/ FINALE02</span>
      <p className="mt-[102px] text-justify text-[40px] font-semibold leading-[48px]">
        Oops ! Le gameplay est réservé aux joueurs PC (ehoui)...{" "}
      </p>
      <LinkButton to="/" className="mx-auto mt-[97px]" ariaLabel="Cliquer ici pour commencer la partie" variant="secondary">
        Go back!
      </LinkButton>
      <img
        src={CoDLogo}
        alt="Clash of Dev Logo"
        className="absolute right-3 top-[28px] "
      />
    </div>
  );
};

export default MobileCard;
