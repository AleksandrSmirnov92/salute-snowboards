import { colorPaletteFront } from '../../../../../store/data/color-palette';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import {
  updateOuterColorFrontPart,
  toggleOuterColorActiveFrontPart,
  updateInnerColorFrontPart,
  toggleInnerColorActiveFrontPart,
  updateEdgingColorFrontPart,
  toggleEdgingColorActiveFrontPart,
  IInitialState,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { ISelectOptions, ISnowboard, ModelsSnowboards } from '../../../../../types/types';
import { IColorPallete } from '../../../../../types/color-pallete';
import Select from '../../../../../components/custom/select/select';
interface ISelecColors {
  selectedModel: ISelectOptions;
  selectOptions: ISnowboard[];
  formValues: IInitialState;
  modelColorOut: string | null;
  setModelColorsOut: React.Dispatch<React.SetStateAction<string | null>>;
  modelColorInner: string | null;
  setModelColorsInner: React.Dispatch<React.SetStateAction<string | null>>;
}
export const SelectColors = ({
  selectOptions,
  selectedModel,
  formValues,
  modelColorOut,
  modelColorInner,
  setModelColorsInner,
  setModelColorsOut,
}: ISelecColors) => {
  const dispatch = useAppDispatch();
  const [modelColorInnerToActive, setModelColorsInnerToActive] = useState<boolean>(false);
  const [colorEdgingActive, setColorEdgingActive] = useState<boolean>(false);
  // const [modelColorOut, setModelColorsOut] = useState<null | string>(null);
  // const [modelColorInner, setModelColorsInner] = useState<null | string>(null);

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.frontPart.colorModelFront) return;

    const { colorOut, colorIn } = actualModel.boardDetails.frontPart.colorModelFront;

    if (colorOut.isActive) {
      setModelColorsOut(colorOut.color[0].bgColor);
      dispatch(updateOuterColorFrontPart(colorOut.color[0]));
      dispatch(toggleOuterColorActiveFrontPart(colorOut.isActive));
      dispatch(toggleInnerColorActiveFrontPart(colorIn.isActive));
      setModelColorsInnerToActive(colorIn.isActive);

      switch (selectedModel.title) {
        case ModelsSnowboards.Fae: {
          setModelColorsOut(colorOut.color[5].bgColor);
          dispatch(updateOuterColorFrontPart(colorOut.color[5]));
          dispatch(toggleOuterColorActiveFrontPart(colorOut.isActive));
          setModelColorsInner(colorIn.color[2].bgColor);
          dispatch(updateInnerColorFrontPart(colorIn.color[2]));
          break;
        }
        case ModelsSnowboards.Unit: {
          setModelColorsOut(colorOut.color[9].bgColor);
          dispatch(updateOuterColorFrontPart(colorOut.color[9]));
          dispatch(toggleOuterColorActiveFrontPart(colorOut.isActive));
          setModelColorsInner(colorIn.color[16].bgColor);
          dispatch(updateInnerColorFrontPart(colorIn.color[16]));
          break;
        }
      }
    }
  }, [selectedModel, selectOptions, dispatch]);

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.frontPart.colorModelFront) return;

    const { colorEdging } = actualModel.boardDetails.frontPart.colorModelFront;
    setColorEdgingActive(colorEdging.isActive);
    dispatch(toggleEdgingColorActiveFrontPart(colorEdging.isActive));
    if (colorEdging.isActive) {
      switch (selectedModel.title) {
        case ModelsSnowboards.Fae: {
          dispatch(updateEdgingColorFrontPart(colorEdging.color[1]));
          break;
        }
        case ModelsSnowboards.Unit: {
          dispatch(updateEdgingColorFrontPart(colorEdging.color[1]));
          break;
        }
        case ModelsSnowboards.AMFish: {
          break;
        }
      }
    }
  }, [selectedModel, selectOptions, dispatch]);
  return (
    <>
      <Select
        name={'ColorsModel'}
        label={`${modelColorInnerToActive ? `Внешний цвет` : 'Базовый цвет'}`}
        labelContentPosition={'justify-start'}
        options={colorPaletteFront.map((item) => {
          return { ...item, title: item.cmyk! };
        })}
        onChange={(e: IColorPallete) => {
          setModelColorsOut(e.bgColor);
          dispatch(updateOuterColorFrontPart(e));
        }}
        valueTest={{
          title: formValues.boardDetails.frontPart.colorModelFront.colorOut.color.cmyk!,
          bgColor: formValues.boardDetails.frontPart.colorModelFront.colorOut.color.bgColor!,
          value: formValues.boardDetails.frontPart.colorModelFront.colorOut.color,
        }}
        boardColorInner={modelColorInner}
      />
      {modelColorInnerToActive ? (
        <Select
          name={'ColorsModelIn'}
          label={'Базовый цвет'}
          labelContentPosition={'justify-start'}
          options={colorPaletteFront.map((item) => {
            return { ...item, title: item.cmyk! };
          })}
          onChange={(e: IColorPallete) => {
            setModelColorsInner(e.bgColor);
            dispatch(updateInnerColorFrontPart(e));
          }}
          valueTest={{
            title: formValues.boardDetails.frontPart.colorModelFront.colorIn.color.cmyk!,
            bgColor: formValues.boardDetails.frontPart.colorModelFront.colorIn.color.bgColor!,
            value: formValues.boardDetails.frontPart.colorModelFront.colorIn.color,
          }}
          boardColorOut={modelColorOut}
        />
      ) : (
        ''
      )}
      {colorEdgingActive ? (
        <Select
          name={'ColorsModelEdging'}
          label={'Цвет Окантовки'}
          labelContentPosition={'justify-start'}
          options={colorPaletteFront.map((item) => {
            return { ...item, title: item.cmyk! };
          })}
          onChange={(e: IColorPallete) => {
            // setModelColorEdging(e.bgColor);
            dispatch(updateEdgingColorFrontPart(e));
          }}
          valueTest={{
            title: formValues.boardDetails.frontPart.colorModelFront.colorEdging.color.cmyk!,
            bgColor: formValues.boardDetails.frontPart.colorModelFront.colorEdging.color.bgColor!,
            value: formValues.boardDetails.frontPart.colorModelFront.colorEdging.color,
          }}
          boardColorOut={modelColorOut}
          boardColorInner={modelColorInner}
          excludeBothColors={true}
        />
      ) : (
        ''
      )}
    </>
  );
};
