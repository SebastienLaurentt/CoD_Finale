import gsap from "gsap";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ArtisteBg from "../assets/Images/ArtisteBg.webp";
import ArtisteFight from "../assets/Characters/ArtisteFight.svg";
import ArtisteFightHurt from "../assets/Characters/ArtisteFightHurt.svg";
import BossFight from "../assets/Characters/BossFight.svg";
import BossFightHurt from "../assets/Characters/BossFightHurt.svg";
import FightLogo from "../assets/Logos/FightLogo.svg";
import MalusImage from "../assets/Logos/Malus.svg";
import Key from "../components/Key";
import Point from "../components/Point";
import { animateHurt } from "../lib/animateHurt";

// 1) Define the directions and generate random keys
const directions: ("left" | "up" | "down" | "right")[] = [
  "left",
  "up",
  "down",
  "right",
];

const randomKeys = Array(10)
  .fill(null)
  .map(() => directions[Math.floor(Math.random() * directions.length)]);

const Fight = () => {
  const navigate = useNavigate();

  const [gameStarted, setGameStarted] = useState(false);

  const [greenPoints, setGreenPoints] = useState(0);
  const [redPoints, setRedPoints] = useState(0);

  const [isArtisteHurt, setIsArtisteHurt] = useState(false);
  const [isBossHurt, setIsBossHurt] = useState(false);
  const [artisteMalus, setArtisteMalus] = useState({ show: false, key: 0 });
  const [bossMalus, setBossMalus] = useState({ show: false, key: 0 });

  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [keyResults, setKeyResults] = useState<
    ("success" | "failure" | "pending" | "timeout")[]
  >(Array(randomKeys.length).fill("pending"));

  const [timer, setTimer] = useState<number | null>(null);

  const updatePointsAndFeedback = useCallback(
    (isCorrect: boolean, index: number, isTimeout: boolean = false) => {
      // Update the key results
      setKeyResults((prev) => {
        const newResults = [...prev];
        newResults[index] = isCorrect
          ? "success"
          : isTimeout
          ? "timeout"
          : "failure";
        return newResults;
      });

      if (isCorrect) {
        setGreenPoints((prev) => {
          const newPoints = prev + 1;
          if (newPoints === 6) {
            setTimeout(() => navigate("/winner"));
          }
          return newPoints;
        });
        animateHurt(setIsBossHurt);
        setBossMalus({ show: true, key: Date.now() });
        setTimeout(() => setBossMalus({ show: false, key: Date.now() }), 1000);
      } else {
        setRedPoints((prev) => {
          const newPoints = prev + 1;
          if (newPoints === 5) {
            setTimeout(() => navigate("/loser"), 500);
          }
          return newPoints;
        });
        animateHurt(setIsArtisteHurt);
        setArtisteMalus({ show: true, key: Date.now() });
        setTimeout(
          () => setArtisteMalus({ show: false, key: Date.now() }),
          1000
        );
      }
    },
    [navigate]
  );

  const startTimer = useCallback(() => {
    const newTimer = setTimeout(() => {
      // Handle timeout (treat as wrong key press, but with timeout style)
      updatePointsAndFeedback(false, currentKeyIndex, true);
      setCurrentKeyIndex((prev) => prev + 1);
      startTimer(); // Start a new timer for the next key
    }, 2000);
    setTimer(newTimer);
  }, [currentKeyIndex, updatePointsAndFeedback]);

  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (!gameStarted) {
        if (event.key === "Enter") {
          setGameStarted(true);
          startTimer(); // Start the timer when the game starts
        }
        return;
      }

      // Clear the existing timer
      if (timer) {
        clearTimeout(timer);
      }

      const currentKey = randomKeys[currentKeyIndex];
      let isCorrect = false;

      //  2B) Match the key pressed with the current key
      switch (event.key) {
        case "ArrowLeft":
          isCorrect = currentKey === "left";
          break;
        case "ArrowUp":
          isCorrect = currentKey === "up";
          break;
        case "ArrowDown":
          isCorrect = currentKey === "down";
          break;
        case "ArrowRight":
          isCorrect = currentKey === "right";
          break;
        default:
          return;
      }

      // Update points and feedback
      updatePointsAndFeedback(isCorrect, currentKeyIndex);

      setCurrentKeyIndex((prev) => prev + 1);
      startTimer(); // Start a new timer for the next key
    },
    [
      currentKeyIndex,
      gameStarted,
      timer,
      randomKeys,
      updatePointsAndFeedback,
      startTimer,
    ]
  );

  // 2A) Key Press Listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [handleKeyPress, timer]);

  // Start the timer when the game starts
  useEffect(() => {
    if (gameStarted) {
      startTimer();
    }
  }, [gameStarted, startTimer]);

  useEffect(() => {
    const timeline = gsap.timeline();

    timeline
      // Commencer avec un écran noir visible
      .set("#black-screen", { y: "0%", autoAlpha: 1 })
      .set("#fight-container", { autoAlpha: 1 })
      .set("#background", { autoAlpha: 0.2 })
      .set("#characters", { autoAlpha: 1 })
      .set("#scores", { autoAlpha: 0 })
      .set("#keys", { autoAlpha: 0 })
      .set("#press-enter", { autoAlpha: 0 })

      .to("#black-screen", { duration: 0.5 })

      // Faire disparaître l'écran noir vers le bas
      .to("#black-screen", {
        y: "100%",
        duration: 1,
        ease: "power2.inOut",
      })

      // Faire apparaître les scores
      .to("#scores", { autoAlpha: 1, duration: 0.5 })

      // Faire apparaître les touches
      .to("#keys", { autoAlpha: 1, duration: 0.5 })

      // Faire apparaître le "Press Enter"
      .to("#press-enter", { autoAlpha: 1, duration: 0.5 });
  }, []);

  return (
    <div id="fight-container" className="relative h-screen">
      <div
        id="background"
        className="absolute inset-0 bg-cover opacity-20"
        style={{ backgroundImage: `url(${ArtisteBg})` }}
      />
      <div className="relative z-10 flex h-full flex-col justify-around pb-10 pt-28">
        {/* Points */}
        <ul
          id="scores"
          className="mx-auto flex w-[1027px] flex-row items-center justify-between"
        >
          {[...Array(5)].map((_, index) => (
            <li key={`green-${index}`}>
              <Point color={index < greenPoints ? "green" : "gray"} />
            </li>
          ))}
          <li>
            <img
              src={FightLogo}
              alt="Fight Logo représentant deux épées qui se croisent"
            />
          </li>
          {[...Array(5)].map((_, index) => (
            <li key={`red-${index}`}>
              <Point color={index < redPoints ? "red" : "gray"} />
            </li>
          ))}
        </ul>

        {/* Images */}
        <div
          id="characters"
          className="relative flex flex-row justify-between px-8 2xl:mb-10 2xl:mt-20"
        >
          <div className="relative">
            <img
              src={isArtisteHurt ? ArtisteFightHurt : ArtisteFight}
              alt={
                isArtisteHurt
                  ? "Image de l'artiste blessé en combat"
                  : "Image de l'artiste en combat"
              }
            />
            {artisteMalus.show && (
              <img
                key={artisteMalus.key}
                src={MalusImage}
                alt="Malus qui apparait sur l'artiste si l'utilisateur se trompe de touche"
                className="animate-malus absolute right-0 top-0"
              />
            )}
          </div>
          <div className="relative">
            <img
              src={isBossHurt ? BossFightHurt : BossFight}
              alt={
                isBossHurt
                  ? "Image du boss blessé en combat"
                  : "Image du boss en combat"
              }
            />
            {bossMalus.show && (
              <img
                key={bossMalus.key}
                src={MalusImage}
                alt="Malus qui apparait sur le boss si l'utilisateur appuie sur la bonne touche"
                className="animate-malus absolute left-0 top-0"
              />
            )}
          </div>
        </div>

        {/* Keys */}
        <div id="keys" className="flex w-full flex-row justify-center gap-x-10">
          {randomKeys.map((direction, index) => (
            <li key={index} className="list-none">
              {/* Hide futures keys & show past keys resultats with BgColor */}
              <Key
                icon={
                  gameStarted && index <= currentKeyIndex ? direction : "hidden"
                }
                result={keyResults[index]}
              />
            </li>
          ))}
        </div>
      </div>

      {!gameStarted && (
        <div
          id="press-enter"
          className="animate-arcade-blink absolute inset-0 z-30 flex items-center justify-center bg-black/70 text-3xl font-bold uppercase text-foreground"
        >
          Press Enter
        </div>
      )}

      {/* Écran noir pour la transition */}
      <div id="black-screen" className="absolute inset-0 z-50 bg-black"></div>
    </div>
  );
};

export default Fight;
