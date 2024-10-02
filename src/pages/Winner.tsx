import { Link } from "react-router-dom";
import WinnerCard from "../components/WinnerCard";

const Winner = () => {
  return (
    <div className="flex flex-col items-center">
      <WinnerCard />
      <Link
        to="/"
        className="mt-[73px] w-[212px] rounded-[60px] bg-primary px-2.5 py-[22px] text-center text-sm font-semibold text-primary-foreground"
      >
        Rejouer ?
      </Link>
    </div>
  );
};

export default Winner;
