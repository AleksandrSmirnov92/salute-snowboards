import { colorPalette } from '../../../../../store/data/color-palette';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import {
  updateOuterColor,
  toggleOuterColorActive,
  updateInnerColor,
  toggleInnerColorActive,
  updateEdgingColor,
  toggleEdgingColorActive,
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
    if (!actualModel || !actualModel.boardDetails.frontPart.colorModel) return;

    const { colorOut, colorIn } = actualModel.boardDetails.frontPart.colorModel;

    if (colorOut.isActive) {
      setModelColorsOut(colorOut.color[0].bgColor);
      dispatch(updateOuterColor(colorOut.color[0]));
      dispatch(toggleOuterColorActive(colorOut.isActive));
      dispatch(toggleInnerColorActive(colorIn.isActive));
      setModelColorsInnerToActive(colorIn.isActive);

      switch (selectedModel.title) {
        case ModelsSnowboards.Fae: {
          setModelColorsOut(colorOut.color[5].bgColor);
          dispatch(updateOuterColor(colorOut.color[5]));
          dispatch(toggleOuterColorActive(colorOut.isActive));
          setModelColorsInner(colorIn.color[2].bgColor);
          dispatch(updateInnerColor(colorIn.color[2]));
          break;
        }
        case ModelsSnowboards.Unit: {
          setModelColorsOut(colorOut.color[9].bgColor);
          dispatch(updateOuterColor(colorOut.color[9]));
          dispatch(toggleOuterColorActive(colorOut.isActive));
          setModelColorsInner(colorIn.color[16].bgColor);
          dispatch(updateInnerColor(colorIn.color[16]));
          break;
        }
      }
    }
  }, [selectedModel, selectOptions, dispatch]);

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.frontPart.colorModel) return;

    const { colorEdging } = actualModel.boardDetails.frontPart.colorModel;
    setColorEdgingActive(colorEdging.isActive);
    dispatch(toggleEdgingColorActive(colorEdging.isActive));
    if (colorEdging.isActive) {
      switch (selectedModel.title) {
        case ModelsSnowboards.Fae: {
          dispatch(updateEdgingColor(colorEdging.color[1]));
          break;
        }
        case ModelsSnowboards.Unit: {
          dispatch(updateEdgingColor(colorEdging.color[1]));
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
        label={`Colors model ${modelColorInnerToActive ? 'outer' : ''}`}
        labelContentPosition={'justify-start'}
        options={colorPalette.map((item) => {
          return { ...item, title: item.cmyk! };
        })}
        onChange={(e: IColorPallete) => {
          setModelColorsOut(e.bgColor);
          dispatch(updateOuterColor(e));
        }}
        valueTest={{
          title: formValues.colorModel.colorOut.color.cmyk!,
          bgColor: formValues.colorModel.colorOut.color.bgColor!,
          value: formValues.colorModel.colorOut.color,
        }}
        boardColorInner={modelColorInner}
      />
      {modelColorInnerToActive ? (
        <Select
          name={'ColorsModelIn'}
          label={'Colors model inner'}
          labelContentPosition={'justify-start'}
          options={colorPalette.map((item) => {
            return { ...item, title: item.cmyk! };
          })}
          onChange={(e: IColorPallete) => {
            setModelColorsInner(e.bgColor);
            dispatch(updateInnerColor(e));
          }}
          valueTest={{
            title: formValues.colorModel.colorIn.color.cmyk!,
            bgColor: formValues.colorModel.colorIn.color.bgColor!,
            value: formValues.colorModel.colorIn.color,
          }}
          boardColorOut={modelColorOut}
        />
      ) : (
        ''
      )}
      {colorEdgingActive ? (
        <Select
          name={'ColorsModelEdging'}
          label={'Colors model Edging'}
          labelContentPosition={'justify-start'}
          options={colorPalette.map((item) => {
            return { ...item, title: item.cmyk! };
          })}
          onChange={(e: IColorPallete) => {
            // setModelColorEdging(e.bgColor);
            dispatch(updateEdgingColor(e));
          }}
          valueTest={{
            title: formValues.colorModel.colorEdging.color.cmyk!,
            bgColor: formValues.colorModel.colorEdging.color.bgColor!,
            value: formValues.colorModel.colorEdging.color,
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
