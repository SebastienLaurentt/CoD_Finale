import LinkButton from "../components/LinkButton";
import LooserCard from "../components/LooserCard";

const Looser = () => {
  return (
    <div className="flex flex-col items-center justify-center 2xl:min-h-screen">
      <LooserCard />
      <LinkButton
        to="/pick"
        ariaLabel="Cliquer ici pour recommencer une partie"
        className="absolute bottom-[47px] z-20"
      >
        Rejouer ?
      </LinkButton>
    </div>
  );
};

export default Looser;
