import { ff } from '../../utils/darken-color';
interface IProps {
  colorShapeBack: string;
  cords: {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  };
  id: string;
}
export const LinearGradientBack = ({ colorShapeBack, cords, id }: IProps) => {
  return (
    <defs>
      <linearGradient id={id} x1={cords.x1} y1={cords.y1} x2={cords.x2} y2={cords.y2}>
        <stop offset="0%" stopColor={ff(colorShapeBack, 3.5, 1.3, 1.5)} />
        <stop offset="2%" stopColor={ff(colorShapeBack, 3.5, 1.3, 1.5)} />
        <stop offset="5%" stopColor={ff(colorShapeBack, 3.5, 1.3, 1.5)} />
        <stop offset="9%" stopColor={ff(colorShapeBack, 2.5, 1.2, 1.4)} />
        <stop offset="14%" stopColor={colorShapeBack} />
        <stop offset="82%" stopColor={colorShapeBack} />
        <stop offset="93%" stopColor={ff(colorShapeBack, 2.4, 1.1, 1.2)} />
        <stop offset="100%" stopColor={ff(colorShapeBack, 2.4, 1.1, 1.2)} />
      </linearGradient>
    </defs>
  );
};
