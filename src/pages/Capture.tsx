import gsap from "gsap";
import { useEffect } from "react";
import ArtisteFight from "../assets/Characters/ArtisteFight.svg";
import ArtisteBg from "../assets/Images/ArtisteBg.webp";
import Pokeball from "../assets/Images/pokeball.svg";
import LinkButton from "../components/LinkButton";

const Capture = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(["#topScreen", "#bottomScreen"], {
      duration: 2,
      opacity: 1,
    })
      .to("#topScreen", {
        yPercent: -100,
        duration: 0.5,
      })
      .to(
        "#bottomScreen",
        {
          yPercent: 100,
          duration: 0.5,
        },
        "<"
      )
      .to("#message", {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      })
      .to("#replayButton", {
        opacity: 1,
        duration: 0.5,
        delay: 1,
      });

    const tlPokeball = gsap.timeline({ repeat: -1, yoyo: true });
    tlPokeball
      .to("#pokeball", {
        rotation: -15,
        x: -5,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to("#pokeball", {
        rotation: 15,
        x: 5,
        duration: 0.5,
        ease: "power1.inOut",
      })
      .to("#pokeball", {
        rotation: 0,
        x: 0,
        duration: 0.3,
        ease: "power1.in",
      });
  }, []);

  return (
    <div className="relative h-screen" id="prefightBackground">
      <div
        className="absolute inset-0 bg-cover opacity-20"
        style={{ backgroundImage: `url(${ArtisteBg})` }}
      />
      <div
        id="artiste"
        className="flex h-full flex-row items-center justify-between pt-32 "
      >
        <div className="relative ml-40">
          <img src={ArtisteFight} alt="Image de l'artiste en combat" />
          <img
            id="pokeball"
            src={Pokeball}
            alt="Image de la pokeball"
            className="absolute bottom-4 right-12 size-12"
          />
        </div>
      </div>
      <div
        id="message"
        className="absolute left-1/2 top-1/2 z-[60] -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-4 text-center opacity-0"
      >
        <div className="flex w-[400px] flex-col text-left text-2xl font-medium text-black">
          <span>
            <span className="font-bold">LEAD DEV</span> was caught ! New{" "}
            <span className="font-bold">POKEDEX</span> data will be added for{" "}
            <span className="font-bold">LEAD DEV</span> !
          </span>
        </div>
      </div>
      <div
        id="topScreen"
        className="absolute left-0 top-0 z-50 h-1/2 w-full bg-black"
      ></div>
      <div
        id="bottomScreen"
        className="absolute bottom-0 left-0 z-50 h-1/2 w-full bg-black"
      ></div>
      <div className="flex flex-row justify-center">
        <LinkButton
          id="replayButton"
          to="/pick"
          ariaLabel="Cliquer ici pour recommencer une partie"
          className="absolute bottom-[47px] opacity-0"
        >
          Rejouer ?
        </LinkButton>
      </div>
    </div>
  );
};

export default Capture;
