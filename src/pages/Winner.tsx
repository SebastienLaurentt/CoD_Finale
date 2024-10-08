import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import WinSound from "../assets/Song/Win.mp3";
import LinkButton from "../components/LinkButton";
import WinnerCard from "../components/WinnerCard";
import { confettiFireworks } from "../components/ui/confetti";

const Winner = () => {
  const winnerCardRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const artisteRef = useRef<HTMLImageElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.error("Erreur lors de la lecture audio:", error);
      });
    }

    confettiFireworks();

    tl.fromTo(
      winnerCardRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 2.5 },
      "+=1"
    ).fromTo(
      buttonRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      "-=0.5"
    );
  }, []);

  useEffect(() => {
    if (!artisteRef.current) return;

    const animation = gsap.to(artisteRef.current, {
      x: -10,
      y: -10,
      duration: 0.25,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      paused: true,
    });

    if (isHovering) {
      animation.play();
    } else {
      animation.pause();
      gsap.to(artisteRef.current, {
        x: 0,
        y: 0,
        duration: 0.5,
      });
    }

    return () => {
      animation.kill();
    };
  }, [isHovering]);

  const handleArtisteHover = (hovering: boolean) => {
    setIsHovering(hovering);
  };

  return (
    <div className="flex flex-col items-center justify-center 2xl:min-h-screen">
      <audio ref={audioRef} src={WinSound} />
      <div ref={winnerCardRef} className="opacity-0">
        <WinnerCard
          artisteRef={artisteRef}
          onArtisteHover={handleArtisteHover}
        />
      </div>

      <LinkButton
        ref={buttonRef}
        to="/pick"
        ariaLabel="Cliquer ici pour recommencer une partie"
        className="absolute bottom-[47px]"
      >
        Rejouer ?
      </LinkButton>
    </div>
  );
};

export default Winner;
