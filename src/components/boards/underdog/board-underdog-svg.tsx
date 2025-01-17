import { ILegent } from '../../../types/types';
import { SnowboardSpecs } from '../SnowboardSpecsFront';
import { FrontShapeUnderdog } from './front-shape/front-shape-underdog';
import { BackShapeUnderdog } from './back-shape/back-shape-underdog';
import { useEffect } from 'react';
import ReactDOMServer from 'react-dom/server';
import { useAppSelector } from '../../../store/hooks/hooks';
import { RootState } from '../../../store/store';

interface IProps {
  colorShapeFront: string;
  isFigureTopActive: boolean;
  figureTopColor: string;
  figureBottomActive: boolean;
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
  figureBottomActive,
  figureBottomColor,
  legend,
  modelSize,
  rotation,
  isBack,
  setShapeFront,
  setShapeBack,
  isBackFigureMiddleActive,
  backFigureMiddleColor,
  legendBack,
}: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const shapeFront = (
    <SnowboardSpecs rotation={rotation}>
      <FrontShapeUnderdog
        colorShapeFront={colorShapeFront}
        isFigureTopActive={isFigureTopActive}
        figureTopColor={figureTopColor}
        isFigureBottomActive={figureBottomActive}
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

  useEffect(() => {
    setShapeBack(ReactDOMServer.renderToStaticMarkup(shapeBack));
    setShapeFront(ReactDOMServer.renderToStaticMarkup(shapeFront));
  }, [formValues]);

  return isBack ? shapeFront : shapeBack;
};
