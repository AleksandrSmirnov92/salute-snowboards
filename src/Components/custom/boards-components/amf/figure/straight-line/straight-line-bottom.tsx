interface IPropsStraightLineBottom {
  color: string;
  width: number;
  height: number;
}
export const StraightLineBottom = ({ width, height, color }: IPropsStraightLineBottom) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient
          id="lineGradientBottom"
          gradientUnits="userSpaceOnUse"
          x1={width / 2}
          y1={355}
          x2={width / 2}
          y2={470}
        >
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <line x1={width / 2} y1={355} x2={width / 2} y2={470} stroke="url(#lineGradientBottom)" strokeWidth="1" />
    </svg>
  );
};
