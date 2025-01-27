interface IPropsStraightLineMiddleBack {
  color: string;
  width: number;
  height: number;
}
export const StraightLineMiddleAMFishBack = ({ color, width, height }: IPropsStraightLineMiddleBack) => {
  const kX = -2.5;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line x1={width / 2 + kX} y1={137} x2={width / 2 + kX} y2={495} stroke={color} strokeWidth="1" />
    </svg>
  );
};
