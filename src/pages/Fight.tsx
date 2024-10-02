import ArtisteFight from "../assets/ArtisteFight.svg";
import BossFight from "../assets/BossFight.svg";
import FightLogo from "../assets/FightLogo.svg";
import Key from "../components/Key";
import Point from "../components/Point";

const Fight = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover opacity-20"
        style={{ backgroundImage: "url('/src/assets/ArtisteBg.png')" }}
      />
      <div className="relative z-10">
        <ul className="mx-auto flex w-[1027px] flex-row items-center justify-between pt-[136px]">
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <img src={FightLogo} alt="Fight Logo" />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
          <li>
            <Point />
          </li>
        </ul>
        <div className="mb-10 mt-20 flex flex-row justify-between px-8">
          <img src={ArtisteFight} alt="" />
          <img src={BossFight} alt="" />
        </div>
        <div className="flex flex-row gap-x-10 pl-[119px]">
          <li>
            <Key icon="up" />
          </li>
          <li>
            <Key icon="right" />
          </li>
          <li>
            <Key icon="down" />
          </li>
          <li>
            <Key icon="left" />
          </li>
          <li>
            <Key icon="left" />
          </li>
          <li>
            <Key icon="down" />
          </li>
          <li>
            <Key icon="up" />
          </li>
          <li>
            <Key icon="right" />
          </li>
          <li>
            <Key icon="left" />
          </li>
          <li>
            <Key icon="down" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Fight;
