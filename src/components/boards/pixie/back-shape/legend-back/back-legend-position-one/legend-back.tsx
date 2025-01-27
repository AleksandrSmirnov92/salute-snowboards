import { ILegent } from '../../../../../../types/types';
import { BackLegendBottom } from './legend-bottom/back-legend-top';
import { BackLegendTop } from './legend-top/back-legend-top';

export interface IPropsLegend {
  backgroundColor: string;
  colorLegend: ILegent;
  modelSize: number;
  width: number;
  height: number;
}
export const BackLegendPixieVersionOne = ({ colorLegend, width, height }: IPropsLegend) => {
  const colorTop = colorLegend.colorLegend.top?.colorPallete.hex;
  const colorBottom = colorLegend.colorLegend.bottom?.colorPallete.hex;
  return (
    <svg
      version="1.1"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {colorLegend.colorLegend.top ? <BackLegendTop width={width} height={height} color={colorTop!} /> : ''}
      {colorLegend.colorLegend.bottom ? <BackLegendBottom width={width} height={height} color={colorBottom!} /> : ''}
    </svg>
  );
};
