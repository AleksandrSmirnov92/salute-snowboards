import { ILegent } from '../../../../store/contracts';
import { SnowboardInserts } from '../../../custom/snowboards-inserts/snowboard-inserts';
import { LightningBottom } from './figure/lightning-bottom';
import { LightningTop } from './figure/lightning-top';
import { LegendPositionOne } from './legend/legend-position-one/legend';

interface IProps {
  colorShapeOut: string;
  colorShapeInner: string;
  legend: ILegent;
  isFigureTopActive: boolean;
  isFigureBottomActive: boolean;
  figureTopColor: string;
  figureBottomColor: string;
}

export const BoardUnitSvg = ({
  colorShapeOut,
  colorShapeInner,
  legend,
  isFigureTopActive,
  figureTopColor,
  isFigureBottomActive,
  figureBottomColor,
}: IProps) => {
  const scaleBoard = 0.116;

  const width = 600;
  const height = 600;
  const strokeWidthBoard = 1;
  const translateX = 240;
  const translateY = 30;
  const viewBoxWidth = 600;
  const viewBoxHeight = 600;

  const currentLegend = (): JSX.Element | undefined => {
    switch (legend.pos) {
      case 'Not selected': {
        return;
      }
      case 'Position1': {
        return <LegendPositionOne width={width} height={height} colorLegend={legend.colorLegend} />;
      }
      default: {
        return;
      }
    }
  };
  return (
    <svg
      version="1.1"
      className="w-full h-screen min-h-[500px]"
      xmlns="http://www.w3.org/2000/svg"
      width={'100%'}
      height={'100%'}
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform={`translate(${0}, ${0}) `}>
        <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard})`}>
          <path
            fill={colorShapeOut}
            stroke="black"
            strokeWidth={strokeWidthBoard}
            d="M816.43,2097.62c7.5,382,31.07,789.59,61.33,1170.29c1.43,43.4,1.21,88.75-0.84,132.13
		c-2.05,40.86-9.17,81.61-21.73,120.56c-13.6,42.24-32.77,82.84-52.71,122.4c-17.58,33.62-36.02,67.57-59.97,97.15
		c-24.95,30.75-62.6,47.11-98.91,60.48c-118.91,42.87-272.73,34.31-380.23-34.63c-50.36-33.08-108.36-160.92-131.45-219.51
		c-22.79-57.99-31.71-120.46-32.06-182.54c-0.74-31.23-0.61-64.84,0.45-96.04c28.75-363.31,52.08-755.38,60.18-1119.82
		c10.51-493.52-31-1003.77-61.11-1495.84c-1.4-121.85,9.11-191.57,64.3-302.85c16.38-33.63,34.13-67.29,55.02-98.38
		c10.64-15.66,22.31-31.06,37.21-42.93c23.21-18.4,50.96-30.1,78.55-40.25c61.41-22.18,127.68-29.62,192.66-24.68
		c63.57,4.92,140.18,25.24,192.34,62.82c26.15,20.2,43.25,49.44,60.05,77.33c37.48,67.07,72.61,137.49,88.42,213.17
		c13.27,66.76,11.07,136.33,9.83,204.08C842.42,1158.88,812.86,1637.89,816.43,2097.62"
          />
        </g>
        <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard})`}>
          <path
            fill={colorShapeInner}
            stroke="black"
            strokeWidth={strokeWidthBoard}
            d="M768.79,2093.26c6.41,367.31,26.55,759.23,52.4,1125.28c1.22,41.73,1.04,85.33-0.72,127.05
		c-1.75,39.28-7.83,78.47-18.57,115.92c-11.62,40.61-28,79.65-45.04,117.69c-15.02,32.33-30.78,64.97-51.25,93.41
		c-21.32,29.57-53.49,45.3-84.52,58.15c-101.61,41.23-233.06,32.99-324.92-33.3c-43.03-31.81-92.6-154.73-112.33-211.07
		c-19.48-55.76-27.1-115.83-27.39-175.52c-0.63-30.03-0.52-62.34,0.38-92.35c24.57-349.34,44.5-726.32,51.43-1076.75
		c8.98-474.54-26.49-965.16-52.22-1438.31c-1.19-117.16,7.78-184.2,54.95-291.2c14-32.34,29.17-64.7,47.02-94.59
		c9.09-15.06,19.06-29.87,31.8-41.28c19.83-17.69,43.55-28.94,67.13-38.7c52.47-21.33,109.11-28.48,164.63-23.74
		c54.33,4.73,119.79,24.27,164.36,60.4c22.35,19.42,36.96,47.54,51.32,74.36c32.03,64.49,62.04,132.2,75.55,204.97
		c11.34,64.19,9.46,131.09,8.4,196.23C791,1190.63,765.74,1651.22,768.79,2093.26"
          />
        </g>
        <SnowboardInserts
          color="black"
          translateCircleX={179}
          translateCircleY={60}
          translateCircle2Y={215}
          numberOfRows={5}
          numberOfColumns={2}
          viewBoxWidth={viewBoxWidth}
          viewBoxHeight={viewBoxHeight}
          bcfr={false}
        />
        {isFigureTopActive && <LightningTop width={width} height={height} color={figureTopColor} />}
        {isFigureBottomActive && <LightningBottom width={width} height={height} color={figureBottomColor} />}
        {currentLegend()}
      </g>
    </svg>
  );
};
