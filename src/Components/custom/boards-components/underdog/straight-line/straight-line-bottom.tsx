interface IPropsStraightLineBottom {
  color: string;
  width: number;
  height: number;
}
export const StraightLineBottom = ({ width, height, color }: IPropsStraightLineBottom) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line x1={width / 2} y1={356} x2={width / 2} y2={505} stroke={color} strokeWidth="1" />
    </svg>
  );
};
