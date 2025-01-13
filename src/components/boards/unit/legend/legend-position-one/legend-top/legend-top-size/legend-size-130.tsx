interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendSize130 = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.09;
  const colorTop = color;
  const positionLegendTopX = 2699;
  const positionLegentTopY = 400.2;
  return (
    <svg
      version="1.1"
      id="shape_x5F_140"
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
          d="M250.98,902.58v-53.63h4.77v53.43l0,0c0,5.07-4.11,9.18-9.18,9.18h-1.03c-5.07,0-9.18-4.11-9.18-9.18l0,0
		v-53.43h4.77v53.63c0,2.72,2.2,4.92,4.92,4.92h0C248.78,907.5,250.98,905.29,250.98,902.58z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M278.89,922.13h-7.12v57.03h-6.43v-57.03h-7.12v-5.57h20.68V922.13z"
        />

        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="252.7,916.55 237.55,947.38 244.09,943.08 238.5,964.51 242.94,961.47 239.14,978.99 254.57,950.73 
			246.56,955.62 254.57,932.25 247.83,936.67 		"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M237.55,937.46v-16.27c0-2.56,2.08-4.64,4.64-4.64h6.19L237.55,937.46z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M278.89,848.95v62.6h-6.38l-8.63-52.05h0v19.81v32.24h-5.66v-62.6h6.38l8.63,52.05h-0.03v-19.81v-32.24H278.89
		z"
        />

        <rect
          x={236.37 + positionLegendTopX}
          y={984.16 + positionLegentTopY}
          fill={colorTop}
          width="42.52"
          height="3.88"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M237.47,993.04h2.58v34.32h-3.67v-28.09v-6.23H237.47z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M263.93,1001.5c0-2.6,0.61-4.65,1.84-6.18c1.23-1.52,3.1-2.28,5.61-2.28c2.52,0,4.39,0.76,5.64,2.28
		c1.24,1.52,1.86,3.58,1.86,6.18v17.35c0,2.6-0.62,4.66-1.86,6.2c-1.24,1.54-3.12,2.31-5.64,2.31c-2.52,0-4.39-0.77-5.61-2.31
		c-1.23-1.54-1.84-3.6-1.84-6.2V1001.5z M267.52,1019.09c0,1.54,0.32,2.73,0.95,3.58c0.64,0.85,1.61,1.27,2.91,1.27
		c1.33,0,2.31-0.42,2.93-1.27c0.62-0.85,0.93-2.04,0.93-3.58v-17.78c0-1.54-0.31-2.74-0.93-3.6c-0.62-0.87-1.6-1.3-2.93-1.3
		c-1.3,0-2.28,0.43-2.91,1.3c-0.64,0.87-0.95,2.07-0.95,3.6V1019.09z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M251.69,993.04c2.56,0,4.45,0.76,5.67,2.28c1.22,1.52,1.83,3.58,1.83,6.18v0.87c0,1.73-0.34,3.19-1.02,4.37
		c-0.68,1.19-1.69,2.04-3.01,2.55c1.42,0.55,2.45,1.42,3.09,2.62c0.63,1.2,0.95,2.65,0.95,4.35v2.6c0,2.6-0.61,4.66-1.83,6.2
		c-1.22,1.54-3.11,2.31-5.67,2.31c-2.53,0-4.41-0.78-5.63-2.33c-1.22-1.55-1.83-3.61-1.83-6.18v0.02h3.47v0.22
		c0,1.54,0.32,2.73,0.95,3.58c0.63,0.85,1.61,1.27,2.94,1.27c1.36,0,2.35-0.43,2.97-1.3c0.62-0.87,0.93-2.16,0.93-3.89v-2.6
		c0-3.24-1.39-4.9-4.18-5h-1.99v-3.36h2.18c1.23-0.06,2.21-0.48,2.92-1.25c0.71-0.77,1.07-1.89,1.07-3.36v-1.54
		c0-1.73-0.31-3.04-0.93-3.92c-0.62-0.88-1.61-1.32-2.97-1.32c-1.33,0-2.31,0.43-2.94,1.3c-0.63,0.87-0.95,2.07-0.95,3.6v0.2h-3.47
		v-0.01c0-2.6,0.6-4.65,1.8-6.18C247.25,993.8,249.13,993.04,251.69,993.04z"
        />
      </g>
    </svg>
  );
};
