import { ILegent } from '../../../../store/contracts';
import { SnowboardInserts } from '../../../custom/snowboards-inserts/snowboard-inserts';
import { LegendPositionOne } from './legend/legend-position-one/legend';
import { StraightLineBottom } from './straight-line/straight-line-bottom';
import { StraightLineTop } from './straight-line/straight-line-top';

interface IProps {
  colorShape: string;
  isFigureTopActive: boolean;
  straightLineTopColor: string;
  isFigureBottomActive: boolean;
  straightLineBottomColor: string;
  legend: ILegent;
}
export const BoardPixieSvg = ({
  colorShape,
  isFigureTopActive,
  straightLineTopColor,
  isFigureBottomActive,
  straightLineBottomColor,
  legend,
}: IProps) => {
  const scaleBoard = 0.225;
  const width = 600;
  const height = 600;
  const strokeWidthBoard = 1;
  const translateX = 250;
  const translateY = 30;
  const viewBoxWidth = 600;
  const viewBoxHeight = 600;

  const currentLegend = (): JSX.Element | undefined => {
    switch (legend.pos) {
      case 'Not selected': {
        return;
      }
      case 'Position1': {
        return (
          <LegendPositionOne
            width={width}
            height={height}
            colorLegend={legend.colorLegend}
            backgroundColor={colorShape}
          />
        );
      }
      default: {
        return;
      }
    }
  };
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      className="w-full h-screen min-h-[500px]"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <g transform={`translate(${0}, ${0})`}>
        <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard})`}>
          <path
            d="M202 16l-27 2-17 4-16 7-15 9-12 9-14 12-17 17-9 11-13 17-11 19-10 23-9 25-7 26-4 24-2 24v44l5 78 6 97 5 95 4 91 3 85 3 121 1 61v224l-2 106-3 103-4 103-6 120-6 100-5 72-1 19v44l2 25 5 28 8 28 10 26 12 25 12 18 9 11 12 14 12 12 8 7 17 13 13 8 17 8 16 4 16 2 18 1h19l19-1 20-3 16-5 19-10 14-10 11-9 16-15 12-13 11-14 10-15 12-23 9-23 7-21 6-25 3-19 2-27v-35l-2-36-8-123-7-133-4-97-3-92-2-80-1-67v-238l2-104 3-100 4-102 5-102 7-117 5-72 1-23v-34l-2-28-5-29-8-28-10-26-12-25-9-14-10-13-12-14-17-17-11-9-12-9-15-9-11-5-12-4-20-3-20-1z"
            fill={colorShape}
            stroke="black"
            strokeWidth={strokeWidthBoard}
          />
        </g>
        <SnowboardInserts
          color="black"
          translateCircleX={180}
          translateCircleY={55}
          translateCircle2Y={225}
          numberOfRows={5}
          numberOfColumns={2}
          viewBoxWidth={viewBoxWidth}
          viewBoxHeight={viewBoxHeight}
          powMode={false}
        />
        {isFigureTopActive && <StraightLineTop width={width} height={height} color={straightLineTopColor} />}
        {isFigureBottomActive && <StraightLineBottom width={width} height={height} color={straightLineBottomColor} />}
        {currentLegend()}
      </g>
    </svg>
  );
};
