interface IPropsLegendTop {
  color: string;
  width: number;
  height: number;
}
export const LegendTopFae = ({ color, width, height }: IPropsLegendTop) => {
  const scaleText = 1.0;
  const scale = 0.1;
  const colorTop = color;
  const positionLegendTopX = 2420;
  const positionLegentTopY = 500;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform={`scale(${scale})`}>
        <g>
          <path
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            d="M210.81,788.33v-43.66h15.37v2.17h-13.19v17.27h10.92v2.19h-10.92v22.02H210.81z"
          />
          <g>
            <polygon
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              points="224.63,788.33 226.24,788.33 235.82,744.67 233.87,744.67 		"
            />
            <path
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              d="M247.05,788.33h3.5l-9.11-43.66h-4.48l-9.24,43.66h3.42l2.44-12.06h11.01L247.05,788.33z M234.2,773.2
			l4.86-24.01l4.9,24.01H234.2z"
            />
            <polygon
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              points="232.73,744.67 230.84,744.67 221.73,788.33 223.15,788.33 		"
            />
          </g>
          <g>
            <path
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              d="M211.18,835.18v-41.72h24.62v3.07h-13.94v14.98h12.48v3.07h-12.48v17.52h13.94v3.07H211.18z"
            />
          </g>
          <rect
            x="225.22"
            y="773.2"
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            width="6.69"
            height="3.07"
          />
          <path
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            d="M252.45,813.01c-6.33,1.17-6.81,2.48-7.18,22.11c0,0.09-0.07,0.09-0.07,0c-0.37-19.63-0.85-20.94-7.18-22.11
		c-0.04-0.01-0.04-0.12,0-0.13c6.33-1.17,6.81-0.14,7.18-19.77c0-0.09,0.07-0.09,0.07,0c0.37,19.63,0.85,18.6,7.18,19.77
		C252.5,812.88,252.5,813,252.45,813.01z"
          />
          <g>
            <path
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              d="M215.29,877.45V858.4l-3.69,2.51v-3.05l3.69-2.48h2.46v22.08H215.29z"
            />
            <path
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              d="M229.05,877.88c-0.97,0-1.87-0.2-2.71-0.61c-0.83-0.4-1.55-0.98-2.16-1.72c-0.6-0.74-1.05-1.62-1.33-2.64
			l2.33-0.75c0.3,1.02,0.8,1.8,1.5,2.33c0.7,0.53,1.48,0.79,2.35,0.78c0.8-0.02,1.49-0.23,2.07-0.62c0.58-0.39,1.04-0.93,1.36-1.62
			c0.32-0.68,0.48-1.48,0.48-2.38c0-1.36-0.36-2.47-1.09-3.33s-1.68-1.29-2.86-1.29c-0.33,0-0.67,0.05-1.03,0.16s-0.69,0.25-1,0.42
			l-1.17-2.16l7.27-7.4l0.31,0.92h-9.75v-2.61h11.55V858l-6.19,6.68l-0.03-0.97c1.3-0.09,2.43,0.15,3.4,0.73
			c0.97,0.58,1.73,1.41,2.27,2.49s0.81,2.33,0.81,3.73c0,1.41-0.28,2.66-0.84,3.74c-0.56,1.08-1.32,1.93-2.29,2.55
			C231.36,877.57,230.27,877.88,229.05,877.88z"
            />
            <path
              fill={colorTop}
              transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
              d="M246.36,877.91c-1.27,0-2.4-0.32-3.39-0.97s-1.78-1.53-2.35-2.65c-0.58-1.12-0.86-2.39-0.86-3.83v-8.09
			c0-1.43,0.29-2.71,0.86-3.82c0.58-1.12,1.36-2,2.35-2.65c0.99-0.65,2.12-0.97,3.39-0.97c1.27,0,2.4,0.32,3.4,0.97
			c1,0.65,1.78,1.53,2.35,2.65c0.57,1.12,0.86,2.39,0.86,3.82v8.09c0,1.43-0.29,2.71-0.86,3.83c-0.57,1.12-1.36,2-2.35,2.65
			C248.76,877.59,247.63,877.91,246.36,877.91z M246.36,875.29c0.77,0,1.47-0.21,2.1-0.63c0.63-0.42,1.12-0.98,1.5-1.69
			c0.37-0.71,0.56-1.49,0.56-2.35v-8.42c0-0.86-0.19-1.64-0.56-2.35c-0.37-0.71-0.87-1.27-1.5-1.69c-0.63-0.42-1.32-0.63-2.1-0.63
			c-0.76,0-1.46,0.21-2.09,0.63c-0.63,0.42-1.13,0.98-1.5,1.69c-0.37,0.71-0.56,1.5-0.56,2.35v8.42c0,0.86,0.19,1.64,0.56,2.35
			c0.37,0.71,0.87,1.28,1.5,1.69S245.6,875.29,246.36,875.29z"
            />
          </g>
          <rect
            x="210.95"
            y="844.41"
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            width="41.53"
            height="2.35"
          />
        </g>
      </g>
    </svg>
  );
};
