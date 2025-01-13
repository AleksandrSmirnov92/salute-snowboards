import Select from '../../../../../components/custom/select/select';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import { ILegent } from '../../../../../types/types';

import {
  setLegendValue,
  setLegendTopColor,
  setLegendMiddleColor,
  setLegendBottomColor,
  IInitialState,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { colorPalette } from '../../../../../store/data/color-palette';
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
        label={'Legend position'}
        labelContentPosition={'justify-start'}
        options={legends.map((item) => {
          return {
            // bgColor: item.,
            title: item.pos,
            colorLegend: item.colorLegend,
            pos: item.pos,
            id: item.id,
          };
        })}
        onChange={(e) => dispatch(setLegendValue(e))}
        valueTest={{
          title: formValues.legend.pos,
          value: formValues.legend,
        }}
      />
      <div className="md:grid md:grid-cols-2   md:grid-flow-row">
        {formValues.legend.colorLegend.top ? (
          <Select
            disabled={formValues.legend.pos === 'Not selected'}
            name={'ColorLegendTop'}
            label={'Color legend top'}
            labelContentPosition={'justify-start'}
            options={colorPalette.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendTopColor(e))}
            valueTest={{
              title: formValues.legend.colorLegend.top.colorPallete.cmyk!,
              bgColor: formValues.legend.colorLegend.top.colorPallete.bgColor,
              value: formValues.legend.colorLegend.top.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
        {formValues.legend.colorLegend.middle ? (
          <Select
            name={'ColorLegendMiddle'}
            disabled={formValues.legend.pos === 'Not selected'}
            label={'Color legend middle'}
            labelContentPosition={'justify-start'}
            options={colorPalette.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendMiddleColor(e))}
            valueTest={{
              title: formValues.legend.colorLegend.middle.colorPallete.cmyk!,
              bgColor: formValues.legend.colorLegend.middle.colorPallete.bgColor,
              value: formValues.legend.colorLegend.middle.colorPallete,
            }}
            boardColorOut={modelColorOut}
            boardColorInner={modelColorInner}
          />
        ) : (
          ''
        )}
        {formValues.legend.colorLegend.bottom ? (
          <Select
            name={'ColorLegendBottom'}
            disabled={formValues.legend.pos === 'Not selected'}
            label={'Color legend bottom'}
            labelContentPosition={'justify-start'}
            options={colorPalette.map((item) => {
              return { ...item, title: item.cmyk! };
            })}
            onChange={(e) => dispatch(setLegendBottomColor(e))}
            valueTest={{
              title: formValues.legend.colorLegend.bottom.colorPallete.cmyk!,
              bgColor: formValues.legend.colorLegend.bottom.colorPallete.bgColor,
              value: formValues.legend.colorLegend.bottom.colorPallete,
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
