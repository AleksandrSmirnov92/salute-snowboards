import { forwardRef } from 'react';

import { SnowboardInserts } from '../../snowboards-inserts/snowboard-inserts';
import { LegendVersionOne } from './legend-position-one/legend';
import { StraightLineBottom } from './straight-line/straight-line-bottom';
import { StraightLineTop } from './straight-line/straight-line-top';
import { ILegent } from '../../../types/types';

interface IProps {
  isBack: boolean;
  colorShapeFront: string;
  colorShapeBack: string;
  isFigureTopActive: boolean;
  straightLineTopColor: string;
  isFigureBottomActive: boolean;
  straightLineBottomColor: string;
  legend: ILegent;
  modelSize: number;
  rotation: number;
}
const darkenColor = (hex: string, amount: number) => {
  let color = parseInt(hex.slice(1), 16);
  let r = Math.max((color >> 16) - amount, 0);
  let g = Math.max(((color >> 8) & 0x00ff) - amount, 0);
  let b = Math.max((color & 0x0000ff) - amount, 0);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};
export const BoardPixieSvg = forwardRef(
  (
    {
      colorShapeFront,
      colorShapeBack,
      isFigureTopActive,
      straightLineTopColor,
      isFigureBottomActive,
      straightLineBottomColor,
      legend,
      modelSize,
      rotation,
      isBack,
    }: IProps,
    ref: any,
  ) => {
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
        case 'Version1': {
          return (
            <LegendVersionOne
              width={width}
              height={height}
              colorLegend={legend.colorLegend}
              backgroundColor={colorShapeFront}
              modelSize={modelSize}
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
        ref={ref}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width={600}
        height={600}
        className={`w-full h-screen min-h-screen`}
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid slice"
        style={{
          transform: `rotateY(${rotation}deg)`, // Применяем стиль с углом
          transition: 'transform 1s ease-in-out', // Плавная анимация
          transformStyle: 'preserve-3d', // Сохраняем 3D-преобразования
        }}
      >
        <defs>
          <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={colorShapeBack} stopOpacity={'0.8'} />
            <stop offset="2%" stopColor={colorShapeBack} stopOpacity={'0.8'} />
            <stop offset="5%" stopColor={colorShapeBack} stopOpacity={'0.8'} />
            <stop offset="9%" stopColor={colorShapeBack} stopOpacity={'0.75'} />
            <stop offset="14%" stopColor={colorShapeBack} stopOpacity={'1'} />
            <stop offset="82%" stopColor={colorShapeBack} stopOpacity={'1'} />
            <stop offset="93%" stopColor={colorShapeBack} stopOpacity={'0.6'} />
            <stop offset="100" stopColor={colorShapeBack} stopOpacity={'0.6'} />
          </linearGradient>
        </defs>
        <defs>
          <linearGradient id="gradient-fill2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={darkenColor(colorShapeFront, 52)} stopOpacity="1" />
            <stop offset="2%" stopColor={darkenColor(colorShapeFront, 48)} stopOpacity="1" />
            <stop offset="5%" stopColor={darkenColor(colorShapeFront, 30)} stopOpacity="1" />
            <stop offset="9%" stopColor={darkenColor(colorShapeFront, 25)} stopOpacity="1" />
            <stop offset="16%" stopColor={darkenColor(colorShapeFront, 5)} stopOpacity="1" />
            <stop offset="19%" stopColor={colorShapeFront} stopOpacity="1" />
            <stop offset="75%" stopColor={colorShapeFront} stopOpacity="1" />
            <stop offset="80%" stopColor={darkenColor(colorShapeFront, 12)} stopOpacity="1" />
            <stop offset="83%" stopColor={darkenColor(colorShapeFront, 10)} stopOpacity="1" />
            <stop offset="85%" stopColor={darkenColor(colorShapeFront, 8)} stopOpacity="1" />
            <stop offset="89%" stopColor={darkenColor(colorShapeFront, 7)} stopOpacity="1" />
            <stop offset="91%" stopColor={darkenColor(colorShapeFront, 6)} stopOpacity="1" />
            <stop offset="95%" stopColor={darkenColor(colorShapeFront, 5)} stopOpacity="1" />
            <stop offset="100%" stopColor={darkenColor(colorShapeFront, 2)} stopOpacity="1" />
          </linearGradient>
        </defs>
        <g transform={`translate(${0}, ${40})`}>
          <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard})`}>
            <path
              d="M202 16l-27 2-17 4-16 7-15 9-12 9-14 12-17 17-9 11-13 17-11 19-10 23-9 25-7 26-4 24-2 24v44l5 78 6 97 5 95 4 91 3 85 3 121 1 61v224l-2 106-3 103-4 103-6 120-6 100-5 72-1 19v44l2 25 5 28 8 28 10 26 12 25 12 18 9 11 12 14 12 12 8 7 17 13 13 8 17 8 16 4 16 2 18 1h19l19-1 20-3 16-5 19-10 14-10 11-9 16-15 12-13 11-14 10-15 12-23 9-23 7-21 6-25 3-19 2-27v-35l-2-36-8-123-7-133-4-97-3-92-2-80-1-67v-238l2-104 3-100 4-102 5-102 7-117 5-72 1-23v-34l-2-28-5-29-8-28-10-26-12-25-9-14-10-13-12-14-17-17-11-9-12-9-15-9-11-5-12-4-20-3-20-1z"
              // fill={isBack ? colorShapeFront : colorShapeBack}
              // fill={'url(#gradient-fill2)'}
              fill={isBack ? 'url(#gradient-fill2)' : 'url(#gradient-fill)'}
              stroke="black"
              strokeWidth={strokeWidthBoard}
            />
          </g>
          <g transform={`translate(${0}, ${0})`}>
            {isBack ? (
              <>
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
                {isFigureBottomActive && (
                  <StraightLineBottom width={width} height={height} color={straightLineBottomColor} />
                )}
                {currentLegend()}
              </>
            ) : (
              <></>
            )}
          </g>
        </g>
      </svg>
    );
  },
);
