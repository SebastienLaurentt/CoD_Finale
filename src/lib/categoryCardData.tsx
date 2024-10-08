import ArtisteImg from "../assets/Images/artisteImg.webp";
import BatisseurImg from "../assets/Images/batisseurImg.webp";
import BlueLogoBig from "../assets/Logos/blueLogoBig.svg";
import BossImg from "../assets/Images/bossImg.webp";
import ChercheurImg from "../assets/Images/chercheurImg.webp";
import GreenLogoBig from "../assets/Logos/greenLogoBig.svg";
import MaitreImg from "../assets/Images/maitreImg.webp";
import PinkLogoBig from "../assets/Logos/pinkLogoBig.svg";
import PurpleLogo from "../assets/Logos/purpleLogo.svg";
import RedLogo from "../assets/Logos/redLogo.svg";
import SecretImg from "../assets/Images/secretImg.webp";
import YellowLogo from "../assets/Logos/yellowLogo.svg";

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
    bgColor: "bg-[#EBEDFF]",
    category: "DESIGN",
    pointsNumber: "/6 pts",
    name: "L’ARTISTE DE RENOM",
    imgSrc: ArtisteImg,
    imgAlt: "Artiste peintre avec un béret, une moustance, des lunettes et bien habillé en train de peindre",
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
        fontColor: "text-primary-foreground",
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
        fontColor: "text-primary-foreground",
      },
    ],
  },
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
        fontColor: "text-primary-foreground",
        classname: "ml-1.5 2xl:ml-0",
      },
      {
        name: "Chris",
        bgColor: "#A2B87E",
        borderColor: "#95AE6D",
        fontColor: "text-primary-foreground",
      },
    ],
  },
  {
    bgColor: "bg-[#BADAFF]",
    category: "RESPONSIVE",
    pointsNumber: "/2 pts",
    name: "LE CHERCHEUR DE BREAKPOINT",
    imgSrc: ChercheurImg,
    imgAlt: "Magicienne avec son chapeau, son sac et sa loupe",
    paragraphe1: (
      <>
        Quelle que soit la taille de l’écran, il garantit une expérience
        utilisateur sans faille. Chaque site{" "}
        <span className="font-bold">s’adapte à tous les supports</span>, du
        mobile au grand écran.
      </>
    ),
    paragraphe2: (
      <>
        Il fait attention à <span className="font-bold">chaque breakpoint</span>{" "}
        attentivement, on ne pourra pas le reprendre à l’inspection!
      </>
    ),
    logoSrc: BlueLogoBig,
    cursors: [
      {
        name: "Lina",
        bgColor: "#6B93C0",
        borderColor: "#6B93C0",
        fontColor: "text-[#BADAFF]",
        classname: "ml-1.5 2xl:ml-0",
      },
      {
        name: "Chris",
        bgColor: "#6B93C0",
        borderColor: "#6B93C0",
        fontColor: "text-[#BADAFF]",
      },
    ],
  },
  {
    bgColor: "bg-[#FFFAC2]",
    category: "EASTER EGG",
    pointsNumber: "/3 pts",
    name: "LE MAITRE DES SECRETS",
    imgSrc: SecretImg,
    imgAlt: "Magicienne avec son chapeau, sa baguette magique et son livre magique",
    paragraphe1: (
      <>
        Derrière une ligne de code bien choisie se cache un{" "}
        <span className="font-bold">secret bien gardé.</span> Il glisse la
        surprise qui surprendra les utilisateurs les plus curieux.
      </>
    ),
    paragraphe2: (
      <>
        Dev attentif aux comportements utilisateurs il saura cacher{" "}
        <span className="font-bold">l’Easter Egg</span> au meilleur endroit.
      </>
    ),
    logoSrc: YellowLogo,
    cursors: [
      {
        name: "Lina",
        bgColor: "#CAC48E",
        borderColor: "#C2BB82",
        fontColor: "text-[#FFFAC2]",
        classname: "ml-1.5 2xl:ml-0",
      },
      {
        name: "Chris",
        bgColor: "#CAC48E",
        borderColor: "#C2BB82",
        fontColor: "text-[#FFFAC2]",
      },
    ],
  },
  {
    bgColor: "bg-[#FFBCAB]",
    category: "BIG BOSS",
    pointsNumber: "/ Infinite pts",
    name: "LE SUR-BOOSTED",
    imgSrc: BossImg,
    imgAlt: "Chevalier avec son épée et son bouclier et sa couronne",
    paragraphe1: (
      <>
        Il excelle dans tous les domaines, alliant design, propreté de code,
        réactivité, animations fluides et créativité cachée.{" "}
        <span className="font-bold">Un vrai prodige</span> qui a su briller dans
        chaque aspect du développement.
      </>
    ),
    paragraphe2: (
      <>
        <span className="md:whitespace-nowrap 2xl:whitespace-normal">Ce dev aux <span className="font-bold">multitalents</span></span> a reçu la
        standing ovation du jury.
      </>
    ),
    logoSrc: RedLogo,
    cursors: [
      {
        name: "Lina",
        bgColor: "#F28164",
        borderColor: "#D46F55",
        fontColor: "text-primary-foreground",
        classname: "ml-1.5 2xl:ml-0",
      },
      {
        name: "Chris",
        bgColor: "#F28164",
        borderColor: "#D46F55",
        fontColor: "text-primary-foreground",
      },
    ],
  },
];

export default categoryCardData;
