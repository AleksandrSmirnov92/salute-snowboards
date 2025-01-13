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
        return (
          <BoardPixieSvg
            isBack={isBack}
            rotation={rotation}
            ref={svgRef}
            isFigureTopActive={value.figures.figureTop.isActive}
            straightLineTopColor={value.figures.figureTop.colorFigure.hex}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            straightLineBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShape={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
            modelSize={value.boardLength.size}
          />
        );
      case ModelsSnowboards.Underdog:
        return (
          <BoardUnderdogSvg
            ref={svgRef}
            isStraightLineTopActive={value.figures.figureTop.isActive}
            straightLineTopColor={value.figures.figureTop.colorFigure.hex}
            isStraightLineBottomActive={value.figures.figureBottom.isActive}
            straightLineBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShape={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
            modelSize={value.boardLength.title}
          />
        );
      case ModelsSnowboards.AMFish:
        return (
          <BoardAmFishSvg
            ref={svgRef}
            colorShape={value.colorModel.colorOut.color.hex!}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            isFigureTopActive={value.figures.figureTop.isActive}
            figureTopColor={value.figures.figureTop.colorFigure.hex}
            figureBottomColor={value.figures.figureBottom.colorFigure.hex}
            edgingColor={value.colorModel.colorEdging.color.hex}
            legend={value.legend}
            modelSize={value.boardLength.size}
          />
        );
      case ModelsSnowboards.BCFR:
        return (
          <BoardBcfrSvg
            ref={svgRef}
            colorShape={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
            modelSize={value.boardLength.title}
          />
        );
      case ModelsSnowboards.Unit: {
        return (
          <BoardUnitSvg
            ref={svgRef}
            isFigureTopActive={value.figures.figureTop.isActive}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            figureTopColor={value.figures.figureTop.colorFigure.hex}
            figureBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShapeInner={value.colorModel.colorIn.color.hex!}
            colorShapeOut={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
            edgingColor={value.colorModel.colorEdging.color.hex}
            modelSize={value.boardLength.size}
          />
        );
      }

      case ModelsSnowboards.Fae: {
        return (
          <BoardFaeSvg
            ref={svgRef}
            isFigureTopActive={value.figures.figureTop.isActive}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            figureTopColor={value.figures.figureTop.colorFigure.hex}
            figureBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShapeInner={value.colorModel.colorIn.color.hex!}
            colorShapeOut={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
            edgingColor={value.colorModel.colorEdging.color.hex}
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
