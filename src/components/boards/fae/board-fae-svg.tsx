import { ILegent } from '../../../types/types';
import { SnowboardSpecs } from '../SnowboardSpecsFront';
import { FrontShapeFae } from './front-shape/front-shape-fae';
import { BackShapeFae } from './back-shape/back-shape-fae';
import { useAppSelector } from '../../../store/hooks/hooks';

import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { RootState } from '../../../store/store';

interface IProps {
  colorShapeOut: string;
  colorShapeInner: string;
  legend: ILegent;
  isFigureTopActive: boolean;
  isFigureBottomActive: boolean;
  figureTopColor: string;
  figureBottomColor: string;
  edgingColor: string;
  modelSize: number | string;
  isBack: boolean;
  colorShapeBack: string;
  setShapeFront: React.Dispatch<React.SetStateAction<string>>;
  setShapeBack: React.Dispatch<React.SetStateAction<string>>;
  legendBack: ILegent;
  isBackFigureMiddleActive: boolean;
  backFigureMiddleColor: string;
  activeBack: boolean;
}

export const BoardFaeSvg = ({
  colorShapeOut,
  colorShapeInner,
  legend,
  isFigureTopActive,
  figureTopColor,
  isFigureBottomActive,
  figureBottomColor,
  edgingColor,
  modelSize,
  isBack,
  colorShapeBack,
  setShapeFront,
  setShapeBack,
  legendBack,
  isBackFigureMiddleActive,
  backFigureMiddleColor,
  activeBack,
}: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFront = (
    <SnowboardSpecs isActive={activeBack}>
      <FrontShapeFae
        legend={legend}
        modelSize={modelSize}
        colorShapeInner={colorShapeInner}
        colorShapeOut={colorShapeOut}
        figureBottomColor={figureBottomColor}
        figureTopColor={figureTopColor}
        isFigureBottomActive={isFigureBottomActive}
        isFigureTopActive={isFigureTopActive}
        edgingColor={edgingColor}
      />
    </SnowboardSpecs>
  );
  const shapeBack = (
    <SnowboardSpecs isActive={activeBack}>
      <BackShapeFae
        isBackFigureMiddleActive={isBackFigureMiddleActive}
        backFigureMiddleColor={backFigureMiddleColor}
        modelSize={modelSize}
        legendBack={legendBack}
        colorShapeBack={colorShapeBack}
      />
    </SnowboardSpecs>
  );
  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBack));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFront));
  }, [formValues]);

  return isBack ? shapeFront : shapeBack;
};
