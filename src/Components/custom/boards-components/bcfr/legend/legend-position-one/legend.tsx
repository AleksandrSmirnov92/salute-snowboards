import { IColorPallete } from '../../../../../../store/data/colorPalette';
import { LegendBottomBCFR } from './legend-bottom/legend-bottom';
import { LegendMiddleBCFR } from './legend-middle/legend-middle';
import { LegendTopBCFR } from './legend-top/legend-top';

export interface IPropsLegend {
  backgroundColor: string;
  colorLegend: {
    top?: {
      name: string;
      positionColor: string;
      colorPallete: IColorPallete;
    };
    middle?: {
      name: string;
      positionColor: string;
      colorPallete: IColorPallete;
    };
    bottom?: {
      name: string;
      positionColor: string;
      colorPallete: IColorPallete;
    };
  };
  width: number;
  height: number;
  modelSize: number | string;
}
export const LegendPositionOne = ({ colorLegend, width, height, modelSize }: IPropsLegend) => {
  // top options
  const colorTop = colorLegend.top?.colorPallete.hex;
  //middle options
  const colorMiddle = colorLegend.middle?.colorPallete.hex;
  // bottom options
  const colorBottom = colorLegend.bottom?.colorPallete.hex;
  return (
    <svg
      version="1.1"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <rect width="600" height="600" fill="#577486" /> */}
      {colorLegend.top ? <LegendTopBCFR width={width} height={height} color={colorTop!} modelSize={modelSize} /> : ''}
      {colorLegend.middle ? <LegendMiddleBCFR width={width} height={height} color={colorMiddle!} /> : ''}
      {colorLegend.bottom ? <LegendBottomBCFR width={width} height={height} color={colorBottom!} /> : ''}
    </svg>
  );
};
