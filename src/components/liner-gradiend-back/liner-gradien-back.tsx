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
  offsets?: {
    offset1?: string;
    offset2?: string;
    offset3?: string;
    offset4?: string;
    offset5?: string;
    offset6?: string;
    offset7?: string;
    offset8?: string;
  };
}
export const LinearGradientBack = ({ colorShapeBack, cords, id, offsets }: IProps) => {
  const offset = {
    1: offsets?.offset1 ? offsets.offset1 : '0%',
    2: offsets?.offset2 ? offsets.offset2 : '2%',
    3: offsets?.offset3 ? offsets.offset3 : '5%',
    4: offsets?.offset4 ? offsets.offset4 : '9%',
    5: offsets?.offset5 ? offsets.offset5 : '14%',
    6: offsets?.offset6 ? offsets.offset6 : '82%',
    7: offsets?.offset7 ? offsets.offset7 : '93%',
    8: offsets?.offset8 ? offsets.offset8 : '100%',
  };
  return (
    <defs>
      <linearGradient id={id} x1={cords.x1} y1={cords.y1} x2={cords.x2} y2={cords.y2}>
        <stop offset={offset[1]} stopColor={ff(colorShapeBack, 3.5, 1.3, 1.5)} />
        <stop offset={offset[2]} stopColor={ff(colorShapeBack, 3.5, 1.3, 1.5)} />
        <stop offset={offset[3]} stopColor={ff(colorShapeBack, 3.5, 1.3, 1.5)} />
        <stop offset={offset[4]} stopColor={ff(colorShapeBack, 2.5, 1.2, 1.4)} />
        <stop offset={offset[5]} stopColor={colorShapeBack} />
        <stop offset={offset[6]} stopColor={colorShapeBack} />
        <stop offset={offset[7]} stopColor={ff(colorShapeBack, 2.4, 1.1, 1.2)} />
        <stop offset={offset[8]} stopColor={ff(colorShapeBack, 2.4, 1.1, 1.2)} />
      </linearGradient>
    </defs>
  );
};
