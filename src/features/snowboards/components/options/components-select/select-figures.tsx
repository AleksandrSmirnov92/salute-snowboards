import { useEffect, useState } from 'react';
import Select from '../../../../../components/custom/select/select';
import { IInitialState } from '../../../../../store/feautures/formValues/form-values-slice';
import { Label, Checkbox, Field } from '@headlessui/react';
import { ISelectOptions, ISnowboard } from '../../../../../types/types';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import {
  setFigureTopActiveFrontPart,
  setFigureTopColorFrontPart,
  setFigureBottomActiveFrontPart,
  setFigureBottomColorFrontPart,
  setHasFigureTopFrontPart,
  setHasFigureBottomFrontPart,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { colorPaletteFront } from '../../../../../store/data/color-palette';
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

    dispatch(setFigureTopColorFrontPart(figureTop.colorFigure));
    dispatch(setFigureTopActiveFrontPart({ flag: figureTop.isActive, nameFigure: figureTop.nameFigure }));
    dispatch(setFigureBottomColorFrontPart(figureBottom.colorFigure));
    dispatch(setFigureBottomActiveFrontPart({ flag: figureBottom.isActive, nameFigure: figureBottom.nameFigure }));
    dispatch(setHasFigureTopFrontPart(figureTop.hasFigure));
    dispatch(setHasFigureBottomFrontPart(figureBottom.hasFigure));
  }, [selectedModel, selectOptions, dispatch]);
  return (
    <>
      {formValues.boardDetails.frontPart.figuresFront.figureTop.hasFigure &&
      formValues.boardDetails.frontPart.figuresFront.figureBottom.hasFigure ? (
        <div className="flex flex-col md:flex-row w-full gap-3 mt-2">
          <div className="flex flex-col w-full md:w-1/2">
            <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureTop}</Label>
              <Checkbox
                checked={formValues.boardDetails.frontPart.figuresFront.figureTop.isActive}
                onChange={(e: boolean) => dispatch(setFigureTopActiveFrontPart({ flag: e, nameFigure: nameFigureTop }))}
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
              disabled={!formValues.boardDetails.frontPart.figuresFront.figureTop.isActive}
              name={'FigureTop'}
              label={colorNameFigureTop}
              labelContentPosition="justify-center"
              options={colorPaletteFront.map((item) => {
                return { ...item, title: item.cmyk! };
              })}
              onChange={(e) => dispatch(setFigureTopColorFrontPart(e))}
              valueTest={{
                title: formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure.cmyk!,
                bgColor: formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure.bgColor,
                value: formValues.boardDetails.frontPart.figuresFront.figureTop.colorFigure,
              }}
              boardColorOut={modelColorOut}
              boardColorInner={modelColorInner}
            />
          </div>
          <div className="flex   flex-col w-full md:w-1/2">
            <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureBottom}</Label>
              <Checkbox
                checked={formValues.boardDetails.frontPart.figuresFront.figureBottom.isActive}
                onChange={(e) => dispatch(setFigureBottomActiveFrontPart({ flag: e, nameFigure: nameFigureBottom }))}
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
              disabled={!formValues.boardDetails.frontPart.figuresFront.figureBottom.isActive}
              name={'FigureBottom'}
              label={colorNameFigureBottom}
              labelContentPosition="justify-center"
              options={colorPaletteFront.map((item) => {
                return { ...item, title: item.cmyk! };
              })}
              onChange={(e) => dispatch(setFigureBottomColorFrontPart(e))}
              valueTest={{
                title: formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.cmyk!,
                bgColor: formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure.bgColor,
                value: formValues.boardDetails.frontPart.figuresFront.figureBottom.colorFigure,
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
