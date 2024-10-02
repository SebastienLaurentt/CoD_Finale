import LinkButton from "../components/LinkButton";
import WinnerCard from "../components/WinnerCard";

const Winner = () => {
  return (
    <div className="flex flex-col items-center">
      <WinnerCard />
      <LinkButton to="/pick" className="mx-auto mt-[73px]">
        Rejouer ?
      </LinkButton>
    </div>
  );
};

export default Winner;
