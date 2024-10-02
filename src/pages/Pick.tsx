import { useState } from "react";
import { Link } from "react-router-dom";
import ChampionPick from "../components/ChampionPick";

const Pick = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  return (
    <div className="flex flex-col items-center">
      <ChampionPick
        selectedCardIndex={selectedCardIndex}
        onCardSelect={handleCardSelect}
      />
      <Link
        to="/fight"
        className={`mt-[73px] w-[212px] cursor-pointer  rounded-[60px] bg-primary px-2.5 py-[22px] text-center text-sm font-semibold text-primary-foreground ${
          selectedCardIndex !== null
            ? ""
            : "pointer-events-none cursor-not-allowed opacity-60 "
        }`}
      >
        Select Champion
      </Link>
    </div>
  );
};

export default Pick;
