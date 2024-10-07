import React from "react";
import BlueIcon from "../assets/BlueIcon.svg";
import GreenIcon from "../assets/GreenIcon.svg";
import PinkCodLogo from "../assets/PinkCodLogo.svg";
import categoryCardData from "../lib/categoryCardData";
import CategoryCard from "./CategoryCard";
import Cursor from "./Cursor";

interface ChampionPickProps {
  selectedCardIndex: number | null;
  onCardSelect: (index: number) => void;
}

const ChampionPick: React.FC<ChampionPickProps> = ({ selectedCardIndex, onCardSelect }) => {
  return (
    <div className="relative  h-[600px] w-[1130.26px]">
      <div className="flex flex-row gap-x-[16.13px]">
        {categoryCardData.map((cardData, index) => (
          <CategoryCard
            key={index}
            {...cardData}
            isSelected={index === selectedCardIndex}
            onSelect={() => onCardSelect(index)}
          />
        ))}
      </div>
      <img
        src={BlueIcon}
        alt="Rond bleu avec éclair blanc"
        className="absolute left-[1100px] top-[-80px]"
      />
      <img
        src={GreenIcon}
        alt="Rond vert avec étoile blanche dedans"
        className="absolute bottom-[-50px] left-[-50px]"
      />
      <img
        src={PinkCodLogo}
        alt="Clash of Dev Logo version rose"
        className="absolute -left-8 -top-24"
      />

      <Cursor
        name="maislina_"
        fontColor="text-foreground"
        bgColor="#F28164"
        borderColor="#D46F55"
        rotation={-16}
        classname="absolute left-[1100px] top-[100px] animate-cursor1"
        position="right-top"
      />
      <Cursor
        name="sometimecrea"
        fontColor="text-foreground"
        bgColor="#F588B9"
        borderColor="#D6699A"
        rotation={-16}
        classname="absolute left-[110px] top-[40px] animate-cursor3"
        position="right-top"
      />
      <Cursor
        name="LLCoolChris"
        fontColor="text-foreground"
        bgColor="#6B93C0"
        borderColor="#6B93C0"
        rotation={-2}
        classname="absolute left-[720px] top-[-720px] animate-cursor2"
        position="left-bottom"
      />


    </div>
  );
};

export default ChampionPick;
