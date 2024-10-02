import LinkButton from "../components/LinkButton";
import LooserCard from "../components/LooserCard";

const Looser = () => {
  return (
    <div className="flex flex-col items-center">
      <LooserCard />
      <LinkButton to="/pick" className="mx-auto mt-[73px]">
        Rejouer ?
      </LinkButton>
    </div>
  );
};

export default Looser;
