import type { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ISelectOptions } from '../../../../types/types';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import {
  setModelValue,
  setLegendValueFrontPart,
  setLegendValueBackPart,
  setSize,
  setPriceModel,
} from '../../../../store/feautures/formValues/form-values-slice';
import { SelectModel } from './components/select-model';
import { SelectSize } from './components/select-size';
import { SelectColors } from './components/select-colors';
import { SelectFigures } from './components/select-figures';
import { SelectLegends } from './components/select-legends';
import { SelectColorsBack } from './components/select-colors-back';
import { SelectFiguresBack } from './components/select-figures-back';
import { SelectLegendsBack } from './components/select-legends-back';
interface IProps {
  setIsBack: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Options = ({}: IProps) => {
  const dispatch = useAppDispatch();
  const selectOptions = useSelector((state: RootState) => state.selectOptions.snowboards);
  const modelsOptions = useSelector((state: RootState) => state.selectOptions.modelsSnowboards);
  const formValues = useSelector((state: RootState) => state.selectedValuesForm);
  const [selectedModel, setSelectedModel] = useState<ISelectOptions>(modelsOptions[3]);

  const getBoardDetails = (modelId: number) => selectOptions.find((item) => item.id === modelId)!.boardDetails;
  const initialDetails = getBoardDetails(selectedModel.id);

  const initialLegendsFront = initialDetails.frontPart.legentPositions;
  const initialLegendsBack = initialDetails.backPart.legentPositions;
  const initialLengths = initialDetails.boardLength;

  const [modelColorOutFront, setModelColorsOutFront] = useState<null | string>(null);
  const [modelColorInnerFront, setModelColorsInnerFront] = useState<null | string>(null);
  const [modelColorOutBack, setModelColorsOutBack] = useState<null | string>(null);
  const [modelColorInnerBack, setModelColorsInnerBack] = useState<null | string>(null);
  const [legendsFront, setLegendsFront] = useState(initialLegendsFront);
  const [legendsBack, setLegendsBack] = useState(initialLegendsBack);
  const [modelSizes, setModelSizes] = useState(initialLengths);
  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel) return;

    dispatch(setModelValue(selectedModel));
    setModelSizes(actualModel.boardDetails.boardLength);
    dispatch(setSize(actualModel.boardDetails.boardLength[0]));
    dispatch(setPriceModel(actualModel.boardDetails.price));
    setLegendsFront(actualModel.boardDetails.frontPart.legentPositions);
    setLegendsBack(actualModel.boardDetails.backPart.legentPositions);
  }, [selectedModel, selectOptions, dispatch]);

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.frontPart.legentPositions) return;

    const actualLegendsFront = actualModel.boardDetails.frontPart.legentPositions;
    setLegendsFront(actualLegendsFront);
    dispatch(setLegendValueFrontPart(actualLegendsFront[0]));
  }, [selectedModel, selectOptions, dispatch]);

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.backPart.legentPositions) return;

    const actualLegendsBack = actualModel.boardDetails.backPart.legentPositions;
    setLegendsBack(actualLegendsBack);
    dispatch(setLegendValueBackPart(actualLegendsBack[0]));
  }, [selectedModel, selectOptions, dispatch]);

  return (
    <div className="relative h-full overflow-y-auto overflow-x-hidden scroll-options">
      <div className="bg-eerie-black h-12 mb-7 mt-3 md:pl-4 flex justify-center md:justify-start items-center w-full">
        <span className="text-warm-gray text-lg">Детали доски</span>
      </div>
      <form className="relative">
        <>
          {/* Опции передней части доски */}
          <SelectModel options={modelsOptions} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
          <SelectSize options={modelSizes} />
          <SelectColors
            selectOptions={selectOptions}
            selectedModel={selectedModel}
            formValues={formValues}
            modelColorInner={modelColorInnerFront}
            setModelColorsInner={setModelColorsInnerFront}
            modelColorOut={modelColorOutFront}
            setModelColorsOut={setModelColorsOutFront}
          />
          <SelectFigures
            selectOptions={selectOptions}
            selectedModel={selectedModel}
            formValues={formValues}
            modelColorInner={modelColorInnerFront}
            setModelColorsInner={setModelColorsInnerFront}
            modelColorOut={modelColorOutFront}
            setModelColorsOut={setModelColorsOutFront}
          />
          <SelectLegends
            legends={legendsFront}
            formValues={formValues}
            modelColorOut={modelColorOutFront}
            modelColorInner={modelColorInnerFront}
          />
        </>
        <>
          {/* Опции задней части доски */}
          <SelectColorsBack
            selectOptions={selectOptions}
            selectedModel={selectedModel}
            formValues={formValues}
            modelColorInnerBack={modelColorInnerBack}
            setModelColorsInnerBack={setModelColorsInnerBack}
            modelColorOutBack={modelColorOutBack}
            setModelColorsOutBack={setModelColorsOutBack}
          />
          <SelectLegendsBack
            legends={legendsBack}
            formValues={formValues}
            modelColorOut={modelColorOutBack}
            modelColorInner={modelColorInnerBack}
          />
          <SelectFiguresBack selectOptions={selectOptions} selectedModel={selectedModel} formValues={formValues} />
        </>
      </form>
    </div>
  );
};
