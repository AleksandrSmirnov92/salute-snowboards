import { useEffect } from 'react';
import { useAppSelector } from '../../../store/hooks/hooks';
import { BoardUnderdogSvg } from '../boards-components/underdog/board-underdog-svg';
import { IInitialState } from '../../../store/feautures/formValues/formValuesSlice';
import { ModelsSnowboards } from '../../../store/contracts';

export const BoardDisplay = () => {
  const formValues = useAppSelector((state) => state.selectedValuesForm);
  const getAlertMessage = (value: IInitialState) => {
    switch (value.model.title) {
      case ModelsSnowboards.Pixie:
        return <></>;
      case ModelsSnowboards.Underdog:
        return (
          <BoardUnderdogSvg
            isStraightLineTopActive={value.straightLines.straightLineTop.isActive}
            straightLineTopColor={value.straightLines.straightLineTop.colorLine.hex}
            isStraightLineBottomActive={value.straightLines.straightLineBottom.isActive}
            straightLineBottomColor={value.straightLines.straightLineBottom.colorLine.hex}
            colorShape={value.color.hex!}
            legend={value.legend}
          />
        );
      case ModelsSnowboards.AMFish:
        return <></>;
      case ModelsSnowboards.BCFR:
        return <></>;
      case ModelsSnowboards.Unit:
        return <></>;
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
