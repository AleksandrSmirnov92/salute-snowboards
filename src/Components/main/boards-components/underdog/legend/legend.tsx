import { IColorPallete } from '../../../../../store/data/colorPalette';
import { LegendBottom } from './bottom/legend-bottom';
import { LegendMiddle } from './middle/legend-middle';
import { LegendTop } from './top/legend-top';

export interface IPropsLegend {
  backgroundColor: string;
  colorLegend: {
    top: IColorPallete;
    middle: IColorPallete;
    bottom: IColorPallete;
  };
  width: number;
  height: number;
}
export const LegendPositionOne = ({ colorLegend, width, height }: IPropsLegend) => {
  // top options
  const colorTop = colorLegend.top.hex;
  //middle options
  const colorMiddle = colorLegend.middle.hex;
  // bottom options
  const colorBottom = colorLegend.bottom.hex;
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
      <LegendTop width={width} height={height} color={colorTop} />
      <LegendMiddle width={width} height={height} color={colorMiddle} />
      <LegendBottom width={width} height={height} color={colorBottom} />
    </svg>
  );
};
