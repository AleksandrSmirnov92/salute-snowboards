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
  isBack: boolean;
  setShapeFront: React.Dispatch<React.SetStateAction<string>>;
  setShapeBack: React.Dispatch<React.SetStateAction<string>>;
  legendBack: ILegent;
  activeBack: boolean;
}
export const BoardBcfrSvg = ({
  colorShapeFront,
  legend,
  modelSize,
  isBack,
  colorShapeBack,
  setShapeFront,
  setShapeBack,
  legendBack,
  activeBack,
}: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFront = (
    <SnowboardSpecs isActive={activeBack}>
      <FrontShapeBcfr colorShapeFront={colorShapeFront} modelSize={modelSize} legend={legend} />
    </SnowboardSpecs>
  );
  const shapeBack = (
    <SnowboardSpecs isActive={activeBack}>
      <BackShapeBcfr legendBack={legendBack} modelSize={modelSize} colorShapeBack={colorShapeBack} />
    </SnowboardSpecs>
  );

  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBack));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFront));
  }, [formValues]);

  return isBack ? shapeFront : shapeBack;
};
