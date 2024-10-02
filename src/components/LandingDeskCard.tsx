import BlueIcon from "../assets/BlueIcon.svg";
import CoDLogo from "../assets/CoDLogo.svg";
import GreenIcon from "../assets/GreenIcon.svg";
import KeyRight from "../assets/KeyRight.svg";
import KeyUp from "../assets/KeyUp.svg";
import PinkCodLogo from "../assets/PinkCodLogo.svg";
import SurBoosted from "../assets/SurBoosted.svg";
import Cursor from "./Cursor";

const LandingDeskCard = () => {
  return (
    <div className="relative mx-auto mt-[42px] flex h-[631px] w-[1023px] flex-col rounded-[60px] bg-primary pl-[86px] pt-12 text-primary-foreground">
      <span className="text-xs font-medium uppercase leading-[12px]">
        / règlesdujeu
      </span>
      <span className="mt-8 w-[765px] text-justify text-[115px] font-semibold leading-[123px]">
        Règles du Clash
      </span>
      <p className="mt-8 font-medium leading-[24px] opacity-60">
        Que serait Clash of Dev sans un{" "}
        <span className="font-bold">réel Clash</span> ? Une réelle bataille ?{" "}
      </p>
      <div className="mt-10 flex h-[120px] w-[417px] flex-col justify-between font-medium leading-[24px] opacity-60">
        <p>
          {" "}
          Exécute la{" "}
          <span className="font-semibold">
            bonne combinaison des 10 touches à{" "}
          </span>{" "}
          temps pour vaincre{" "}
          <span className="font-semibold"> LE SUR-BOOSTED</span>, aka ton lead
          tech un peu chiant.
        </p>
        <span className="font-semibold"> Montre nous tes skills !</span>
      </div>
      <img
        src={CoDLogo}
        alt="Clash of Dev Logo"
        className="absolute left-[913px] top-[20px]"
      />
      <img
        src={PinkCodLogo}
        alt="Clash of Dev Logo version rose"
        className="absolute -left-8 -top-8"
      />
      <img
        src={KeyUp}
        alt="Image représentant la touche directionnelle haute du clavier"
        className="absolute left-[465px] top-[156.38px] z-10"
      />
      <img
        src={KeyRight}
        alt="Image représentant la touche directionnelle droite du clavier"
        className="absolute left-[546.75px] top-[102.38px] z-20"
      />
      <img
        src={SurBoosted}
        alt="Image représentant le personnage boss appelé 'SurBoosted'"
        className="absolute left-[607px] top-[229px]"
      />
      <img
        src={BlueIcon}
        alt="Rond bleu avec éclair blanc"
        className="absolute left-[1023px] top-[-60px]"
      />
      <img
        src={GreenIcon}
        alt="Rond vert avec étoile blanche dedans"
        className="absolute left-[416px] top-[246px]"
      />
      <Cursor
        name="maislina_"
        fontColor="text-foreground"
        bgColor="#F28164"
        borderColor="#D46F55"
        rotation={-16}
        classname="absolute left-[900px] top-[150px]"
        position="right-top"
      />
      <Cursor
        name="sometimecrea"
        fontColor="text-foreground"
        bgColor="#F588B9"
        borderColor="#D6699A"
        rotation={-16}
        classname="absolute left-[-250px] top-[50px]"
        position="right-top"
      />
      <Cursor
        name="LLCoolChris"
        fontColor="text-foreground"
        bgColor="#6B93C0"
        borderColor="#6B93C0"
        rotation={-16}
        classname="absolute left-[930px] top-[-530px]"
        position="left-top"
      />
    </div>
  );
};

export default LandingDeskCard;
