import { useLayoutEffect, useState } from 'react';
import { useAppSelector } from '../../../../store/hooks/hooks';
import { IInitialState } from '../../../../store/feautures/formValues/form-values-slice';
import { ISendMessageValue, ModelsSnowboards } from '../../../../types/types';
import { createDataForTilde } from '../../../../utils/creator-data-for-tilda';
import { BoardUnderdogSvg } from '../../../../components/boards/underdog/board-underdog-svg';
import { BoardPixieSvg } from '../../../../components/boards/pixie/board-pixie-svg';
import { BoardAmFishSvg } from '../../../../components/boards/amf/board-am-fish-svg';
import { BoardUnitSvg } from '../../../../components/boards/unit/board-unit-svg';
import { BoardBcfrSvg } from '../../../../components/boards/bcfr/board-bcfr-svg';
import { BoardFaeSvg } from '../../../../components/boards/fae/board-fae-svg';
import { serializeSVGG } from '../../../../utils/serialize-svg copy';
import { RootState } from '../../../../store/store';

interface IProps {
  isBack: boolean;
  rotation: number;
  activeBack: boolean;
}
export const BoardDisplay = ({ isBack, activeBack }: IProps) => {
  const formValues = useAppSelector((state: RootState) => state.selectedValuesForm);
  const [shapeFront, setShapeFront] = useState('');
  const [shapeBack, setShapeBack] = useState('');
  const getSnowboard = (value: IInitialState) => {
    switch (value.model.title) {
      case ModelsSnowboards.Pixie:
        return (
          <BoardPixieSvg
            isBack={isBack}
            setShapeFront={setShapeFront}
            setShapeBack={setShapeBack}
            activeBack={activeBack}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeFront={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            legendBack={value.boardDetails.backPart.legend}
            modelSize={value.boardLength.size}
            isBackFigureMiddleActive={value.boardDetails.backPart.figuresBack.figureMiddle.isActive}
            backFigureMiddleColor={value.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex}
          />
        );
      case ModelsSnowboards.Underdog:
        return (
          <BoardUnderdogSvg
            setShapeFront={setShapeFront}
            setShapeBack={setShapeBack}
            isBack={isBack}
            activeBack={activeBack}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeFront={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            modelSize={value.boardLength.title}
            legendBack={value.boardDetails.backPart.legend}
            isBackFigureMiddleActive={value.boardDetails.backPart.figuresBack.figureMiddle.isActive}
            backFigureMiddleColor={value.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex}
          />
        );
      case ModelsSnowboards.AMFish:
        return (
          <BoardAmFishSvg
            activeBack={activeBack}
            setShapeFront={setShapeFront}
            setShapeBack={setShapeBack}
            isBack={isBack}
            colorShapeFront={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            edgingColor={value.boardDetails.frontPart.colorModelFront.colorEdging.color.hex}
            legend={value.boardDetails.frontPart.legend}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            modelSize={value.boardLength.size}
            legendBack={value.boardDetails.backPart.legend}
            isBackFigureMiddleActive={value.boardDetails.backPart.figuresBack.figureMiddle.isActive}
            backFigureMiddleColor={value.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex}
          />
        );
      case ModelsSnowboards.BCFR:
        return (
          <BoardBcfrSvg
            activeBack={activeBack}
            setShapeFront={setShapeFront}
            setShapeBack={setShapeBack}
            isBack={isBack}
            colorShapeFront={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            modelSize={value.boardLength.title}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            legendBack={value.boardDetails.backPart.legend}
          />
        );
      case ModelsSnowboards.Unit: {
        return (
          <BoardUnitSvg
            activeBack={activeBack}
            setShapeFront={setShapeFront}
            setShapeBack={setShapeBack}
            isBack={isBack}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeInner={value.boardDetails.frontPart.colorModelFront.colorIn.color.hex!}
            colorShapeOut={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            edgingColor={value.boardDetails.frontPart.colorModelFront.colorEdging.color.hex}
            modelSize={value.boardLength.size}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            legendBack={value.boardDetails.backPart.legend}
            isBackFigureMiddleActive={value.boardDetails.backPart.figuresBack.figureMiddle.isActive}
            backFigureMiddleColor={value.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex}
          />
        );
      }

      case ModelsSnowboards.Fae: {
        return (
          <BoardFaeSvg
            activeBack={activeBack}
            setShapeFront={setShapeFront}
            setShapeBack={setShapeBack}
            isBack={isBack}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeInner={value.boardDetails.frontPart.colorModelFront.colorIn.color.hex!}
            colorShapeOut={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            edgingColor={value.boardDetails.frontPart.colorModelFront.colorEdging.color.hex}
            modelSize={value.boardLength.size}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            legendBack={value.boardDetails.backPart.legend}
            isBackFigureMiddleActive={value.boardDetails.backPart.figuresBack.figureMiddle.isActive}
            backFigureMiddleColor={value.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex}
          />
        );
      }
      default:
        return <></>;
    }
  };
  const sendMessageToParent = (action: string, value: ISendMessageValue) => {
    const data = { action: action, value: value };
    window.parent.postMessage(data, 'https://salutmfg.co/constructorultramegasalutconstructor');
  };

  const result = getSnowboard(formValues);

  useLayoutEffect(() => {
    // const s = getS({
    //   model: formValues.model.title,
    //   rotation: rotation,
    //   svgRefFront: svgRefFront,
    //   svgRefBack: svgRefBack,
    //   isFigureTopActive: formValues.boardDetails.frontPart.figuresFront.figureTop.isActive,
    //   figureTopColor: formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex,
    //   isFigureBottomActive: formValues.boardDetails.frontPart.figuresFront.figureBottom.isActive,
    //   figureBottomColor: formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex,
    //   colorShapeFront: formValues.boardDetails.frontPart.colorModelFront.colorOut.color.hex!,
    //   colorShapeBack: formValues.boardDetails.backPart.colorModelBack.colorOut.color.hex!,
    //   legend: formValues.boardDetails.frontPart.legend,
    //   modelSize: formValues.boardLength.size,
    //   edgingColor: formValues.boardDetails.frontPart.colorModelFront.colorEdging.color.hex,
    //   colorShapeOut: formValues.boardDetails.frontPart.colorModelFront.colorOut.color.hex!,
    //   colorShapeInner: formValues.boardDetails.frontPart.colorModelFront.colorIn.color.hex!,
    //   legendBack: formValues.boardDetails.backPart.legend,
    //   isBackFigureMiddleActive: formValues.boardDetails.backPart.figuresBack.figureMiddle.isActive,
    //   backFigureMiddleColor: formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.hex,
    // });
    if (shapeBack && shapeFront) {
      const dataUrlFront = serializeSVGG(shapeFront, formValues.model.title);
      const dataUrlBack = serializeSVGG(shapeBack, formValues.model.title);
      console.log('dataUrlFront', dataUrlFront);
      console.log('dataUrlBack', dataUrlBack);

      const values: ISendMessageValue = createDataForTilde(formValues, dataUrlFront, dataUrlBack);
      sendMessageToParent('updateForm', values);
    }
  }, [shapeBack, shapeFront]);
  return <>{result}</>;
};
