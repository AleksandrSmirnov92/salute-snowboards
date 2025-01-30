import { ILegent } from '../../../types/types';
import { FrontShapePixie } from './front-shape/front-shape-pixie';
import { BackShapePixie } from './back-shape/back-shape-pixie';
import { SnowboardSpecs } from '../SnowboardSpecsFront';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useAppSelector } from '../../../store/hooks/hooks';
import { RootState } from '../../../store/store';

interface IProps {
  isBack: boolean;
  colorShapeFront: string;
  colorShapeBack: string;
  isFigureTopActive: boolean;
  figureTopColor: string;
  isFigureBottomActive: boolean;
  figureBottomColor: string;
  legend: ILegent;
  legendBack: ILegent;
  modelSize: number;
  rotation: number;
  isBackFigureMiddleActive: boolean;
  backFigureMiddleColor: string;
  setShapeFront: React.Dispatch<React.SetStateAction<string>>;
  setShapeBack: React.Dispatch<React.SetStateAction<string>>;
}

export const BoardPixieSvg = ({
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
  legendBack,
  isBackFigureMiddleActive,
  backFigureMiddleColor,
  setShapeFront,
  setShapeBack,
}: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFront = (
    <SnowboardSpecs rotation={rotation}>
      <FrontShapePixie
        legend={legend}
        colorShapeFront={colorShapeFront}
        modelSize={modelSize}
        isFigureTopActive={isFigureTopActive}
        isFigureBottomActive={isFigureBottomActive}
        figureBottomColor={figureBottomColor}
        figureTopColor={figureTopColor}
      />
    </SnowboardSpecs>
  );
  const shapeBack = (
    <SnowboardSpecs rotation={rotation}>
      <BackShapePixie
        isBackFigureMiddleActive={isBackFigureMiddleActive}
        backFigureMiddleColor={backFigureMiddleColor}
        modelSize={modelSize}
        legendBack={legendBack}
        colorShapeBack={colorShapeBack}
      />
    </SnowboardSpecs>
  );
  const shapeFrontForImage = (
    <SnowboardSpecs rotation={0}>
      <FrontShapePixie
        legend={legend}
        colorShapeFront={colorShapeFront}
        modelSize={modelSize}
        isFigureTopActive={isFigureTopActive}
        isFigureBottomActive={isFigureBottomActive}
        figureBottomColor={figureBottomColor}
        figureTopColor={figureTopColor}
      />
    </SnowboardSpecs>
  );
  const shapeBackForImage = (
    <SnowboardSpecs rotation={180}>
      <BackShapePixie
        isBackFigureMiddleActive={isBackFigureMiddleActive}
        backFigureMiddleColor={backFigureMiddleColor}
        modelSize={modelSize}
        legendBack={legendBack}
        colorShapeBack={colorShapeBack}
      />
    </SnowboardSpecs>
  );
  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBackForImage));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFrontForImage));
  }, [formValues]);
  return isBack ? shapeFront : shapeBack;
};
