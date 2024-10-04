import LandingDeskCard from "../components/LandingDeskCard";
import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <LandingDeskCard />
      <LinkButton to="/pick" ariaLabel="Cliquer pour commencer la partie" className="mt-[73px]" >
        Start the Game
      </LinkButton>
    </div>
  );
};

export default Home;
