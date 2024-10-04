import LinkButton from "../components/LinkButton";
import LooserCard from "../components/LooserCard";

const Looser = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <LooserCard />
      <LinkButton
        to="/pick"
        ariaLabel="Cliquer ici pour recommencer une partie"
        className="absolute bottom-[47px]"
      >
        Rejouer ?
      </LinkButton>
    </div>
  );
};

export default Looser;
