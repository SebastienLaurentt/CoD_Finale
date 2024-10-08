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
    const timeline = gsap.timeline();

    timeline
      .set("#championCards", { autoAlpha: 0, scale: 0.8 })
      .set("#championButton", { autoAlpha: 0 })
      .to("#championCards", { autoAlpha: 1, scale: 1, duration: 1, delay: 0.5 })
      .to("#championButton", { autoAlpha: 1, duration: 0.5 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center 2xl:min-h-screen">
      <ChampionPick
        id="championCards"
        selectedCardIndex={selectedCardIndex}
        onCardSelect={handleCardSelect}
      />
      <div id="championButton" className="flex flex-col items-center">
        <LinkButton
          to="/fight"
          ariaLabel="Cliquer ici pour commencer la partie après avoir sélectionné un champion"
          className="absolute xl:mt-1 2xl:bottom-[47px]"
          disabled={selectedCardIndex === null}
          variant="tertiary"
        >
          Select Champion
        </LinkButton>
      </div>
    </div>
  );
};

export default Pick;
