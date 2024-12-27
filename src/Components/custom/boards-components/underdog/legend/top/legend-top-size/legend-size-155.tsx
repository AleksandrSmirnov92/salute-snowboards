interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendSize155 = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.1;
  const colorTop = color;
  const positionLegendTopX = 1210;
  const positionLegentTopY = 500;
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
        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="1453.34,840.12 1413.18,840.12 1410.82,836.72 1450.98,836.72 		"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1423.91,842.97v38.4h-3.25v-34.76h-3.25v-3.64H1423.91z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1438.63,846.62h-8.36v11.11h4.59c2.52,0,3.77,1.63,3.77,4.88v13.89c0,3.25-1.26,4.88-3.77,4.88h-4.11
            c-2.52,0-3.77-1.63-3.77-4.88v-6.98h3.3v6.3c0,0.82,0.09,1.35,0.26,1.57c0.17,0.23,0.58,0.34,1.22,0.34h2.1
            c0.64,0,1.04-0.11,1.22-0.34c0.17-0.23,0.26-0.75,0.26-1.57v-12.53c0-0.78-0.09-1.3-0.26-1.54c-0.18-0.25-0.58-0.37-1.22-0.37
            h-6.88v-18.4h11.66V846.62z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1453.32,846.62h-8.36v11.11h4.59c2.52,0,3.77,1.63,3.77,4.88v13.89c0,3.25-1.26,4.88-3.77,4.88h-4.11
            c-2.52,0-3.77-1.63-3.77-4.88v-6.98h3.3v6.3c0,0.82,0.09,1.35,0.26,1.57c0.17,0.23,0.58,0.34,1.22,0.34h2.1
            c0.64,0,1.04-0.11,1.22-0.34c0.17-0.23,0.26-0.75,0.26-1.57v-12.53c0-0.78-0.09-1.3-0.26-1.54c-0.18-0.25-0.58-0.37-1.22-0.37
            h-6.88v-18.4h11.66V846.62z"
        />

        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1450.64,718v3.31h-34.71c-3.37,0-5.05-1.28-5.05-3.84v-4.96c0-2.56,1.68-3.84,5.05-3.84h34.71v3.31h-34
          c-0.85,0-1.4,0.1-1.63,0.29c-0.23,0.19-0.35,0.6-0.35,1.22v3.02c0,0.62,0.12,1.02,0.35,1.22c0.23,0.19,0.78,0.29,1.63,0.29
          H1450.64z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1450.64,734.33v3.06h-39.76v-3.65l30.81-6.27h-30.81v-3.06h39.76v3.89l-29.72,6.03H1450.64z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1450.64,740.48v9.58c0,2.56-1.68,3.84-5.05,3.84h-29.66c-3.37,0-5.05-1.28-5.05-3.84v-9.58H1450.64z
           M1416.64,750.55h28.25c0.85,0,1.4-0.1,1.63-0.29c0.23-0.19,0.35-0.6,0.35-1.22v-5.2h-32.22v5.2c0,0.62,0.12,1.02,0.35,1.22
          C1415.24,750.45,1415.78,750.55,1416.64,750.55z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1414.66,760.34v8.32h-3.77v-11.67h39.76v11.33h-3.77v-7.98h-13.42v6.52h-3.77v-6.52H1414.66z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1427.5,775.05h-16.62v-3.31h39.76v8.8c0,2.56-1.68,3.84-5.05,3.84h-13.04c-3.03,0-4.69-1.01-4.99-3.02
          l-16.68,4.57v-3.6l16.62-4.43V775.05z M1446.87,775.05h-15.6v4.52c0,0.65,0.12,1.06,0.35,1.24c0.23,0.18,0.78,0.27,1.63,0.27
          h11.63c0.85,0,1.4-0.09,1.63-0.27c0.23-0.18,0.35-0.59,0.35-1.24V775.05z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1450.64,789.05v9.58c0,2.56-1.68,3.84-5.05,3.84h-29.66c-3.37,0-5.05-1.28-5.05-3.84v-9.58H1450.64z
           M1416.64,799.11h28.25c0.85,0,1.4-0.1,1.63-0.29c0.23-0.19,0.35-0.6,0.35-1.22v-5.2h-32.22v5.2c0,0.62,0.12,1.02,0.35,1.22
          C1415.24,799.02,1415.78,799.11,1416.64,799.11z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1450.64,809.4v4.96c0,2.56-1.68,3.84-5.05,3.84h-29.66c-3.37,0-5.05-1.28-5.05-3.84v-4.96
          c0-2.56,1.68-3.84,5.05-3.84h29.66C1448.96,805.56,1450.64,806.84,1450.64,809.4z M1416.64,814.9h28.25c0.85,0,1.4-0.1,1.63-0.29
          c0.23-0.19,0.35-0.6,0.35-1.22v-3.02c0-0.62-0.12-1.02-0.35-1.22c-0.23-0.19-0.78-0.29-1.63-0.29h-28.25
          c-0.85,0-1.4,0.1-1.63,0.29c-0.23,0.19-0.35,0.6-0.35,1.22v3.02c0,0.62,0.12,1.02,0.35,1.22
          C1415.24,814.8,1415.78,814.9,1416.64,814.9z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M1439.52,833.69v-3.36h5.37c0.85,0,1.4-0.1,1.63-0.29c0.23-0.19,0.35-0.6,0.35-1.22v-2.67
          c0-0.65-0.12-1.06-0.35-1.24c-0.23-0.18-0.78-0.27-1.63-0.27h-28.32c-0.81,0-1.34,0.09-1.6,0.27c-0.26,0.18-0.38,0.59-0.38,1.24
          v2.67c0,0.62,0.13,1.02,0.38,1.22c0.26,0.19,0.79,0.29,1.6,0.29h10.55v-2.43h3.77v5.79h-15.02c-3.37,0-5.05-1.28-5.05-3.84v-4.72
          c0-2.56,1.68-3.84,5.05-3.84h29.72c3.37,0,5.05,1.28,5.05,3.84v4.72c0,2.56-1.68,3.84-5.05,3.84H1439.52z"
        />
      </g>
    </svg>
  );
};
