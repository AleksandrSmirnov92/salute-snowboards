interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendSize135 = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.09;
  const colorTop = color;
  const positionLegendTopX = 1621;
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
          d="M1329.08,902.58v-53.63h4.77v53.43l0,0c0,5.07-4.11,9.18-9.18,9.18h-1.03c-5.07,0-9.18-4.11-9.18-9.18l0,0
			v-53.43h4.77v53.63c0,2.72,2.2,4.92,4.92,4.92l0,0C1326.88,907.5,1329.08,905.29,1329.08,902.58z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1356.99,922.13h-7.12v57.03h-6.43v-57.03h-7.12v-5.57h20.68V922.13z"
        />

        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="1330.8,916.55 1315.65,947.38 1322.19,943.08 1316.6,964.51 1321.04,961.47 1317.24,978.99 
				1332.67,950.73 1324.66,955.62 1332.67,932.25 1325.93,936.67 			"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1315.65,937.46v-16.27c0-2.56,2.08-4.64,4.64-4.64h6.19L1315.65,937.46z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1356.99,848.95v62.6h-6.38l-8.63-52.05h0v19.81v32.24h-5.66v-62.6h6.38l8.63,52.05h-0.03v-19.81v-32.24
			H1356.99z"
        />

        <rect
          x={1314.47 + positionLegendTopX}
          y={984.16 + positionLegentTopY}
          fill={colorTop}
          width="42.52"
          height="3.88"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1315.57,993.04h2.58v34.32h-3.67v-28.09v-6.23H1315.57z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1330.14,993.04c2.56,0,4.45,0.76,5.67,2.28c1.22,1.52,1.83,3.58,1.83,6.18v0.87c0,1.73-0.34,3.19-1.02,4.37
			c-0.68,1.19-1.69,2.04-3.01,2.55c1.42,0.55,2.45,1.42,3.09,2.62c0.63,1.2,0.95,2.65,0.95,4.35v2.6c0,2.6-0.61,4.66-1.83,6.2
			c-1.22,1.54-3.11,2.31-5.67,2.31c-2.53,0-4.41-0.78-5.63-2.33c-1.22-1.55-1.83-3.61-1.83-6.18v0.02h3.47v0.22
			c0,1.54,0.32,2.73,0.95,3.58c0.63,0.85,1.61,1.27,2.94,1.27c1.36,0,2.35-0.43,2.97-1.3c0.62-0.87,0.93-2.16,0.93-3.89v-2.6
			c0-3.24-1.39-4.9-4.18-5h-1.99v-3.36h2.18c1.23-0.06,2.21-0.48,2.92-1.25c0.71-0.77,1.07-1.89,1.07-3.36v-1.54
			c0-1.73-0.31-3.04-0.93-3.92c-0.62-0.88-1.61-1.32-2.97-1.32c-1.33,0-2.31,0.43-2.94,1.3c-0.63,0.87-0.95,2.07-0.95,3.6v0.2h-3.47
			v-0.01c0-2.6,0.6-4.65,1.8-6.18C1325.69,993.8,1327.58,993.04,1330.14,993.04z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1345.95,1006.88c1.07-1.87,2.7-2.81,4.91-2.81c2.14,0,3.7,0.74,4.67,2.21c0.97,1.47,1.46,3.42,1.46,5.84
			v6.64c0,2.59-0.61,4.66-1.84,6.23c-1.23,1.57-3.1,2.35-5.61,2.35c-2.52,0-4.38-0.78-5.59-2.35c-1.21-1.57-1.82-3.53-1.82-6.11l0,0
			h3.44v0.12c0,1.55,0.31,2.76,0.94,3.61c0.63,0.86,1.6,1.28,2.92,1.28s2.3-0.43,2.92-1.28c0.63-0.86,0.94-2.06,0.94-3.61v-6.59
			c0-1.55-0.31-2.75-0.94-3.61c-0.63-0.86-1.6-1.28-2.92-1.28c-1.01,0-1.84,0.3-2.5,0.9c-0.48,0.43-0.82,1.03-1.04,1.78
			c-0.14,0.48-0.19,0.98-0.19,1.47v0.26h-3.44l0.9-18.86h13.82v3.39h-10.52L1345.95,1006.88z"
        />
      </g>
    </svg>
  );
};
