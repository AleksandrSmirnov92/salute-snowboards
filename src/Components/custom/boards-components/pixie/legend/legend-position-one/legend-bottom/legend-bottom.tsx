interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
}
export const LegendBottom = ({ color, width, height }: IPropsLegendBottom) => {
  const scaleText = 1.0;
  const scale = 0.12;
  const positionLegendBottomX = 1860;
  const positionLegentBottomY = -160;
  const colorBottom = color;
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <g transform={`scale(${scale})`}>
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M883.2,3693.7v2.8h-13.1c-0.5,0-0.7,0.2-0.7,0.7c0,0.4,0.2,0.7,0.7,0.7h12.9c1.1,0,1.9-0.4,2.4-1.2l0.7-1
	c0.4-0.7,0.9-1.2,1.3-1.5c0.5-0.3,1.2-0.4,2.1-0.4h16.5c1.8,0,2.7,1.1,2.7,3.3c0,2.3-0.9,3.5-2.7,3.5h-15.6v-2.7h15.6
	c0.5,0,0.7-0.2,0.7-0.7c0-0.4-0.3-0.7-0.7-0.6h-15.5c-1.2,0-2,0.3-2.5,1l-0.7,1.1c-0.5,0.7-1,1.2-1.4,1.5s-1.2,0.4-2.2,0.4h-13.7
	c-1.7,0-2.6-1.2-2.6-3.5c0-2.2,0.9-3.3,2.6-3.3H883.2z"
        />
        <path
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M908.6,3680.4l-10.1,0.8l0,5.4l10.1,0.9v5.3l-41-4.9v-7.9l41-4.9C908.6,3675,908.6,3680.4,908.6,3680.4z
	 M894.9,3686.2v-4.7l-16.5,1.4l-6.5,0.7v0.4l6.5,0.7L894.9,3686.2z"
          fill={colorBottom}
        />
        <path
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          fill={colorBottom}
          d="M901,3662.7v-8.3h7.7v19.6h-41v-11.3L901,3662.7L901,3662.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M867.6,3647h38.6c1.6,0,2.5,1.3,2.5,3.4c0,2.1-0.9,3.4-2.5,3.4h-38.6v-2.7h38.5c0.4,0,0.7-0.2,0.7-0.7
	c0-0.4-0.2-0.6-0.7-0.6h-38.5V3647z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M867.6,3639.9h2v1.8h39v2.7h-39v1.8h-2V3639.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M883.1,3628v2.3h-13c-0.6,0-0.9,0.3-0.9,0.8c0,0.6,0.3,0.9,0.9,0.9h12.9c1.5,0,2.1-0.2,2.7-1.2l0.5-0.9
	c0.4-0.7,0.9-1.2,1.4-1.5c0.5-0.3,1.3-0.4,2.3-0.4h16.2c1.8,0,2.7,1,2.7,3.1c0,2.2-0.9,3.3-2.7,3.3h-15.4v-2.3h15.4
	c0.7,0,1-0.3,1-0.9c0-0.6-0.3-0.9-1-0.8h-15.3c-0.9,0-1.5,0-1.8,0.2c-0.4,0.1-0.7,0.4-1,0.8l-0.7,1.1c-0.5,0.8-1,1.3-1.5,1.6
	c-0.5,0.3-1.3,0.4-2.4,0.4H870c-1.7,0-2.5-1.1-2.5-3.2c0-2.1,0.8-3.1,2.5-3.1L883.1,3628L883.1,3628z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M867.6,3622v-2.3h41v2.3H888v1.8h20.7v2.3h-41v-2.3h18.6v-1.8H867.6z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M908.6,3613.9l-11.3,0.3v1.5l11.3,0.3v2.4l-41-1.4v-4l41-1.4V3613.9z M895.7,3615.6v-1.4l-19.7,0.5l-5.8,0.1
	v0.2l5.8,0.1L895.7,3615.6z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M894.4,3607.8h14.2v2.3h-41v-3.6c0-1.6,1-2.8,2.5-2.8h21.7c1.5,0,2.6,1.1,2.6,2.8L894.4,3607.8L894.4,3607.8z
	 M892.7,3606.8c0-0.5-0.3-0.8-0.9-0.8h-21.7c-0.6,0-0.8,0.3-0.8,0.8v1h23.4C892.7,3607.8,892.7,3606.8,892.7,3606.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M906.9,3599.7v-2h1.7v4.3h-41v-4.1h1.7v1.8h17v-1.9h1.7v1.9L906.9,3599.7L906.9,3599.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M883.1,3590.3v2.3h-13c-0.6,0-0.9,0.3-0.9,0.8c0,0.6,0.3,0.9,0.9,0.9h12.9c1.5,0,2.1-0.2,2.7-1.2l0.5-0.9
	c0.4-0.7,0.9-1.2,1.4-1.5c0.5-0.3,1.3-0.4,2.3-0.4h16.2c1.8,0,2.7,1,2.7,3.1c0,2.2-0.9,3.3-2.7,3.3h-15.4v-2.3h15.4
	c0.7,0,1-0.3,1-0.9c0-0.6-0.3-0.9-1-0.8h-15.3c-0.9,0-1.5,0-1.8,0.2c-0.4,0.1-0.7,0.4-1,0.8l-0.7,1.1c-0.5,0.8-1,1.3-1.5,1.6
	c-0.5,0.3-1.3,0.4-2.4,0.4H870c-1.7,0-2.5-1.1-2.5-3.2c0-2.1,0.8-3.1,2.5-3.1L883.1,3590.3L883.1,3590.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3571.3h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.4,0,0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.6s0.3,0.6,0.4,1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3v1.7h2.4V3571.3z
	 M872.2,3570.1v-1.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1
	c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H872.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3565.1h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.6,0,1.1,0.1,1.5,0.4s0.7,0.7,0.8,1.3l0,0.5v1.8h2.4V3565.1z M872.2,3563.9v-1.7c0-0.1,0-0.1,0-0.2
	c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2
	c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H872.2z M875.8,3561.1l-2.8,1.4l-0.3-1.2l3.1-1.5V3561.1z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.9,3555.7c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.3,1.1s-1.2,0.4-1.9,0.4s-1.4-0.1-1.9-0.4
	s-1-0.6-1.3-1.1s-0.5-1.1-0.5-1.8s0.2-1.3,0.5-1.8s0.7-0.9,1.3-1.2s1.2-0.4,1.9-0.4s1.4,0.1,1.9,0.4s1,0.7,1.3,1.2
	C875.8,3554.4,875.9,3555,875.9,3555.7z M874.8,3555.7c0-0.5-0.1-0.9-0.3-1.2s-0.5-0.5-0.9-0.7c-0.4-0.2-0.8-0.2-1.3-0.2
	c-0.5,0-1,0.1-1.3,0.2c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.3,0.7-0.3,1.2c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.7
	c0.4,0.2,0.8,0.2,1.3,0.2c0.5,0,1-0.1,1.3-0.2s0.7-0.4,0.9-0.7S874.8,3556.2,874.8,3555.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3551.4h-7v-4.2h1.2v3h1.7v-2.5h1.2v2.5h2.9V3551.4z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3546.2h-7v-1.2h7V3546.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3543.5h-7v-1.2h5.9v-3.1h1.1V3543.5z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3538.4h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3538.4z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M871.2,3532.4H870v-1.2h1.2V3532.4z M874.6,3532.4h-1.2v-1.2h1.2V3532.4z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3527.5h-7v-1.1l5-2.4l-5-2.4v-1.1h7v1.1h-4.5l4.5,2.1v0.5l-4.5,2.1h4.5V3527.5z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3519.2h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3519.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3513.5h-7v-2.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.3,0-0.5c0.1-0.6,0.3-1,0.6-1.4c0.3-0.4,0.7-0.7,1.2-0.9
	c0.5-0.2,1-0.3,1.6-0.3s1.1,0.1,1.6,0.3s0.9,0.5,1.2,0.9c0.3,0.4,0.5,0.9,0.6,1.4c0,0.2,0,0.3,0,0.5s0,0.3,0,0.3V3513.5z
	 M874.7,3512.3v-1c0-0.1,0-0.2,0-0.4s0-0.3,0-0.4c-0.1-0.3-0.2-0.6-0.4-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.1-1-0.1
	c-0.4,0-0.7,0.1-1.1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5s-0.4,0.5-0.4,0.8c0,0.1,0,0.2,0,0.4s0,0.3,0,0.4v1H874.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3506.6h-7v-1.2h7V3506.6z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.9,3501.2c0,0.6-0.1,1-0.3,1.5c-0.2,0.4-0.5,0.8-1,1c-0.4,0.2-0.9,0.4-1.4,0.4h-4.4l0-1.2h4.4
	c0.3,0,0.5,0,0.7-0.1s0.4-0.2,0.5-0.4c0.1-0.2,0.3-0.3,0.3-0.5s0.1-0.4,0.1-0.6c0-0.2,0-0.4-0.1-0.6c-0.1-0.2-0.2-0.4-0.3-0.5
	c-0.1-0.2-0.3-0.3-0.5-0.4c-0.2-0.1-0.4-0.1-0.7-0.1h-4.4v-1.2h4.4c0.6,0,1,0.1,1.4,0.4c0.4,0.2,0.7,0.6,1,1
	S875.9,3500.6,875.9,3501.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3497h-7v-1.1l5-2.4l-5-2.4v-1.1h7v1.1h-4.5l4.5,2.1v0.5l-4.5,2.1h4.5V3497z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.9,3483.8c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.3,1.1s-1.2,0.4-1.9,0.4s-1.4-0.1-1.9-0.4
	s-1-0.6-1.3-1.1s-0.5-1.1-0.5-1.8c0-0.8,0.2-1.5,0.6-2c0.4-0.5,0.9-0.9,1.6-1.1l0.3,1.2c-0.5,0.1-0.8,0.4-1.1,0.7
	c-0.3,0.3-0.4,0.8-0.4,1.3c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.7c0.4,0.2,0.8,0.2,1.3,0.2c0.5,0,1-0.1,1.3-0.2
	c0.4-0.2,0.7-0.4,0.9-0.7c0.2-0.3,0.3-0.7,0.3-1.2c0-0.5-0.1-0.9-0.4-1.3s-0.6-0.6-1.1-0.7l0.3-1.2c0.7,0.2,1.2,0.6,1.6,1.1
	C875.7,3482.3,875.9,3483,875.9,3483.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3480.3l-7-2.2v-1.7l7-2.2v1.2l-6.3,2v-0.3l6.3,2V3480.3z M874.3,3479.1h-1.1v-3.7h1.1V3479.1z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3473.3h-7v-1.1l5-2.4l-5-2.4v-1.1h7v1.1h-4.5l4.5,2.1v0.5l-4.5,2.1h4.5V3473.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3465h-7v-2.8c0-0.5,0.1-0.9,0.3-1.2c0.2-0.3,0.4-0.5,0.7-0.7c0.3-0.1,0.6-0.2,0.9-0.2
	c0.4,0,0.7,0.1,1,0.3c0.3,0.2,0.4,0.4,0.5,0.7H872c0.1-0.4,0.3-0.8,0.6-1c0.3-0.2,0.7-0.3,1.1-0.3c0.4,0,0.8,0.1,1.1,0.2
	c0.3,0.2,0.6,0.4,0.7,0.7c0.2,0.3,0.3,0.7,0.3,1.2V3465z M871.6,3463.8v-1.6c0-0.2,0-0.3-0.1-0.5c-0.1-0.1-0.2-0.2-0.3-0.3
	c-0.1-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.4,0.1-0.6,0.2c-0.2,0.2-0.2,0.4-0.2,0.7v1.6H871.6z M874.7,3463.8v-1.7c0-0.2,0-0.4-0.1-0.5
	c-0.1-0.2-0.2-0.3-0.3-0.4c-0.2-0.1-0.3-0.1-0.5-0.1c-0.2,0-0.4,0-0.5,0.1c-0.1,0.1-0.3,0.2-0.4,0.4s-0.1,0.3-0.1,0.6v1.8H874.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3458.9h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3458.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M875.8,3453.2h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.6,0,1.1,0.1,1.5,0.4s0.7,0.7,0.8,1.3l0,0.5v1.8h2.4V3453.2z M872.2,3452v-1.7c0-0.1,0-0.1,0-0.2
	c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2
	c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H872.2z M875.8,3449.2l-2.8,1.4l-0.3-1.2l3.1-1.5V3449.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.4,3568.7c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.4,0.7-0.8,1c-0.3,0.3-0.7,0.4-1.2,0.5l-0.2-1.2
	c0.4-0.1,0.7-0.3,1-0.6c0.2-0.3,0.3-0.7,0.3-1.1c0-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.1-0.3-0.2-0.5-0.2
	c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.1,0.1-0.2,0.2s-0.1,0.2-0.1,0.3l-0.5,1.8c0,0.2-0.1,0.3-0.2,0.5
	c-0.1,0.2-0.2,0.3-0.3,0.5c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.5,0.2-0.8,0.2c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.5-0.5-0.7-0.9
	c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.5,0.1-0.9,0.2-1.3c0.2-0.4,0.4-0.7,0.7-0.9c0.3-0.3,0.7-0.4,1.1-0.5l0.2,1.3
	c-0.2,0.1-0.5,0.2-0.6,0.3c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.2,0.4,0.3,0.5
	c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2s0.2-0.2,0.3-0.4c0.1-0.2,0.1-0.3,0.2-0.5l0.3-1.3c0-0.2,0.1-0.4,0.2-0.6
	c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.3-0.4,0.5-0.5s0.5-0.2,0.9-0.2c0.4,0,0.7,0.1,1,0.2s0.5,0.4,0.7,0.6c0.2,0.3,0.3,0.5,0.4,0.9
	C886.4,3568,886.4,3568.3,886.4,3568.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3564.9h-7v-1.2h2.9v-3.3h-2.9v-1.2h7v1.2h-3v3.3h3V3564.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3558.4l-7-2.2v-1.7l7-2.2v1.2l-6.3,2v-0.3l6.3,2V3558.4z M884.8,3557.2h-1.1v-3.7h1.1V3557.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3551.4h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.4,0,0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.6s0.3,0.6,0.4,1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3v1.7h2.4V3551.4z
	 M882.8,3550.2v-1.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1
	c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H882.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3545.2h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3545.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M881.7,3539.1h-1.2v-1.2h1.2V3539.1z M885.1,3539.1h-1.2v-1.2h1.2V3539.1z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3532.6h-5.9v2.3h-1.1v-5.7h1.1v2.3h5.9V3532.6z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3526.9l-7,2v-1.2l5-1.4l-5-1.4l0-1.2l5-1.4l-5-1.4v-1.2l7,2v1.2l-5,1.4l5,1.4V3526.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3518.8h-7v-1.2h7V3518.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3516.2h-7v-1.2l4.9-3.2h-4.9v-1.2h7v1.2l-4.9,3.2h4.9V3516.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.4,3504.7c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.4,0.7-0.8,1c-0.3,0.3-0.7,0.4-1.2,0.5l-0.2-1.2
	c0.4-0.1,0.7-0.3,1-0.6c0.2-0.3,0.3-0.7,0.3-1.1c0-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.1-0.3-0.2-0.5-0.2
	c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.1,0.1-0.2,0.2s-0.1,0.2-0.1,0.3l-0.5,1.8c0,0.2-0.1,0.3-0.2,0.5
	c-0.1,0.2-0.2,0.3-0.3,0.5c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.5,0.2-0.8,0.2c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.5-0.5-0.7-0.9
	c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.5,0.1-0.9,0.2-1.3c0.2-0.4,0.4-0.7,0.7-0.9c0.3-0.3,0.7-0.4,1.1-0.5l0.2,1.3
	c-0.2,0.1-0.5,0.2-0.6,0.3c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.2,0.4,0.3,0.5
	c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2s0.2-0.2,0.3-0.4c0.1-0.2,0.1-0.3,0.2-0.5l0.3-1.3c0-0.2,0.1-0.4,0.2-0.6
	c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.3-0.4,0.5-0.5s0.5-0.2,0.9-0.2c0.4,0,0.7,0.1,1,0.2s0.5,0.4,0.7,0.6c0.2,0.3,0.3,0.5,0.4,0.9
	C886.4,3504,886.4,3504.3,886.4,3504.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3500.9h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3500.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3495.2h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.6,0,1.1,0.1,1.5,0.4s0.7,0.7,0.8,1.3l0,0.5v1.8h2.4V3495.2z M882.8,3494v-1.7c0-0.1,0-0.1,0-0.2
	c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2
	c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H882.8z M886.3,3491.2l-2.8,1.4l-0.3-1.2l3.1-1.5V3491.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3488.7h-7v-1.2h7V3488.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.3,3486.1h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3486.1z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M886.4,3477.9c0,0.5-0.1,1-0.3,1.4c-0.2,0.4-0.4,0.7-0.8,1c-0.3,0.3-0.7,0.4-1.2,0.5l-0.2-1.2
	c0.4-0.1,0.7-0.3,1-0.6c0.2-0.3,0.3-0.7,0.3-1.1c0-0.2,0-0.5-0.1-0.7c-0.1-0.2-0.2-0.4-0.3-0.5c-0.1-0.1-0.3-0.2-0.5-0.2
	c-0.1,0-0.2,0-0.3,0c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.1,0.1-0.2,0.2s-0.1,0.2-0.1,0.3l-0.5,1.8c0,0.2-0.1,0.3-0.2,0.5
	c-0.1,0.2-0.2,0.3-0.3,0.5c-0.1,0.2-0.3,0.3-0.5,0.4c-0.2,0.1-0.5,0.2-0.8,0.2c-0.4,0-0.8-0.1-1.1-0.3c-0.3-0.2-0.5-0.5-0.7-0.9
	c-0.2-0.4-0.2-0.8-0.2-1.3c0-0.5,0.1-0.9,0.2-1.3c0.2-0.4,0.4-0.7,0.7-0.9c0.3-0.3,0.7-0.4,1.1-0.5l0.2,1.3
	c-0.2,0.1-0.5,0.2-0.6,0.3c-0.2,0.1-0.3,0.3-0.4,0.5c-0.1,0.2-0.1,0.4-0.1,0.7c0,0.2,0,0.4,0.1,0.6c0.1,0.2,0.2,0.4,0.3,0.5
	c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.3-0.1,0.4-0.2s0.2-0.2,0.3-0.4c0.1-0.2,0.1-0.3,0.2-0.5l0.3-1.3c0-0.2,0.1-0.4,0.2-0.6
	c0.1-0.2,0.2-0.4,0.3-0.6c0.1-0.2,0.3-0.4,0.5-0.5s0.5-0.2,0.9-0.2c0.4,0,0.7,0.1,1,0.2s0.5,0.4,0.7,0.6c0.2,0.3,0.3,0.5,0.4,0.9
	C886.4,3477.2,886.4,3477.5,886.4,3477.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3571.3h-7v-1.1l5-2.4l-5-2.4v-1.1h7v1.1h-4.5l4.5,2.1v0.5l-4.5,2.1h4.5V3571.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M897,3560c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.3,1.1s-1.2,0.4-1.9,0.4s-1.4-0.1-1.9-0.4s-1-0.6-1.3-1.1
	s-0.5-1.1-0.5-1.8s0.2-1.3,0.5-1.8s0.7-0.9,1.3-1.2s1.2-0.4,1.9-0.4s1.4,0.1,1.9,0.4s1,0.7,1.3,1.2
	C896.8,3558.7,897,3559.3,897,3560z M895.9,3560c0-0.5-0.1-0.9-0.3-1.2s-0.5-0.5-0.9-0.7c-0.4-0.2-0.8-0.2-1.3-0.2
	c-0.5,0-1,0.1-1.3,0.2c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.3,0.7-0.3,1.2c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.7
	c0.4,0.2,0.8,0.2,1.3,0.2c0.5,0,1-0.1,1.3-0.2s0.7-0.4,0.9-0.7S895.8,3560.5,895.9,3560z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3555.7h-7v-2.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.3,0-0.5c0.1-0.6,0.3-1,0.6-1.4c0.3-0.4,0.7-0.7,1.2-0.9
	c0.5-0.2,1-0.3,1.6-0.3s1.1,0.1,1.6,0.3s0.9,0.5,1.2,0.9c0.3,0.4,0.5,0.9,0.6,1.4c0,0.2,0,0.3,0,0.5s0,0.3,0,0.3V3555.7z
	 M895.7,3554.5v-1c0-0.1,0-0.2,0-0.4s0-0.3,0-0.4c-0.1-0.3-0.2-0.6-0.4-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.1-1-0.1
	c-0.4,0-0.7,0.1-1.1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5s-0.4,0.5-0.4,0.8c0,0.1,0,0.2,0,0.4s0,0.3,0,0.4v1H895.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3548.9h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3548.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3543.1h-7v-1.2h5.9v-3.1h1.1V3543.1z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M892.2,3537.7H891v-1.2h1.2V3537.7z M895.6,3537.7h-1.2v-1.2h1.2V3537.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3532.8h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.4,0,0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.6s0.3,0.6,0.4,1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3v1.7h2.4V3532.8z
	 M893.3,3531.6v-1.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1
	c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H893.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3526.5h-7v-1.2h7V3526.5z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3524.5l-3.5-2.4l-3.5,2.3v-1.4l2.5-1.6l-2.5-1.6v-1.4l3.5,2.3l3.5-2.4v1.4l-2.5,1.6l2.5,1.7V3524.5z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3517.4h-7v-1.2h7V3517.4z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3514.8h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3514.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3506h-5.7l0.8,1.3h-1.3l-0.8-1.3v-1.2h7V3506z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M896.8,3500h-1.2v3.1h-1.1l-4.7-2.2v-1.3l4.7,2.2v-1.8h-1.8v-1.2h1.8v-0.7h1.1v0.7h1.2V3500z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M897,3494.9c0,0.4-0.1,0.7-0.2,1s-0.4,0.6-0.6,0.8s-0.6,0.4-0.9,0.5l-0.3-1.1c0.2,0,0.3-0.1,0.5-0.2
	c0.1-0.1,0.2-0.3,0.3-0.4s0.1-0.3,0.1-0.5c0-0.2-0.1-0.4-0.2-0.6c-0.1-0.2-0.3-0.3-0.4-0.4c-0.2-0.1-0.4-0.2-0.6-0.2
	s-0.4,0.1-0.6,0.2c-0.2,0.1-0.3,0.3-0.4,0.4c-0.1,0.2-0.2,0.4-0.2,0.6c0,0.3,0,0.5,0.1,0.7c0.1,0.2,0.2,0.3,0.3,0.4l-0.3,1l-3.7-0.2
	v-3.8h1.1v3.2l-0.4-0.4l2.6,0.2l-0.3,0.2c-0.2-0.2-0.3-0.4-0.4-0.6c-0.1-0.2-0.1-0.5-0.1-0.7c0-0.4,0.1-0.8,0.3-1.2
	c0.2-0.3,0.5-0.6,0.8-0.8c0.3-0.2,0.7-0.3,1.2-0.3s0.8,0.1,1.2,0.3s0.6,0.5,0.8,0.9C896.9,3494.1,897,3494.5,897,3494.9z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3571.3h-7v-1.2h3.2l-3.2-2.8v-1.4l3.4,3l3.6-3.2v1.5l-3.3,2.9h3.3V3571.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3565h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3565z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3559.3h-7v-4.5h1.1v3.3h1.7v-2.8h1.1v2.8h2v-3.3h1.1V3559.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3553.7h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.4,0,0.7,0.1,1,0.2c0.3,0.1,0.6,0.3,0.8,0.6s0.3,0.6,0.4,1c0,0.1,0,0.2,0,0.3c0,0.1,0,0.2,0,0.3v1.7h2.4V3553.7z
	 M903.8,3552.5v-1.7c0-0.1,0-0.1,0-0.2c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1
	c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H903.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.5,3542.6c0,0.7-0.2,1.3-0.5,1.8c-0.3,0.5-0.7,0.9-1.3,1.1s-1.2,0.4-1.9,0.4s-1.4-0.1-1.9-0.4
	s-1-0.6-1.3-1.1s-0.5-1.1-0.5-1.8s0.2-1.3,0.5-1.8s0.7-0.9,1.3-1.2s1.2-0.4,1.9-0.4s1.4,0.1,1.9,0.4s1,0.7,1.3,1.2
	C907.3,3541.3,907.5,3541.9,907.5,3542.6z M906.4,3542.6c0-0.5-0.1-0.9-0.3-1.2s-0.5-0.5-0.9-0.7c-0.4-0.2-0.8-0.2-1.3-0.2
	c-0.5,0-1,0.1-1.3,0.2c-0.4,0.2-0.7,0.4-0.9,0.7c-0.2,0.3-0.3,0.7-0.3,1.2c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.7
	c0.4,0.2,0.8,0.2,1.3,0.2c0.5,0,1-0.1,1.3-0.2s0.7-0.4,0.9-0.7S906.4,3543,906.4,3542.6z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3538.2h-7v-1.2l4.9-3.2h-4.9v-1.2h7v1.2l-4.9,3.2h4.9V3538.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3529.3h-7v-2.9c0-0.1,0-0.2,0-0.3c0-0.1,0-0.2,0-0.3c0.1-0.4,0.2-0.7,0.4-1s0.5-0.5,0.8-0.6
	s0.7-0.2,1.1-0.2c0.6,0,1.1,0.1,1.5,0.4s0.7,0.7,0.8,1.3l0,0.5v1.8h2.4V3529.3z M903.8,3528.2v-1.7c0-0.1,0-0.1,0-0.2
	c0-0.1,0-0.2,0-0.2c0-0.2-0.1-0.3-0.3-0.5c-0.1-0.1-0.3-0.2-0.4-0.2s-0.3-0.1-0.5-0.1c-0.1,0-0.3,0-0.5,0.1c-0.2,0-0.3,0.1-0.4,0.2
	c-0.1,0.1-0.2,0.3-0.3,0.5c0,0.1,0,0.1,0,0.2c0,0.1,0,0.2,0,0.2v1.7H903.8z M907.3,3525.3l-2.8,1.4l-0.3-1.2l3.1-1.5V3525.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3522.8h-7v-1.2h7V3522.8z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3520.2h-7v-2.2c0-0.1,0-0.2,0-0.3c0-0.2,0-0.3,0-0.5c0.1-0.6,0.3-1,0.6-1.4c0.3-0.4,0.7-0.7,1.2-0.9
	c0.5-0.2,1-0.3,1.6-0.3s1.1,0.1,1.6,0.3s0.9,0.5,1.2,0.9c0.3,0.4,0.5,0.9,0.6,1.4c0,0.2,0,0.3,0,0.5s0,0.3,0,0.3V3520.2z
	 M906.2,3519v-1c0-0.1,0-0.2,0-0.4s0-0.3,0-0.4c-0.1-0.3-0.2-0.6-0.4-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.1-1-0.1
	c-0.4,0-0.7,0.1-1.1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5s-0.4,0.5-0.4,0.8c0,0.1,0,0.2,0,0.4s0,0.3,0,0.4v1H906.2z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3513.3h-7v-1.2h7V3513.3z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.3,3510.7h-7v-1.2l4.9-3.2h-4.9v-1.2h7v1.2l-4.9,3.2h4.9V3510.7z"
        />
        <path
          fill={colorBottom}
          transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
          d="M907.5,3500.8c0,0.5-0.1,0.9-0.2,1.3s-0.4,0.7-0.7,1c-0.3,0.3-0.7,0.5-1.1,0.7c-0.5,0.2-1,0.3-1.6,0.3
	c-0.8,0-1.4-0.1-2-0.4c-0.5-0.3-1-0.7-1.2-1.2c-0.3-0.5-0.4-1.1-0.4-1.7c0-0.9,0.2-1.5,0.6-2s1-0.8,1.7-1l0.2,1.2
	c-0.4,0.1-0.7,0.3-1,0.7c-0.2,0.3-0.4,0.7-0.4,1.2c0,0.5,0.1,0.9,0.3,1.2c0.2,0.3,0.5,0.5,0.9,0.7c0.4,0.2,0.8,0.2,1.3,0.2
	c0.5,0,1-0.1,1.3-0.2s0.7-0.4,0.9-0.7s0.3-0.7,0.3-1.2c0-0.4-0.1-0.7-0.2-0.9s-0.3-0.5-0.6-0.7c-0.3-0.2-0.6-0.3-1-0.3v1.2h-0.9
	v-2.5c0.1,0,0.1,0,0.2,0c0.1,0,0.2,0,0.2,0c0.7,0,1.2,0.1,1.8,0.4c0.5,0.3,0.9,0.6,1.2,1.1C907.3,3499.6,907.5,3500.2,907.5,3500.8z
	"
        />
        <g>
          <rect
            x={887.5 + positionLegendBottomX + 19}
            y={3396.8 + positionLegentBottomY + 9.7}
            width="2.3"
            height="22"
            fill={colorBottom}
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="880.7,3416.3 882.7,3418 870.2,3428.1 868.2,3426.5 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="882.7,3416.4 880.7,3418 868.2,3407.8 870.2,3406.2 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="886.5,3416.3 888.5,3417.9 876,3428.1 874,3426.4 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="888.5,3416.3 886.5,3417.9 874,3407.8 876,3406.2 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="892.4,3416.4 894.4,3418 881.9,3428.1 879.9,3426.5 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="894.4,3416.4 892.4,3418 879.9,3407.8 881.9,3406.2 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="898.4,3416.4 900.4,3418 887.8,3428.1 885.9,3426.5 "
          />
          <polygon
            fill={colorBottom}
            transform={`matrix(${scaleText} 0 0 ${scaleText} ${positionLegendBottomX},${positionLegentBottomY})`}
            points="900.4,3416.4 898.4,3418 885.9,3407.8 887.8,3406.2 "
          />
          <rect
            x={896.7 + positionLegendBottomX - 30}
            y={3415.6 + positionLegentBottomY}
            width="40"
            height="2.8"
            fill={colorBottom}
          />
          <rect
            x={867.5 + positionLegendBottomX}
            y={3579.7 + positionLegentBottomY}
            width="41.29"
            height="2.8"
            fill={colorBottom}
          />
          <rect
            x={867.7 + positionLegendBottomX}
            y={3436.9 + positionLegentBottomY}
            width="41.29"
            height="2.8"
            fill={colorBottom}
          />
        </g>
      </g>
    </svg>
  );
};
