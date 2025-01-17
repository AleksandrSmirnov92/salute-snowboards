interface IPropsStraightLineMiddleBack {
  color: string;
  width: number;
  height: number;
}
export const StraightLineMiddleBack = ({ color, width, height }: IPropsStraightLineMiddleBack) => {
  const kX = -1.5;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line x1={width / 2 + kX} y1={95} x2={width / 2 + kX} y2={425} stroke={color} strokeWidth="1" />
    </svg>
  );
};
