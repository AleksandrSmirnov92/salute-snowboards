import { LegendMiddleAfterSize } from './legend-middle-after-size';
import { LegendSize148 } from './legend-middle-sizes/legend-size-148';
import { LegendSize151 } from './legend-middle-sizes/legend-size-151';
import { LegendSize154 } from './legend-middle-sizes/legend-size-154';
import { LegendSize157 } from './legend-middle-sizes/legend-size-157';
import { LegendSize162 } from './legend-middle-sizes/legend-size-162';

interface IPropsLegendMiddle {
  color: string;
  width: number;
  height: number;
  sizes: number;
}
export const LegendMiddle = ({ width, height, sizes, color }: IPropsLegendMiddle) => {
  const currentSizeBoard = (): JSX.Element | undefined => {
    switch (sizes) {
      case 148: {
        return <LegendSize148 width={width} height={height} color={color} />;
      }
      case 151: {
        return <LegendSize151 width={width} height={height} color={color} />;
      }
      case 154: {
        return <LegendSize154 width={width} height={height} color={color} />;
      }
      case 157: {
        return <LegendSize157 width={width} height={height} color={color} />;
      }
      case 162: {
        return <LegendSize162 width={width} height={height} color={color} />;
      }
      default: {
        return;
      }
    }
  };
  return (
    <>
      {currentSizeBoard()}
      <LegendMiddleAfterSize width={width} height={height} color={color} />
    </>
  );
};
