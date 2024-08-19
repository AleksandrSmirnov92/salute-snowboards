import { JSXElementConstructor } from 'react';
import { ILegent } from '../../../../store/contracts';
import { LegendPositionOne } from './legend/legend';
import { StraightLineBottom } from './straight-line/straight-line-bottom';
import { StraightLineTop } from './straight-line/straight-line-top';

interface IProps {
  colorShape: string;
  isStraightLineTopActive: boolean;
  straightLineTopColor: string;
  isStraightLineBottomActive: boolean;
  straightLineBottomColor: string;
  legend: ILegent;
}
export const BoardUnderdogSvg = ({
  colorShape,
  isStraightLineTopActive,
  straightLineTopColor,
  isStraightLineBottomActive,
  straightLineBottomColor,
  legend,
}: IProps) => {
  //Board
  const scaleBoard = 0.012;
  const width = 600;
  const height = 600;
  const translateX = 29;
  const translateY = 20;
  const strokeWidthBoard = 1;
  // Circle
  const color = 'black';
  const viewBoxWidth = 600;
  const viewBoxHeight = 600;
  const translateCircleX = 120;
  const translateCircleY = 20;
  const scaleCircle = 0.6;
  const strokeWidthCircle = 0.5;
  //Circle2
  // const viewBoxWidthCircle2 = 600;
  // const viewBoxHeightCircle2 = 600;
  const translateCircle2Y = 200;

  //Options Circle
  const numberOfRows = 5;
  const numberOfColumns = 2;
  const circleRadius = 3;
  const distanceBetweenRowsX = circleRadius + 12; // радиус круга плюс расстояние между кругами
  const distanceBetweenRowsY = circleRadius + 10;

  // Начальные координаты для кругов
  const circleOneStartPositionX = (viewBoxWidth - (numberOfColumns - 1) * distanceBetweenRowsX) / 2;
  const circleOneStartPositionY = (viewBoxHeight - (numberOfRows - 1) * distanceBetweenRowsY) / 2;
  const circleTwoStartPositionX = (viewBoxWidth - (numberOfColumns - 1) * distanceBetweenRowsX) / 2;
  const circleTwoStartPositionY = (viewBoxHeight - (numberOfRows - 1) * distanceBetweenRowsY) / 2;

  const circles = [];
  const circles2 = [];

  // Генерация позиций кругов
  for (let row = 0; row < numberOfRows; row++) {
    for (let col = 0; col < numberOfColumns; col++) {
      const circle1cx = circleOneStartPositionX + col * distanceBetweenRowsX;
      const circle1cy = circleOneStartPositionY + row * distanceBetweenRowsY;
      const circle2cx = circleTwoStartPositionX + col * distanceBetweenRowsX;
      const circle2cy = circleTwoStartPositionY + row * distanceBetweenRowsY;
      circles.push(
        <circle
          key={`circle-${row}-${col}-1`}
          cx={circle1cx}
          cy={circle1cy}
          r={circleRadius}
          transform={`translate(${translateCircleX}, ${translateCircleY}) scale(${scaleCircle})`}
          fill="none"
          stroke={color} // Белый цвет для кругов
          strokeWidth={strokeWidthCircle}
        />,
      );
      circles2.push(
        <circle
          key={`circle-${row}-${col}-2`}
          cx={circle2cx}
          cy={circle2cy}
          r={circleRadius}
          transform={`translate(${translateCircleX}, ${translateCircle2Y}) scale(${scaleCircle})`}
          fill={'none'}
          stroke={color} // Белый цвет для кругов
          strokeWidth={strokeWidthCircle}
        />,
      );
    }
  }
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
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${height} ${height}`}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* <rect width={width} height={height} fill="#756373" /> */}
      <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard})`}>
        <path
          d="M22265 41340 c-579 -27 -1176 -171 -1651 -400 -236 -114 -414 -255
          -565 -450 -205 -263 -423 -626 -655 -1090 -317 -635 -452 -1073 -504 -1635 -6
          -66 -15 -271 -20 -455 l-9 -335 94 -1600 c336 -5693 427 -7959 456 -11318 20
          -2282 -14 -4854 -96 -7322 -86 -2578 -228 -5267 -406 -7675 -39 -532 -41 -574
          -41 -1020 -1 -483 9 -702 43 -970 60 -473 194 -880 475 -1443 365 -729 674
          -1184 939 -1382 349 -260 965 -466 1645 -551 169 -21 703 -30 885 -15 473 38
          860 124 1265 278 465 177 680 339 937 703 231 328 579 967 747 1371 123 297
          192 519 245 784 68 339 84 572 84 1210 1 483 -1 517 -36 985 -134 1768 -274
          4236 -357 6275 -107 2669 -150 4755 -150 7395 0 3065 56 5252 220 8540 73
          1453 250 4430 320 5380 19 262 6 939 -25 1241 -58 571 -255 1131 -648 1849
          -350 639 -578 943 -838 1116 -366 245 -973 440 -1583 509 -131 15 -500 36
          -576 33 -19 -1 -107 -4 -195 -8z"
          fill={colorShape}
          stroke="#black" // Черная обводка
          strokeWidth={strokeWidthBoard} //
          // strokeWidth={10}
        />
      </g>
      {circles}
      {circles2}
      {isStraightLineTopActive && <StraightLineTop width={width} height={height} color={straightLineTopColor} />}
      {isStraightLineBottomActive && (
        <StraightLineBottom width={width} height={height} color={straightLineBottomColor} />
      )}
      {currentLegend()}
    </svg>
  );
};
