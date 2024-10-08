import gsap from "gsap";
import { useEffect, useState } from "react";
import ChampionPick from "../components/ChampionPick";
import LinkButton from "../components/LinkButton";

const Pick = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState<number | null>(
    null
  );

  const handleCardSelect = (index: number) => {
    setSelectedCardIndex(index === selectedCardIndex ? null : index);
  };

  useEffect(() => {
    gsap.fromTo(
      "#championCards",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 1 }
    );
    gsap.fromTo(
      "#championButton",
      { opacity: 0, },
      { opacity: 1, duration: 0.5, delay: 1 }
    );
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <ChampionPick
        id="championCards"
        selectedCardIndex={selectedCardIndex}
        onCardSelect={handleCardSelect}
      />
      <div id="championButton" className="flex flex-col items-center opacity-0">
        <LinkButton
          to="/fight"
          ariaLabel="Cliquer ici pour commencer la partie après avoir sélectionné un champion"
          className="absolute bottom-[47px]"
          disabled={selectedCardIndex === null}
        >
          Select Champion
        </LinkButton>
      </div>
    </div>
  );
};

export default Pick;
