import { ILegent } from '../../../types/types';
import { SnowboardSpecs } from '../SnowboardSpecsFront';
import { FrontShapeAmFish } from './front-shape-am-fish/front-shape-am-fish';
import { BackShapeAmFish } from './back-shape-am-fish/back-shape-am-fish';
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
  edgingColor: string;
  legendBack: ILegent;
  isBackFigureMiddleActive: boolean;
  backFigureMiddleColor: string;
  setShapeFront: React.Dispatch<React.SetStateAction<string>>;
  setShapeBack: React.Dispatch<React.SetStateAction<string>>;
}
export const BoardAmFishSvg = ({
  colorShapeFront,
  colorShapeBack,
  isFigureTopActive,
  isFigureBottomActive,
  figureTopColor,
  figureBottomColor,
  edgingColor,
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
      <FrontShapeAmFish
        colorShapeFront={colorShapeFront}
        isFigureTopActive={isFigureTopActive}
        figureTopColor={figureTopColor}
        isFigureBottomActive={isFigureBottomActive}
        figureBottomColor={figureBottomColor}
        legend={legend}
        modelSize={modelSize}
        edgingColor={edgingColor}
      />
    </SnowboardSpecs>
  );
  const shapeBack = (
    <SnowboardSpecs rotation={rotation}>
      <BackShapeAmFish
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
      <FrontShapeAmFish
        colorShapeFront={colorShapeFront}
        isFigureTopActive={isFigureTopActive}
        figureTopColor={figureTopColor}
        isFigureBottomActive={isFigureBottomActive}
        figureBottomColor={figureBottomColor}
        legend={legend}
        modelSize={modelSize}
        edgingColor={edgingColor}
      />
    </SnowboardSpecs>
  );
  const shapeBackForImage = (
    <SnowboardSpecs rotation={180}>
      <BackShapeAmFish
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
