interface IPropsLightningTop {
  color: string;
  width: number;
  height: number;
}
export const LightningTop = ({ color, width, height }: IPropsLightningTop) => {
  const scale = 1;
  const translateX = -45;
  const translateY = 150;
  return (
    <svg
      version="1.1"
      id="shape_x5F_140"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 977.95 4251.97"
      width={width}
      height={height}
    >
      <g transform={`translate(${translateX} ${translateY}) scale(${scale})`}>
        <polygon
          fill={color}
          points="526.3,446.06 522.69,468.13 522.6,347.35 522.18,345.98 515.43,541.87 515.71,545 520.3,514.66 
                520.43,519.43 517.72,691.53 518.1,693.5 523.34,659.58 522.06,834.84 530.66,579.81 525.44,611.75 	"
        />
      </g>
    </svg>
  );
};
