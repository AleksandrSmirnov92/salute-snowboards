import { LinearGradientBack } from '../../../liner-gradiend-back/liner-gradien-back';

interface IProps {
  colorShapeBack: string;
}
export const BackShapeFae = ({ colorShapeBack }: IProps) => {
  const scaleBoard = 0.116;
  const strokeWidthBoard = 5;
  const translateX = 240;
  const translateY = 30;

  return (
    <>
      <g transform={`translate(${0}, ${40}) `}>
        <g transform={`translate(${translateX}, ${translateY}) scale(${scaleBoard})`}>
          <path
            fill={'url(#colorShapeBackFae)'}
            stroke="black"
            strokeWidth={strokeWidthBoard}
            d="M816.43,2097.62c7.5,382,31.07,789.59,61.33,1170.29c1.43,43.4,1.21,88.75-0.84,132.13
    c-2.05,40.86-9.17,81.61-21.73,120.56c-13.6,42.24-32.77,82.84-52.71,122.4c-17.58,33.62-36.02,67.57-59.97,97.15
    c-24.95,30.75-62.6,47.11-98.91,60.48c-118.91,42.87-272.73,34.31-380.23-34.63c-50.36-33.08-108.36-160.92-131.45-219.51
    c-22.79-57.99-31.71-120.46-32.06-182.54c-0.74-31.23-0.61-64.84,0.45-96.04c28.75-363.31,52.08-755.38,60.18-1119.82
    c10.51-493.52-31-1003.77-61.11-1495.84c-1.4-121.85,9.11-191.57,64.3-302.85c16.38-33.63,34.13-67.29,55.02-98.38
    c10.64-15.66,22.31-31.06,37.21-42.93c23.21-18.4,50.96-30.1,78.55-40.25c61.41-22.18,127.68-29.62,192.66-24.68
    c63.57,4.92,140.18,25.24,192.34,62.82c26.15,20.2,43.25,49.44,60.05,77.33c37.48,67.07,72.61,137.49,88.42,213.17
    c13.27,66.76,11.07,136.33,9.83,204.08C842.42,1158.88,812.86,1637.89,816.43,2097.62"
          />
        </g>
      </g>
      <LinearGradientBack
        id={'colorShapeBackFae'}
        colorShapeBack={colorShapeBack}
        cords={{ x1: '0%', x2: '0%', y1: '0%', y2: '100%' }}
      />
    </>
  );
};
