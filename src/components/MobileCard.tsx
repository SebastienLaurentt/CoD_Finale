import CoDLogo from "../assets/CoDLogo.svg";

const MobileCard = () => {
  return (
    <div className="relative mx-auto mt-[42px] flex h-[600px] w-[366px] flex-col rounded-[60px] bg-primary px-12 pt-10">
      <span className="text-xs font-medium leading-[20px] ">/ FINALE02</span>
      <p className="mt-[102px] text-justify text-[40px] font-semibold leading-[48px]">
        Oops ! Le gameplay est réservé aux joueurs PC (ehoui)...{" "}
      </p>
      <button className="mx-auto mt-[97px] w-[212px] rounded-[60px] bg-background px-2.5 py-[22px] text-sm font-semibold text-foreground">
        Go back!
      </button>
      <img
        src={CoDLogo}
        alt="Clash of Dev Logo"
        className="absolute left-[285px] top-[28px]"
      />
    </div>
  );
};

export default MobileCard;
