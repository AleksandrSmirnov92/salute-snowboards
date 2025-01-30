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
  legendBack: ILegent;
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
  legendBack,
}: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFrontForImage = (
    <SnowboardSpecs rotation={0}>
      <FrontShapeBcfr colorShapeFront={colorShapeFront} modelSize={modelSize} legend={legend} />
    </SnowboardSpecs>
  );
  const shapeBackForImage = (
    <SnowboardSpecs rotation={180}>
      <BackShapeBcfr legendBack={legendBack} modelSize={modelSize} colorShapeBack={colorShapeBack} />
    </SnowboardSpecs>
  );

  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBackForImage));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFrontForImage));
  }, [formValues]);

  // return isBack ? shapeFront : shapeBack;
  return (
    <SnowboardSpecs rotation={rotation}>
      {isBack ? (
        <FrontShapeBcfr colorShapeFront={colorShapeFront} modelSize={modelSize} legend={legend} />
      ) : (
        <BackShapeBcfr legendBack={legendBack} modelSize={modelSize} colorShapeBack={colorShapeBack} />
      )}
    </SnowboardSpecs>
  );
};
