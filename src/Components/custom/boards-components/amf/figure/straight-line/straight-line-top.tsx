interface IPropsStraightLineTop {
  color: string;
  width: number;
  height: number;
}
export const StraightLineTop = ({ color, width, height }: IPropsStraightLineTop) => {
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient
          id="lineGradientTop"
          gradientUnits="userSpaceOnUse"
          x1={width / 2}
          y1={110}
          x2={width / 2}
          y2={270}
        >
          <stop offset="0%" stopColor={color} stopOpacity="0" />
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <line x1={width / 2} y1={110} x2={width / 2} y2={270} stroke="url(#lineGradientTop)" strokeWidth="1" />
    </svg>
  );
};
