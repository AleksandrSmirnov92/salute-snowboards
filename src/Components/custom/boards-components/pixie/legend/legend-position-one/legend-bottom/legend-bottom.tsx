import { LegendSize140 } from './legend-bottom-sizes/legend-size-140';
import { LegendSize142 } from './legend-bottom-sizes/legend-size-142';
import { LegendSize145 } from './legend-bottom-sizes/legend-size-145';
import { LegendSize147 } from './legend-bottom-sizes/legend-size-147';
import { LegendSize149 } from './legend-bottom-sizes/legend-size-149';

interface IPropsLegendBottom {
  color: string;
  width: number;
  height: number;
  sizes: number;
}
export const LegendBottom = ({ color, width, height, sizes }: IPropsLegendBottom) => {
  const currentSizeBoard = (): JSX.Element | undefined => {
    switch (sizes) {
      case 140: {
        return <LegendSize140 width={width} height={height} color={color} />;
      }
      case 142: {
        return <LegendSize142 width={width} height={height} color={color} />;
      }
      case 145: {
        return <LegendSize145 width={width} height={height} color={color} />;
      }
      case 147: {
        return <LegendSize147 width={width} height={height} color={color} />;
      }
      case 149: {
        return <LegendSize149 width={width} height={height} color={color} />;
      }
      default: {
        return;
      }
    }
  };
  return <>{currentSizeBoard()}</>;
};
