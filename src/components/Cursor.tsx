import { MousePointer2 } from "lucide-react";

interface CursorProps {
  name: string;
  fontColor: string;
  bgColor: string;
  borderColor: string;
  classname?: string;
  rotation?: number; // Nouvelle prop pour la rotation
  // Nouvelle prop pour la position du coin arrondi et du curseur
  position: 'left-top' | 'left-bottom' | 'right-top' | 'right-bottom';
}

const Cursor = ({
  name,
  fontColor,
  bgColor,
  borderColor,
  classname,
  rotation = 0,
  position = 'left-top', // Valeur par défaut
}: CursorProps) => {
  // Fonction pour déterminer la classe de border-radius
  const getBorderRadiusClass = () => {
    switch (position) {
      case 'left-bottom':
        return 'rounded-[18.49px_18.49px_18.49px_1.54px]';
      case 'right-top':
        return 'rounded-[18.49px_1.54px_18.49px_18.49px]';
      case 'right-bottom':
        return 'rounded-[18.49px_18.49px_1.54px_18.49px]';
      default:
        return 'rounded-[1.54px_18.49px_18.49px_18.49px]';
    }
  };

  // Fonction pour déterminer la position du curseur
  const getCursorPosition = () => {
    switch (position) {
      case 'left-bottom':
        return 'left-[-16px] bottom-[-18px]';
      case 'right-top':
        return 'right-[-16px] top-[-18px]';
      case 'right-bottom':
        return 'right-[-16px] bottom-[-18px]';
      default:
        return 'left-[-16px] top-[-18px]';
    }
  };

  // Fonction pour déterminer la rotation du curseur
  const getCursorRotation = () => {
    switch (position) {
      case 'left-bottom':
        return 'rotate(-90deg)';
      case 'right-top':
        return 'rotate(90deg)';
      case 'right-bottom':
        return 'rotate(180deg)';
      default:
        return 'rotate(0deg)';
    }
  };

  return (
    <span
      className={`relative flex w-fit items-center ${getBorderRadiusClass()} border-2 px-3 py-1.5 text-xs ${classname} ${fontColor} h-[30px]`}
      style={{ 
        backgroundColor: bgColor, 
        borderColor: borderColor,
        transform: `rotate(${rotation}deg)` 
      }}
    >
      @{name}
      <MousePointer2
        size={14}
        className={`absolute ${getCursorPosition()} drop-shadow`}
        style={{ 
          fill: bgColor, 
          color: bgColor, 
          transform: getCursorRotation() 
        }}
      />
    </span>
  );
};

export default Cursor;
