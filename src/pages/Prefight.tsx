import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ArtisteBg from "../assets/Images/ArtisteBg.webp";
import ArtisteFight from "../assets/Characters/ArtisteFight.svg";
import BossFight from "../assets/Characters/BossFight.svg";
import WalkSound from "../assets/Song/Walk.mp3";

gsap.registerPlugin(TextPlugin);

const Prefight = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch(error => {
        console.error("Erreur lors de la lecture audio:", error);
      });
    }

    const timeline = gsap.timeline({ delay: 1 });

    timeline.to("#artiste", {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut",
    });

    const jumpDistance = 50;
    const jumpHeight = 30;
    const jumpUpDuration = 0.3;
    const jumpDownDuration = 0.2;
    const numberOfJumps = 6;

    for (let i = 0; i < numberOfJumps; i++) {
      timeline
        .to("#artiste", {
          x: `+=${jumpDistance}`,
          y: `-=${jumpHeight}`,
          duration: jumpUpDuration,
          ease: "power2.out",
        })
        .to("#artiste", {
          y: `+=${jumpHeight}`,
          duration: jumpDownDuration,
          ease: "power2.in",
        });
    }

    timeline
      .to(
        ["#boss", "#bossSpeechBubble"],
        {
          opacity: 1,
          duration: 1,
          ease: "power2.inOut",
        },
        "-=0.5"
      )
      .to("#dialogueText", {
        duration: 1,
        text: ".......!",
        ease: "none",
      })
      .to(
        "#dialogueText",
        {
          duration: 0.1,
          text: "",
          ease: "none",
        },
        "+=2"
      )
      .to("#dialogueText", {
        duration: 1.5,
        text: "C'est quoi cette PR ?????",
        ease: "none",
      })
      .to({}, { duration: 2 })
      .fromTo(
        "#blackScreen",
        {
          y: "100%",
          opacity: 1,
        },
        {
          y: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            navigate("/fight");
          },
        }
      );
  }, [navigate]);

  return (
    <div className="relative h-screen" id="prefightBackground">
      <audio ref={audioRef} src={WalkSound} />
      <div
        className="absolute inset-0 bg-cover opacity-20"
        style={{ backgroundImage: `url(${ArtisteBg})` }}
      />
      <div className="relative flex h-full flex-row items-center justify-between pt-32 ">
        <div id="artiste" className="opacity-0">
          <img src={ArtisteFight} alt="Image de l'artiste en combat" />
        </div>
        <div className="relative">
          <div
            id="bossSpeechBubble"
            className="absolute left-4 top-4 flex h-[60px] w-[150px] -translate-x-1/2 items-center justify-center rounded-full bg-white p-3 opacity-0"
          >
            <p id="dialogueText" className="text-center text-sm text-black"></p>
          </div>
          <div id="boss" className="opacity-0">
            <img src={BossFight} alt="Image du boss en combat" />
          </div>
        </div>
      </div>
      <div
        id="blackScreen"
        className="absolute inset-0 z-50 bg-black opacity-0"
      ></div>
    </div>
  );
};

export default Prefight;
