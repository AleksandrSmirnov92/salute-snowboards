import { ILegent } from '../../../types/types';
import { SnowboardSpecs } from '../SnowboardSpecsFront';
import { FrontShapeBcfr } from './front-shape-bcfr/front-shape-bcfr';
import { BackShapeBcfr } from './back-shape-bcfr/back-shape-bcfr';
import { useAppSelector } from '../../../store/hooks/hooks';
import { RootState } from '../../../store/store';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';

interface IProps {
  colorShapeFront: string;
  colorShapeBack: string;
  legend: ILegent;
  modelSize: number | string;
  rotation: number;
  isBack: boolean;
  setShapeFront: React.Dispatch<React.SetStateAction<string>>;
  setShapeBack: React.Dispatch<React.SetStateAction<string>>;
}
export const BoardBcfrSvg = ({
  colorShapeFront,
  legend,
  modelSize,
  rotation,
  isBack,
  colorShapeBack,
  setShapeFront,
  setShapeBack,
}: IProps) => {
  const boardFront = (
    <SnowboardSpecs rotation={rotation}>
      {isBack ? (
        <FrontShapeBcfr colorShapeFront={colorShapeFront} modelSize={modelSize} legend={legend} />
      ) : (
        <BackShapeBcfr colorShapeBack={colorShapeBack} />
      )}
    </SnowboardSpecs>
  );

  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFront = (
    <SnowboardSpecs rotation={rotation}>
      <FrontShapeBcfr colorShapeFront={colorShapeFront} modelSize={modelSize} legend={legend} />
    </SnowboardSpecs>
  );
  const shapeBack = (
    <SnowboardSpecs rotation={rotation}>
      <BackShapeBcfr colorShapeBack={colorShapeBack} />
    </SnowboardSpecs>
  );

  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBack));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFront));
  }, [formValues]);

  return isBack ? shapeFront : shapeBack;
};
