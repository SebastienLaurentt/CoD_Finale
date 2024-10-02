import { useState } from "react";
import ChampionPick from "../components/ChampionPick";
import LinkButton from "../components/LinkButton";

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
      <LinkButton
        to="/fight"
        className="mt-[73px]"
        disabled={selectedCardIndex === null}
      >
        Select Champion
      </LinkButton>
    </div>
  );
};

export default Pick;
