interface IPropsLegendTop {
  color: string;
  width: number;
  height: number;
}
export const LegendTop = ({ color, width, height }: IPropsLegendTop) => {
  const scaleText = 1.0;
  const scale = 0.1;
  const colorTop = color;
  const positionLegendTopX = 2410;
  const positionLegentTopY = 100;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform={`scale(${scale})`}>
        <g>
          <path
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            d="M224.1,866.8h-3.9l0-36.9h3.9V866.8z"
          />
          <path
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            d="M244.3,854.8l6.8,12h-4.5l-4.5-8.1l-4.5,8.1h-4.5l6.8-12l-14.1-24.8h4.5l11.9,20.8l11.8-20.8h4.5L244.3,854.8z
		"
          />
          <path
            fill={colorTop}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
            d="M262.8,866.8h-3.9v-36.9h3.9V866.8z"
          />
        </g>
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M262.8,908.5c0,2.7-0.7,5.4-2,8.1c-2.6,5.4-7.1,8.1-13.6,8.1c-6.4,0-11-2.7-13.6-8.1c-1.3-2.7-2-5.4-2-8.1v-9.3
	h-11.4v-4.4h42.5V908.5z M258.3,899.3H236v9.3c0,2.1,0.5,4.1,1.5,6c1.9,3.7,5.1,5.6,9.7,5.6c4.6,0,7.8-1.9,9.7-5.6
	c1-2,1.5-4,1.5-6.1V899.3z"
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M234.1,954.1l-13.9,7.9v-5.2l9.3-5.2l-9.3-5.2V941l13.9,7.9l28.7-16.2v5.2l-24,13.7l24,13.6v5.2L234.1,954.1z"
        />
        <g>
          <rect
            x={258.3 + positionLegendTopX}
            y={926.5 + positionLegentTopY}
            width="4.4"
            height="4.4"
            fill={colorTop}
          />
          <rect
            x={220.3 + positionLegendTopX}
            y={926.5 + positionLegentTopY}
            width="35.6"
            height="4.4"
            fill={colorTop}
          />
        </g>
        <g>
          <rect x={258.3 + positionLegendTopX} y={971 + positionLegentTopY} width="4.4" height="4.4" fill={colorTop} />
          <rect x={220.3 + positionLegendTopX} y={971 + positionLegentTopY} width="35.6" height="4.4" fill={colorTop} />
        </g>
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M258.3,984.2v22.3c0,0.3,0.2,0.6,0.5,0.6h3.3c0.3,0,0.5-0.3,0.5-0.6v-27c0-0.3-0.2-0.6-0.5-0.6l-38.1,0h-2.8
	h-0.5c-0.3,0-0.5,0.3-0.5,0.6l0,27c0,0.3,0.2,0.6,0.5,0.6h3.3c0.3,0,0.5-0.3,0.5-0.6v-22.9l14.9,0v15.6c0,0.3,0.2,0.6,0.5,0.6h3.3
	c0.3,0,0.5-0.3,0.5-0.6l0-15.6h13.8C258.1,983.6,258.3,983.9,258.3,984.2z"
        />
        <rect
          x={220.3 + positionLegendTopX}
          y={1018.7 + positionLegentTopY}
          width="42.5"
          height="2.8"
          fill={colorTop}
        />
        <rect x={220.3 + positionLegendTopX} y={880.8 + positionLegentTopY} width="42.5" height="2.8" fill={colorTop} />
        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="220.3,1039.2 220.3,1042.6 224.1,1040 224.1,1060.8 226.8,1060.8 226.8,1036.3 224.6,1036.3 "
        />
        <polygon
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          points="243.5,1045.8 240.8,1045.8 240.8,1053 234.1,1053 241.1,1036.3 238.2,1036.3 230.9,1053.6 
	230.9,1055.9 240.8,1055.9 240.8,1060.8 243.5,1060.8 243.5,1055.9 245.9,1055.9 245.9,1053 243.5,1053 "
        />
        <path
          fill={colorTop}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendTopX},${positionLegentTopY})`}
          d="M261.8,1048.3c-0.7-1.2-1.6-2.2-2.7-3c-1.1-0.8-2.4-1.1-3.8-1.1c-1.2,0-2.3,0.3-3.4,0.9
	c-0.2,0.1-0.4,0.2-0.6,0.3l0.4-6.4h9.6v-2.8h-12.1l-0.7,12.7l2.2,1.5l0.4-0.7c0.4-0.8,1-1.5,1.7-2c0.7-0.5,1.5-0.7,2.4-0.7
	c0.9,0,1.6,0.2,2.3,0.7c0.7,0.5,1.3,1.1,1.8,2c0.5,0.8,0.7,1.8,0.7,2.8c0,1-0.2,1.9-0.6,2.8c-0.4,0.8-1,1.5-1.7,2
	c-0.7,0.5-1.5,0.7-2.4,0.7c-0.7,0-1.4-0.2-2-0.5c-0.6-0.3-1.2-0.8-1.7-1.4c-0.5-0.6-0.8-1.3-1-2.2l-0.2-0.8l-2.6,0.8l0.2,0.7
	c0.3,1.2,0.8,2.2,1.4,3.2c0.7,0.9,1.5,1.7,2.5,2.2c1,0.5,2.1,0.8,3.3,0.8c1.4,0,2.7-0.4,3.8-1.2c1.1-0.8,2-1.8,2.7-3
	c0.7-1.2,1-2.6,1-4.1C262.8,1051,262.5,1049.6,261.8,1048.3z"
        />
      </g>
    </svg>
  );
};
