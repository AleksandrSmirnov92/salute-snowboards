import { LegendSize125 } from './legend-top-size/legend-size-125';
import { LegendSize130 } from './legend-top-size/legend-size-130';
import { LegendSize135 } from './legend-top-size/legend-size-135';
import { LegendSize140 } from './legend-top-size/legend-size-140';

interface IPropsLegendTop {
  color: string;
  width: number;
  height: number;
  modelSize: number | string;
}
export const LegendTopFae = ({ color, width, height, modelSize }: IPropsLegendTop) => {
  const currentSizeBoard = (): JSX.Element | undefined => {
    switch (modelSize) {
      case 125: {
        return <LegendSize125 width={width} height={height} color={color} />;
      }
      case 130: {
        return <LegendSize130 width={width} height={height} color={color} />;
      }
      case 135: {
        return <LegendSize135 width={width} height={height} color={color} />;
      }
      case 140: {
        return <LegendSize140 width={width} height={height} color={color} />;
      }
      default: {
        return;
      }
    }
  };
  return <>{currentSizeBoard()}</>;
};
