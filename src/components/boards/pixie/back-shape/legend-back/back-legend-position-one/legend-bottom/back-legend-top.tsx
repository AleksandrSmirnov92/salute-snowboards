interface IPropsLegendTop {
  color: string;
  width: number;
  height: number;
}
export const BackLegendBottom = ({ color, width, height }: IPropsLegendTop) => {
  const scaleText = 1.0;
  const scaleS = 0.07;
  // const positionLegendMiddleSX = isBack ? 4750 : 3770;
  const positionLegendMiddleSX = 3770;
  const positionLegentMiddleSY = 4400;
  const colorMiddle = color;

  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
    >
      <g transform={`scale(${scaleS})`}>
        <path
          // Буква S
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendMiddleSX}, ${positionLegentMiddleSY})`}
          d="M505.98,2308.24h-13.73v-80.68c0-2.88-1.18-4.32-3.4-4.18c-2.23,0-3.27,1.44-3.27,4.18v79.9
      c0,6.67,1.96,11.5,5.88,14.64l5.09,4.05c3.4,2.75,5.88,5.49,7.32,8.24c1.44,2.88,2.09,7.2,2.09,12.95v101.99
      c0,11.11-5.49,16.61-16.61,16.61c-11.64,0-17.4-5.49-17.4-16.61v-96.11h13.6v96.11c0,3,1.18,4.58,3.53,4.58
      c2.23,0,3.27-1.56,3.14-4.58v-95.84c0-7.45-1.7-12.55-5.11-15.31l-5.62-4.32c-3.53-2.88-6.01-5.88-7.45-8.9
      c-1.44-3-2.09-7.45-2.09-13.34v-84.33c0-10.72,5.76-16.08,17.4-16.08c11.11,0,16.61,5.36,16.61,16.08V2308.24z"
          fill={colorMiddle}
        />
      </g>
    </svg>
  );
};
