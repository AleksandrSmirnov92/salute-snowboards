import Select from '../../../../../components/custom/select/select';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import { ILegent } from '../../../../../types/types';
import {
  setLegendValueBackPart,
  IInitialState,
  setLegendTopColorBackPart,
  setLegendMiddleColorBackPart,
  setLegendBottomColorBackPart,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { colorPaletteFront } from '../../../../../store/data/color-palette';
interface IProps {
  legends: ILegent[];
  formValues: IInitialState;
  modelColorOut: string | null;
  modelColorInner: string | null;
}
export const SelectLegendsBack = ({ legends, formValues, modelColorOut, modelColorInner }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Select
        name={'LegendPosition'}
        label={'Вариант cкользяка'}
        labelContentPosition={'justify-start'}
        options={legends.map((item) => {
          return {
            // bgColor: item.,
            title: item.title,
            colorLegend: item.colorLegend,
            pos: item.pos,
            id: item.id,
          };
        })}
        onChange={(e) => dispatch(setLegendValueBackPart(e))}
        valueTest={{
          title: formValues.boardDetails.backPart.legend.title,
          value: formValues.boardDetails.backPart.legend,
        }}
      />
      <div className="md:grid md:grid-cols-2   md:grid-flow-row">
        {formValues.boardDetails.backPart.legend.colorLegend.top ? (
          <Select
            disabled={formValues.boardDetails.backPart.legend.pos === 'Not selected'}
            name={'ColorLegendTop'}
            label={'Цвет вверх'}
            labelContentPosition={'justify-start'}
            options={colorPaletteFront.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendTopColorBackPart(e))}
            valueTest={{
              title: formValues.boardDetails.backPart.legend.colorLegend.top.colorPallete.cmyk!,
              bgColor: formValues.boardDetails.backPart.legend.colorLegend.top.colorPallete.bgColor,
              value: formValues.boardDetails.backPart.legend.colorLegend.top.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
        {formValues.boardDetails.backPart.legend.colorLegend.middle ? (
          <Select
            name={'ColorLegendMiddle'}
            disabled={formValues.boardDetails.backPart.legend.pos === 'Not selected'}
            label={'Цвет по центру '}
            labelContentPosition={'justify-start'}
            options={colorPaletteFront.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendMiddleColorBackPart(e))}
            valueTest={{
              title: formValues.boardDetails.backPart.legend.colorLegend.middle.colorPallete.cmyk!,
              bgColor: formValues.boardDetails.backPart.legend.colorLegend.middle.colorPallete.bgColor,
              value: formValues.boardDetails.backPart.legend.colorLegend.middle.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
        {formValues.boardDetails.backPart.legend.colorLegend.bottom ? (
          <Select
            name={'ColorLegendBottom'}
            disabled={formValues.boardDetails.backPart.legend.pos === 'Not selected'}
            label={'Цвет низ'}
            labelContentPosition={'justify-start'}
            options={colorPaletteFront.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendBottomColorBackPart(e))}
            valueTest={{
              title: formValues.boardDetails.backPart.legend.colorLegend.bottom.colorPallete.cmyk!,
              bgColor: formValues.boardDetails.backPart.legend.colorLegend.bottom.colorPallete.bgColor,
              value: formValues.boardDetails.backPart.legend.colorLegend.bottom.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
      </div>
    </>
  );
};
