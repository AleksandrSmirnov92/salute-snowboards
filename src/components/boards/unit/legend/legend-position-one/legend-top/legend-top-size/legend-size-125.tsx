interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendSize125 = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.09;
  const colorTop = color;
  const positionLegendTopX = 1630;
  const positionLegentTopY = 400;

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
      <g transform={`scale(${scale})`}>
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1319.76,902.58v-53.63h4.77v53.43l0,0c0,5.07-4.11,9.18-9.18,9.18h-1.03c-5.07,0-9.18-4.11-9.18-9.18l0,0
		v-53.43h4.77v53.63c0,2.72,2.2,4.92,4.92,4.92l0,0C1317.55,907.5,1319.76,905.29,1319.76,902.58z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1347.66,922.13h-7.12v57.03h-6.43v-57.03h-7.12v-5.57h20.68V922.13z"
        />
        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="1321.47,916.55 1306.33,947.38 1312.86,943.08 1307.27,964.51 1311.71,961.47 1307.92,978.99 
		1323.34,950.73 1315.34,955.62 1323.34,932.25 1316.6,936.67 	"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1306.33,937.46v-16.27c0-2.56,2.08-4.64,4.64-4.64h6.19L1306.33,937.46z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1347.66,848.95v62.6h-6.38l-8.63-52.05h0v19.81v32.24h-5.66v-62.6h6.38L1342,901h-0.03v-19.81v-32.24H1347.66
		z"
        />
        <rect
          x={1305.14 + positionLegendTopX}
          y={984.16 + positionLegentTopY}
          fill={colorTop}
          width="42.52"
          height="3.88"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1306.24,993.04h2.57v34.32h-3.67v-28.09v-6.23H1306.24z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1321.22,993.04c2.58,0,4.47,0.78,5.66,2.33c1.19,1.55,1.79,3.64,1.79,6.26c0,1.72-0.28,3.26-0.83,4.64
		c-0.55,1.38-1.24,2.65-2.08,3.83c-0.83,1.18-1.73,2.29-2.69,3.33c-0.96,1.04-1.86,2.07-2.69,3.11c-0.83,1.04-1.53,2.11-2.1,3.23
		c-0.57,1.12-0.85,2.32-0.85,3.62v0.53h10.85v3.45h-14.48v-2.91c0-1.81,0.28-3.41,0.83-4.81c0.55-1.39,1.24-2.66,2.08-3.81
		c0.83-1.15,1.73-2.23,2.69-3.25c0.96-1.02,1.86-2.06,2.69-3.13c0.83-1.07,1.53-2.22,2.08-3.45c0.55-1.23,0.83-2.64,0.83-4.22
		c0-1.75-0.3-3.07-0.9-3.98c-0.6-0.91-1.59-1.36-2.97-1.36c-1.35,0-2.34,0.45-2.95,1.36c-0.61,0.91-0.92,2.12-0.92,3.64v0.61h-3.44
		v-0.37c0-2.62,0.6-4.72,1.79-6.29C1316.8,993.83,1318.67,993.04,1321.22,993.04z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1336.62,1006.87c1.07-1.88,2.7-2.82,4.91-2.82c2.14,0,3.69,0.74,4.67,2.21c0.97,1.47,1.46,3.42,1.46,5.85
		v6.65c0,2.59-0.61,4.67-1.84,6.24c-1.23,1.57-3.1,2.35-5.61,2.35c-2.52,0-4.38-0.78-5.59-2.35c-1.21-1.57-1.82-3.53-1.82-6.12l0,0
		h3.44v0.13c0,1.55,0.31,2.76,0.94,3.62c0.63,0.86,1.6,1.29,2.92,1.29c1.32,0,2.3-0.43,2.92-1.29c0.63-0.86,0.94-2.06,0.94-3.62
		v-6.6c0-1.55-0.31-2.76-0.94-3.62c-0.63-0.86-1.6-1.29-2.92-1.29c-1.01,0-1.84,0.3-2.5,0.9c-0.66,0.6-1.07,1.51-1.23,2.74v0.78
		h-3.44l0.9-18.88h13.82v3.4h-10.52L1336.62,1006.87z"
        />
      </g>
    </svg>
  );
};
