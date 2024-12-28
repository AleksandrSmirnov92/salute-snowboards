import { ISendMessageValue } from '../store/contracts';
import { IInitialState } from '../store/feautures/formValues/formValuesSlice';

export const createDataForTilde = (formValues: IInitialState): ISendMessageValue => {
  const model = formValues.model.title;
  const modelSize = formValues.boardLength.title;
  const exteriorColor = formValues.colorModel.colorOut.isActive
    ? `CMYK: ${formValues.colorModel.colorOut.color.cmyk}`
    : 'No data';
  const interiorColor = formValues.colorModel.colorIn.isActive
    ? `CMYK: ${formValues.colorModel.colorIn.color.cmyk}`
    : 'No data';
  const edgingColor = formValues.colorModel.colorEdging.isActive
    ? `CMYK: ${formValues.colorModel.colorEdging.color.cmyk}`
    : 'No data';
  const figureTop = formValues.figures.figureTop.isActive
    ? `${formValues.figures.figureTop.nameFigure} Color - CMYK: ${formValues.figures.figureTop.colorFigure.cmyk}`
    : 'No data';
  const figureBottom = formValues.figures.figureBottom.isActive
    ? `${formValues.figures.figureBottom.nameFigure} Color - CMYK: ${formValues.figures.figureBottom.colorFigure.cmyk}`
    : 'No data';
  const legend = {
    versionPosition: formValues.legend.pos,
    top:
      formValues.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.legend.colorLegend.top!.colorPallete.cmyk}`
        : 'No data',
    middle:
      formValues.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.legend.colorLegend.middle!.colorPallete.cmyk}`
        : 'No data',
    bottom:
      formValues.legend.pos !== 'Not selected'
        ? `CMYK: ${formValues.legend.colorLegend.bottom!.colorPallete.cmyk}`
        : 'No data',
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
  };
  return result;
};
