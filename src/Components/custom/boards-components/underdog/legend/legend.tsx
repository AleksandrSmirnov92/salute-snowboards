import { IColorPallete } from '../../../../../store/data/colorPalette';
import { LegendBottom } from './bottom/legend-bottom';
import { LegendMiddle } from './middle/legend-middle';
import { LegendTop } from './top/legend-top';

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
}
export const LegendPositionOne = ({ colorLegend, width, height }: IPropsLegend) => {
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
      {/* <rect width="600" height="600" fill="blue" /> */}
      {colorLegend.top ? <LegendTop width={width} height={height} color={colorTop!} /> : ''}
      {colorLegend.middle ? <LegendMiddle width={width} height={height} color={colorMiddle!} /> : ''}
      {colorLegend.bottom ? <LegendBottom width={width} height={height} color={colorBottom!} /> : ''}
    </svg>
  );
};
