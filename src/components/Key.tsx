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
    return result === "timeout" ? "border-2 border-[#D46F55] border-dashed" : "";
  };

  if (icon === "hidden") {
    return (
      <div className={`inline-flex size-[106px] items-center justify-center rounded-[10px] ${getBgColor()} ${getBorderStyle()}`}>
        {/* Empty div for hidden icon */}
      </div>
    );
  }

  const IconComponent = result === "timeout" ? X : iconComponents[icon];

  return (
    <div className={`inline-flex size-[106px] items-center justify-center rounded-[10px] ${getBgColor()} ${getBorderStyle()}`}>
      <IconComponent 
        className={result === "timeout" ? "text-[#D46F55]" : "text-[#9B9B9B]"} 
        strokeWidth="3" 
        size={38} 
      />
    </div>
  );
};

export default Key;
