interface IPropsStraightLineTop {
  color: string;
  width: number;
  height: number;
}
export const StraightLineTop = ({ color, width, height }: IPropsStraightLineTop) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <line x1={width / 2} y1={45} x2={width / 2} y2={192} stroke={color} strokeWidth="1" />
    </svg>
  );
};
