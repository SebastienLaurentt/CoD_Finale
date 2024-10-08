import Cursor from "./Cursor";

interface CursorProps {
  name: string;
  bgColor: string;
  borderColor: string;
  fontColor: string;
  classname?: string;
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
}

interface CategoryCardPiscineProps {
  bgColor: string;
  category: string;
  pointsNumber: string;
  name: string;
  imgSrc: string;
  imgAlt: string;
  paragraphe1: JSX.Element;
  paragraphe2: JSX.Element;
  logoSrc: string;
  cursors: CursorProps[];
}

const CategoryCardPiscine = ({
  bgColor,
  category,
  pointsNumber,
  name,
  imgSrc,
  imgAlt,
  paragraphe1,
  paragraphe2,
  logoSrc,
  cursors,
}: CategoryCardPiscineProps) => {
  return (
    <div
      className={`relative h-[600px] rounded-[60px] md:h-[650px] lg:h-[820px] xl:h-[650px] 2xl:h-auto ${bgColor} flex flex-col overflow-hidden text-xs leading-[20px]`}
    >
      <div className="my-10 ml-[47px] flex h-[44px] flex-row items-center justify-between md:mx-[72px] xl:mx-[72px] 2xl:ml-[89px] 2xl:mr-[61px] 2xl:h-[44px]">
        <div className="flex flex-row">
          <div className="mr-2 flex w-[85px] flex-col items-start gap-y-1 md:w-[155px] xl:w-[155px] 2xl:mr-5 2xl:w-[155px]">
            <span className="hidden md:block xl:block 2xl:block">
              {category}
            </span>
            <span className="md:hidden xl:hidden 2xl:hidden">NOS HÉROS</span>
            <span>{pointsNumber}</span>
          </div>
          <span className="w-[179px] font-bold md:w-full xl:w-full">
            {name}
          </span>
        </div>
        <div className="absolute left-[275px] top-[112px] flex flex-col-reverse gap-y-[35px] md:static md:flex-row md:gap-x-5 md:gap-y-0 xl:static xl:flex-row xl:gap-x-5 xl:gap-y-0">
          {cursors.map((cursorProps, index) => (
            <Cursor key={index} {...cursorProps} />
          ))}
        </div>
      </div>

      <div className="mx-[47px] flex flex-col md:mx-[72px] xl:mx-[72px] 2xl:mx-[47px] 2xl:mb-10 2xl:ml-10 2xl:flex-row">
        <div className="mr-5 w-full rounded-[40px] xl:h-auto 2xl:h-[696px] 2xl:w-[987px]">
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            className="size-full  object-cover"
          />
        </div>
        <div className="mt-[20px] flex flex-col gap-y-8 text-left text-[#262625]/60 md:w-[550px] md:flex-row md:gap-x-4 lg:w-[700px] xl:w-[550px] xl:flex-row xl:gap-x-4 2xl:w-[241px] 2xl:flex-col">
          <p>{paragraphe1}</p>
          <p>{paragraphe2}</p>
        </div>
      </div>

      <img
        src={logoSrc}
        alt=""
        loading="lazy"
        className="absolute left-[212px] top-[482px] size-[180px] md:left-[590px] md:top-[520px] lg:left-[810px] lg:top-[690px] xl:left-[590px] xl:top-[520px] 2xl:left-[1048px] 2xl:top-[559px] 2xl:size-[412px]"
        style={{ transform: "rotate(0deg)" }}
      />
    </div>
  );
};

export default CategoryCardPiscine;
