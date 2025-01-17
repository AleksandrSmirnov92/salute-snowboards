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
}
export const LinearGradientFront = ({ colorShapeFront, cords, id }: IProps) => {
  return (
    <defs>
      <linearGradient id={id} x1={cords.x1} y1={cords.y1} x2={cords.x2} y2={cords.y2}>
        <stop offset="0%" stopColor={darkenColor(colorShapeFront, 52)} stopOpacity="1" />
        <stop offset="2%" stopColor={darkenColor(colorShapeFront, 48)} stopOpacity="1" />
        <stop offset="5%" stopColor={darkenColor(colorShapeFront, 30)} stopOpacity="1" />
        <stop offset="9%" stopColor={darkenColor(colorShapeFront, 25)} stopOpacity="1" />
        <stop offset="16%" stopColor={darkenColor(colorShapeFront, 5)} stopOpacity="1" />
        <stop offset="19%" stopColor={colorShapeFront} stopOpacity="1" />
        <stop offset="75%" stopColor={colorShapeFront} stopOpacity="1" />
        <stop offset="80%" stopColor={darkenColor(colorShapeFront, 12)} stopOpacity="1" />
        <stop offset="83%" stopColor={darkenColor(colorShapeFront, 10)} stopOpacity="1" />
        <stop offset="85%" stopColor={darkenColor(colorShapeFront, 8)} stopOpacity="1" />
        <stop offset="89%" stopColor={darkenColor(colorShapeFront, 7)} stopOpacity="1" />
        <stop offset="91%" stopColor={darkenColor(colorShapeFront, 6)} stopOpacity="1" />
        <stop offset="95%" stopColor={darkenColor(colorShapeFront, 5)} stopOpacity="1" />
        <stop offset="100%" stopColor={darkenColor(colorShapeFront, 2)} stopOpacity="1" />
      </linearGradient>
    </defs>
  );
};
