type ShapeProps = {
  type?: string;
  className?: string;
};

const shapeClasses: Record<string, string> = {
  circle: "w-20 h-20 bg-blue-500 rounded-full",
  circleOutline: "w-20 h-20 border-4 border-blue-500 rounded-full",
  square: "w-20 h-20 bg-blue-500",
  squareOutline: "w-20 h-20 border-4 border-blue-500",
  rectangle: "w-40 h-20 bg-blue-500",
  rectangleOutline: "w-40 h-20 border-4 border-blue-500",
  oval: "w-40 h-20 bg-blue-500 rounded-full",
  ovalOutline: "w-40 h-20 border-4 border-blue-500 rounded-full",
};

export default function Shape({ type = "circle", className = "" }: ShapeProps) {
  const shapeClass = shapeClasses[type] || shapeClasses["circle"];
  return <div className={`absolute top-14 ${shapeClass} ${className}`}></div>;
}