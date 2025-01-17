import { useEffect, useRef } from 'react';
import { useAppSelector } from '../../../../store/hooks/hooks';
import { IInitialState } from '../../../../store/feautures/formValues/form-values-slice';
import { ISendMessageValue, ModelsSnowboards } from '../../../../types/types';

import { createDataForTilde } from '../../../../utils/creator-data-for-tilda';
import { serializeSVG } from '../../../../utils/serialize-svg';
import { BoardUnderdogSvg } from '../../../../components/boards/underdog/board-underdog-svg';
import { BoardPixieSvg } from '../../../../components/boards/pixie/board-pixie-svg';
import { BoardAmFishSvg } from '../../../../components/boards/amf/board-am-fish-svg';
import { BoardUnitSvg } from '../../../../components/boards/unit/board-unit-svg';
import { BoardBcfrSvg } from '../../../../components/boards/bcfr/board-bcfr-svg';
import { BoardFaeSvg } from '../../../../components/boards/fae/board-fae-svg';

interface IProps {
  isBack: boolean;
  rotation: number;
}
export const BoardDisplay = ({ isBack, rotation }: IProps) => {
  const formValues = useAppSelector((state) => state.selectedValuesForm);
  const svgRef = useRef<any>(null);
  const getSnowboard = (value: IInitialState) => {
    switch (value.model.title) {
      case ModelsSnowboards.Pixie:
        console.log(value.boardDetails.backPart.colorModelBack.colorOut.color.hex);
        return (
          <BoardPixieSvg
            isBack={isBack}
            rotation={rotation}
            ref={svgRef}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            straightLineTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            straightLineBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeFront={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            colorShapeBack={value.boardDetails.backPart.colorModelBack.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            modelSize={value.boardLength.size}
          />
        );
      case ModelsSnowboards.Underdog:
        return (
          <BoardUnderdogSvg
            ref={svgRef}
            isStraightLineTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            straightLineTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            isStraightLineBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            straightLineBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShape={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            modelSize={value.boardLength.title}
          />
        );
      case ModelsSnowboards.AMFish:
        return (
          <BoardAmFishSvg
            ref={svgRef}
            colorShape={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            edgingColor={value.boardDetails.frontPart.colorModelFront.colorEdging.color.hex}
            legend={value.boardDetails.frontPart.legend}
            modelSize={value.boardLength.size}
          />
        );
      case ModelsSnowboards.BCFR:
        return (
          <BoardBcfrSvg
            ref={svgRef}
            colorShape={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            modelSize={value.boardLength.title}
          />
        );
      case ModelsSnowboards.Unit: {
        return (
          <BoardUnitSvg
            ref={svgRef}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeInner={value.boardDetails.frontPart.colorModelFront.colorIn.color.hex!}
            colorShapeOut={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            edgingColor={value.boardDetails.frontPart.colorModelFront.colorEdging.color.hex}
            modelSize={value.boardLength.size}
          />
        );
      }

      case ModelsSnowboards.Fae: {
        return (
          <BoardFaeSvg
            ref={svgRef}
            isFigureTopActive={value.boardDetails.frontPart.figuresFront.figureTop.isActive}
            isFigureBottomActive={value.boardDetails.frontPart.figuresFront.figureBottom.isActive}
            figureTopColor={value.boardDetails.frontPart.figuresFront.figureTop.colorFigure.hex}
            figureBottomColor={value.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.hex}
            colorShapeInner={value.boardDetails.frontPart.colorModelFront.colorIn.color.hex!}
            colorShapeOut={value.boardDetails.frontPart.colorModelFront.colorOut.color.hex!}
            legend={value.boardDetails.frontPart.legend}
            edgingColor={value.boardDetails.frontPart.colorModelFront.colorEdging.color.hex}
            modelSize={value.boardLength.size}
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
  useEffect(() => {
    const dataUrl = serializeSVG(svgRef, formValues.model.title);
    const values: ISendMessageValue = createDataForTilde(formValues, dataUrl);
    sendMessageToParent('updateForm', values);
  }, [formValues]);
  return <>{result}</>;
};
