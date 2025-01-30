import { ILegent } from '../../../../../../types/types';
import { BackLegendTopBCFR } from './legend-top/back-legend-top';

export interface IPropsLegend {
  backgroundColor: string;
  colorLegend: ILegent;
  modelSize: number | string;
  width: number;
  height: number;
  isBack: boolean;
}
export const BackLegendBCFRVersionOne = ({ colorLegend, width, height, isBack }: IPropsLegend) => {
  const colorTop = colorLegend.colorLegend.top?.colorPallete.hex;
  return (
    <svg
      version="1.1"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {colorLegend.colorLegend.top ? (
        <BackLegendTopBCFR isBack={isBack} width={width} height={height} color={colorTop!} />
      ) : (
        ''
      )}
    </svg>
  );
};
