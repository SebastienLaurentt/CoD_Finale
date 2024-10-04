import React, { RefObject } from 'react';
import ArtisteWinner from "../assets/ArtisteWinner.svg";
import BlueIcon from "../assets/BlueIcon.svg";
import CoDLogo from "../assets/CoDLogo.svg";
import PinkCodLogo from "../assets/PinkCodLogo.svg";
import SurBoostedLoser from "../assets/SurBoostedLoser.svg";
import Cursor from "./Cursor";

interface WinnerCardProps {
  artisteRef: RefObject<HTMLImageElement>;
  onArtisteHover: (isHovering: boolean) => void;
}

const WinnerCard: React.FC<WinnerCardProps> = ({ artisteRef, onArtisteHover }) => {
  return (
    <div className="relative mx-auto  h-[631px] w-[1023px]">
      <div className="relative flex size-full flex-col overflow-hidden rounded-[60px] bg-primary pl-[86px] pt-12 text-primary-foreground">
        <span className="text-xs font-medium uppercase leading-[12px]">
          /GRANDGAGNANT
        </span>
        <span className="mt-8 w-[765px] text-justify text-[115px] font-semibold leading-[123px]">
          You are the winner!
        </span>
        <p className="mt-8 font-medium leading-[24px] opacity-60">
          Oh wow ! <span className="font-semibold"> Quel BOSS!</span>
        </p>
        <div className="mt-10 flex h-[120px] w-[417px] flex-col justify-between font-medium leading-[24px] opacity-60">
          <p>Bravo tu as remis ton lead un peu trop confiant à sa place !</p>
          <span className="font-semibold"> On rejoue ?</span>
        </div>

        <div className="absolute left-[605px] top-[252px] h-[379px] w-[418px] overflow-hidden">
          <img
            src={SurBoostedLoser}
            alt="Image représentant le personnage surBoosted qui a perdu en train de pleurer et qui est dominé par le personnage artiste"
            className="absolute left-0 top-0"
          />
        </div>
      </div>

      <img
        src={CoDLogo}
        alt="Clash of Dev Logo"
        className="absolute left-[913px] top-[20px] "
      />
      <img
        src={PinkCodLogo}
        alt="Clash of Dev Logo version rose"
        className="absolute -left-8 -top-8 "
      />
      <img
        ref={artisteRef}
        src={ArtisteWinner}
        alt="Image représentant le personnage artiste en vainqueur dessus le personnage boss appelé 'SurBoosted'"
        className="absolute left-[420px] top-[180px] cursor-pointer"
        onMouseEnter={() => onArtisteHover(true)}
        onMouseLeave={() => onArtisteHover(false)}
      />
      <img
        src={BlueIcon}
        alt="Rond bleu avec éclair blanc"
        className="absolute left-[1023px] top-[-60px] "
      />

      <Cursor
        name="maislina_"
        fontColor="text-foreground"
        bgColor="#F28164"
        borderColor="#D46F55"
        rotation={-16}
        classname="absolute left-[1000px] top-[80px]"
        position="right-top"
      />
      <Cursor
        name="sometimecrea"
        fontColor="text-foreground"
        bgColor="#F588B9"
        borderColor="#D6699A"
        rotation={-16}
        classname="absolute left-[-160px] top-[-30px]"
        position="right-top"
      />
      <Cursor
        name="LLCoolChris"
        fontColor="text-foreground"
        bgColor="#6B93C0"
        borderColor="#6B93C0"
        rotation={-16}
        classname="absolute left-[1015px] top-[-625px]"
        position="left-top"
      />
    </div>
  );
};

export default WinnerCard;
