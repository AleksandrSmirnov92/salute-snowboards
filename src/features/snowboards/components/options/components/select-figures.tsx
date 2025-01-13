import { useEffect, useState } from 'react';
import Select from '../../../../../components/custom/select/select';
import { IInitialState } from '../../../../../store/feautures/formValues/form-values-slice';
import { Label, Checkbox, Field } from '@headlessui/react';
import { ISelectOptions, ISnowboard } from '../../../../../types/types';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import {
  setFigureTopActive,
  setFigureTopColor,
  setFigureBottomActive,
  setFigureBottomColor,
  setHasFigureTop,
  setHasFigureBottom,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { colorPalette } from '../../../../../store/data/color-palette';
interface IProps {
  formValues: IInitialState;
  selectedModel: ISelectOptions;
  selectOptions: ISnowboard[];
  modelColorOut: string | null;
  setModelColorsOut: React.Dispatch<React.SetStateAction<string | null>>;
  modelColorInner: string | null;
  setModelColorsInner: React.Dispatch<React.SetStateAction<string | null>>;
}
export const SelectFigures = ({ formValues, selectedModel, selectOptions, modelColorOut, modelColorInner }: IProps) => {
  const dispatch = useAppDispatch();
  const [nameFigureTop, setNameFigureTop] = useState('');
  const [nameFigureBottom, setNameFigureBottom] = useState('');
  const [colorNameFigureTop, setColorNameFigureTop] = useState('');
  const [colorNameFigureBottom, setColorNameFigureBottom] = useState('');

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.frontPart.figures) return;

    const { figureTop, figureBottom } = actualModel.boardDetails.frontPart.figures;

    setNameFigureTop(figureTop.nameFigure);
    setNameFigureBottom(figureBottom.nameFigure);
    setColorNameFigureTop(figureTop.colorLabel);
    setColorNameFigureBottom(figureBottom.colorLabel);

    dispatch(setFigureTopColor(figureTop.colorFigure));
    dispatch(setFigureTopActive({ flag: figureTop.isActive, nameFigure: figureTop.nameFigure }));
    dispatch(setFigureBottomColor(figureBottom.colorFigure));
    dispatch(setFigureBottomActive({ flag: figureBottom.isActive, nameFigure: figureBottom.nameFigure }));
    dispatch(setHasFigureTop(figureTop.hasFigure));
    dispatch(setHasFigureBottom(figureBottom.hasFigure));
  }, [selectedModel, selectOptions, dispatch]);
  return (
    <>
      {formValues.figures.figureTop.hasFigure && formValues.figures.figureBottom.hasFigure ? (
        <div className="flex flex-col md:flex-row w-full gap-3 mt-2">
          <div className="flex flex-col w-full md:w-1/2">
            <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureTop}</Label>
              <Checkbox
                checked={formValues.figures.figureTop.isActive}
                onChange={(e: boolean) => dispatch(setFigureTopActive({ flag: e, nameFigure: nameFigureTop }))}
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
                onChange={(e) => dispatch(setFigureBottomActive({ flag: e, nameFigure: nameFigureBottom }))}
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
    </>
  );
};
