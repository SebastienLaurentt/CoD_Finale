import { Link } from "react-router-dom";
import LooserCard from "../components/LooserCard";

const Looser = () => {
  return (
    <div className="flex flex-col items-center">
      <LooserCard />
      <Link
        to="/"
        className="mt-[73px] w-[212px] rounded-[60px] bg-primary px-2.5 py-[22px] text-center text-sm font-semibold text-primary-foreground"
      >
        Rejouer ?
      </Link>
    </div>
  );
};

export default Looser;
