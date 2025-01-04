import { ISendMessageValue } from '../store/contracts';
import { IInitialState } from '../store/feautures/formValues/formValuesSlice';

export const createDataForTilde = (formValues: IInitialState, dataUrl: string): ISendMessageValue => {
  const imageUrl = dataUrl;
  const model = formValues.model.title;
  const modelSize = formValues.boardLength.title;
  const exteriorColor = formValues.colorModel.colorOut.isActive
    ? `CMYK: ${formValues.colorModel.colorOut.color.cmyk}`
    : 'Нет';
  const interiorColor = formValues.colorModel.colorIn.isActive
    ? `CMYK: ${formValues.colorModel.colorIn.color.cmyk}`
    : 'Нет';
  const edgingColor = formValues.colorModel.colorEdging.isActive
    ? `CMYK: ${formValues.colorModel.colorEdging.color.cmyk}`
    : 'Нет';
  const figureTop = formValues.figures.figureTop.isActive
    ? `CMYK: ${formValues.figures.figureTop.colorFigure.cmyk}`
    : 'Нет';
  const figureBottom = formValues.figures.figureBottom.isActive
    ? `CMYK: ${formValues.figures.figureBottom.colorFigure.cmyk}`
    : 'Нет';
  const legend = {
    versionPosition: formValues.legend.pos,
    top:
      formValues.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.legend.colorLegend.top!.colorPallete.cmyk}`
        : 'Нет',
    middle:
      formValues.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.legend.colorLegend.middle!.colorPallete.cmyk}`
        : 'Нет',
    bottom:
      formValues.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.legend.colorLegend.bottom!.colorPallete.cmyk}`
        : 'Нет',
  };
  const result: ISendMessageValue = {
    model,
    modelSize,
    exteriorColor,
    interiorColor,
    edgingColor,
    figureTop,
    figureBottom,
    legend,
    imageUrl,
  };
  return result;
};
