import { ILegent } from '../../../../types/types';
import { LinearGradientBack } from '../../../liner-gradiend-back/liner-gradien-back';
import { BackLegendUnderdogVersionOne } from './legend-back/back-legend-position-one/legend-back';
import { StraightLineMiddleUnderdogBack } from './straight-line-underdog-back/straight-line-underdog-back';

interface IProps {
  colorShapeBack: string;
  legendBack: ILegent;
  modelSize: number | string;
  isBackFigureMiddleActive: boolean;
  backFigureMiddleColor: string;
}
export const BackShapeUnderdog = ({
  legendBack,
  colorShapeBack,
  modelSize,
  isBackFigureMiddleActive,
  backFigureMiddleColor,
}: IProps) => {
  const scaleBoard = 0.01193;
  const width = 600;
  const height = 600;
  const translateX = 30.6;
  const translateY = 20;
  const strokeWidthBoard = 1;
  const currentLegend = (): JSX.Element | undefined => {
    if (legendBack) {
      switch (legendBack.pos) {
        case 'Not selected': {
          return;
        }
        case 'Version1': {
          return (
            <BackLegendUnderdogVersionOne
              width={width}
              height={height}
              colorLegend={legendBack}
              backgroundColor={colorShapeBack}
              modelSize={modelSize}
            />
          );
        }
        default: {
          return;
        }
      }
    } else return;
  };
  return (
    <>
      <g transform={`translate(${0}, ${10})`}>
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
            fill={'url(#colorShapeBackUnderdog)'}
            stroke="#black" // Черная обводка
            strokeWidth={strokeWidthBoard}
          />
        </g>
        <g transform={`translate(${0}, ${0})`}>
          {isBackFigureMiddleActive && (
            <StraightLineMiddleUnderdogBack width={width} height={height} color={backFigureMiddleColor} />
          )}
          {currentLegend()}
        </g>
      </g>
      <LinearGradientBack
        id={'colorShapeBackUnderdog'}
        colorShapeBack={colorShapeBack}
        cords={{ x1: '0%', x2: '0%', y1: '0%', y2: '100%' }}
      />
    </>
  );
};
