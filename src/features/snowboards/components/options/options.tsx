import type { RootState } from '../../../../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { ISelectOptions } from '../../../../types/types';
import { useAppDispatch } from '../../../../store/hooks/hooks';
import {
  setModelValue,
  setLegendValueFrontPart,
  setSize,
} from '../../../../store/feautures/formValues/form-values-slice';
import { SelectModel } from './components/select-model';
import { SelectSize } from './components/select-size';
import { SelectColors } from './components/select-colors';
import { SelectFigures } from './components/select-figures';
import { SelectLegends } from './components/select-legends';

export const Options = () => {
  const dispatch = useAppDispatch();
  const selectOptions = useSelector((state: RootState) => state.selectOptions.snowboards);
  const modelsOptions = useSelector((state: RootState) => state.selectOptions.modelsSnowboards);
  const formValues = useSelector((state: RootState) => state.selectedValuesForm);
  const [selectedModel, setSelectedModel] = useState<ISelectOptions>(modelsOptions[3]);

  const getBoardDetails = (modelId: number) => selectOptions.find((item) => item.id === modelId)!.boardDetails;
  const initialDetails = getBoardDetails(selectedModel.id);

  const initialLegends = initialDetails.frontPart.legentPositions;
  const initialLengths = initialDetails.boardLength;

  const [modelColorOut, setModelColorsOut] = useState<null | string>(null);
  const [modelColorInner, setModelColorsInner] = useState<null | string>(null);
  const [legends, setLegends] = useState(initialLegends);
  const [modelSizes, setModelSizes] = useState(initialLengths);
  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel) return;

    dispatch(setModelValue(selectedModel));
    setModelSizes(actualModel.boardDetails.boardLength);
    dispatch(setSize(actualModel.boardDetails.boardLength[0]));
    setLegends(actualModel.boardDetails.frontPart.legentPositions);
  }, [selectedModel, selectOptions, dispatch]);

  useEffect(() => {
    const actualModel = selectOptions.find((item) => item.id === selectedModel.id);
    if (!actualModel || !actualModel.boardDetails.frontPart.legentPositions) return;

    const actualLegends = actualModel.boardDetails.frontPart.legentPositions;
    setLegends(actualLegends);
    dispatch(setLegendValueFrontPart(actualLegends[0]));
  }, [selectedModel, selectOptions, dispatch]);

  return (
    <div className="relative h-full overflow-y-auto overflow-x-hidden scroll-options">
      <div className="bg-eerie-black h-12 mb-7 mt-3 md:pl-4 flex justify-center md:justify-start items-center w-full">
        <span className="text-warm-gray text-lg">Детали доски</span>
      </div>
      <form className="relative">
        <SelectModel options={modelsOptions} selectedModel={selectedModel} setSelectedModel={setSelectedModel} />
        <SelectSize options={modelSizes} />
        <SelectColors
          selectOptions={selectOptions}
          selectedModel={selectedModel}
          formValues={formValues}
          modelColorInner={modelColorInner}
          setModelColorsInner={setModelColorsInner}
          modelColorOut={modelColorOut}
          setModelColorsOut={setModelColorsOut}
        />
        <SelectFigures
          selectOptions={selectOptions}
          selectedModel={selectedModel}
          formValues={formValues}
          modelColorInner={modelColorInner}
          setModelColorsInner={setModelColorsInner}
          modelColorOut={modelColorOut}
          setModelColorsOut={setModelColorsOut}
        />
        <SelectLegends
          legends={legends}
          formValues={formValues}
          modelColorOut={modelColorOut}
          modelColorInner={modelColorInner}
        />
      </form>
    </div>
  );
};
