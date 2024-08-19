import type { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Label, Checkbox, Field } from '@headlessui/react';
import { ISelectOptions } from '../../../store/contracts';
import { useAppDispatch } from '../../../store/hooks/hooks';

import {
  setModelValue,
  setColorValue,
  setLegendValue,
  setStraightLineTopActive,
  setStraightLineTopColor,
  setStraightLineBottomActive,
  setStraightLineBottomColor,
  setLegendTopColor,
  setLegendMiddleColor,
  setLegendBottomColor,
} from '../../../store/feautures/formValues/formValuesSlice';
import { colorPalette } from '../../../store/data/colorPalette';
import Select from '../../custom/select/select--legend-position';

export const Options = () => {
  const dispatch = useAppDispatch();
  const selectOptions = useSelector((state: RootState) => state.selectOptions.snowboards);
  const modelsOptions = useSelector((state: RootState) => state.selectOptions.modelsSnowboards);
  const formValues = useSelector((state: RootState) => state.selectedValuesForm);

  const [selectedModel, setSelectedModel] = useState<ISelectOptions>(modelsOptions[3]);

  const getBoardDetails = (modelId: number) => selectOptions.find((item) => item.id === modelId)!.boardDetails;
  const initialDetails = getBoardDetails(selectedModel.id);

  const initialColors = initialDetails.colors;
  const initialLegends = initialDetails.legentPositions;

  const [modelColors, setModelColors] = useState(initialColors);
  const [legends, setLegends] = useState(initialLegends);

  useEffect(() => {
    // Если модель изменилась мы поменяли цвета модели и поставили цвет по умолчанию первый в списке или (базовый)
    // Так же мы выставили настройки расположений линий
    const actualModelColors = selectOptions.find((item) => item.id === selectedModel.id)!.boardDetails.colors;
    const actualLegentPositions = selectOptions.find((item) => item.id === selectedModel.id)!.boardDetails
      .legentPositions;
    dispatch(setModelValue(selectedModel));
    if (actualModelColors) {
      setModelColors(actualModelColors);
      dispatch(setColorValue(actualModelColors[0]));
    }
    if (actualLegentPositions) {
      setLegends(actualLegentPositions);
      dispatch(setLegendValue(actualLegentPositions[0]));
    }

    dispatch(setStraightLineTopActive(false));
    dispatch(setStraightLineBottomActive(false));
    dispatch(setStraightLineTopColor(colorPalette[0]));
    dispatch(setStraightLineBottomColor(colorPalette[0]));
  }, [selectedModel]);

  return (
    <div className="relative h-full overflow-y-auto overflow-x-hidden ">
      <div className="bg-eerie-black h-12 mb-7 mt-3 pl-4 flex items-center w-full">
        <span className="text-warm-gray text-lg">Детали доски</span>
      </div>
      <form className="relative ">
        <Select
          name={'SnowboardsModel'}
          label={'Snowboards model'}
          labelContentPosition={'justify-start'}
          options={modelsOptions.map((item) => {
            return {
              title: item.title,
              id: item.id,
            };
          })}
          onChange={(e) => setSelectedModel(e)}
          valueTest={{
            title: selectedModel.title,
            value: selectedModel,
          }}
        />
        <Select
          name={'ColorsModel'}
          label={'Colors model'}
          labelContentPosition={'justify-start'}
          options={modelColors.map((item) => {
            return {
              bgColor: item.bgColor!,
              title: item.title,
              hex: item.hex,
              id: item.id,
            };
          })}
          onChange={(e) => dispatch(setColorValue(e))}
          valueTest={{
            title: formValues.color.title,
            bgColor: formValues.color.bgColor!,
            value: formValues.color,
          }}
        />
        <div className="flex w-full gap-3 mt-2">
          <div className="flex flex-col w-1/2">
            <Field className="flex justify-center items-center pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">Straight Line Top</Label>
              <Checkbox
                checked={formValues.straightLines.straightLineTop.isActive}
                onChange={(e: boolean) => dispatch(setStraightLineTopActive(e))}
                name={'lineTop'}
                className="group block size-4 ml-2 border border-#b3b2a0 bg-eerie-black shadow-sm  hover:border-#9c9b7c data-[checked]:bg-eerie-black cursor-pointer"
              >
                <svg
                  className="stroke-#b3b2a0 opacity-0 group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Checkbox>
            </Field>
            <Select
              disabled={!formValues.straightLines.straightLineTop.isActive}
              name={'LineTop'}
              label="Color line top"
              labelContentPosition="justify-center"
              options={colorPalette.map((item) => {
                return {
                  bgColor: item.bgColor!,
                  title: item.title,
                  hex: item.hex,
                  id: item.id,
                };
              })}
              onChange={(e) => dispatch(setStraightLineTopColor(e))}
              valueTest={{
                title: formValues.straightLines.straightLineTop.colorLine.title,
                bgColor: formValues.straightLines.straightLineTop.colorLine.bgColor,
                value: formValues.straightLines.straightLineTop.colorLine,
              }}
            />
          </div>
          <div className="flex flex-col w-1/2">
            <Field className="flex justify-center items-center pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">Straight Line Bottom</Label>
              <Checkbox
                checked={formValues.straightLines.straightLineBottom.isActive}
                onChange={(e) => dispatch(setStraightLineBottomActive(e))}
                name={'lineBottom'}
                className="group block size-4 ml-2 border border-#b3b2a0 bg-eerie-black shadow-sm  hover:border-#9c9b7c data-[checked]:bg-eerie-black cursor-pointer"
              >
                <svg
                  className="stroke-#b3b2a0 opacity-0 group-data-[checked]:opacity-100"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <path d="M3 8L6 11L11 3.5" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Checkbox>
            </Field>
            <Select
              disabled={!formValues.straightLines.straightLineBottom.isActive}
              name={'LineBottom'}
              label="Color line bottom"
              labelContentPosition="justify-center"
              options={colorPalette.map((item) => {
                return {
                  bgColor: item.bgColor!,
                  title: item.title,
                  hex: item.hex,
                  id: item.id,
                };
              })}
              onChange={(e) => dispatch(setStraightLineBottomColor(e))}
              valueTest={{
                title: formValues.straightLines.straightLineBottom.colorLine.title,
                bgColor: formValues.straightLines.straightLineBottom.colorLine.bgColor,
                value: formValues.straightLines.straightLineBottom.colorLine,
              }}
            />
          </div>
        </div>

        {/* legent position */}
        {/* Listbox with adjusted positioning */}
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
        <div className="grid grid-cols-2 grid-rows-1  grid-flow-row">
          <Select
            disabled={formValues.legend.pos === 'Not selected'}
            name={'ColorLegendTop'}
            label={'Color legend top'}
            labelContentPosition={'justify-start'}
            options={colorPalette.map((item) => {
              return {
                bgColor: item.bgColor!,
                title: item.title,
                hex: item.hex,
                id: item.id,
              };
            })}
            onChange={(e) => dispatch(setLegendTopColor(e))}
            valueTest={{
              title: formValues.legend.colorLegend.top.title,
              bgColor: formValues.legend.colorLegend.top.bgColor,
              value: formValues.legend.colorLegend.top,
            }}
          />
          <Select
            name={'ColorLegendMiddle'}
            disabled={formValues.legend.pos === 'Not selected'}
            label={'Color legend middle'}
            labelContentPosition={'justify-start'}
            options={colorPalette.map((item) => {
              return {
                bgColor: item.bgColor!,
                title: item.title,
                hex: item.hex,
                id: item.id,
              };
            })}
            onChange={(e) => dispatch(setLegendMiddleColor(e))}
            valueTest={{
              title: formValues.legend.colorLegend.middle.title,
              bgColor: formValues.legend.colorLegend.middle.bgColor,
              value: formValues.legend.colorLegend.middle,
            }}
          />
          <Select
            name={'ColorLegendBottom'}
            disabled={formValues.legend.pos === 'Not selected'}
            label={'Color legend bottom'}
            labelContentPosition={'justify-start'}
            options={colorPalette.map((item) => {
              return {
                bgColor: item.bgColor!,
                title: item.title,
                hex: item.hex,
                id: item.id,
              };
            })}
            onChange={(e) => dispatch(setLegendBottomColor(e))}
            valueTest={{
              title: formValues.legend.colorLegend.bottom.title,
              bgColor: formValues.legend.colorLegend.bottom.bgColor,
              value: formValues.legend.colorLegend.bottom,
            }}
          />
        </div>
      </form>
    </div>
  );
};
