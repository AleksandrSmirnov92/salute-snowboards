import type { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Label, Checkbox, Field } from '@headlessui/react';
import { ISelectOptions, ModelsSnowboards } from '../../../store/contracts';
import { useAppDispatch } from '../../../store/hooks/hooks';

import {
  setModelValue,
  setOuterColorValue,
  setOuterColorValueToActive,
  setInnerColorValue,
  setInnerColorValueToActive,
  setLegendValue,
  setFigureTopActive,
  setFigureTopColor,
  setFigureBottomActive,
  setFigureBottomColor,
  setLegendTopColor,
  setLegendMiddleColor,
  setLegendBottomColor,
  setHasFigureTop,
  setHasFigureBottom,
  setSize,
} from '../../../store/feautures/formValues/formValuesSlice';
import { colorPalette, IColorPallete } from '../../../store/data/colorPalette';
import Select from '../../custom/select/select-legend-position';

export const Options = () => {
  const dispatch = useAppDispatch();
  const selectOptions = useSelector((state: RootState) => state.selectOptions.snowboards);
  const modelsOptions = useSelector((state: RootState) => state.selectOptions.modelsSnowboards);
  const formValues = useSelector((state: RootState) => state.selectedValuesForm);

  const [selectedModel, setSelectedModel] = useState<ISelectOptions>(modelsOptions[3]);

  const getBoardDetails = (modelId: number) => selectOptions.find((item) => item.id === modelId)!.boardDetails;
  const initialDetails = getBoardDetails(selectedModel.id);

  const initialLegends = initialDetails.legentPositions;
  const initialLengths = initialDetails.boardLength;

  const [modelColorOut, setModelColorsOut] = useState<null | string>(null);
  const [modelColorInner, setModelColorsInner] = useState<null | string>(null);
  const [modelColorInnerToActive, setModelColorsInnerToActive] = useState<boolean>(false);
  // const [modelColors, setModelColors] = useState<null | string>(null);
  const [legends, setLegends] = useState(initialLegends);
  const [modelSizes, setModelSizes] = useState(initialLengths);
  const [nameFigureTop, setNameFigureTop] = useState('');
  const [nameFigureBottom, setNameFigureBottom] = useState('');
  const [colorNameFigureTop, setColorNameFigureTop] = useState('');
  const [colorNameFigureBottom, setColorNameFigureBottom] = useState('');

  useEffect(() => {
    // Если модель изменилась мы поменяли цвета модели и поставили цвет по умолчанию первый в списке или (базовый)
    // Так же мы выставили настройки расположений линий
    const actualModelColors = selectOptions.find((item) => item.id === selectedModel.id)!.boardDetails.colorModel;
    const actualLegentPositions = selectOptions.find((item) => item.id === selectedModel.id)!.boardDetails
      .legentPositions;
    const actualHasFigure = selectOptions.find((item) => item.id === selectedModel.id)!.boardDetails.figures;
    const actualSizeModel = selectOptions.find((item) => item.id === selectedModel.id)!.boardDetails.boardLength;
    dispatch(setModelValue(selectedModel));
    if (actualModelColors.colorOut.isActive) {
      dispatch(setInnerColorValueToActive(actualModelColors.colorIn.isActive));
      setModelColorsInnerToActive(actualModelColors.colorIn.isActive);
      setModelColorsOut(actualModelColors.colorOut.color[0].bgColor);
      dispatch(setOuterColorValue(actualModelColors.colorOut.color[0]));
      dispatch(setOuterColorValueToActive(actualModelColors.colorOut.isActive));
      switch (selectedModel.title) {
        case ModelsSnowboards.Fae: {
          setModelColorsOut(actualModelColors.colorOut.color[5].bgColor);
          dispatch(setOuterColorValue(actualModelColors.colorOut.color[5]));
          dispatch(setOuterColorValueToActive(actualModelColors.colorOut.isActive));
          setModelColorsInner(actualModelColors.colorIn.color[2].bgColor);
          dispatch(setInnerColorValue(actualModelColors.colorIn.color[2]));
          break;
        }
        case ModelsSnowboards.Unit: {
          setModelColorsOut(actualModelColors.colorOut.color[9].bgColor);
          dispatch(setOuterColorValue(actualModelColors.colorOut.color[9]));
          dispatch(setOuterColorValueToActive(actualModelColors.colorOut.isActive));
          setModelColorsInner(actualModelColors.colorIn.color[16].bgColor);
          dispatch(setInnerColorValue(actualModelColors.colorIn.color[16]));
          break;
        }
      }
    }
    if (actualLegentPositions) {
      setLegends(actualLegentPositions);
      dispatch(setLegendValue(actualLegentPositions[0]));
    }
    if (actualSizeModel) {
      setModelSizes(actualSizeModel);
      dispatch(setSize(actualSizeModel[0]));
    }
    setNameFigureTop(actualHasFigure.figureTop.nameFigure);
    setNameFigureBottom(actualHasFigure.figureBottom.nameFigure);
    setColorNameFigureTop(actualHasFigure.figureTop.colorLabel);
    setColorNameFigureBottom(actualHasFigure.figureBottom.colorLabel);
    dispatch(setFigureTopColor(actualHasFigure.figureTop.colorFigure));

    dispatch(setFigureTopActive(actualHasFigure.figureTop.isActive));
    dispatch(setFigureBottomActive(actualHasFigure.figureBottom.isActive));
    dispatch(setFigureBottomColor(actualHasFigure.figureBottom.colorFigure));
    dispatch(setHasFigureTop(actualHasFigure.figureTop.hasFigure));
    dispatch(setHasFigureBottom(actualHasFigure.figureBottom.hasFigure));
  }, [selectedModel]);

  return (
    <div className="relative h-full overflow-y-auto overflow-x-hidden ">
      <div className="bg-eerie-black h-12 mb-7 mt-3 md:pl-4 flex justify-center md:justify-start items-center w-full">
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
          name={'ModelSize'}
          label={'Size model'}
          labelContentPosition={'justify-start'}
          options={modelSizes}
          onChange={(e) => {
            console.log(e);
            dispatch(setSize(e));
            // dispatch(setColorValue(e));
          }}
          valueTest={{
            title: formValues.boardLength.title,
            value: formValues.boardLength,
          }}
        />
        <Select
          name={'ColorsModel'}
          label={`Colors model ${modelColorInnerToActive ? 'outer' : ''}`}
          labelContentPosition={'justify-start'}
          options={colorPalette.map((item) => {
            return { ...item, title: item.cmyk! };
          })}
          onChange={(e: IColorPallete) => {
            setModelColorsOut(e.bgColor);
            dispatch(setOuterColorValue(e));
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
              dispatch(setInnerColorValue(e));
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

        {formValues.figures.figureTop.hasFigure && formValues.figures.figureBottom.hasFigure ? (
          <div className="flex flex-col md:flex-row w-full gap-3 mt-2">
            <div className="flex flex-col w-full md:w-1/2">
              <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
                <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureTop}</Label>
                <Checkbox
                  checked={formValues.figures.figureTop.isActive}
                  onChange={(e: boolean) => dispatch(setFigureTopActive(e))}
                  name={'CheckboxFigureTop'}
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
                disabled={!formValues.figures.figureTop.isActive}
                name={'FigureTop'}
                label={colorNameFigureTop}
                labelContentPosition="justify-center"
                options={colorPalette.map((item) => {
                  return { ...item, title: item.cmyk! };
                })}
                onChange={(e) => dispatch(setFigureTopColor(e))}
                valueTest={{
                  title: formValues.figures.figureTop.colorFigure.cmyk!,
                  bgColor: formValues.figures.figureTop.colorFigure.bgColor,
                  value: formValues.figures.figureTop.colorFigure,
                }}
                boardColorOut={modelColorOut}
                boardColorInner={modelColorInner}
              />
            </div>
            <div className="flex   flex-col w-full md:w-1/2">
              <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
                <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureBottom}</Label>
                <Checkbox
                  checked={formValues.figures.figureBottom.isActive}
                  onChange={(e) => dispatch(setFigureBottomActive(e))}
                  name={'CheckboxFigureBottom'}
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
                disabled={!formValues.figures.figureBottom.isActive}
                name={'FigureBottom'}
                label={colorNameFigureBottom}
                labelContentPosition="justify-center"
                options={colorPalette.map((item) => {
                  return { ...item, title: item.cmyk! };
                })}
                onChange={(e) => dispatch(setFigureBottomColor(e))}
                valueTest={{
                  title: formValues.figures.figureBottom.colorFigure.cmyk!,
                  bgColor: formValues.figures.figureBottom.colorFigure.bgColor,
                  value: formValues.figures.figureBottom.colorFigure,
                }}
                boardColorOut={modelColorOut}
                boardColorInner={modelColorInner}
              />
            </div>
          </div>
        ) : (
          ''
        )}

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
      </form>
    </div>
  );
};
