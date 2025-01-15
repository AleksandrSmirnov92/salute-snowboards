import Select from '../../../../../components/custom/select/select';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import { ILegent } from '../../../../../types/types';

import {
  setLegendValueFrontPart,
  setLegendTopColorFrontPart,
  setLegendMiddleColorFrontPart,
  setLegendBottomColorFrontPart,
  IInitialState,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { colorPaletteFront } from '../../../../../store/data/color-palette';
interface IProps {
  legends: ILegent[];
  formValues: IInitialState;
  modelColorOut: string | null;
  modelColorInner: string | null;
}

export const SelectLegends = ({ legends, formValues, modelColorOut, modelColorInner }: IProps) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <Select
        name={'LegendPosition'}
        label={'Легенда'}
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
        onChange={(e) => dispatch(setLegendValueFrontPart(e))}
        valueTest={{
          title: formValues.boardDetails.frontPart.legend.title,
          value: formValues.boardDetails.frontPart.legend,
        }}
      />
      <div className="md:grid md:grid-cols-2   md:grid-flow-row">
        {formValues.boardDetails.frontPart.legend.colorLegend.top ? (
          <Select
            disabled={formValues.boardDetails.frontPart.legend.pos === 'Not selected'}
            name={'ColorLegendTop'}
            label={'Цвет вверх'}
            labelContentPosition={'justify-start'}
            options={colorPaletteFront.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendTopColorFrontPart(e))}
            valueTest={{
              title: formValues.boardDetails.frontPart.legend.colorLegend.top.colorPallete.cmyk!,
              bgColor: formValues.boardDetails.frontPart.legend.colorLegend.top.colorPallete.bgColor,
              value: formValues.boardDetails.frontPart.legend.colorLegend.top.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
        {formValues.boardDetails.frontPart.legend.colorLegend.middle ? (
          <Select
            name={'ColorLegendMiddle'}
            disabled={formValues.boardDetails.frontPart.legend.pos === 'Not selected'}
            label={'Цвет по центру '}
            labelContentPosition={'justify-start'}
            options={colorPaletteFront.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendMiddleColorFrontPart(e))}
            valueTest={{
              title: formValues.boardDetails.frontPart.legend.colorLegend.middle.colorPallete.cmyk!,
              bgColor: formValues.boardDetails.frontPart.legend.colorLegend.middle.colorPallete.bgColor,
              value: formValues.boardDetails.frontPart.legend.colorLegend.middle.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
        {formValues.boardDetails.frontPart.legend.colorLegend.bottom ? (
          <Select
            name={'ColorLegendBottom'}
            disabled={formValues.boardDetails.frontPart.legend.pos === 'Not selected'}
            label={'Цвет низ'}
            labelContentPosition={'justify-start'}
            options={colorPaletteFront.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendBottomColorFrontPart(e))}
            valueTest={{
              title: formValues.boardDetails.frontPart.legend.colorLegend.bottom.colorPallete.cmyk!,
              bgColor: formValues.boardDetails.frontPart.legend.colorLegend.bottom.colorPallete.bgColor,
              value: formValues.boardDetails.frontPart.legend.colorLegend.bottom.colorPallete,
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
