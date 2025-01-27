import { ILegent } from '../../../../../types/types';
import { BackLegendBottomFae } from './legend-bottom/legend-bottom-fae';
import { BackLegendTopFae } from './legend-top/legend-top-fae';

export interface IPropsLegend {
  backgroundColor: string;
  colorLegend: ILegent;
  modelSize: number | string;
  width: number;
  height: number;
}
export const BackLegendFaeVersionOne = ({ colorLegend, width, height }: IPropsLegend) => {
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
      {colorLegend.colorLegend.top ? <BackLegendTopFae width={width} height={height} color={colorTop!} /> : ''}
      {colorLegend.colorLegend.bottom ? <BackLegendBottomFae width={width} height={height} color={colorBottom!} /> : ''}
    </svg>
  );
};
