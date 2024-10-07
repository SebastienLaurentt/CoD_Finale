import { MoveDown, MoveLeft, MoveRight, MoveUp, X } from "lucide-react";

type IconType = "up" | "down" | "left" | "right" | "hidden";
type ResultType = "success" | "failure" | "pending" | "timeout";

interface KeyProps {
  icon: IconType;
  result: ResultType;
}

const iconComponents = {
  up: MoveUp,
  down: MoveDown,
  left: MoveLeft,
  right: MoveRight,
};

const Key = ({ icon, result }: KeyProps) => {
  const getBgColor = () => {
    switch (result) {
      case "success":
        return "bg-[#ECFFCE]";
      case "failure":
        return "bg-[#FFBCAB]";
      case "timeout":
        return "bg-[#F3F3F14D]/30";
      default:
        return "bg-primary";
    }
  };

  const getBorderStyle = () => {
    return result === "timeout"
      ? "border-2 border-[#D46F55] border-dashed"
      : "";
  };

  if (icon === "hidden") {
    return (
      <div
        className={`relative inline-flex size-[106px] items-center justify-center rounded-[10px] ${getBgColor()} ${getBorderStyle()}`}
      >
        {/* Empty div for hidden icon */}
      </div>
    );
  }

  const IconComponent = result === "timeout" ? X : iconComponents[icon];

  return (
    <div
      className={`relative inline-flex size-[106px] items-center justify-center rounded-[10px] ${getBgColor()} ${getBorderStyle()}`}
    >
      {result === "success" && (
        <>
          <div>
            <span className="absolute -left-5 -top-4 size-4 rounded-full border-2 border-white bg-[#ECFFCE]" />
            <span className="absolute -top-6 left-2 size-[10px] rounded-full border-2 border-white bg-[#ECFFCE]" />
            <span className="absolute -left-1 -top-7 size-[3px] rounded-full border-2 border-white bg-[#ECFFCE]" />
          </div>
          <div>
            <span className="absolute -right-4 top-0 size-[10px] rounded-full border-2 border-white bg-[#ECFFCE]" />
            <span className="absolute -top-3 right-0 size-[5px] rounded-full border-2 border-white bg-[#ECFFCE]" />
          </div>
          <div>
            <span className="absolute -bottom-2 -right-1 size-[3px] rounded-full border-2 border-white bg-[#ECFFCE]" />
            <span className="absolute -bottom-4 right-1 size-[5px] rounded-full border-2 border-white bg-[#ECFFCE]" />
          </div>
        </>
      )}
      <IconComponent
        className={result === "timeout" ? "text-[#D46F55]" : "text-[#9B9B9B]"}
        strokeWidth="3"
        size={38}
      />
    </div>
  );
};

export default Key;
