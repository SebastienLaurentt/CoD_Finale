import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import ArtisteFight from "../assets/ArtisteFight.svg";
import ArtisteFightHurt from "../assets/ArtisteFightHurt.svg";
import BossFight from "../assets/BossFight.svg";
import BossFightHurt from "../assets/BossFightHurt.svg";
import FightLogo from "../assets/FightLogo.svg";
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
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [greenPoints, setGreenPoints] = useState(0);
  const [redPoints, setRedPoints] = useState(0);
  const [keyResults, setKeyResults] = useState<
    ("success" | "failure" | "pending")[]
  >(Array(randomKeys.length).fill("pending"));
  const [isArtisteHurt, setIsArtisteHurt] = useState(false);
  const [isBossHurt, setIsBossHurt] = useState(false);

  // 2) Key Press Handler and FeedBack
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {

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

      // 2C) Update the key results
      setKeyResults((prev) => {
        const newResults = [...prev];
        newResults[currentKeyIndex] = isCorrect ? "success" : "failure";
        return newResults;
      });

      // 2D) Update the points and FeedBack
      if (isCorrect) {
        setGreenPoints((prev) => {
          const newPoints = prev + 1;
          if (newPoints === 5) {
            setTimeout(() => navigate("/winner"), 500);
          }
          return newPoints;
        });
        animateHurt(setIsBossHurt);
      } else {
        setRedPoints((prev) => {
          const newPoints = prev + 1;
          if (newPoints === 5) {
            setTimeout(() => navigate("/loser"), 500);
          }
          return newPoints;
        });
        animateHurt(setIsArtisteHurt);
      }

      setCurrentKeyIndex((prev) => prev + 1);
    },
    [currentKeyIndex, navigate]
  );

  // 2A) Key Press Listener
  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover opacity-20"
        style={{ backgroundImage: "url('/src/assets/ArtisteBg.png')" }}
      />
      <div className="relative z-10">
        <ul className="mx-auto flex w-[1027px] flex-row items-center justify-between pt-[136px]">
          {[...Array(5)].map((_, index) => (
            <li key={`green-${index}`}>
              <Point color={index < greenPoints ? "green" : "gray"} />
            </li>
          ))}
          <li>
            <img src={FightLogo} alt="Fight Logo" />
          </li>
          {[...Array(5)].map((_, index) => (
            <li key={`red-${index}`}>
              <Point color={index < redPoints ? "red" : "gray"} />
            </li>
          ))}
        </ul>
        <div className="mb-10 mt-20 flex flex-row justify-between px-8">
          <img
            src={isArtisteHurt ? ArtisteFightHurt : ArtisteFight}
            alt={
              isArtisteHurt
                ? "Image de l'artiste blessé en combat"
                : "Image de l'artiste en combat"
            }
          />
          <img
            src={isBossHurt ? BossFightHurt : BossFight}
            alt={
              isBossHurt
                ? "Image du boss blessé en combat"
                : "Image du boss en combat"
            }
          />
        </div>
        <div className="flex w-full flex-row justify-center gap-x-10">
          {randomKeys.map((direction, index) => (
            <li key={index} className="list-none">
              {/* Hide futures keys & show past keys resultats with BgColor */}
              <Key
                icon={index <= currentKeyIndex ? direction : "hidden"}
                result={keyResults[index]}
              />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fight;
