import Select from '../../../../../components/custom/select/select';
import { colorPaletteBack } from '../../../../../store/data/color-palette';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import { IColorPallete } from '../../../../../types/color-pallete';
import { ISelectOptions, ISnowboard } from '../../../../../types/types';
import { updateOuterColorFrontBack, IInitialState } from '../../../../../store/feautures/formValues/form-values-slice';
interface ISelecColorsBack {
  selectedModel: ISelectOptions;
  selectOptions: ISnowboard[];
  formValues: IInitialState;
  modelColorOutBack: string | null;
  setModelColorsOutBack: React.Dispatch<React.SetStateAction<string | null>>;
  modelColorInnerBack: string | null;
  setModelColorsInnerBack: React.Dispatch<React.SetStateAction<string | null>>;
}
export const SelectColorsBack = ({ formValues, modelColorInnerBack, setModelColorsOutBack }: ISelecColorsBack) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Select
        name={'ColorsModelBack'}
        label={`${'Базовый цвет скользяка'}`}
        labelContentPosition={'justify-start'}
        options={colorPaletteBack.map((item) => {
          return { ...item, title: item.cmyk! };
        })}
        onChange={(e: IColorPallete) => {
          console.log(formValues.boardDetails.backPart.colorModelBack.colorOut.color.bgColor);
          setModelColorsOutBack(e.bgColor);
          dispatch(updateOuterColorFrontBack(e));
        }}
        valueTest={{
          title: formValues.boardDetails.backPart.colorModelBack.colorOut.color.cmyk!,
          bgColor: formValues.boardDetails.backPart.colorModelBack.colorOut.color.bgColor!,
          value: formValues.boardDetails.backPart.colorModelBack.colorOut.color,
        }}
        boardColorInner={modelColorInnerBack}
      />
    </>
  );
};
