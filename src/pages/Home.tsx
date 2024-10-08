import LandingDeskCard from "../components/LandingDeskCard";
import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center 2xl:min-h-screen">
      <LandingDeskCard />
      <LinkButton
        to="/pick"
        ariaLabel="Cliquer pour commencer la partie"
        className="absolute bottom-[47px]"
      >
        Start the Game
      </LinkButton>
    </div>
  );
};

export default Home;
