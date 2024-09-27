import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/hooks';
import { BoardUnderdogSvg } from '../boards-components/underdog/board-underdog-svg';
import { IInitialState } from '../../../store/feautures/formValues/formValuesSlice';
import { ModelsSnowboards } from '../../../store/contracts';
import { BoardPixieSvg } from '../boards-components/pixie/board-pixie-svg';
import { BoardBcfrSvg } from '../boards-components/bcfr/board-bcfr-svg';
import { BoardFaeSvg } from '../boards-components/fae/board-fae-svg';
import { BoardUnitSvg } from '../boards-components/unit/board-unit-svg';

interface IProps {}
export const BoardDisplay = ({}: IProps) => {
  const formValues = useAppSelector((state) => state.selectedValuesForm);
  const getAlertMessage = (value: IInitialState) => {
    switch (value.model.title) {
      case ModelsSnowboards.Pixie:
        return (
          <BoardPixieSvg
            isFigureTopActive={value.figures.figureTop.isActive}
            straightLineTopColor={value.figures.figureTop.colorFigure.hex}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            straightLineBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShape={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
          />
        );
      case ModelsSnowboards.Underdog:
        return (
          <BoardUnderdogSvg
            isStraightLineTopActive={value.figures.figureTop.isActive}
            straightLineTopColor={value.figures.figureTop.colorFigure.hex}
            isStraightLineBottomActive={value.figures.figureBottom.isActive}
            straightLineBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShape={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
          />
        );
      case ModelsSnowboards.AMFish:
        return <></>;
      case ModelsSnowboards.BCFR:
        return <BoardBcfrSvg colorShape={value.colorModel.colorOut.color.hex!} legend={value.legend} />;
      case ModelsSnowboards.Unit: {
        return (
          <BoardUnitSvg
            isFigureTopActive={value.figures.figureTop.isActive}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            figureTopColor={value.figures.figureTop.colorFigure.hex}
            figureBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShapeInner={value.colorModel.colorIn.color.hex!}
            colorShapeOut={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
          />
        );
      }

      case ModelsSnowboards.Fae: {
        return (
          <BoardFaeSvg
            isFigureTopActive={value.figures.figureTop.isActive}
            isFigureBottomActive={value.figures.figureBottom.isActive}
            figureTopColor={value.figures.figureTop.colorFigure.hex}
            figureBottomColor={value.figures.figureBottom.colorFigure.hex}
            colorShapeInner={value.colorModel.colorIn.color.hex!}
            colorShapeOut={value.colorModel.colorOut.color.hex!}
            legend={value.legend}
          />
        );
      }
      default:
        return <></>;
    }
  };
  const result = getAlertMessage(formValues);
  useEffect(() => {
    console.log('formValuesInDisplayComponent', formValues);
  }, [formValues]);
  return <>{result}</>;
};
