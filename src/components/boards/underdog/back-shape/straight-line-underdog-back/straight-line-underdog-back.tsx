interface IPropsStraightLineMiddleBack {
  color: string;
  width: number;
  height: number;
}
export const StraightLineMiddleUnderdogBack = ({ color, width, height }: IPropsStraightLineMiddleBack) => {
  const kX = -1.5;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line x1={width / 2 + kX} y1={117} x2={width / 2 + kX} y2={459} stroke={color} strokeWidth="1" />
    </svg>
  );
};
