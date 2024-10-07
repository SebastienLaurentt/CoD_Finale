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
  pointsNumber: string;
  name: string;
  imgSrc: string;
  imgAlt: string;
  paragraphe1: JSX.Element;
  paragraphe2: JSX.Element;
  logoSrc: string;
  cursors: CursorProps[];
  isSelected: boolean;
  onSelect: () => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  bgColor,
  pointsNumber,
  name,
  imgSrc,
  imgAlt,
  paragraphe1,
  paragraphe2,
  logoSrc,
  cursors,
  isSelected,
  onSelect,
}) => {
  return (
    <div 
      className={`
        relative h-[600px] cursor-pointer rounded-[60px] ${bgColor} flex flex-col overflow-hidden text-xs leading-[20px]
        transition-all duration-700
        ${isSelected 
          ? 'opacity-100 shadow-[0_0_20px_rgba(255,255,255,0.25)]' 
          : 'opacity-60 hover:opacity-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.25)]'}
      `}
      onClick={onSelect}
    >
      <div className="my-10 ml-[47px] flex h-[44px] flex-row items-center justify-between">
        <div className="flex flex-row">
          <div className="mr-2 flex w-[85px] flex-col items-start gap-y-1">
            <span
              className="block w-[85px] whitespace-nowrap"
            >
              NOS HÉROS
            </span>
            <span>{pointsNumber}</span>
          </div>
          <span className="w-[179px] font-bold md:w-full xl:w-full">
            {name}
          </span>
        </div>
        <div className="absolute left-[275px] top-[112px] flex flex-col-reverse gap-y-[35px]">
          {cursors.map((cursorProps, index) => (
            <Cursor key={index} {...cursorProps} position="left-top" />
          ))}
        </div>
      </div>

      <div className="mx-[47px] flex flex-col">
        <div className="mr-5 w-full rounded-[40px]">
          <img
            src={imgSrc}
            alt={imgAlt}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div className="mt-[20px] flex flex-col gap-y-8 text-left text-[#262625]/60">
          <p>{paragraphe1}</p>
          <p>{paragraphe2}</p>
        </div>
      </div>

      <img
        src={logoSrc}
        alt=""
        loading="lazy"
        className="absolute left-[212px] top-[482px] size-[180px]"
        style={{ transform: "rotate(0deg)" }}
      />
    </div>
  );
};

export default CategoryCard;
