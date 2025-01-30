import { ILegent } from '../../../types/types';
import { SnowboardSpecs } from '../SnowboardSpecsFront';
import { FrontShapeUnderdog } from './front-shape/front-shape-underdog';
import { BackShapeUnderdog } from './back-shape/back-shape-underdog';
import { useAppSelector } from '../../../store/hooks/hooks';
import { RootState } from '../../../store/store';
import ReactDOMServer from 'react-dom/server';
import { useEffect } from 'react';

interface IProps {
  colorShapeFront: string;
  isFigureTopActive: boolean;
  figureTopColor: string;
  isFigureBottomActive: boolean;
  figureBottomColor: string;
  legend: ILegent;
  modelSize: number | string;
  rotation: number;
  isBack: boolean;
  colorShapeBack: string;
  isBackFigureMiddleActive: boolean;
  backFigureMiddleColor: string;
  legendBack: ILegent;
  setShapeFront: React.Dispatch<React.SetStateAction<string>>;
  setShapeBack: React.Dispatch<React.SetStateAction<string>>;
}
export const BoardUnderdogSvg = ({
  colorShapeFront,
  colorShapeBack,
  isFigureTopActive,
  figureTopColor,
  isFigureBottomActive,
  figureBottomColor,
  legend,
  modelSize,
  rotation,
  isBack,
  isBackFigureMiddleActive,
  backFigureMiddleColor,
  legendBack,
  setShapeBack,
  setShapeFront,
}: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFront = (
    <SnowboardSpecs rotation={rotation}>
      <FrontShapeUnderdog
        colorShapeFront={colorShapeFront}
        isFigureTopActive={isFigureTopActive}
        figureTopColor={figureTopColor}
        isFigureBottomActive={isFigureBottomActive}
        figureBottomColor={figureBottomColor}
        legend={legend}
        modelSize={modelSize}
      />
    </SnowboardSpecs>
  );
  const shapeBack = (
    <SnowboardSpecs rotation={rotation}>
      <BackShapeUnderdog
        isBackFigureMiddleActive={isBackFigureMiddleActive}
        backFigureMiddleColor={backFigureMiddleColor}
        modelSize={modelSize}
        legendBack={legendBack}
        colorShapeBack={colorShapeBack}
      />
      ;
    </SnowboardSpecs>
  );
  const shapeFrontForImage = (
    <SnowboardSpecs rotation={0}>
      <FrontShapeUnderdog
        colorShapeFront={colorShapeFront}
        isFigureTopActive={isFigureTopActive}
        figureTopColor={figureTopColor}
        isFigureBottomActive={isFigureBottomActive}
        figureBottomColor={figureBottomColor}
        legend={legend}
        modelSize={modelSize}
      />
    </SnowboardSpecs>
  );
  const shapeBackForImage = (
    <SnowboardSpecs rotation={180}>
      <BackShapeUnderdog
        isBackFigureMiddleActive={isBackFigureMiddleActive}
        backFigureMiddleColor={backFigureMiddleColor}
        modelSize={modelSize}
        legendBack={legendBack}
        colorShapeBack={colorShapeBack}
      />
      ;
    </SnowboardSpecs>
  );
  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBackForImage));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFrontForImage));
  }, [formValues]);
  return isBack ? shapeFront : shapeBack;
};
