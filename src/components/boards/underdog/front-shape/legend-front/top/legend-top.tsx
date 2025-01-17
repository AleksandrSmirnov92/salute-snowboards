import { LegendSize148 } from './legend-top-size/legend-size-148';
import { LegendSize151 } from './legend-top-size/legend-size-151';
import { LegendSize155 } from './legend-top-size/legend-size-155';
import { LegendSize155W } from './legend-top-size/legend-size-155W';
import { LegendSize158 } from './legend-top-size/legend-size-158';
import { LegendSize158W } from './legend-top-size/legend-size-158W';

interface IPropsLegendTop {
  color: string;
  width: number;
  height: number;
  modelSize: number | string;
}
export const LegendTop = ({ color, width, height, modelSize }: IPropsLegendTop) => {
  const currentSizeBoard = (): JSX.Element | undefined => {
    switch (modelSize) {
      case '148-cm': {
        return <LegendSize148 width={width} height={height} color={color} />;
      }
      case '151-cm': {
        return <LegendSize151 width={width} height={height} color={color} />;
      }
      case '155-cm': {
        return <LegendSize155 width={width} height={height} color={color} />;
      }
      case '155w-cm': {
        return <LegendSize155W width={width} height={height} color={color} />;
      }
      case '158-cm': {
        return <LegendSize158 width={width} height={height} color={color} />;
      }
      case '158w-cm': {
        return <LegendSize158W width={width} height={height} color={color} />;
      }

      default: {
        return;
      }
    }
  };
  return <>{currentSizeBoard()}</>;
};
