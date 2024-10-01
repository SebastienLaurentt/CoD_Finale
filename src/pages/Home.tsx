import { Link } from "react-router-dom";
import LandingDeskCard from "../components/LandingDeskCard";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <LandingDeskCard />
      <Link
        to="/pick"
        className="mt-[73px] w-[212px] rounded-[60px] bg-primary px-2.5 py-[22px] text-center text-sm font-semibold text-primary-foreground"
      >
        Start the Game
      </Link>
    </div>
  );
};

export default Home;
