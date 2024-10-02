import { MoveDown, MoveLeft, MoveRight, MoveUp } from "lucide-react"; // Assurez-vous d'importer vos icônes
import React from "react";

type IconType = "up" | "down" | "left" | "right";

interface KeyProps {
  icon?: IconType;
  children?: React.ReactNode;
}

const iconComponents = {
  up: MoveUp,
  down: MoveDown,
  left: MoveLeft,
  right: MoveRight,
};

const Key = ({ icon, children }: KeyProps) => {
  const IconComponent = icon ? iconComponents[icon] : null;

  return (
    <div className="inline-flex size-[106px] items-center justify-center rounded-[10px] bg-primary">
      {IconComponent ? (
        <IconComponent className="text-[#9B9B9B]" strokeWidth="3" size={38} />
      ) : (
        children
      )}
    </div>
  );
};

export default Key;
