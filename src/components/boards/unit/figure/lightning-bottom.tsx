interface IPropsLightningBottom {
  color: string;
  width: number;
  height: number;
}
export const LightningBottom = ({ color, width, height }: IPropsLightningBottom) => {
  const scale = 1;
  const translateX = -45;
  const translateY = -750;
  return (
    <svg
      version="1.1"
      id="shape_x5F_140"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox="0 0 977.95 4251.97"
    >
      <g transform={`translate(${translateX} ${translateY}) scale(${scale})`}>
        <polygon
          fill={color}
          points="514.37,3867.72 518.43,3845.73 516.01,3966.48 516.4,3967.86 527.23,3772.15 527.01,3769.02 
                521.8,3799.26 521.77,3794.48 528.06,3622.48 527.72,3620.5 521.77,3654.31 526.7,3479.11 512.79,3733.91 518.68,3702.08"
        />
      </g>
    </svg>
  );
};
