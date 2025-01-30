import { darkenColor } from '../../utils/darken-color';
interface IProps {
  colorShapeFront: string;
  cords: {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  };
  id: string;
  brightnessSaturation?: {
    brightness1?: number;
    brightness2?: number;
    brightness3?: number;
    brightness4?: number;
    brightness5?: number;
    brightness6?: number;
    brightness7?: number;
    brightness8?: number;
    brightness9?: number;
    brightness10?: number;
    brightness11?: number;
    brightness12?: number;
  };
}
export const LinearGradientFront = ({ colorShapeFront, cords, id, brightnessSaturation }: IProps) => {
  const brightness = {
    1: brightnessSaturation?.brightness1 ? brightnessSaturation.brightness1 : 52,
    2: brightnessSaturation?.brightness2 ? brightnessSaturation.brightness2 : 48,
    3: brightnessSaturation?.brightness3 ? brightnessSaturation.brightness3 : 30,
    4: brightnessSaturation?.brightness4 ? brightnessSaturation.brightness4 : 25,
    5: brightnessSaturation?.brightness5 ? brightnessSaturation.brightness5 : 5,
    6: brightnessSaturation?.brightness6 ? brightnessSaturation.brightness6 : 12,
    7: brightnessSaturation?.brightness7 ? brightnessSaturation.brightness7 : 10,
    8: brightnessSaturation?.brightness8 ? brightnessSaturation.brightness8 : 8,
    9: brightnessSaturation?.brightness9 ? brightnessSaturation.brightness9 : 7,
    10: brightnessSaturation?.brightness10 ? brightnessSaturation.brightness10 : 6,
    11: brightnessSaturation?.brightness11 ? brightnessSaturation.brightness11 : 5,
    12: brightnessSaturation?.brightness12 ? brightnessSaturation.brightness12 : 2,
  };
  return (
    <defs>
      <linearGradient id={id} x1={cords.x1} y1={cords.y1} x2={cords.x2} y2={cords.y2}>
        <stop offset="0%" stopColor={darkenColor(colorShapeFront, brightness[1])} stopOpacity="1" />
        <stop offset="2%" stopColor={darkenColor(colorShapeFront, brightness[2])} stopOpacity="1" />
        <stop offset="5%" stopColor={darkenColor(colorShapeFront, brightness[3])} stopOpacity="1" />
        <stop offset="9%" stopColor={darkenColor(colorShapeFront, brightness[4])} stopOpacity="1" />
        <stop offset="16%" stopColor={darkenColor(colorShapeFront, brightness[5])} stopOpacity="1" />
        <stop offset="19%" stopColor={colorShapeFront} stopOpacity="1" />
        <stop offset="75%" stopColor={colorShapeFront} stopOpacity="1" />
        <stop offset="80%" stopColor={darkenColor(colorShapeFront, brightness[6])} stopOpacity="1" />
        <stop offset="83%" stopColor={darkenColor(colorShapeFront, brightness[7])} stopOpacity="1" />
        <stop offset="85%" stopColor={darkenColor(colorShapeFront, brightness[8])} stopOpacity="1" />
        <stop offset="89%" stopColor={darkenColor(colorShapeFront, brightness[9])} stopOpacity="1" />
        <stop offset="91%" stopColor={darkenColor(colorShapeFront, brightness[10])} stopOpacity="1" />
        <stop offset="95%" stopColor={darkenColor(colorShapeFront, brightness[11])} stopOpacity="1" />
        <stop offset="100%" stopColor={darkenColor(colorShapeFront, brightness[12])} stopOpacity="1" />
      </linearGradient>
    </defs>
  );
};
