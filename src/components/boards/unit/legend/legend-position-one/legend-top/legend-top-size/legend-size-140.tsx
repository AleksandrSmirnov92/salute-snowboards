interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendSize140 = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.09;
  const colorTop = color;
  const positionLegendTopX = 2727;
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
          d="M223.26,902.58v-53.63h4.77v53.43l0,0c0,5.07-4.11,9.18-9.18,9.18h-1.03c-5.07,0-9.18-4.11-9.18-9.18l0,0
		v-53.43h4.77v53.63c0,2.72,2.2,4.92,4.92,4.92h0C221.06,907.5,223.26,905.29,223.26,902.58z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M251.17,922.13h-7.12v57.03h-6.43v-57.03h-7.12v-5.57h20.68V922.13z"
        />

        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="224.98,916.55 209.84,947.38 216.37,943.08 210.78,964.51 215.22,961.47 211.43,978.99 
			226.85,950.73 218.84,955.62 226.85,932.25 220.11,936.67 		"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M209.84,937.46v-16.27c0-2.56,2.08-4.64,4.64-4.64h6.19L209.84,937.46z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M251.17,848.95v62.6h-6.38l-8.63-52.05h0v19.81v32.24h-5.66v-62.6h6.38l8.63,52.05h-0.03v-19.81v-32.24H251.17
		z"
        />

        <rect
          x="208.65"
          y="984.16"
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          width="42.52"
          height="3.88"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M209.75,993.06h2.58v34.3h-3.67v-28.07v-6.22H209.75z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M236.22,1001.52c0-2.59,0.61-4.65,1.84-6.17c1.23-1.52,3.1-2.28,5.61-2.28c2.52,0,4.39,0.76,5.64,2.28
		c1.24,1.52,1.86,3.58,1.86,6.17v17.34c0,2.59-0.62,4.66-1.86,6.2c-1.24,1.54-3.12,2.31-5.64,2.31c-2.52,0-4.39-0.77-5.61-2.31
		c-1.23-1.54-1.84-3.6-1.84-6.2V1001.52z M239.8,1019.1c0,1.54,0.32,2.73,0.95,3.58c0.64,0.85,1.61,1.27,2.91,1.27
		c1.33,0,2.31-0.42,2.93-1.27c0.62-0.85,0.93-2.04,0.93-3.58v-17.77c0-1.54-0.31-2.74-0.93-3.6c-0.62-0.86-1.6-1.3-2.93-1.3
		c-1.3,0-2.28,0.43-2.91,1.3c-0.64,0.86-0.95,2.07-0.95,3.6V1019.1z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M230.13,1020.43v6.91h-3.68v-6.91h-10.94v-3.48l10.51-23.91h4.12v23.91h2.71v3.48H230.13z M218.99,1016.95
			h7.46v-16.76L218.99,1016.95z"
        />
      </g>
    </svg>
  );
};
