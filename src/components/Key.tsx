import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react"; 

type IconType = "up" | "down" | "left" | "right" | "hidden";
type ResultType = "success" | "failure" | "pending";

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
      default:
        return "bg-primary";
    }
  };

  if (icon === "hidden") {
    return (
      <div className={`inline-flex size-[106px] items-center justify-center rounded-[10px] ${getBgColor()}`}>
        {/* Empty div for hidden icon */}
      </div>
    );
  }

  const IconComponent = iconComponents[icon];

  return (
    <div className={`inline-flex size-[106px] items-center justify-center rounded-[10px] ${getBgColor()}`}>
      <IconComponent className="text-[#9B9B9B]" strokeWidth="3" size={38} />
    </div>
  );
};

export default Key;
