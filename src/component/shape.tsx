type ShapeProps = {
  type?: string;
  className?: string;
};

const shapeClasses: Record<string, string> = {
  circle: "w-20 h-20 bg-primary rounded-full",
  circleOutline: "w-20 h-20 border-4 border-primary rounded-full",
  square: "w-20 h-20 bg-primary",
  squareOutline: "w-20 h-20 border-4 border-primary",
  rectangle: "w-40 h-20 bg-primary",
  rectangleOutline: "w-40 h-20 border-4 border-primary",
  oval: "w-40 h-20 bg-primary rounded-full",
  ovalOutline: "w-40 h-20 border-4 border-primary rounded-full",
};

export default function Shape({ type = "circle", className = "" }: ShapeProps) {
  const shapeClass = shapeClasses[type] || shapeClasses["circle"];
  return <div className={`absolute top-14 ${shapeClass} ${className}`}></div>;
}