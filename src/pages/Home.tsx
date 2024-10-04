import LandingDeskCard from "../components/LandingDeskCard";
import LinkButton from "../components/LinkButton";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
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
