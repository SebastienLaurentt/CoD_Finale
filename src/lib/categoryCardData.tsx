import ArtisteImg from "../assets/artisteImg.webp";
import BatisseurImg from "../assets/batisseurImg.webp";
import GreenLogoBig from "../assets/greenLogoBig.svg";
import MaitreImg from "../assets/maitreImg.webp";
import PinkLogoBig from "../assets/pinkLogoBig.svg";
import PurpleLogo from "../assets/purpleLogo.svg";

export interface Cursor {
  name: string;
  bgColor: string;
  borderColor: string;
  fontColor: string;
  classname?: string;
}

export interface CategoryCardData {
  bgColor: string;
  category: string;
  pointsNumber: string;
  name: string;
  imgSrc: string;
  imgAlt: string;
  paragraphe1: JSX.Element;
  paragraphe2: JSX.Element;
  logoSrc: string;
  cursors: Cursor[];
}

const categoryCardData: CategoryCardData[] = [
  {
    bgColor: "bg-[#ECFFCE]",
    category: "MOTION",
    pointsNumber: "/3 pts",
    name: "LE MAITRE DE LA FLUIDITÉ",
    imgSrc: MaitreImg,
    imgAlt: "Fée qui danse dans la forêt",
    paragraphe1: (
      <>
        Aucun composant ne s’affiche sans une{" "}
        <span className="font-bold">animation soignée</span>. Ses transitions
        sont légères, dynamiques et fluides, captivant l'utilisateur à chaque
        interaction.
      </>
    ),
    paragraphe2: (
      <>
        Ce dev a l’œil et maitrise <span className="font-bold">le motion</span>{" "}
        mieux que n’importe qui.
      </>
    ),
    logoSrc: GreenLogoBig,
    cursors: [
      {
        name: "Lina",
        bgColor: "#A2B87E",
        borderColor: "#95AE6D",
        fontColor: "text-foreground",
        classname: "ml-1.5 2xl:ml-0",
      },
      {
        name: "Chris",
        bgColor: "#A2B87E",
        borderColor: "#95AE6D",
        fontColor: "text-foreground",
      },
    ],
  },
  {
    bgColor: "bg-[#EBEDFF]",
    category: "DESIGN",
    pointsNumber: "/6 pts",
    name: "L’ARTISTE DE RENOM",
    imgSrc: ArtisteImg,
    imgAlt:
      "Artiste peintre avec un béret, une moustance, des lunettes et bien habillé en train de peindre",
    paragraphe1: (
      <>
        <span className="font-bold">Le design</span>, c’est son terrain de jeu.{" "}
        <br className="md:hidden" /> Il maîtrise et retranscrit correctement
        chaque pixel de la maquette.
      </>
    ),
    paragraphe2: (
      <>
        Virtuose des couleurs il ne se trompe jamais de code HEX, de spacing ou
        de border-radius ;{" "}
        <span className="font-bold">
          Figma n’a aucun secret pour ce Dev de talent.
        </span>
      </>
    ),
    logoSrc: PurpleLogo,
    cursors: [
      {
        name: "maislina_",
        bgColor: "#9FA8FE",
        borderColor: "#8A92E3",
        fontColor: "text-foreground",
        classname: "-ml-2.5",
      },
    ],
  },
  {
    bgColor: "bg-[#FFEDF5]",
    category: "CODE",
    pointsNumber: "/6 pts",
    name: "LE BÂTISSEUR DE CODE",
    imgSrc: BatisseurImg,
    imgAlt: "Batisseur dans la forêt avec sa trousse à outils et un marteau",
    paragraphe1: (
      <>
        <span className="whitespace-nowrap 2xl:whitespace-normal">
          Ses lignes de code sont des fondations solides.
        </span>{" "}
        C’est <span className="font-bold">un maître du front</span>, capable de
        structurer les systèmes les plus complexes sans se casser la tête.
      </>
    ),
    paragraphe2: (
      <>
        <span className="font-bold">Maitre de VSCode</span>, il a surement fini
        le challenge en s’assurant d’avoir le code le plus clair et le plus
        propre des 36 participants.
      </>
    ),
    logoSrc: PinkLogoBig,
    cursors: [
      {
        name: "Chris",
        bgColor: "#F588B9",
        borderColor: "#D6699A",
        fontColor: "text-foreground",
      },
    ],
  },
];

export default categoryCardData;
