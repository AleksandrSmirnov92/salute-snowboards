interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendSize140 = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.15;
  const colorTop = color;
  const positionLegendTopX = -3565;
  const positionLegentTopY = -56.5;
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
          d="M5359.14,879.43h-30.1c-0.08,0-0.14-0.06-0.14-0.14v-2.46c0-0.08,0.06-0.14,0.14-0.14h30.1
			c0.08,0,0.14,0.06,0.14,0.14v2.46C5359.28,879.37,5359.21,879.43,5359.14,879.43z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5329.71,883.44h1.59c0.45,0,0.81,0.36,0.81,0.81v17.56c0,0.45-0.36,0.81-0.81,0.81h-1.59
				c-0.45,0-0.81-0.36-0.81-0.81v-14.73v-2.83C5328.9,883.8,5329.27,883.44,5329.71,883.44z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5348.25,897.24v-8.42c0-7.17,11.05-7.17,11.05,0v8.42C5359.29,904.41,5348.25,904.41,5348.25,897.24z
				 M5351.41,888.57v8.83c0,3.11,4.71,3.09,4.71,0v-8.83C5356.12,885.49,5351.41,885.51,5351.41,888.57z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5344.32,902.62h-1.55c-0.45,0-0.82-0.37-0.82-0.82v-4.18c0-0.45-0.37-0.82-0.82-0.82h-6.29
					c-0.45,0-0.82-0.37-0.82-0.82v-1.92c0-0.18,0.06-0.35,0.17-0.5l7.51-9.82c0.15-0.2,0.39-0.32,0.65-0.32h1.96
					c0.45,0,0.82,0.37,0.82,0.82v17.55C5345.13,902.25,5344.77,902.62,5344.32,902.62z M5338.25,894.01h2.89
					c0.45,0,0.82-0.36,0.82-0.82v-3.74c0-0.39-0.49-0.56-0.73-0.25l-3.3,4.15C5337.72,893.62,5337.91,894.01,5338.25,894.01z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5354.53,840.71l-3.64,0c-0.45,0-0.81,0.36-0.81,0.81v14.02C5354.22,854.6,5354.36,852.05,5354.53,840.71z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5359.21,855.55v-14.02c0-0.45-0.36-0.81-0.81-0.81l-3.64,0C5354.93,852.05,5355.07,854.6,5359.21,855.55z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5350.08,855.88v15.96c0,0.45,0.36,0.81,0.81,0.81h3.64C5354.36,860.92,5354.23,856.94,5350.08,855.88z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5354.76,872.65h3.64c0.45,0,0.81-0.36,0.81-0.81v-15.96C5355.06,856.94,5354.93,860.92,5354.76,872.65z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5332.75,809.69v5.22c0,0.45,0.36,0.81,0.81,0.81l6.95,0c0.52,0,0.9,0.48,0.79,0.98
				c-0.16,0.74-0.32,1.48-0.48,2.23c-0.08,0.37-0.41,0.64-0.79,0.64h-6.47c-0.45,0-0.81,0.36-0.81,0.81v15.79
				c0,0.45-0.36,0.81-0.81,0.81h-2.23c-0.45,0-0.81-0.36-0.81-0.81v-30.32c0-0.45,0.36-0.81,0.81-0.81h14.99
				c0.52,0,0.9,0.48,0.79,0.98c-0.16,0.74-0.32,1.48-0.48,2.23c-0.08,0.37-0.41,0.64-0.79,0.64l-10.66,0
				C5333.11,808.88,5332.75,809.24,5332.75,809.69z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5358.35,836.97h-2.19c-0.38,0-0.71-0.27-0.79-0.64l-0.06-0.3l-0.05-0.23c-0.47-2-2.04-3.73-4.17-4.49
				c-0.01,0-0.01,0-0.02-0.01l-3.22-0.95c-0.45-0.13-0.92,0.15-1.02,0.6l-1.17,5.38c-0.08,0.37-0.41,0.64-0.79,0.64h-2.19
				c-0.52,0-0.9-0.48-0.79-0.98c2.2-10.11,4.39-20.21,6.59-30.32c0.08-0.37,0.41-0.64,0.79-0.64h2.55c0.38,0,0.71,0.27,0.79,0.64
				c2.18,10.11,4.36,20.21,6.55,30.32C5359.25,836.49,5358.86,836.97,5358.35,836.97z M5353.48,827.61
				c-0.72-3.36-1.45-6.71-2.17-10.07c-0.18-0.85-1.4-0.85-1.58,0c-0.58,2.69-1.17,5.38-1.75,8.07c-0.09,0.41,0.16,0.83,0.56,0.95
				l3.76,1.11c0.26,0.09,0.51,0.19,0.76,0.3C5353.29,828.06,5353.54,827.86,5353.48,827.61z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M5344.7,872.65h-14.99c-0.45,0-0.81-0.36-0.81-0.81v-30.32c0-0.45,0.36-0.81,0.81-0.81h14.99
				c0.52,0,0.9,0.48,0.79,0.98c-0.16,0.74-0.32,1.48-0.48,2.23c-0.08,0.37-0.41,0.64-0.79,0.64h-10.66c-0.45,0-0.81,0.36-0.81,0.81
				v5.22c0,0.45,0.36,0.81,0.81,0.81h6.95c0.52,0,0.9,0.48,0.79,0.98c-0.16,0.74-0.32,1.48-0.48,2.23
				c-0.08,0.37-0.41,0.64-0.79,0.64h-6.47c-0.45,0-0.81,0.36-0.81,0.81V868c0,0.45,0.36,0.81,0.81,0.81h10.66
				c0.38,0,0.71,0.27,0.79,0.64c0.16,0.74,0.32,1.48,0.48,2.23C5345.61,872.18,5345.22,872.65,5344.7,872.65z"
        />
      </g>
    </svg>
  );
};
