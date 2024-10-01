import { MousePointer2 } from "lucide-react";

interface CursorProps {
  name: string;
  fontColor: string;
  bgColor: string;
  borderColor: string;
  classname?: string;
  rotation?: number; // Nouvelle prop pour la rotation
}

const Cursor = ({
  name,
  fontColor,
  bgColor,
  borderColor,
  classname,
  rotation = 0,
}: CursorProps) => {
  return (
    <span
      className={`relative flex w-fit items-center rounded-[18.49px_1.54px_18.49px_18.49px] border-2 px-3  py-1.5 text-xs ${classname} ${fontColor} h-[30px]`}
      style={{ 
        backgroundColor: bgColor, 
        borderColor: borderColor,
        transform: `rotate(${rotation}deg)` 
      }}
    >
      @{name}
      <MousePointer2
        size={14}
        className="absolute right-[-16px] top-[-18px] drop-shadow"
        style={{ fill: bgColor, color: bgColor, transform: "rotate(90deg)" }}
      />
    </span>
  );
};

export default Cursor;
