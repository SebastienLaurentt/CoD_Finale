import React from "react";
import Cursor from "./Cursor";

interface CursorProps {
  name: string;
  bgColor: string;
  borderColor: string;
  fontColor: string;
  classname?: string;
}

interface CategoryCardProps {
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
  isMobile?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
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
  isMobile = false,
  isSelected,
  onSelect,
}) => {
  const mainClasses = `
    relative h-[600px] cursor-pointer rounded-[60px] ${bgColor} flex flex-col overflow-hidden text-xs leading-[20px]
    ${isMobile ? '' : 'md:h-[650px] lg:h-[820px] xl:h-[650px] 2xl:h-auto'}
    transition-all duration-700
    ${isSelected 
      ? 'opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.25)]' 
      : 'opacity-60 hover:opacity-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]'}
  `;

  const headerClasses = isMobile
    ? "my-10 ml-[47px] flex h-[44px] flex-row items-center justify-between"
    : "my-10 ml-[47px] flex h-[44px] flex-row items-center justify-between md:mx-[72px] xl:mx-[72px] 2xl:ml-[89px] 2xl:mr-[61px] 2xl:h-[44px]";

  const categoryClasses = isMobile
    ? "mr-2 flex w-[85px] flex-col items-start gap-y-1"
    : "mr-2 flex w-[85px] flex-col items-start gap-y-1 md:w-[155px] xl:w-[155px] 2xl:mr-5 2xl:w-[155px]";

  const cursorContainerClasses = isMobile
    ? "absolute left-[275px] top-[112px] flex flex-col-reverse gap-y-[35px]"
    : "absolute left-[275px] top-[112px] flex flex-col-reverse gap-y-[35px] md:static md:flex-row md:gap-x-5 md:gap-y-0 xl:static xl:flex-row xl:gap-x-5 xl:gap-y-0";

  const contentClasses = isMobile
    ? "mx-[47px] flex flex-col"
    : "mx-[47px] flex flex-col md:mx-[72px] xl:mx-[72px] 2xl:mx-[47px] 2xl:mb-10 2xl:ml-10 2xl:flex-row";

  const imageClasses = isMobile
    ? "mr-5 w-full rounded-[40px]"
    : "mr-5 w-full rounded-[40px] xl:h-auto 2xl:h-[696px] 2xl:w-[987px]";

  const textClasses = isMobile
    ? "mt-[20px] flex flex-col gap-y-8 text-left text-[#262625]/60"
    : "mt-[20px] flex flex-col gap-y-8 text-left text-[#262625]/60 md:w-[550px] md:flex-row md:gap-x-4 lg:w-[700px] xl:w-[550px] xl:flex-row xl:gap-x-4 2xl:w-[241px] 2xl:flex-col";

  const logoClasses = isMobile
    ? "absolute left-[212px] top-[482px] size-[180px]"
    : "absolute left-[212px] top-[482px] size-[180px] md:left-[590px] md:top-[520px] lg:left-[810px] lg:top-[690px] xl:left-[590px] xl:top-[520px] 2xl:left-[1048px] 2xl:top-[559px] 2xl:size-[412px]";

  return (
    <div 
      className={mainClasses}
      onClick={onSelect}
    >
      <div className={headerClasses}>
        <div className="flex flex-row">
          <div className={categoryClasses}>
            <span
              className={
                isMobile
                  ? "block w-[85px] whitespace-nowrap"
                  : "hidden md:block xl:block 2xl:block"
              }
            >
              {isMobile ? "NOS HÉROS" : category}
            </span>
            <span>{pointsNumber}</span>
          </div>
          <span className="w-[179px] font-bold md:w-full xl:w-full">
            {name}
          </span>
        </div>
        <div className={cursorContainerClasses}>
          {cursors.map((cursorProps, index) => (
            <Cursor key={index} {...cursorProps} position="left-top" />
          ))}
        </div>
      </div>

      <div className={contentClasses}>
        <div className={imageClasses}>
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div className={textClasses}>
          <p>{paragraphe1}</p>
          <p>{paragraphe2}</p>
        </div>
      </div>

      <img
        src={logoSrc}
        alt=""
        loading="lazy"
        className={logoClasses}
        style={{ transform: "rotate(0deg)" }}
      />
    </div>
  );
};

export default CategoryCard;
