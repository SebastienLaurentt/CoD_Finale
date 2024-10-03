type PointProps = {
  color: "green" | "red" | "gray";
};

const Point = ({ color }: PointProps) => {
  const bgColor = {
    green: "bg-[#ECFFCE] drop-shadow-2xl drop-shadow-[#FFFFFF]",
    red: "bg-[#F28164] drop-shadow-2xl drop-shadow-[#FFFFFF]",
    gray: "bg-[#9B9B9B]",
  }[color];

  return (
    <span className={`inline-block size-[50px] rounded-full ${bgColor} `}></span>
  );
};

export default Point;
