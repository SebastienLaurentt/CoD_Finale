import ArtisteLose from "../assets/Characters/ArtisteLose.svg";
import BlueIcon from "../assets/Logos/BlueIcon.svg";
import CoDLogo from "../assets/Logos/CoDLogo.svg";
import PinkCodLogo from "../assets/Logos/PinkCodLogo.svg";
import SurBoosted from "../assets/Characters/SurBoosted.svg";
import Cursor from "./Cursor";

const LooserCard = () => {
  return (
    <div className="relative mx-auto h-[631px] w-[1023px]">
      <div className="relative flex size-full flex-col overflow-hidden rounded-[60px] bg-primary pl-[86px] pt-12 text-primary-foreground">
        <span className="text-xs font-medium uppercase leading-[12px]">
          /GRANDGAGNANT
        </span>
        <span className="mt-8 w-[765px] text-justify text-[115px] font-semibold leading-[123px]">
          You are the loser!
        </span>
        <p className="mt-8 font-medium leading-[24px] opacity-60">
          ( La honte )
        </p>
        <div className="mt-10 flex h-[120px] w-[417px] flex-col justify-between font-medium leading-[24px] opacity-60">
          <p>
            Tu ne peux pas rester sur une défaite, tu te dois de te défendre
            contre ce système pyramidal de merde
          </p>
          <span className="font-semibold"> On rejoue ?</span>
        </div>

        <div className="absolute left-[605px] top-[252px] h-[379px] w-[418px] overflow-hidden">
          <img
            src={ArtisteLose}
            alt="Image représentant le personnage artiste perdant en train de pleurer et qui est dominé par le personnage surBoosted"
            className="absolute left-0 top-0"
          />
        </div>
      </div>

      <img
        src={CoDLogo}
        alt="Clash of Dev Logo"
        className="absolute left-[913px] top-[20px] z-10"
      />
      <img
        src={PinkCodLogo}
        alt="Clash of Dev Logo version rose"
        className="absolute -left-8 -top-8 z-10"
      />
      <img
        src={SurBoosted}
        alt="Image représentant le personnage boss appelé 'SurBoosted' vainqueur et dominant le personnage artiste"
        className="absolute left-[467px] top-[231px] z-10"
      />
      <img
        src={BlueIcon}
        alt="Rond bleu avec éclair blanc"
        className="absolute left-[1023px] top-[-60px] z-10"
      />

      <Cursor
        name="maislina_"
        fontColor="text-foreground"
        bgColor="#F28164"
        borderColor="#D46F55"
        rotation={-16}
        classname="absolute left-[1000px] top-[70px] animate-cursor1"
        position="right-top"
      />
      <Cursor
        name="sometimecrea"
        fontColor="text-foreground"
        bgColor="#F588B9"
        borderColor="#D6699A"
        rotation={-16}
        classname="absolute left-[-160px] top-[-30px] animate-cursor3"
        position="right-top"
      />
      <Cursor
        name="LLCoolChris"
        fontColor="text-foreground"
        bgColor="#6B93C0"
        borderColor="#6B93C0"
        rotation={-16}
        classname="absolute left-[1015px] top-[-625px] animate-cursor2"
        position="left-top"
      />
    </div>
  );
};

export default LooserCard;
