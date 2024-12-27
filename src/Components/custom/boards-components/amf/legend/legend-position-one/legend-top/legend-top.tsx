interface IPropsLegendTop {
  color: string;
  width: number;
  height: number;
}
export const LegendTop = ({ width, height, color }: IPropsLegendTop) => {
  const scaleText = 1.0;
  const scale = 0.1;
  const colorTop = color;
  const positionLegendTopX = 2485;
  const positionLegentTopY = 705;
  return (
    <svg
      version="1.1"
      id="shape_x5F_140"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} 600`}
    >
      <g transform={`scale(${scale})`}>
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M124.99,793.69l-12.77,0.35l-2.08-75.05c-0.07-2.68-1.21-3.99-3.27-3.8c-2.07,0.06-3,1.42-2.93,3.97
                    l2.06,74.33c0.17,6.21,2.12,10.65,5.85,13.47l4.84,3.64c3.24,2.47,5.61,4.96,7.02,7.47c1.41,2.64,2.13,6.64,2.28,12l2.63,94.88
                    c0.29,10.34-4.68,15.59-15.02,15.88c-10.83,0.3-16.32-4.66-16.61-15l-2.48-89.4l12.66-0.35l2.48,89.4
                    c0.08,2.79,1.21,4.23,3.4,4.17c2.07-0.06,3-1.54,2.8-4.34l-2.47-89.16c-0.19-6.93-1.91-11.63-5.14-14.11l-5.34-3.87
                    c-3.36-2.59-5.74-5.32-7.16-8.09c-1.42-2.76-2.14-6.87-2.29-12.36l-2.17-78.45c-0.28-9.98,4.94-15.11,15.77-15.41
                    c10.34-0.29,15.59,4.56,15.86,14.53L124.99,793.69z"
        />
      </g>
    </svg>
  );
};
