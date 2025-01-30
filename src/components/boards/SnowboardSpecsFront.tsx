interface IProps {
  rotation?: number;
  children: React.ReactNode;
}
export const SnowboardSpecs = ({ rotation, children }: IProps) => {
  const viewBoxWidth = 600;
  const viewBoxHeight = 600;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      className={`w-full`}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid slice"
      shape-rendering="crispEdges"
      style={{
        transform: `rotateY(${rotation ? rotation : 0}deg)`, // Применяем стиль с углом
        transition: 'transform 1s ease-in-out', // Плавная анимация
      }}
    >
      {children}
    </svg>
  );
};
