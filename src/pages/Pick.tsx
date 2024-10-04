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
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ChampionPick
        selectedCardIndex={selectedCardIndex}
        onCardSelect={handleCardSelect}
      />
      <LinkButton
        to="/fight"
        ariaLabel="Cliquer ici pour commencer la partie après avoir sélectionné un champion"
        className="absolute bottom-[47px]"
        disabled={selectedCardIndex === null}
      >
        Select Champion
      </LinkButton>
    </div>
  );
};

export default Pick;
