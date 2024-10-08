import { MoveDown, MoveLeft, MoveRight, MoveUp, X } from "lucide-react";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

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

const ConfettiDot = ({ className }: { className: string }) => (
  <span className={`absolute rounded-full border-2 border-white bg-[#ECFFCE] ${className}`} />
);

const confettiDots = [
  "-left-5 -top-4 size-4",
  "-top-6 left-2 size-[10px]",
  "-left-1 -top-7 size-[3px]",
  "-right-4 top-0 size-[10px]",
  "-top-3 right-0 size-[5px]",
  "-bottom-2 -right-1 size-[3px]",
  "-bottom-4 right-1 size-[5px]",
];

const Key = ({ icon, result }: KeyProps) => {
  const confettiRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (result === "success" && confettiRef.current) {
      const dots = confettiRef.current.children;
      gsap.fromTo(dots, 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.5, 
          stagger: 0.05,
          ease: "back.out(1.7)"
        }
      );
    }
  }, [result]);

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
        <div ref={confettiRef}>
          {confettiDots.map((className, index) => (
            <ConfettiDot key={index} className={className} />
          ))}
        </div>
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
