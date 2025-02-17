import { useEffect, useState } from 'react';
import Select from '../../../../../components/custom/select/select';
import { IInitialState } from '../../../../../store/feautures/formValues/form-values-slice';
import { Label, Checkbox, Field } from '@headlessui/react';
import { ISelectOptions, ISnowboard } from '../../../../../types/types';
import { useAppDispatch } from '../../../../../store/hooks/hooks';
import {
  setFigureTopActiveBackPart,
  setFigureTopColorBackPart,
  setFigureMiddleActiveBackPart,
  setFigureMiddleColorBackPart,
  setHasFigureMiddleBackPart,
  setHasFigureTopBackPart,
  setHasFigureBottomBackPart,
  setFigureBottomActiveBackPart,
  setFigureBottomColorBackPart,
} from '../../../../../store/feautures/formValues/form-values-slice';
import { colorPaletteBack } from '../../../../../store/data/color-palette';
interface IProps {
  formValues: IInitialState;
  selectedModel: ISelectOptions;
  selectOptions: ISnowboard[];
}
export const SelectFiguresBack = ({ formValues, selectedModel, selectOptions }: IProps) => {
  const dispatch = useAppDispatch();
  const [nameFigureTop, setNameFigureTop] = useState('');
  const [nameFigureMiddle, setNameFigureMiddle] = useState('');
  const [nameFigureBottom, setNameFigureBottom] = useState('');
  const [colorNameFigureTop, setColorNameFigureTop] = useState('');
  const [colorNameFigureMiddle, setColorNameFigureMiddle] = useState('');
  const [colorNameFigureBottom, setColorNameFigureBottom] = useState('');

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.backPart) return;

    const { figureTop, figureMiddle, figureBottom } = actualModel.boardDetails.backPart.figures;
    // top
    setNameFigureTop(figureTop.nameFigure);
    setNameFigureMiddle(figureMiddle.nameFigure);
    setNameFigureBottom(figureBottom.nameFigure);

    setColorNameFigureTop(figureTop.colorLabel);
    setColorNameFigureMiddle(figureMiddle.colorLabel);
    setColorNameFigureBottom(figureBottom.colorLabel);

    dispatch(setFigureTopColorBackPart(figureTop.colorFigure));
    dispatch(setFigureTopActiveBackPart({ flag: figureTop.isActive, nameFigure: figureTop.nameFigure }));
    dispatch(setHasFigureTopBackPart(figureTop.hasFigure));
    // middle
    dispatch(setFigureMiddleColorBackPart(figureMiddle.colorFigure));
    dispatch(setFigureMiddleActiveBackPart({ flag: figureMiddle.isActive, nameFigure: figureMiddle.nameFigure }));
    dispatch(setHasFigureMiddleBackPart(figureMiddle.hasFigure));
    // bottom
    dispatch(setFigureBottomColorBackPart(figureBottom.colorFigure));
    dispatch(setFigureBottomActiveBackPart({ flag: figureBottom.isActive, nameFigure: figureBottom.nameFigure }));
    dispatch(setHasFigureBottomBackPart(figureBottom.hasFigure));
  }, [selectedModel, selectOptions, dispatch]);
  return (
    <>
      {formValues.boardDetails.backPart.figuresBack.figureTop.hasFigure ? (
        <div className="flex flex-col md:flex-row w-full gap-3 mt-2">
          <div
            className={`flex flex-col w-full ${formValues.boardDetails.backPart.figuresBack.figureMiddle.hasFigure || formValues.boardDetails.backPart.figuresBack.figureBottom.hasFigure ? 'md:w-1/2' : ''}`}
          >
            <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureTop}</Label>
              <Checkbox
                checked={formValues.boardDetails.backPart.figuresBack.figureTop.isActive}
                onChange={(e: boolean) => dispatch(setFigureTopActiveBackPart({ flag: e, nameFigure: nameFigureTop }))}
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
              disabled={!formValues.boardDetails.backPart.figuresBack.figureTop.isActive}
              name={'FigureTop'}
              label={colorNameFigureTop}
              labelContentPosition="justify-center"
              options={colorPaletteBack.map((item) => {
                return { ...item, title: item.cmyk! };
              })}
              onChange={(e) => dispatch(setFigureTopColorBackPart(e))}
              valueTest={{
                title: formValues.boardDetails.backPart.figuresBack.figureTop.colorFigure.cmyk!,
                bgColor: formValues.boardDetails.backPart.figuresBack.figureTop.colorFigure.bgColor,
                value: formValues.boardDetails.backPart.figuresBack.figureTop.colorFigure,
              }}
            />
          </div>
        </div>
      ) : (
        ''
      )}
      {/* //////////////////////////////////////////////////////////////////////////// */}
      {formValues.boardDetails.backPart.figuresBack.figureMiddle.hasFigure ? (
        <div className="flex flex-col md:flex-row w-full gap-3 mt-2">
          <div
            className={`flex flex-col w-full ${formValues.boardDetails.backPart.figuresBack.figureTop.hasFigure || formValues.boardDetails.backPart.figuresBack.figureBottom.hasFigure ? 'md:w-1/2' : ''}`}
          >
            <Field className="flex justify-center md:justify-start items-center md:pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureMiddle}</Label>
              <Checkbox
                checked={formValues.boardDetails.backPart.figuresBack.figureMiddle.isActive}
                onChange={(e: boolean) => {
                  console.log('e', e);
                  dispatch(setFigureMiddleActiveBackPart({ flag: e, nameFigure: nameFigureMiddle }));
                }}
                name={'CheckboxFigureTop'}
                className="group block size-4  ml-2 border border-#b3b2a0 bg-eerie-black shadow-sm  hover:border-#9c9b7c data-[checked]:bg-eerie-black cursor-pointer"
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
            {!formValues.boardDetails.backPart.figuresBack.figureTop.hasFigure ||
            !formValues.boardDetails.backPart.figuresBack.figureBottom.hasFigure ? (
              <Select
                disabled={!formValues.boardDetails.backPart.figuresBack.figureMiddle.isActive}
                name={'FigureBackMiddle'}
                label={colorNameFigureMiddle}
                labelContentPosition="justify-center"
                options={colorPaletteBack.map((item) => {
                  return { ...item, title: item.cmyk! };
                })}
                onChange={(e) => dispatch(setFigureMiddleColorBackPart(e))}
                valueTest={{
                  title: formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.cmyk!,
                  bgColor: formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure.bgColor,
                  value: formValues.boardDetails.backPart.figuresBack.figureMiddle.colorFigure,
                }}
              />
            ) : (
              ''
            )}
          </div>
        </div>
      ) : (
        ''
      )}
      {/* //////////////////////////////////////////////////////////////////////////// */}
      {formValues.boardDetails.backPart.figuresBack.figureBottom.hasFigure ? (
        <div className="flex flex-col md:flex-row w-full gap-3 mt-2">
          <div
            className={`flex flex-col w-full ${formValues.boardDetails.backPart.figuresBack.figureMiddle.hasFigure || formValues.boardDetails.backPart.figuresBack.figureTop.hasFigure ? 'md:w-1/2' : ''}`}
          >
            <Field className="flex justify-center items-center md:pl-4 py-1.5 gap-2">
              <Label className="text-nowrap text-base font-medium leading-6 text-warm-gray">{nameFigureBottom}</Label>
              <Checkbox
                checked={formValues.boardDetails.backPart.figuresBack.figureBottom.isActive}
                onChange={(e: boolean) =>
                  dispatch(setFigureBottomActiveBackPart({ flag: e, nameFigure: nameFigureBottom }))
                }
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
              disabled={!formValues.boardDetails.backPart.figuresBack.figureBottom.isActive}
              name={'FigureTop'}
              label={colorNameFigureBottom}
              labelContentPosition="justify-center"
              options={colorPaletteBack.map((item) => {
                return { ...item, title: item.cmyk! };
              })}
              onChange={(e) => dispatch(setFigureBottomColorBackPart(e))}
              valueTest={{
                title: formValues.boardDetails.backPart.figuresBack.figureBottom.colorFigure.cmyk!,
                bgColor: formValues.boardDetails.backPart.figuresBack.figureBottom.colorFigure.bgColor,
                value: formValues.boardDetails.backPart.figuresBack.figureBottom.colorFigure,
              }}
            />
          </div>
        </div>
      ) : (
        ''
      )}
    </>
  );
};
